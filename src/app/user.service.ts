import { Injectable } from '@angular/core';
import {FirebaseService} from "./firebase.service";
import {GoogleAuthProvider, signInWithPopup, User} from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: User | null = null;

  constructor(private firebaseService: FirebaseService) {
    firebaseService.auth.onAuthStateChanged((user) => this._user = user);
  }

  async signIn() {
    await signInWithPopup(this.firebaseService.auth, new GoogleAuthProvider());
  }

  async signOut() {
    await this.firebaseService.auth.signOut();
  }

  get user() {
    return this._user;
  }
}
