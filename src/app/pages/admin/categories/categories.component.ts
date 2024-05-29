import { Component } from '@angular/core';
import { ProductsService } from '../../../services/produtos/products.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categoryList:any []=[];
  products$:Observable<any>
  constructor(private prodycrSrv: ProductsService){
    this.products$ = this.prodycrSrv.getGategory().pipe(
      map((item:any)=>{
        return item.data;
      })
    );
 
}
getAllCategory(){  }
}
