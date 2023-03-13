import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {StudentService} from "../services/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  constructor(private authService: AuthService, private  router: Router) { }
  authStatus ! :boolean;
  ngOnInit(){
    this.authStatus = this.authService.isAuth;

  }
  onSignIn() {
    this.authService.signIn().then(
        () => {
          alert('Sign in successful!');
          this.authStatus = this.authService.isAuth;
          this.router.navigate(['students']);
        }
    );
  }
  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }



}
