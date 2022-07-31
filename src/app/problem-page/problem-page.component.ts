import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProblemService} from "../problem.service";
import {Problem} from "../../models/problem";
import {Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-problem-page',
  templateUrl: './problem-page.component.html',
  styleUrls: ['./problem-page.component.scss']
})
export class ProblemPageComponent implements OnInit {
  problem$!: Observable<Problem | null>;

  constructor(
    private route: ActivatedRoute,
    private problemService: ProblemService,
  ) { }

  ngOnInit(): void {
    this.problem$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.problemService.fetchProblem(params.get('id')!)));
  }

}
