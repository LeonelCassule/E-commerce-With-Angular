import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
   }

   getGategory(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }

  getProduct(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }

  saveProduct(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT,obj);
  }

  updateProduct(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT,obj);
  }

  deleteProduct(id:any){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT +id);
  }
}
