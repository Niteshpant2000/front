import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string = '';
  password : string = '';
  role : string = '';

  // user : User = new User();

  roles !: string[];

  constructor() { 
    this.roles = [
      'admin',
      'Employee',
      'Cutomer'
    ]
  }

  // ngOnInit(): void {
  //   this.username = '';
  //   this.password = '';
  // }

  login() {
    console.log(this.username + " " + this.password + " " + this.role);
  //   this.user.username = this.username;
  //   this.user.password = this.password;
  //   this.user.role = this.role;

  //   this.authService.login(this.user).subscribe(res => {

  //     if(res == null) {
  //       alert("Uername or password is wrong");
  //       this.ngOnInit();
  //     }else {
  //       console.log("Login successful");
  //       localStorage.setItem("token",res.token);

  //       if(this.role == 'user') {
  //         this.route.navigate(['/user']);
  //       } 

  //       if( this.role == 'admin') {
  //         this.route.navigate(['/admin']);
  //       }

  //     }

  //   }, err => {
  //     alert("Login failed");
  //     this.ngOnInit();
  //   })

  }
}
