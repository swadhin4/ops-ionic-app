import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ToastService }  from './../../services/toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loading = false;
    submitted = false;
    returnUrl: string;
    responseData:any;
    credentials:string;
  constructor(
   private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
  private toastService: ToastService) { }
 
  ngOnInit() {
 /*
	 * this.loginForm = this.formBuilder.group({ username: ['',
	 * Validators.required], password: ['', Validators.required] }); // reset
	 * login status this.authenticationService.logout(); // get return url from
	 * route parameters or default to '/' this.returnUrl =
	 * this.route.snapshot.queryParams['returnUrl'] || '/';
	 */
  }
 
  onSubmit(form) { 
	  console.log(form.value)
	  	this.submitted = true;
        // stop here if form is invalid
        if (form.invalid) {
            return;
        }
        this.loading = true;
        this.credentials=form.value.email+":"+form.value.password;
        this.authenticationService.login(this.credentials,form.value.type, "8999").then((res)=>{
        	this.responseData=res;
        	console.log("Response : ", this.responseData);
        	this.toastService.showSuccessToast("User Authenticated Successfully");
        	  this.authenticationService.authenticationState.subscribe(state => {
                if (state) {
                  this.router.navigate(['members/dashboard']);
                } else {
                  this.router.navigate(['login']);
                }
              });
    	}, (err)=>{
    		console.log("Response : ", err)
    		this.toastService.showErrorToast("Error logging in")
    	});
    }
  
  }
 
