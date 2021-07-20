import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MediaMatcher } from '@angular/cdk/layout';
import { Usuario } from '../../models/Usuario.,model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  mobileQuery: MediaQueryList;

  public usuario: Usuario;

  open = true;


  private _mobileQueryListener: () => void;

  constructor(ChangeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => ChangeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    //Obtener el usuario logueado
    this.usuario = authService.usuario;

  }

  ngOnInit():void{
    
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login')
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  mostrarIcon() {
    this.open = !this.open;
  }


  ocultarSidebar() {
    $('.menu li a').click(function () {
      $(this).parent().toggleClass('active')
    })
  }
}
