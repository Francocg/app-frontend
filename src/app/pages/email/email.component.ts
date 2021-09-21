import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Correo } from 'src/app/models/correo';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  
  correo:Correo = new Correo();
  idusuarioLocal;
  forms;

  constructor(fb:FormBuilder, private authService:AuthService) { 
    this.idusuarioLocal = Number(localStorage.getItem('idusuario'));
    this.correo.fecha = new Date();
    console.log(this.correo.fecha);

    this.forms = fb.group({
      destinatario: new FormControl('', [Validators.required]),
      titulo: new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required]),
      fecha: new FormControl(this.correo.fecha),
      idusuario: new FormControl(this.idusuarioLocal),

    });

  }

  ngOnInit(): void {}


  
  enviarCorreo(){
    

    console.log("FORMULARIO :",this.forms);
    if (this.forms.valid) {
      this.correo = this.forms.value;
      this.authService.createEmail(this.correo).subscribe(emails=>{
        Swal.fire({
          icon: 'success',
          title: 'CORREO ENVIADO !.',
          // text: 'Estado de solicitud',
        });

      })
          
    }else{
      Swal.fire({
        icon: 'error',
        title: ' CORREO NO VÁLIDO !.',
        // text: 'Estado de solicitud',
      });
    }
    
  }
}




