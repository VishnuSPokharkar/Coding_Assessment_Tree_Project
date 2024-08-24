import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface INodeItem{
  id: number,
  label: string,
  name: string,
  refMenuId: number,
  children: INodeItem[]
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }


  getMenuData():Observable<INodeItem[]> {
    return this.httpClient.get<INodeItem[]>("http://49.249.110.2:8050/api/MenuMasters/GetMenuMasterList/173");
  }

}
