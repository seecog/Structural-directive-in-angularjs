import {Directive,Renderer,ElementRef,OnInit, HostListener} from '@angular/core';
@Directive({selector : '[hoverdir]'})
export class ListenerDirective implements OnInit{

    constructor(private rend : Renderer,private ele : ElementRef){

    }

@HostListener('mouseenter') onmouseenter(){
this.rend.setElementStyle(this.ele.nativeElement,'text-decoration','underline')
}    

@HostListener('mouseleave') onmouseleave(){
    this.rend.setElementStyle(this.ele.nativeElement,'text-decoration','none')

}

ngOnInit(){

}

}