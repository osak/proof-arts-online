import { Component } from '@angular/core';
import {UserService} from "./user.service";
import {ProblemService} from "./problem.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proof Arts Online';

  constructor(
    private userService: UserService,
    private problemService: ProblemService,
  ) {
  }

  ngOnInit(): void {
  }

  signIn() {
    this.userService.signIn();
  }

  signOut() {
    this.userService.signOut();
  }

  get user() {
    return this.userService.user;
  }

  get problems() {
    return this.problemService.problems;
  }
}
