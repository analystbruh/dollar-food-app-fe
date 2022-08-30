import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewsService } from '../services/reviews.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  public output = '';

  constructor(
    private revs: ReviewsService,
    private router: Router){}

  public onError(e: any): void {
    alert(e);
  }

  leaveReview(r: string): void {
    this.revs.restaraunt=r;
    this.router.navigate(['reviews']);
  }
}
