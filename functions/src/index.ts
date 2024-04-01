/* eslint-disable indent */
/* eslint-disable max-len */
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// TODO(DEVELOPER): Import the Cloud Functions for
// Firebase and the Firebase Admin modules here.

// TODO(DEVELOPER): Write the addWelcomeMessage Function here.

// TODO(DEVELOPER): Write the blurImages Function here.

// TODO(DEVELOPER): Write the sendNotification Function here.

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
// Import and initialize the Firebase Admin SDK.
admin.initializeApp();

// Adds a message that welcomes new users into the chat.
exports.addWelcomeMessages = functions.auth.user().onCreate(async (user: any) => {
    functions.logger.log("A new user signed in for the first time.");
    const fullName = user.displayName || "Anonymous";

    // Saves the new welcome message into the database
    // which then displays it in the FriendlyChat clients.
    await admin.firestore().collection("messages").add({
        name: "Firebase Bot",
        profilePicUrl: "/images/firebase-logo.png", // Firebase logo
        text: `${fullName} signed in for the first time! Welcome!`,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    functions.logger.log("Welcome message written to database.");
});
