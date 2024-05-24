import { Component } from '@angular/core';
import { ProductsService } from '../../../services/produtos/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categoryList:any []=[];
  products$:Observable<any>
  constructor(private prodycrSrv: ProductsService){
    this.products$ = this.prodycrSrv.getGategory();
 
}
getAllCategory(){  }
}
