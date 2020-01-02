import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host : String = "http://localhost:8080";

  constructor( private httpClient : HttpClient) { }
 public getProduct(page : number, size : number){
    return this.httpClient.get(this.host+"/products?page="+page+"&size="+size);
  }

  public getProductByDesignation(mc : String, page : number, size : number){
    return this.httpClient.get(this.host+"/products/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size)
  }

  public deleteResource(url : any){
    return this.httpClient.delete(url);
  }

  public saveResource(url, data) : Observable<ProductModel>{
    return this.httpClient.post<ProductModel>(url, data);
  }

  public getRedource(url) : Observable<ProductModel>{
    return this.httpClient.get<ProductModel>(url);
  }

  public updateResource(url, data) : Observable<ProductModel>{
    return this.httpClient.put<ProductModel>(url, data);
  }
}
