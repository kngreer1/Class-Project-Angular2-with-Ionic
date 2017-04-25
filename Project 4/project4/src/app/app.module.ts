import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoriesList } from '../pages/categories/categories-list.component';
import { ProductList } from '../pages/products/product-list.component';
import { ProductsByCategory } from '../pages/byCategory/productByCategory.component';
import { ProductDetails } from '../pages/productDetails/product-detail.component';

import { CategoryService } from '../services/categories.service';
import { ProductService } from '../services/product.service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
      HomePage,
      CategoriesList,
      ProductList,
      ProductDetails,
      ProductsByCategory
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      HomePage,
      CategoriesList,
      ProductList,
      ProductDetails,
      ProductsByCategory
  ],
  providers: [
    StatusBar,
      SplashScreen,
      CategoryService,
      ProductService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
