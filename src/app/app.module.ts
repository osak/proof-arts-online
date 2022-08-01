import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { CreateProblemFormComponent } from './create-problem-form/create-problem-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MathjaxEditorComponent } from './mathjax-editor/mathjax-editor.component';
import { MathjaxViewerComponent } from './mathjax-viewer/mathjax-viewer.component';
import { CreateProblemPageComponent } from './create-problem-page/create-problem-page.component';
import { ProblemPageComponent } from './problem-page/problem-page.component';
import {RouterModule} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import { ProblemsListPageComponent } from './problems-list-page/problems-list-page.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    CreateProblemFormComponent,
    MathjaxEditorComponent,
    MathjaxViewerComponent,
    CreateProblemPageComponent,
    ProblemPageComponent,
    ProblemsListPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'create_problem', component: CreateProblemPageComponent},
      {path: 'problem/:id', component: ProblemPageComponent},
      {path: 'problem', component: ProblemsListPageComponent},
    ]),
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
