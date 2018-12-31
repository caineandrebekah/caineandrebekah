/////////////// Databse Authentication
const admin = require("firebase-admin");
const serviceAccount = require("./caineandrebekah-firebase-adminsdk-k6r6u-6ff7566357.json")

const firebaseConfig = {
    credential: admin.credential.cert(serviceAccount),
    //apiKey: "some-api-key",
    //authDomain: "some-app.firebaseapp.com",
    databaseURL: "https://caineandrebekah.firebaseio.com",
    storageBucket: "some-app.appspot.com"
};

const app = admin.initializeApp(firebaseConfig);

exports.realTime = app.database();
exports.fireStore = app.firestore();