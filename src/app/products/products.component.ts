import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CatalogueService} from '../service/catalogue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productsList : any;
  public currentPage : number = 0;
  public size : number = 4;
  public totalPage : number;
  public pages : Array<number>;
  public currentKeyword : String ="";

  constructor( private catService : CatalogueService, private router : Router) { }

  ngOnInit() {
    this.searcherProduct();
  }
  onGetProduct() {
    return this.catService.getProduct(this.currentPage, this.size)
      .subscribe(data=>{
        this.totalPage = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPage)
        this.productsList = data;
      }, error => {
        console.log(error);
      })
  }

  onCurrentPage(i: number) {
    this.currentPage =i;
    this.searcherProduct();
  }

  onSearchProduct(inputKeyword: any){
    this.currentPage = 0;
    this.currentKeyword = inputKeyword.keyword;
    this.searcherProduct();
    inputKeyword=undefined;
  }
  searcherProduct() {
     this.catService.getProductByDesignation(this.currentKeyword, this.currentPage, this.size)
      .subscribe(data=>{
        this.totalPage = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPage)
        this.productsList = data;
      }, error => {
        console.log(error)
      })

  }

  onDeleteProduct(p: any) {
    let conf = confirm("etes vous sûr ?");
    if(conf){
      //p.id vu que id is exposed in data
      this.catService.deleteResource(p._links.self.href)
        .subscribe(data=>{
          //recharger la page apres deleted
          this.searcherProduct();
        }, error => {
          console.log(error);
        })
    }
  }

  onEditProduct(p) {
    let url = p._links.self.href;
   this.router.navigateByUrl("/edit-product/"+btoa(url));
  }
}
