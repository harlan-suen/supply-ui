import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  listOfData: Item[] = [];

  modalData: Item = {
    id: 1,
    name: '',
    price: 0,
    stock: 0,
    onSale: false,
    imgUrl: ''
  };
  isVisible = false;
  formatterRMB = (value: number) => `¥ ${value}`;
  parserRMB = (value: string) => value.replace('¥ ', '');
  constructor(private msg: NzMessageService) {}

  showModal(id: number): void {
    const res = this.listOfData.find(item => item.id === id);
    if (res !== undefined) {
      this.modalData = JSON.parse(JSON.stringify(res));
    }
    this.isVisible = true;
  }

  delete(id: number): void {
    this.listOfData = this.listOfData.filter(item => item.id !== id);
  }
  handleOk(): void {
    if (this.modalData.name !== '') {
      this.isVisible = false;
      // TODO：http put
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: i,
        name: `口罩${i}`,
        price: 3.99 + i,
        stock: 300,
        imgUrl: 'assets/item.jpeg',
        onSale: true
      });
    }
    this.listOfData = data;
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
}
