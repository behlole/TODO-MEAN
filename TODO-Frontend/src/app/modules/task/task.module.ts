import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule
  ]
})
export class TaskModule { }
