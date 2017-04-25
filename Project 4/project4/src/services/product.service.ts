import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IProduct } from './product';

@Injectable()
export class ProductService {

    private _productUrl = 'assets/data/Products.json';

    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {

        console.log("%c-----------------------", "color: green; font-weight: bold");
        console.log("%cProductListService:", "color: green; font-weight: bold");
        console.log("%c-----------------------", "color: green; font-weight: bold");
        console.log("ProductListService - getCategories method called!");

        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log("data object returned from http.get call:"))
            //.do(data => console.dir(data))
            //.do(data => console.table(data))
            .catch(this.handleError);
    }

    getProductsByCategory(categoryID: number): Observable<IProduct[]> {

        console.log("%c-----------------------", "color: green; font-weight: bold");
        console.log("%ByCategoryService:", "color: green; font-weight: bold");
        console.log("%c-----------------------", "color: green; font-weight: bold");
        console.log("ByCategoryService - getCategories method called!");

        return this.getProducts()
            .map((products: IProduct[]) => products.filter(p => p.categoryID === categoryID))
            .do(data => console.log("data object returned from http.get call:"))
            //.do(data => console.dir(data))
            //.do(data => console.table(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
