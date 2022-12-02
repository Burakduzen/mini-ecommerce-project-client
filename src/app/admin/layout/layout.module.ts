import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav'; 



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MatSidenavModule
    
  ],
  exports:[
    LayoutComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class LayoutModule { }
