import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Notifications } from 'src/app/models/notification';
import { Order } from 'src/app/models/order';
import { NotificationService } from 'src/app/service/notification.service';
import { OrderService } from 'src/app/service/order.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  listOfData: Order[] = [];
  index = 0;
  uid = 0;
  role = 0;
  oid = 0;
  statusMap = this.orderService.statusMap;
  orgMap = this.userService.orgMap;
  constructor(private orderService: OrderService, private msg: NzMessageService,
              private userService: UserService, private notificationService: NotificationService) {}
  deliver(id: number): void {
    this.orderService.updateStatus(id, 30).subscribe({
      next: resp => {
        if (resp.code === 200) {
          this.msg.success('发货成功');
          const index = this.listOfData.findIndex(item => item.id === id);
          this.listOfData[index].orderStatus = 30;
          this.sendNotification(this.listOfData[index].userId, `订单[${id}]已发货`);
        }
      }
    });
  }
  pickup(id: number): void {
    this.orderService.updateStatus(id, 40).subscribe({
      next: resp => {
        if (resp.code === 200) {
          this.msg.success('取货成功');
          const index = this.listOfData.findIndex(item => item.id === id);
          this.listOfData[index].orderStatus = 40;
          this.sendNotification(this.listOfData[index].userId, `订单[${id}]已取货`);
        }
      }
    });
  }

  sendNotification(receiverId: number, msg: string): void {
    const noti: Notifications = {
      sourceId: this.uid,
      targetId: receiverId,
      type: 2,
      content: msg
    }
    this.notificationService.addNotification(noti).subscribe();
  }
  ngOnInit(): void {
    const id = localStorage.getItem('id');
    if (id != null) {
      this.uid = +id;
    }
    const r = localStorage.getItem('role');
    if (r != null) {
      this.role = +r;
    }
    const oid = localStorage.getItem('org_id');
    if (oid != null) {
      this.oid = +oid;
    }
    if (this.role === 2) {
      this.orderService.getByOrg(this.oid).subscribe({
        next: resp => {
          if (resp.code === 200) {
            this.orders = resp.data;
            for (let i = 0; i < resp.data.length; i++) {
              this.orders[i].items = JSON.parse(resp.data[i].items);
            }
            this.listOfData = this.orders;
          }
        }
      });
    }else {
      this.orderService.getForMarket(this.uid).subscribe({
        next: resp => {
          if (resp.code === 200) {
            this.orders = resp.data;
            for (let i = 0; i < resp.data.length; i++) {
              this.orders[i].items = JSON.parse(resp.data[i].items);
            }
            this.listOfData = this.orders;
          }
        }
      });
    }
  }
}
