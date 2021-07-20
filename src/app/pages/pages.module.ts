import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivosComponent } from './archivos/archivos.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { EmailComponent } from './email/email.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [ArchivosComponent, EmailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule
  ]
})
export class PagesModule { }
