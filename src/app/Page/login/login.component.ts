import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';//para usar ngModel
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';//Para usar router navigate
@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
constructor(private router: Router) {}

 correo: string = '';
  password: string = '';

  iniciar(){
  

   let encontrado = { correo: this.correo, password: this.password };
    console.log("Imprimos el encontrado", encontrado);
    let miStorage = window.localStorage;
    miStorage.setItem("usuario", JSON.stringify(encontrado));

    this.router.navigate(['/gestionuser']);

  }

  
  
}
