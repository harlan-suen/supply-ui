import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Notifications } from '../models/notification';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  url = 'api/guard/notification';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  typeMap: Map<number, string> = new Map([
    [1, '通知'],
    [2, '常规'],
    [3, '警告'],
  ]);
  typeColorMap: Map<number, string> = new Map([
    [1, 'orange'],
    [2, 'green'],
    [3, 'red'],
  ]);
  constructor(private http: HttpClient) { }

  getNotification(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  addNotification(msg: Notifications): Observable<any> {
    return this.http.post(this.url, msg, this.httpOptions);
  }
}
