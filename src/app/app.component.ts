import { Component } from '@angular/core';
import {UserService} from "./user.service";
import {ProblemService} from "./problem.service";
import {Problem} from "../models/problem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proof Arts Online';
  currentProblem?: Problem;

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

  openProblem(problem: Problem) {
    this.currentProblem = problem;
  }

  get user() {
    return this.userService.user;
  }

  get problems() {
    return this.problemService.problems;
  }
}
