import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: User } } = {};
  listOfData: User[] = [];
  roleMap: Map<string, string> = new Map([
    ['1', '居民'],
    ['2', '社区负责人'],
    ['3', '商超'],
    ['4', '供应商'],
  ]);
  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: `${i}`,
        username: `harlan${i}`,
        password: 'vs1234',
        role: '1',
        phone: '10086',
        orgId: 10010,
      });
    }
    this.listOfData = data;
    this.updateEditCache();
  }
}
