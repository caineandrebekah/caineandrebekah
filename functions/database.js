/////////////// Firebase Realtime Database and Cloud Firestore
const admin = require("firebase-admin");
const serviceAccount = require("./fb-admin/caineandrebekah-firebase-adminsdk-k6r6u-6e1c3f3c69.json")

const firebaseConfig = {
    credential: admin.credential.cert(serviceAccount),
    //apiKey: "some-api-key",
    //authDomain: "some-app.firebaseapp.com",
    databaseURL: "https://caineandrebekah.firebaseio.com",
    storageBucket: "some-app.appspot.com"
};

const app = admin.initializeApp(firebaseConfig);

const realTime = app.database();
const fireStore = app.firestore();

exports.realTime = realTime;

/////////////// Set new Firestore data
exports.setFireStoreData = function (collection, doc, data, mergeStatus) {
    fireStore.collection(collection).doc(doc).set(data, {merge: mergeStatus}).then(ref => {
        console.log('Added document');
        return;
    }).catch(err => {
        console.log('Error Adding document', err);
    });
}

/////////////// Add new Firestore data
exports.addFireStoreData = function (collection, doc, data) {
    fireStore.collection(collection).doc(doc).add(data).then(ref => {
        console.log('Added document with ID: ', ref.id);
        return ref.id;
    }).catch(err => {
        console.log('Error Adding document', err);
    });
}

/////////////// Read Firestore data
exports.readFireStoreData = function (collection, doc) {
    fireStore.collection(collection).doc(doc).get().then(doc => {
        if (!doc.exists) {
            console.log('No such document!');
            return err;
        } else {
            console.log('Document data:', doc.data());
            return doc.data();
            poop();
        }
    }).catch(err => {
        console.log('Error getting document', err);
    });
}