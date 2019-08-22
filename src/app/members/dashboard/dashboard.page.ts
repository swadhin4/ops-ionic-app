import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { ToastService }  from './../../services/toast.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder,NativeGeocoderOptions,NativeGeocoderReverseResult } from '@ionic-native/native-geocoder/ngx';
import { AlertController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy:number;
  geoAddress: string;
  loggedInUser:any;
  watchLocationUpdates:any; 
  loading:any;
  isWatching:boolean;
   //Geocoder configuration
   geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor( 
		  private authenticationService: AuthenticationService, 
		  private toastService: ToastService,
		  private router: Router, private geolocation: Geolocation,
      private nativeGeocoder: NativeGeocoder,
      private device: Device,public alertController: AlertController) { }

  ngOnInit() {
    this.loggedInUser = this.authenticationService.getUser();
  //  this. getGeolocation();
  }
  	logout() {
  		   this.authenticationService.logout();
         this.toastService.showSuccessToast("User Successfully logged out");
         this.router.navigate(['login']);
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
    
    assetPage(){
      this.authenticationService.authenticationState.subscribe(state => {
            if (state) {
              this.router.navigate(['members/asset']);
            } else {
              this.router.navigate(['login']);
            }
          });
     }
     serviceProviderPage(){
      this.authenticationService.authenticationState.subscribe(state => {
            if (state) {
              this.router.navigate(['members/serviceprovider']);
            } else {
              this.router.navigate(['login']);
            }
          });
     }

        //Get current coordinates of device
    getGeolocation(){
      this.geolocation.getCurrentPosition().then((resp) => {
        this.geoLatitude = resp.coords.latitude;
        this.geoLongitude = resp.coords.longitude; 
        this.geoAccuracy = resp.coords.accuracy; 
        this.getGeoencoder(this.geoLatitude,this.geoLongitude);
       }).catch((error) => {
         alert('Error getting location'+ JSON.stringify(error));
       });
    }
  
    //geocoder method to fetch address from coordinates passed as arguments
    getGeoencoder(latitude,longitude){
      this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderReverseResult[]) => {
        this.geoAddress = this.generateAddress(result[0]);
      })
      .catch((error: any) => {
        alert('Error getting location'+ JSON.stringify(error));
      });
    }
  
    //Return Comma saperated address
    generateAddress(addressObj){
        let obj = [];
        let address = "";
        for (let key in addressObj) {
          obj.push(addressObj[key]);
        }
        obj.reverse();
        for (let val in obj) {
          if(obj[val].length)
          address += obj[val]+', ';
        }
      return address.slice(0, -2);
    }
  
  
    //Start location update watch
    watchLocation(){
      this.isWatching = true;
      this.watchLocationUpdates = this.geolocation.watchPosition();
      this.watchLocationUpdates.subscribe((resp) => {
        this.geoLatitude = resp.coords.latitude;
        this.geoLongitude = resp.coords.longitude; 
        this.getGeoencoder(this.geoLatitude,this.geoLongitude);
      });
    }
  
    //Stop location update watch
    stopLocationWatch(){
      this.isWatching = false;
      this.watchLocationUpdates.unsubscribe();
    }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Device Information',
        message: 'Model :' +  this.device.model + ',Platform :' + this.device.platform,
        buttons: ['OK']
      });
  
      await alert.present();
    }
}
