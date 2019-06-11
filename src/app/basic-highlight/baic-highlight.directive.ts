import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef){

  }
  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}


// 3 Basic Types of Angular Attributes - Components(basic comp), Structural(ngFor and ngIf) and Attribute
// An Attribute directive changes the appearance or behavior of a DOM element (ngStyle or Template syntax)
