const admin = require("firebase-admin");
const credentials = require("./social-media-app-3a198-firebase-adminsdk-altib-f339d47c48.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials)
})

module.exports = admin;