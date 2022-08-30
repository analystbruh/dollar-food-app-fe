import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BalanceService } from '../services/balance.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public balanceAlert$!: Observable<any>;

  constructor(private bs: BalanceService) { }

  ngOnInit(): void {
    this.balanceAlert$ = this.bs.getBalance();
  }

}
