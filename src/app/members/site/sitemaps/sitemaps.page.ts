import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';
import { Environment } from '@ionic-native/google-maps';
import { Geolocation  } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import {
	ToastController,
	Platform
} from '@ionic/angular';
import {
	GoogleMaps,
	GoogleMap,
	GoogleMapsEvent,
	Marker,
	GoogleMapsAnimation,
	MyLocation
  } from '@ionic-native/google-maps';
import { SiteService } from './../../../services/site.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from './../../../services/loading.service';
import { ToastService }  from './../../../services/toast.service';

  declare var google: { maps: { LatLng: new (arg0: any, arg1: any) => void; MapTypeId: { ROADMAP: any; }; Map: new (arg0: any, arg1: { center: any; zoom: number; mapTypeId: any; }) => void; }; };
@Component({
  selector: 'app-sitemaps',
  templateUrl: './sitemaps.page.html',
  styleUrls: ['./sitemaps.page.scss'],
})
export class SitemapsPage implements OnInit {
  
  location:any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  address:string;
  siteId = null;
  responseData:any;
  siteDetail:any;
  constructor(private platform: Platform,public toastCtrl: ToastController,
    public geolocation: Geolocation,private nativeGeocoder: NativeGeocoder,
    private siteService:SiteService,private authenticationService:AuthenticationService,
    private activatedRoute: ActivatedRoute,protected loading: LoadingService,
    private toastService:ToastService) { }

  ngOnInit() {
    this.platform.ready();
    
    this.siteId = this.activatedRoute.snapshot.paramMap.get('siteId');
		this.getSiteDetails(this.siteId);
  }
  loadMap() {
    Environment.setEnv({
      // api key for server
     // 'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBh35I-kABcLAn6w6ZVCKhF-xosOJN_hVY',

      // api key for local development
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBh35I-kABcLAn6w6ZVCKhF-xosOJN_hVY'
    });
   

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(this.siteDetail.latitude,this.siteDetail.longitude )
      let latLng = new google.maps.LatLng(this.siteDetail.latitude, this.siteDetail.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.getAddressFromCoords(this.siteDetail.latitude, this.siteDetail.longitude);
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      this.map.addListener('tilesloaded', () => {
        console.log('accuracy',this.map);
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });
 
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }
  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords "+lattitude+" "+longitude);
    console.log(this.siteDetail);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
 
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderReverseResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if(value.length>0)
          responseAddress.push(value);
 
        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value+", ";
        }
        this.address = this.address.slice(0, -2);
       
      })
      .catch((error: any) =>{ 
       // this.address = "Address Not Available!";
        this.address = this.siteDetail.fullAddress;
      });
 
  }
    async getSiteDetails(siteId:string) {
      await this.loading.presentLoading('Site Detail Check', 'Getting Site Details...');
		   this.authenticationService.getUser().then((res)=>{ 
			   console.log(res);
			   this.siteService.siteDetail(res.accessToken,res.username,siteId).then((res)=>{
					this.responseData=res;
					//this.loading.dismiss('Site Detail Check');
					if(this.responseData==null){
            this.toastService.showErrorToast("Unable to get Site information");
            this.loading.dismiss('Site Detail Check');
						}else{
              console.log("Response : ", this.responseData);
              this.loading.dismiss('Site Detail Check');
							if(this.responseData.statusCode==200){
								this.siteDetail=this.responseData.object;
                this.toastService.showSuccessToast("Site information displayed");
                if(this.siteDetail.longitude!=null && this.siteDetail.latitude!=null){
                  this.loadMap();
                }else{
                  this.toastService.showErrorToast("Unable to geographic location for the site");
                }
							}
						}
				  
				  	
			    }, (err)=>{
             console.log("Error : ", err)
             this.loading.dismiss('Site Detail Check');
				  		this.toastService.showErrorToast("Unable to get site information")
				 });
		    }, (err)=>{
			   console.log("Error : ", err)
			   this.loading.dismiss('Site Detail Check');
		  		this.toastService.showErrorToast("Unable to get site details")
		  	});
      
    }   
}  

