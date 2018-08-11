import {Directive,Renderer,ElementRef,HostListener,OnInit} from '@angular/core';
@Directive({selector : '[customcol]'})
export class CustomColor implements OnInit{

    constructor(private rend : Renderer,private ele : ElementRef){}

    ngOnInit(){

    }

    @HostListener('mouseenter') pankaj(){
        this.rend.setElementStyle(this.ele.nativeElement,'color','red')
        this.rend.setElementStyle(this.ele.nativeElement,'text-decoration','underline')
    }

    @HostListener('mouseleave') viki(){
        this.rend.setElementStyle(this.ele.nativeElement,'color','green')
    }


}


