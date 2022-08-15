import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})
export class GoogleSignInComponent implements OnInit {

  public user: SocialUser | null = null;
  public loggedIn: boolean = false;

  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log('oooy');
      this.user = user;
      this.loggedIn = (user != null);
      this.router.navigate(['loc']);
    });
  }

  signInWithGoogle(): void {
    console.log('yooo');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
