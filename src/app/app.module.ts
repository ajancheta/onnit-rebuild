import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MissionComponent } from './mission/mission.component';
import { IntroPhotoComponent } from './intro-photo/intro-photo.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { SupplementsComponent } from './supplements/supplements.component';
import { SupplementDetailComponent } from './supplement-detail/supplement-detail.component';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FooterComponent } from './footer/footer.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MissionComponent,
    IntroPhotoComponent,
    ProductCategoryComponent,
    SupplementsComponent,
    SupplementDetailComponent,
    FooterComponent,
    FeaturedProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
