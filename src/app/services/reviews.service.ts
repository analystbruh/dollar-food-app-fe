import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  public restaraunt = '';

  public user: SocialUser | null = null;

  constructor(private http: HttpClient) { }

  getReviews(restaurant: string): Observable<object> {
    let params = { restaurant };
    // return this.http.get('http://localhost:5000/api/v1/reviews', { params });
    return this.http.get('https://dollar-app-api.herokuapp.com/api/v1/reviews', { params });
  }

  postReviews(body: object): Observable<object> {
    // return this.http.post('http://localhost:5000/api/v1/reviews', body);
    return this.http.post('https://dollar-app-api.herokuapp.com/api/v1/reviews', body);
  }
}
