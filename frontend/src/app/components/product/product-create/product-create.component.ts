import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']

})

export class ProductCreateComponent implements OnInit {

  Product: Product =  {
    name: '',
    price: 1,
  };

    constructor(private ProductService: ProductService,
      private router:Router) { }

    ngOnInit(): void {
    }

    createProduct(): void {
      this.ProductService.create(this.Product).subscribe(() => {
        this.ProductService.showMessage('Produto Criado!!!!')
        this.router.navigate(['/products'])

      })

    }
    cancel(): void {
      this.router.navigate(['/products'])

    }

  
}