import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { ToastService }  from './../../services/toast.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor( 
		  private authenticationService: AuthenticationService, 
		  private toastService: ToastService,
		  private router: Router) { }

  ngOnInit() {
  }
  	logout() {
  		 this.authenticationService.logout();
         this.toastService.showSuccessToast("User Successfully logged out");
	}
  	incidentPage(){
  		 this.authenticationService.authenticationState.subscribe(state => {
             if (state) {
               this.router.navigate(['members/incident']);
             } else {
               this.router.navigate(['login']);
             }
           });
  	      
  	}
  	
  	sitePage(){
  		 this.authenticationService.authenticationState.subscribe(state => {
             if (state) {
               this.router.navigate(['members/site']);
             } else {
               this.router.navigate(['login']);
             }
           });
  	}
}
