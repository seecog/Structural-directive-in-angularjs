import { Directive, Renderer, ElementRef, OnInit } from "../../../node_modules/@angular/core";

@Directive({selector : '[myhide]'})
export class MyHideDirective implements OnInit{

constructor(private rend : Renderer,private ele : ElementRef){

}
ngOnInit(){
    this.rend.setElementStyle(this.ele.nativeElement,'color','green');
}
}