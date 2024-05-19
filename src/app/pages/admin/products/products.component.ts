import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
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
    }
  

    openSidePanel(){
      this.isSidePanelVisible = true;
    }

    closeSidePanel(){
    this.isSidePanelVisible = false;
    }
}
