import {Component, OnInit} from '@angular/core';
import {CatalogueService} from '../service/catalogue.service';
import {Router} from '@angular/router';
import {ProductModel} from '../model/product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public currentProduct: ProductModel;
  public mode: number = 1;

  constructor(private catService: CatalogueService, private router: Router) {
  }

  ngOnInit() {
  }

  onSaveProduct(data: any) {
    this.catService.saveResource(this.catService.host + '/products', data)
      .subscribe(response => {
        /*redirecTo products after adding
          this.router.navigateByUrl("/products");*/
        //introduction du concept model pour
        // prepresenter les données de la response, creation d'une classe.model.ts
        this.currentProduct = response;
        this.mode = 2;
      }, error => {
        console.log(error);
      });
  }

  onNewprodcut() {
    this.mode=1;
  }

}
