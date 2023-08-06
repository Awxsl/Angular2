import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/modules/user-auth/services/auth-user.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string = ''
  password: string = ''

  constructor(private authUser:AuthUserService) { }

  ngOnInit(): void {
    localStorage.clear()
  }

  onSubmit() {
    if(!this.username || !this.password) {
      alert('Fill all fields')
      return 
    }

    const user = {
      id: this.username, 
      password: this.password
    }

    this.authUser.isRegisteredUser(user)
  }
}
