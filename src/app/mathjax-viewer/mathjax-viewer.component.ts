import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-mathjax-viewer',
  templateUrl: './mathjax-viewer.component.html',
  styleUrls: ['./mathjax-viewer.component.scss']
})
export class MathjaxViewerComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() source!: string;
  @ViewChild('body', {static: false}) bodyElement!: ElementRef;
  private typesetNeeded: Boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['source'] != undefined) {
      console.log('typeset needed');
      this.typesetNeeded = true;
    }
  }

  ngAfterViewChecked() {
    if (this.typesetNeeded) {
      this.typesetNeeded = false;

      // Tell MathJax forget already rendered elements
      MathJax.typesetClear([this.bodyElement.nativeElement]);

      // Update the content
      this.bodyElement.nativeElement.innerHTML = this.source;
      MathJax.typesetPromise([this.bodyElement.nativeElement])
        .then(() => console.log('Typeset completed'))
        .catch((err) => console.error('Failed to typeset', err));
    }
  }
}
