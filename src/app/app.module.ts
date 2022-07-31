import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { CreateProblemFormComponent } from './create-problem-form/create-problem-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MathjaxEditorComponent } from './mathjax-editor/mathjax-editor.component';
import { MathjaxViewerComponent } from './mathjax-viewer/mathjax-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProblemFormComponent,
    MathjaxEditorComponent,
    MathjaxViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
