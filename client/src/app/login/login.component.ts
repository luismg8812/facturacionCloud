import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public afauth: AngularFireAuth,private router: Router, public usuarioService:UsuarioService) { }

  ngOnInit() {
    this.observador();
  }

  public loginUsuario(usuario:string, clave:string): void {
    if (usuario == ""|| clave == "") {
      alert("Usuario y contraseña requerida");
      return;
    }
    this.usuarioService.loginUsuario(usuario,clave).then(res =>{
      console.log(res);
      this.router.navigate(['/menu']);
    }).catch(err =>{
      var errorCode = err.code;
      var errorEspanol="";
      switch (errorCode) {
        case 'auth/wrong-password':
        case 'auth/user-not-found':
          errorEspanol = 'Error, clave o usuario invalidos';
          break;
        default:
          errorEspanol = 'Error en autenticación, contacte a su proveedor'
          break;
      }
      alert(errorEspanol);
    });
    console.log(usuario); 
  }

  public observador() {
    this.afauth.auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log('usuario logueado');
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        
        // ...
      } else {
        console.log('usuario no logueado');
        // User is signed out.
        // ...
      }
    });
  }

  public cerrarSesision() {
    this.afauth.auth.signOut().then(function () {
     console.log("session cerrada");
    }).catch(function (error) {
      // An error happened.
    });
  
  }
}
