import { Component, OnInit } from '@angular/core';
import {TypicodeService} from '../typicode.service';
interface User {
  name: string;
  value: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _service: TypicodeService) { }
  userList: User[] = [];
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this._service.getUsers().subscribe(users => {this.userList =  users.map((user) => {return {name: user.name, value: user.id}})});
  }
  getSelectedUser(id: number): string {
    return this.userList.find(user => user.value === id)?.name ?? '';

  }
}
