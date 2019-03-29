import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/auth';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public afauth: AngularFireAuth) { }

  ngOnInit() {
  }

  public loginUsuario(usuario:string, clave:string): void {
    if (usuario == ""|| clave == "") {
      alert("Usuario y contraseña requerida");
      return;
    }
    console.log(usuario);
    this.afauth.auth.signInWithEmailAndPassword(usuario, clave).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      var errorEspanol = '1';
      console.log(errorCode);
      console.log(errorMessage);
      switch (errorCode) {
        case 'auth/wrong-password':
        case 'auth/user-not-found':
          errorEspanol = 'Error, clave o usuario invalidos';
          break;
        default:
          errorEspanol = 'Error en autenticación, contacte a su proveedor'
          break;
      }
      if(errorEspanol!='1'){
        alert(errorEspanol);
      }
     
      // ...
    });
  }

 

}
