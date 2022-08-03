import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
import {Problem} from "./models";

admin.initializeApp();
const db = admin.firestore();

async function generateProblemId(): Promise<number> {
  return db.runTransaction(async (transaction) => {
    const counterRef = db.doc('counters/problem');
    const counterDoc = await transaction.get(counterRef);
    let id: number;
    if (counterDoc.exists) {
      id = counterDoc.data()!.value;
      transaction.update(counterRef, { value: id + 1 });
    } else {
      id = 1;
      transaction.set(counterRef, { value: 2 });
    }
    return id;
  });
}

exports.publishProblem = functions.firestore
  .document('users/{userId}/problems/{problemId}')
  .onWrite(async (change, context) => {
    if (!change.after.exists) {
      console.log(`Ignoring onDelete on ${change.before.id}`);
      return;
    }

    const data = change.after.data() as Problem;

    if (data.publish) {
      const problemId = await generateProblemId();
      const docRef = db.doc(`problems/${problemId}`);
      docRef.set(data);
      console.log(`Exported problem ${change.after.id} as ${problemId}`);

      change.after.ref.delete();
    }
  });
