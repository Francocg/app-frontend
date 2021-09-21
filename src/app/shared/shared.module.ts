import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [SidebarComponent, ErrorComponent],
  exports: [SidebarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    
  ]
})
export class SharedModule { }
