import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CreateTransport, Transports } from 'src/app/models/transport';
import { TransportService } from 'src/app/service/transport.service';

@Component({
  selector: 'app-trans-in',
  templateUrl: './trans-in.component.html',
  styleUrls: ['./trans-in.component.css']
})
export class TransInComponent implements OnInit {
  listOfData: Transports[] = [];
  transIn: Transports[] = [];
  transOut: Transports[] = [];
  id = 0;
  role = 0;
  index = 0;
  statusMap = this.transportService.statusMap;
  marketMap = this.transportService.marketMap;
  constructor(private transportService: TransportService, private msg: NzMessageService) {}
  ngOnInit(): void {
    const uid = localStorage.getItem('id');
    if (uid != null ) {
      this.id = +uid;
    }
    this.transportService.getForSource(this.id).subscribe({
      next: resp => {
        if (resp.code === 200) {
          this.transOut = resp.data;
        }
      }
    });
    this.transportService.getForTarget(this.id).subscribe({
        next: resp => {
          if (resp.code === 200) {
            this.transIn = resp.data;
            this.listOfData = this.transIn;
          }
        }
      });
  }

  changeTab(index: number): void {
    if (index === 0) {
      this.listOfData = this.transIn;
    }else {
      this.listOfData = this.transOut;
    }
  }

  send(id: number): void {
    this.transportService.updateStatus(id, 20).subscribe({
      next: resp => {
        if (resp.code === 200) {
          this.msg.success('发货成功');
        }
      },
      error: () => this.msg.error('请求错误')
    });
  }

  receive(id: number): void {
    this.transportService.updateStatus(id, 30).subscribe({
      next: resp => {
        if (resp.code === 200) {
          this.msg.success('收货成功');
        }
      },
      error: () => this.msg.error('请求错误')
    });
  }
}
