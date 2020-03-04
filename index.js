const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp()
const db = admin.firestore()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.users = functions.https.onRequest(async (request, response) => {
    const snapshot = await db.collection('users').get()
    const users = snapshot.empty ? [] : snapshot.docs.map(doc => Object.assign(doc.data(), {id: doc.id}))
    response.send(users)
})
