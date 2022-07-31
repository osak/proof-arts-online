import { Component, OnInit } from '@angular/core';
import {ProblemService} from "../problem.service";
import {Problem} from "../../models/problem";

@Component({
  selector: 'app-problems-list-page',
  templateUrl: './problems-list-page.component.html',
  styleUrls: ['./problems-list-page.component.scss']
})
export class ProblemsListPageComponent implements OnInit {

  constructor(
    private problemService: ProblemService,
  ) { }

  ngOnInit(): void {
  }

  get problems(): Problem[] {
    return this.problemService.problems;
  }

}
