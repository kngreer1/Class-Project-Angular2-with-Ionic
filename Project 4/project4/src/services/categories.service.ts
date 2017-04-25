import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ICategory } from './category';

@Injectable()
export class CategoryService {
    private _categoryUrl = 'assets/data/categories.json';

    constructor(private _http: Http) { }

    getCategories(): Observable<ICategory[]> {
        return this._http.get(this._categoryUrl)
            .map((response: Response) => <ICategory[]>response.json())
            //.do(data => console.dir(data))
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCategory(id: number): Observable<ICategory[]> {
        return this.getCategories()
            .map((categories: ICategory[]) => categories.filter(p => p.categoryID === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}