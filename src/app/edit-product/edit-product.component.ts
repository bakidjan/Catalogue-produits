import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CatalogueService} from '../service/catalogue.service';
import {ProductModel} from '../model/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public currentProduct: ProductModel;
  public url: string;

  constructor( private router : Router, private activatedRoute : ActivatedRoute, private catService : CatalogueService) { }

  ngOnInit() {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    this.catService.getRedource(this.url)
      .subscribe(data=>{
        this.currentProduct = data;
      }, error => {
        console.log(error)
      })
  }

  onUpdateProduct(value: any) {
    this.catService.updateResource(this.url, value)
      .subscribe(data=>{
        alert("bien update")
        this.router.navigateByUrl("/products");
      }, error => {
        console.log(error);
      })
  }
}
