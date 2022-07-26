import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FirebaseService} from "../firebase.service";
import {Problem} from "../../models/problem";
import {ProblemService} from "../problem.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-create-problem-form',
  templateUrl: './create-problem-form.component.html',
  styleUrls: ['./create-problem-form.component.scss']
})
export class CreateProblemFormComponent implements OnInit {
  formGroup = new FormGroup({
    title: new FormControl('', {nonNullable: true}),
    statement: new FormControl('', {nonNullable: true}),
    source: new FormControl(''),
  });

  constructor(
    private userService: UserService,
    private problemService: ProblemService,
  ) { }

  ngOnInit(): void {
  }

  save() {
    const currentUser = this.userService.user;
    if (currentUser == null) {
      throw new Error('User must be authenticated to post a problem');
    }

    const problem: Problem = {
      title: this.formGroup.value.title || '',
      statement: this.formGroup.value.statement || '',
      source: this.formGroup.value.source || null,
      createdTimestamp: Date.now(),
      authorId: currentUser.uid,
    }
    this.problemService.save(problem);
  }
}
