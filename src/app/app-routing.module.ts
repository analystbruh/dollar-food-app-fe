import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loc', component: LocationComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }