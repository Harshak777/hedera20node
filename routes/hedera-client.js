require('dotenv').config();
const { Client } = require('@hashgraph/sdk');

const myAccountId = "0.0.3402";
const myPrivateKey = "302e020100300506032b657004220420b91c5e36c32720239d94ff10aebe2903ef33e3a0cf9e6b05b76108823a4ca1f4";

//If we weren't able to grab it, we should throw a new error
if (myAccountId == null ||
    myPrivateKey == null ) {
    throw new Error("Environment variables myAccountId and myPrivateKey must be present");
}

const HederaClient = Client.forTestnet();
HederaClient.setOperator(myAccountId, myPrivateKey);
module.exports = HederaClient;