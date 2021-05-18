import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CreateTransport, Transports } from 'src/app/models/transport';
import { TransportService } from 'src/app/service/transport.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
  listOfData: Transports[] = [];
  id = 0;
  role = 0;
  modalData: CreateTransport = {
    sourceId: 0,
    targetId: 0,
    item: '',
    quantity: 0,
  };
  isVisible = false;
  statusMap = this.transportService.statusMap;
  marketMap = this.transportService.marketMap;
  constructor(private transportService: TransportService, private msg: NzMessageService) {}
  ngOnInit(): void {
    const uid = localStorage.getItem('id');
    if (uid != null ) {
      this.id = +uid;
    }
    const r = localStorage.getItem('role');
    if (r != null) {
      this.role = +r;
    }
    this.transportService.getAll().subscribe({
        next: resp => {
          if (resp.code === 200) {
            this.listOfData = resp.data;
          }
        }
      });
  }
  addTransport(): void {
    this.modalData = {
      sourceId: 0,
      targetId: 0,
      item: '',
      quantity: 0,
    };
    this.isVisible = true;
  }
  handleOk(): void {
    if (this.modalData.sourceId === 0 || this.modalData.targetId === 0 || this.modalData.item === '' || this.modalData.quantity === 0) {
      this.msg.error('填写不完善，请检查！');
      return;
    }
    this.transportService.add(this.modalData).subscribe({
      next: resp => {
        if (resp.code === 200) {
          this.msg.success(`创建成功，${resp.data.transport_id}`);
        }
      },
      error: () => this.msg.error('创建失败')
    });
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  send(id: number): void {
    this.transportService.updateStatus(id, 30).subscribe({
      next: resp => {
        if (resp.code === 200) {
          this.msg.success('发货成功');
          const index = this.listOfData.findIndex(item => item.id === id);
          this.listOfData[index].status = 30;
        }
      },
      error: () => this.msg.error('请求错误')
    });
  }
  cancel(id: number): void {
    this.transportService.updateStatus(id, -1).subscribe({
      next: resp => {
        if (resp.code === 200) {
          this.msg.success('取消成功');
          const index = this.listOfData.findIndex(item => item.id === id);
          this.listOfData[index].status = -1;
        }
      },
      error: () => this.msg.error('请求错误')
    });
  }
  receive(id: number): void {
    this.transportService.updateStatus(id, 40).subscribe({
      next: resp => {
        if (resp.code === 200) {
          this.msg.success('收货成功');
          const index = this.listOfData.findIndex(item => item.id === id);
          this.listOfData[index].status = 40;
        }
      },
      error: () => this.msg.error('请求错误')
    });
  }
}
