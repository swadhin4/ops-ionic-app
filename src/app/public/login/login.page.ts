import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ToastService }  from './../../services/toast.service';
import { Device } from '@ionic-native/device/ngx';
import { ActionSheetController } from '@ionic/angular';
import { LoadingService } from './../../services/loading.service';
const TOKEN_KEY = 'auth-token';
const LOGGEDIN_USER = 'null';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    
    submitted = false;
    returnUrl: string;
    responseData:any;
    credentials:string;
   
  constructor(
   private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
  private toastService: ToastService,
  private device: Device,public actionSheetController: ActionSheetController,
  protected loading: LoadingService) { }
 
  ngOnInit() {
 /*
	 * this.loginForm = this.formBuilder.group({ username: ['',
	 * Validators.required], password: ['', Validators.required] }); // reset
	 * login status this.authenticationService.logout(); // get return url from
	 * route parameters or default to '/' this.returnUrl =
	 * this.route.snapshot.queryParams['returnUrl'] || '/';
	 */
 // console.log('Device UUID is: ' + this.device.uuid);
  //this.toastService.showSuccessToast(this.device.uuid);
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Device Information',
      buttons: [{
        text: 'Model :' +  this.device.model ,
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Model clicked');
        }
      }, {
        text: 'Platform :' + this.device.platform,
        icon: 'share',
        handler: () => {
          console.log('Platform clicked');
        }
      }, {
        text: 'Serial :' + this.device.serial,
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Serial clicked');
        }
      }, {
        text: 'UID :' + this.device.uuid,
        icon: 'heart',
        handler: () => {
          console.log('UID clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async onSubmit(form) { 
	  console.log(form.value)
      this.submitted = true;
       await this.loading.presentLoading('Login Validation', 'Validating User...');
        // stop here if form is invalid
        if (form.invalid) {
            return;
        }
        this.credentials=form.value.email+":"+form.value.password;
        this.authenticationService.login(this.credentials,'abc','8999').then(res => {
         	this.responseData=res;
          console.log("Response : ", this.responseData);
          if(this.responseData!=null && this.responseData.statusCode==200){
          this.toastService.showSuccessToast("User Authenticated Successfully");
          this.loading.dismiss('Login Validation');
        	  this.authenticationService.authenticationState.subscribe(state => {
               if (state) {
                   this.router.navigate(['members/dashboard']);
                } else {
                  this.router.navigate(['login']);
                }
              });
            }
    	}, (err)=>{
        console.log("Response : ", err)
        this.loading.dismiss('Login Validation');
       
    		this.toastService.showErrorToast("Error logging in")
    	});
    }
  
  }
 
