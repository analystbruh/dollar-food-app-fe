import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { LocationComponent } from './location/location.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsService } from './services/reviews.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AccountComponent } from './account/account.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoogleSignInComponent,
    LocationComponent,
    ReviewsComponent,
    HeaderComponent,
    RestaurantComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    SocialLoginModule,
    HttpClientModule,
    MatDividerModule,
    MatSelectModule,
    MatToolbarModule,
    NgxScannerQrcodeModule,
    MatBadgeModule,
    MatCardModule
  ],
  providers: [ReviewsService,{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '1000894517370-6ke7b5l6va47gds2ohj62kehjne2dt1o.apps.googleusercontent.com'
          )
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
