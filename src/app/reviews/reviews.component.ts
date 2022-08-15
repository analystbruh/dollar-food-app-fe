import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public rest = '';

  private pics: {[key: string]: string} = {
    'medlock tavern': 'medlock.jpg',
    'masterpiece johns creek': 'masterpiecejc.jpg'
  };

  public src = 'assets/';

  public newReview: string | null = null;

  constructor(private revs: ReviewsService) { }

  ngOnInit(): void {
    this.rest = this.revs.restaraunt;
    this.src += this.pics[this.rest];
    console.log(this.rest);
  }

  addReview()  {
    let input = document.querySelector('#review') as HTMLTextAreaElement;
    console.log(input.value);
    this.newReview = input.value;
    input.value = '';
  }

}
