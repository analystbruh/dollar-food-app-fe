import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private balanceSubject$ = new BehaviorSubject(true);

  constructor() { }

  updateBalance(v: string, b: boolean): void{
    this.balanceSubject$.next(b);
  }

  getBalance(): Observable<any> {
    return this.balanceSubject$;
  }

}
