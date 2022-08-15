import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private revs: ReviewsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getLoc();
  }

  getLoc(): void {
    navigator.geolocation.getCurrentPosition(function(pos){
      console.log(pos.coords)
    },function(){
      alert('User not allowed')
    });
  }

  setRestaraunt(r: number): void {
    let robj = ['medlock tavern', 'masterpiece johns creek']
    this.revs.restaraunt = robj[r];
    console.log(this.revs.restaraunt)
    this.router.navigate(['reviews']);
  }
}
