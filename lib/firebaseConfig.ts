import { cert, getApps, initializeApp } from "npm:firebase-admin/app";
import { getFirestore } from "npm:firebase-admin/firestore";
import { getAuth } from "npm:firebase-admin/auth";
import process from "node:process";

// const firebaseConfig = {
// 	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// 	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
// 	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// 	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)
// export const auth = getAuth(app)
// export default app

const serviceAccount = JSON.parse(
	process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string,
);

if (!getApps().length) {
	initializeApp({
		credential: cert(serviceAccount),
	});
}

const db = getFirestore();
const auth = getAuth();

export { auth, db };
