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
    var dataPath = fireStore.collection(collection).doc(doc);

    dataPath.set(data, {merge: mergeStatus});
}

/////////////// Add new Firestore data
exports.addFireStoreData = function (collection, doc, data) {
    var dataPath = fireStore.collection(collection).doc(doc);

    dataPath.add(data).then(ref => {
        console.log('Added document with ID: ', ref.id);
        return ref.id;
      }).catch(err => {
        console.log('Couldnt add', err);
    });
}

/////////////// Read Firestore data
exports.readFireStoreData = function (collection, doc) {
    var dataPath = fireStore.collection(collection).doc(doc);

    finalData = dataPath.get()
    .then(doc => {
        if (doc.exists) {
            var docData = doc.data();
            console.log('Document data: ');
            console.log(docData);
            return docData;
        } else {
            console.log('No such document!');
            return err;
        }
    }).catch(err => {
        console.log('Error getting document', err);
    });

    console.log(finalData);
    return finalData;
}