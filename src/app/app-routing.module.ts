import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { EmailComponent } from './pages/email/email.component';

// Modulos
import { PagesRoutingModule } from './pages/pages-routing.module';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard/archivos', pathMatch: 'full'},

  { path: '**',  component: ErrorComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
