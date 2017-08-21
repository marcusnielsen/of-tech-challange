# of-tech-challange

## Solution

The solution tries to build a base around modular entities. One problem to solve is that the invite is an action on the user entity, but uses http, and not the database. This means that we will need two ways of setting up a connection to our single source of truth. Since we don't know anything about the architectural choices, they are just named `http` and `db`.

I normally avoid ORM layers, since I will write my own model layer anyhow. Also, most ORMs today are super-optimised for creating code, but are usually hard to read and maintain. That is why the mongoose API lives in the connector part of the stack, and not in the entity models.

I also wanted to challange my idea of endpoint + method/verb to be enough for a connector layer. So the code is a bit of a proof of concept, and will not be the most clear right away. The problem solved here is that we can migrate between connectors, and our controllers will not be able to tell. This give the code base flexibility and stability over time.

I'm using a more "modern" (at the time of writing) take on javascript where functions are manually curried via lambdas (arrow functions `=>`). If it's a new concept, the code might look a bit weird. You should learn it then, since it's a great tool for applying default values in functions.



## Function analysis and refactor

Below is a node.js function that a developer has written, we do not consider this to be well written.
It is an express middleware function that processes users invitations to use private shops.

* req and res are the express request and response objects
* superagent is a module that makes http requests and is on npm
* "User" and "Shop" are mongoose models

Please analyse and comment on the function below which a developer wrote to fulfil the requirements

* What do you think it wrong with the code, if anything?
* Can you see any potential problems that could lead to exceptions
* How would you refactor this code to be:
   * Easier to read
   * Increase code reusability
   * Improve the stability of the system
   * Improve the testability of the code
* How could you use Promises to refactor the code?

Please provide answers to the above questions and then provide a sample refactor for discussion. The refactor does not have to be executable it will be for discussion.

```javascript
exports.inviteUser = function (req, res) {

	var invitationBody = req.body;
	var shopId = req.params.shopId;
	var authUrl = "https://url.to.auth.system.com/invitation";

	superagent
		.post(authUrl)
		.send(invitationBody)
		.end(function (err, invitationResponse) {

			if (invitationResponse.status === 201) {

				User.findOneAndUpdate(
					{ authId: invitationResponse.body.authId },
					{
						authId: invitationResponse.body.authId,
						email: invitationBody.email
					},
					{
						upsert: true,
						new: true
					},
					function (err, createdUser) {
						Shop.findById(shopId)
							.exec(function (err, shop) {
								if(err || !shop) {
									return res.status(500).send(err || { message: 'No shop found' });
								}

								if(shop.invitations.indexOf(invitationResponse.body.invitationId)) {
									shop.invitations.push(invitationResponse.body.invitationId);
								}

								if(shop.users.indexOf(createdUser._id) === -1) {
									shop.users.push(createdUser);
								}
								shop.save();
							});
					});

			} else if(invitationResponse.status === 200) {

				res.status(400).json({
					error: true,
					message: 'User already invited to this shop'
				});

				return;
			}

			res.json(invitationResponse);
		});
};
```