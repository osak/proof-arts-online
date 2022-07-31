interface MathJax {
  typesetPromise(elems: HTMLElement[]): Promise<any>;
  typesetClear(elems: HTMLElement[]): void;
}

declare var MathJax: MathJax;
