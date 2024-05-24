import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/produtos/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  isSidePanelVisible: boolean = false;

  productObj: any = 
    {
      "productId": 0,
      "productSku": " ",
      "ProductName": "",
      "productPrice": 0,
      "productShortName": "",
      "productDescription": "",
      "createdDate": new Date(),
      "deliveryTimeSpan": "",
      "categoryId":0,
      "productImageUrl": ""
    };

    categoryList: any [] = [];
    productsyList: any [] = [];

    constructor(private productSrv: ProductsService){}
  
     ngOnInit(): void {
         this.getAllCategory();
         this.getProduct();
     }

     getProduct(){
      this.productSrv.getProduct().subscribe((res:any)=>{
        this.productsyList = res.data

      })
     }
     getAllCategory(){
      this.productSrv.getProduct().subscribe((res:any)=>{
        this.categoryList = res.data

      })
     }
    openSidePanel(){
      this.isSidePanelVisible = true;
    }

    closeSidePanel(){
    this.isSidePanelVisible = false;
    }
    onEdit(item: any){
     this.productObj = item;
     this.openSidePanel();
    }

    onDelete(item: any){

       const isDelete = confirm ('Are you Sure want to delete');
      if(isDelete){
      this.productSrv.deleteProduct(item.productId).subscribe((res:any)=>{
        debugger;
        if(res.result){
          alert("Produto Eliminado")
          this.getProduct();
        } else{
          alert(res.message)
        }

      })
    }
     
    }

    onUpdate(){
      this.productSrv.updateProduct(this.productObj).subscribe((res:any)=>{
        debugger;
        if(res.result){
          alert("Produto Actualizado")
          this.getProduct();
        } else{
          alert(res.message)
        }

      })


    }

    onSave(){
      this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
        debugger;
        if(res.result){
          alert("Produto Created")
          this.getProduct();
        } else{
          alert(res.message)
        }

      })

    }
}
