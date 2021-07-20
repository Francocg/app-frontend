import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';




// Componentes General
import { ArchivosComponent } from './archivos/archivos.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { EmailComponent } from './email/email.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [

    {
        path: 'dashboard',
        component: SidebarComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'archivos', component: ArchivosComponent },
            { path: 'email', component: EmailComponent },
        ],

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
