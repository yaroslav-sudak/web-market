import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { TopSellingComponent } from './components/top-selling/top-selling.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StyleSearchComponent } from './components/style-search/style-search.component';
import { CommentsComponent } from './components/comments/comments.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterComponent } from './components/router/router.component';
import { ShopComponent } from './components/shop/shop.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { PriceComponent } from './components/price/price.component';
import { RateComponent } from './components/rate/rate.component';
import { CommentComponent } from './components/comment/comment.component';
import { LogoComponent } from './components/logo/logo.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ButtonComponent } from './components/button/button.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    NavigationComponent,
    BrandsComponent,
    NewArrivalsComponent,
    TopSellingComponent,
    ProductListComponent,
    StyleSearchComponent,
    CommentsComponent,
    SubscribeComponent,
    FooterComponent,
    RouterComponent,
    ShopComponent,
    FiltersComponent,
    CartProductComponent,
    CartSummaryComponent,
    ImageViewerComponent,
    ProductInfoComponent,
    PriceComponent,
    RateComponent,
    CommentComponent,
    LogoComponent,
    PromotionComponent,
    ButtonComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
