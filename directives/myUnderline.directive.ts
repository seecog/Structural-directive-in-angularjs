import { Directive,Renderer,ElementRef,OnInit} from "@angular/core"

@Directive({selector:'[myunderline]'})
 export class MyUnderLineDirective implements OnInit{

    constructor (private rend : Renderer,private ele : ElementRef){

    }

    ngOnInit(){
        this.rend.setElementStyle(this.ele.nativeElement,'text-decoration','underline')
    }
 }
