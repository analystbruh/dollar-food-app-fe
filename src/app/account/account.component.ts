import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../services/balance.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public showRewards = false;

  constructor(private bs: BalanceService) { }

  ngOnInit(): void {
  }

  showReward() {
    this.showRewards = true;
    this.bs.updateBalance('1', true);
  }

}
