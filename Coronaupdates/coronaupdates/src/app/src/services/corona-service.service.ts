import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaServiceService {

  constructor(private http:HttpClient) { }

 public getCompleteInfo(){
  return this.http.get<any>('https://api.rootnet.in/covid19-in/unofficial/covid19india.org');
  }

}
