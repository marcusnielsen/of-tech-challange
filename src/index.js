const express = require("express");
const makeServer = require("./server");

makeServer({ processEnv: process.env, server: express() });
