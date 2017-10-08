import { NavController } from 'ionic-angular';
import { Component, OnInit }  from '@angular/core';

import { ICategory } from '../../services/category';
import { CategoryService } from '../../services/categories.service';
import { ProductsByCategory } from '../byCategory/productByCategory.component'

@Component({
    selector: 'page-categories-list.component',
    templateUrl: 'categories-list.component.html'
})
export class CategoriesList implements OnInit {
    pageTitle: string = 'Category List';
    errorMessage: string;

    categories: ICategory[];

    constructor(private _categoryService: CategoryService,
        private nav: NavController) {

    }

    ngOnInit(): void {
        console.log("ngOnInit function called!");
        console.log("%c-----------------------", "color: blue; font-weight: bold");
        console.log("%cCategoryListComponent", "color: blue; font-weight: bold");
        console.log("%c-----------------------", "color: blue; font-weight: bold");

        console.log("ngOnInit function called!");

        this._categoryService
            .getCategories()
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

        this.categories = data;

    }

    itemTapped($event, category) {
        this.nav.push(ProductsByCategory, category);
    }
}

