import {TemplateRef,ViewContainerRef, Directive,OnInit, Input} from '@angular/core';
@Directive({selector : '[myif]'})

export class MyIfDirective implements OnInit{

constructor(private container : ViewContainerRef,private temp : TemplateRef<any>){}

ngOnInit(){

}

@Input() set myif(stt : boolean){
if(stt){
this.container.createEmbeddedView(this.temp);
}
else{
this.container.clear();
}
}

}