import { Injectable } from '@angular/core';
import {FirebaseService} from "./firebase.service";
import {Problem} from "../models/problem";
import { doc, collection, setDoc, query, orderBy, onSnapshot, getDoc } from 'firebase/firestore';
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

@Injectable({
  providedIn: 'root'
})
export class ProblemService {
  private _problems: Problem[] = [];

  constructor(private firebaseService: FirebaseService) {
    const q = query(collection(this.firebaseService.db, 'problems'), orderBy('createdTimestamp'));
    onSnapshot(q, (snapshot) => {
      this._problems = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        } as Problem
      });
    });
  }

  async fetchProblem(id: string): Promise<Problem | null> {
    const docRef = doc(collection(this.firebaseService.db, 'problems'), id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        id,
        ...docSnap.data(),
      } as Problem;
    } else {
      return null;
    }
  }

  save(problem: Problem) {
    const docRef = doc(collection(this.firebaseService.db, 'problems'));
    setDoc(docRef, problem);
  }

  get problems() {
    return this._problems;
  }
}
