/////////////// Firebase Realtime Database and Cloud Firestore
const admin = require("firebase-admin");
const serviceAccount = require("./fb-admin/caineandrebekah-firebase-adminsdk-xcfjn-990f95242c.json")

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
exports.readFireStoreData = function (collection, doc, func) {
    var dataPath = fireStore.collection(collection).doc(doc);

    dataPath.get(func)
    .then(doc => {
        if (doc.exists) {
            var docData = doc.data();
            console.log('Document data: ');
            console.log(docData);
            func(docData);
            return docData;
        } else {
            console.log('No such document!');
            return err;
        }
    }).catch(err => {
        console.log('Error getting document', err);
    });
}

/////////////// Query Firestore data
exports.queryFireStoreData = function (collection, query, func) {
    var queryPath = fireStore.collection(collection).where(query.field, query.arg, query.check);

    queryPath.get(func)
    .then(querySnapshot => {
            // eslint-disable-next-line promise/always-return
            if (!querySnapshot.empty) {
                querySnapshot.forEach(documentSnapshot => {
                    var docData = documentSnapshot.data();
                    console.log(`Found document(s) at ${documentSnapshot.ref.path}`);
                    func(docData);
                    return docData;
                })
            } else {
                console.log('No such document(s)!');
                return err;
            }
        }
    ).catch(err => {
        console.log('Error getting document(s)', err);
    });
}