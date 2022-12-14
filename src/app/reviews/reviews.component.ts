import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BalanceService } from '../services/balance.service';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public reviews$: Observable<any> | null = null;
  public rating: number | null = null;
  public rest = '';
  public user: SocialUser | null = null;
  public submittedReviews: any[] = [];
  private pics: {[key: string]: string} = {
    'medlock tavern': 'medlock.jpg',
    'masterpiece johns creek': 'masterpiecejc.jpg'
  };
  public src = 'assets/';
  public newReview: string | null = null;


  constructor(private revs: ReviewsService,
    private bs: BalanceService) { }

  ngOnInit(): void {
    this.rest = this.revs.restaraunt;
    this.src += this.pics[this.rest];
    this.user = this.revs.user;
    this.reviews$ = this.revs.getReviews(this.rest);
    console.log(this.rest, this.user);
  }

  submitReview()  {
    let input = document.querySelector('#review') as HTMLTextAreaElement;
    console.log(input.value);
    this.newReview = input.value;
    input.value = '';
    let data = {
      restaurant: this.rest,
      username: this.user?.firstName,
      review: this.newReview,
      rating: this.rating ?? 0
    };
    console.log(data);
    this.revs.postReviews(data).subscribe(() =>{
      this.showNewReview(data);
      this.bs.updateBalance('1',false);
    });
    this.rating = null;
  }

  showNewReview(review: any) {
    this.submittedReviews = [...this.submittedReviews, review]
  }

}
