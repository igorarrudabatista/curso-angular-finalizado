import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

    Product!: Product

  constructor(private ProductService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
      this.ProductService.readById(id!).subscribe((Product) => {
      this.Product = Product
    }
      )  }

  deleteProduct(): void {
    this.ProductService.delete(this.Product.id!).subscribe(() => {
  this.ProductService.showMessage("Produto Excuído")
  this.router.navigate(["/products"]);
});

  }

  cancel(): void{

  this.router.navigate(['/products'])
  }
}
