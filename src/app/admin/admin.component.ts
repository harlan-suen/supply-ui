import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  role = 0;
  id = 0;
  user: User[] = [];
  isCollapsed = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const r = localStorage.getItem('role');
    const i = localStorage.getItem('id');
    if (r != null) {
      this.role = +r;
    }
    if (i != null) {
      this.id = +i;
    }
    this.userService.getUserById(this.id).subscribe({
      next: resp => {
        if (resp.code === 200) {
          this.user.push(resp.data);
        }
      }
    });
  }
}
