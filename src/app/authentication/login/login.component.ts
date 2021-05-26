import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userModel = new User('', '');

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.userModel);
    this.authService.login(this.userModel).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      })
    /* if (this.userModel.username !== 'sachinagra.shakya@gmail.com' && this.userModel.password !== 'Password@1') {
      alert('Invaid credentials')
    } else {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/feature']);
    } */
  }

}


