const invite = props => (req, res) => {
  const { makeRespond, statusCodes, userModel, shopModel } = props;
  const { email, shopId, authId } = req.body;

  const respond = makeRespond(res);
  const respondWithSuccess = respond(statusCodes.success);
  const respondWithError = respond(statusCodes.internalError);
  return userModel
    .createInvitation({ authId: authId, shopId: shopId, email: email })
    .then(respondWithSuccess)
    .catch(respondWithError);

  // rp({
  //   method: "POST",
  //   uri: authUrl,
  //   body: invitationBody
  // })
  // .then(invitationResponse => {
  //   const { authId, invitationId } = invitationResponse.body;
  //   const { status } = invitationResponse;
  //   if (status === statusCreated) {
  //     User.findOneAndUpdate(
  //       { authId: authId },
  //       {
  //         authId: authId,
  //         email: email
  //       },
  //       {
  //         upsert: true,
  //         new: true
  //       },
  //       (userErr, createdUser) => {
  //         Shop.findById(shopId).exec((shopErr, shop) => {
  //           if (shopErr) {
  //             respond(statusInternalError)({
  //               error: true,
  //               message: "Internal error",
  //               errorId: "01f628b7-30f7-45a9-add2-2ee256f45bfb"
  //             });
  //             return;
  //           }
  //           if (!shop) {
  //             respond(statusNotFound)(
  //               shopErr || {
  //                 error: true,
  //                 message: "No shop found",
  //                 errorId: "6719e314-ff92-4937-a7fe-ab1da553e8e5"
  //               }
  //             );
  //             return;
  //           }

  //           if (shop.invitations.indexOf(invitationId)) {
  //             shop.invitations.push(invitationId);
  //           }

  //           if (shop.users.indexOf(createdUser._id) === -1) {
  //             shop.users.push(createdUser);
  //           }
  //           shop.save();
  //         });
  //       }
  //     );
  //   } else if (invitationResponse.status === statusSuccess) {
  //     respond(statusBadRequest)({
  //       error: true,
  //       message: "User already invited to this shop",
  //       errorId: "f2cb03bf-5560-485f-80f2-b78b1067e97f"
  //     });

  //     return;
  //   }

  //   respond(status).json(emptyJson);
  // })
  // .catch(() => {
  //   respond(statusInternalError)({
  //     error: true,
  //     message: "@TODO",
  //     errorId: "7575585c-fc4a-41b2-8528-d8c27d574081"
  //   });
  // });
};

module.exports = () => ({ invite: invite });
