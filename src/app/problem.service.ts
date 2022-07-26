import { Injectable } from '@angular/core';
import {FirebaseService} from "./firebase.service";
import {Problem} from "../models/problem";
import { doc, collection, setDoc, query, orderBy, onSnapshot } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {
  private _problems: Problem[] = [];

  constructor(private firebaseService: FirebaseService) {
    const q = query(collection(this.firebaseService.db, 'problems'), orderBy('createdTimestamp'));
    onSnapshot(q, (snapshot) => {
      this._problems = snapshot.docs.map((doc) => doc.data() as Problem);
    });
  }

  save(problem: Problem) {
    const docRef = doc(collection(this.firebaseService.db, 'problems'));
    setDoc(docRef, problem);
  }

  get problems() {
    return this._problems;
  }
}
