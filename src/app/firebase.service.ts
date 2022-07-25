import { Injectable } from '@angular/core';
import {FirebaseApp, initializeApp } from 'firebase/app';
import {Analytics, getAnalytics } from 'firebase/analytics';
import {Firestore, getFirestore} from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  readonly app: FirebaseApp;
  readonly analytics: Analytics;
  readonly db: Firestore;

  constructor() {

    const firebaseConfig = {
      apiKey: "AIzaSyBZyzxBR0CgYXIJxHEUatoujX9GKEZh2yA",
      authDomain: "proof-arts-online.firebaseapp.com",
      projectId: "proof-arts-online",
      storageBucket: "proof-arts-online.appspot.com",
      messagingSenderId: "380850400122",
      appId: "1:380850400122:web:0b5099947aa96b1851c4c3",
      measurementId: "G-8ZTGHT40FQ"
    };


    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
    this.db = getFirestore(this.app);
  }
}
