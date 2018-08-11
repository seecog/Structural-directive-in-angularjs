import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HttpModule } from '@angular/http' //importing http module

import { FormsModule } from '@angular/forms';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { HttpComponent } from './http/http.component';
import { FireBaseComponent } from './fire-base/fire-base.component';
import { DemoServicesComponent } from './demo-services/demo-services.component';
import { areaService } from './services/area.service';
import { MinistersComponent } from './ministers/ministers.component';
import { MinisterService } from './services/minister.service';
import { TestdirComponent } from './testdir/testdir.component';
import { MyHideDirective } from './directives/myhide.directive';
import { MyUnderLineDirective } from './directives/myUnderline.directive';
import { CustomMyHide } from './directives/custom.myhide.directive';
import { ListenerDirective } from './directives/listener.directive';
import { CustomColor } from './directives/custom.color';
import { MyIfDirective } from './directives/myif.directive';
import { MyLoop } from './directives/myloop.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ActionButtonsComponent,
    HttpComponent,
    FireBaseComponent,
    DemoServicesComponent,
    MinistersComponent,
    TestdirComponent,
    MyHideDirective,
    MyUnderLineDirective,
    CustomMyHide,
    ListenerDirective,
    CustomColor,
    MyIfDirective,
    MyLoop,
    ParentComponent,
    ChildComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [areaService,MinisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
