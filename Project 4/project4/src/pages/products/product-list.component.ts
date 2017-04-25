import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit }  from '@angular/core';


import { IProduct } from '../../services/product';
import { ProductService } from '../../services/product.service';
import { ProductDetails } from '../productDetails/product-detail.component'

@Component({
    selector: 'page-product-list.component',
    templateUrl: 'product-list.component.html',
})
export class ProductList implements OnInit {
    pageTitle: string = 'Product List';
    errorMessage: string;
    products: IProduct[];




    constructor(private _productService: ProductService,
        private nav: NavController,
        private navParams: NavParams) {

    }

    ngOnInit(): void {
        console.log("ngOnInit function called!");
        console.log("%c-----------------------", "color: blue; font-weight: bold");
        console.log("%cCategoryListComponent", "color: blue; font-weight: bold");
        console.log("%c-----------------------", "color: blue; font-weight: bold");

        console.log("ngOnInit function called!");

        this._productService
            .getProducts()
            .subscribe(
            data => this.extractData(data),
            error => this.errorMessage = <any>error,
        );
    }

    private extractData(data: any) {
        console.log("%c-----------------------", "color: blue; font-weight: bold");
        console.log("%cCategoryListComponent", "color: blue; font-weight: bold");
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


