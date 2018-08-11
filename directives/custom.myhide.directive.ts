import {Directive,Renderer,ElementRef,OnInit, Input} from '@angular/core';
@Directive({selector : '[myhidc]'})

export class CustomMyHide implements OnInit{
@Input() myhidc : boolean;
constructor(private rend : Renderer,private ele : ElementRef){

}

ngOnInit(){
    console.log('The my hode status is ',this.myhidc)
    if(this.myhidc)
    {
    this.rend.setElementStyle(this.ele.nativeElement,'display','none')
    }
}

}