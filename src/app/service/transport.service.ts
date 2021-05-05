import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTransport } from '../models/transport';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  transportUrl = 'api/guard/transport';
  statusMap: Map<number, string> = new Map([
    [10, '待发货'],
    [20, '配送中'],
    [30, '已完成']
  ]);
  marketMap: Map<number, string> = new Map([
    [10008, '超市1'],
    [10009, '超市2'],
    [9999, '供应商']
  ]);
  constructor(private http: HttpClient) { }

  add(t: CreateTransport): Observable<any> {
    return this.http.post(this.transportUrl, t, this.httpOptions);
  }
  getAll(): Observable<any> {
    return this.http.get(this.transportUrl);
  }
  getForSource(id: number): Observable<any> {
    return this.http.get(`${this.transportUrl}/source/${id}`);
  }
  getForTarget(id: number): Observable<any> {
    return this.http.get(`${this.transportUrl}/target/${id}`);
  }
  updateStatus(id: number, status: number): Observable<any> {
    return this.http.put(`${this.transportUrl}/${id}/${status}`, []);
  }
}
