import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {interval} from "rxjs";

@Component({
  selector: 'app-mathjax-editor',
  templateUrl: './mathjax-editor.component.html',
  styleUrls: ['./mathjax-editor.component.scss']
})
export class MathjaxEditorComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;
  private lastUpdated: number | null = null;
  previewContent: string = '';

  constructor() { }

  ngOnInit(): void {
    this.lastUpdated = Date.now();
    interval(250)
      .subscribe(() => {
        if (this.lastUpdated != null && Date.now() > this.lastUpdated + 500) {
          this.previewContent = this.control.value.replace(/\n/g, "<br>");
          this.lastUpdated = null;
        }
      });
  }

  update(): void {
    this.lastUpdated = Date.now();
  }
}
