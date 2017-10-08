import { NavParams } from 'ionic-angular';
import { Component }  from '@angular/core';



import { ProductService } from '../../services/product.service';

@Component({
    selector: 'page-product-list.component',
    templateUrl: 'product-detail.component.html',
})
export class ProductDetails {
    pageTitle: string = 'Product List';
    errorMessage: string;
    product: any;

    constructor(private _productService: ProductService,
        private navParams: NavParams) {
        this.product = this.navParams.data;
        console.log("NavParams = ", this.navParams.data)
    }
}


