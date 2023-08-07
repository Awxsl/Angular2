import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: any
  updatedUser: any
  editMode: boolean = false
  constructor(private usersService:UsersService) { }

  async ngOnInit() {
    const id: any = localStorage.getItem('username')
    const response = await this.usersService.getUser(id)
    if(response.status === 200) {
      this.user = response.data
      this.updatedUser = this.user
    }
  }

  async onSubmit() {
    const response = await this.usersService.updateUser(this.updatedUser)
    if(response.status === 200) {
      this.user = this.updatedUser
      this.editMode = false
    } 
  }

  textAreaValueChange(event: any) {
      this.updatedUser.description = event.target.value
  }

  onToggleEdit() {
    this.updatedUser = this.user
    this.editMode = !this.editMode
  }

}
