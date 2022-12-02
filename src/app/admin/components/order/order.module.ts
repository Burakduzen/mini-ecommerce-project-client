import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DialogModule } from '../../../dialogs/dialog.module';
import { DeleteDirectiveModule } from '../../../directives/admin/delete.directive.module';






@NgModule({
  declarations: [
    OrderComponent,
    ListComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "",component: OrderComponent}
    ]),
    MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatPaginatorModule, DialogModule, DeleteDirectiveModule
]
})
export class OrderModule { }
