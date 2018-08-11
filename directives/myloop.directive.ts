import {ViewContainerRef,TemplateRef, Directive, Input} from '@angular/core';
@Directive({selector : '[myloop]'})
export class MyLoop{

constructor(private temp : TemplateRef<any>,private con : ViewContainerRef){}

@Input() set myloop(n : number){
console.log('The n is ',n)
for(let i=1;i<=n;i++){
    this.con.createEmbeddedView(this.temp)
}


}


}