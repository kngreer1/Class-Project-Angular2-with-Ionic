import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit }  from '@angular/core';


import { IProduct } from '../../services/product';
import { ProductService } from '../../services/product.service';
import { ProductDetails } from '../productDetails/product-detail.component'

@Component({
    selector: 'page-product-list.component',
    templateUrl: 'productByCategory.component.html',
})
export class ProductsByCategory implements OnInit {
    pageTitle: string = 'Product List';
    errorMessage: string;
    products: IProduct[];
    categories: any;



    constructor(private _productService: ProductService,
        private nav: NavController,
        private navParams: NavParams) {
    
    }

    ngOnInit(): void {
        console.log("ngOnInit function called! By Category");
        console.log("%c-----------------------", "color: blue; font-weight: bold");
        console.log("%cByCategoryComponent", "color: blue; font-weight: bold");
        console.log("%c-----------------------", "color: blue; font-weight: bold");

        console.log("ngOnInit function called!");

        this.categories = this.navParams.data;

        this._productService
            .getProductsByCategory(this.categories.categoryID)
            .subscribe(
            data => this.extractData(data),
            error => this.errorMessage = <any>error,
        );
    }

    private extractData(data: any) {
        console.log("%c-----------------------", "color: blue; font-weight: bold");
        console.log("%ByCategoryComponent", "color: blue; font-weight: bold");
        console.log("%c-----------------------", "color: blue; font-weight: bold");
        console.log("extractData function called!");
        console.log("data:")
       //console.dir(data);

        this.products = data;

    }


    itemTapped($event, product) {
        this.nav.push(ProductDetails, product);

    }
}


