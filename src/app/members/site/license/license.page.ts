import { Component, OnInit } from '@angular/core';
import { SiteService }  from './../../../services/site.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { ToastService }  from './../../../services/toast.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-license',
  templateUrl: './license.page.html',
  styleUrls: ['./license.page.scss'],
})
export class LicensePage implements OnInit {
  responseData:any;
  siteLicenses:any;
  siteID: string;
  private sub: any;
  constructor(private siteService:SiteService,
    private authenticationService:AuthenticationService,
    private toastService:ToastService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.siteID = this.route.snapshot.paramMap.get('siteId');
    
    console.log(this.siteID);
    this.getSiteLicense();
  }

  getSiteLicense(){
    let accessToken="";
    this.authenticationService.getUser().then((res)=>{ 
      console.log(res);
      this.siteService.siteLicense(res.accessToken,res.username,this.siteID).then((res)=>{
           this.responseData=res;
         console.log("Response : ", this.responseData);
         if(this.responseData.statusCode==200){
           this.siteLicenses=this.responseData.object;
         }
         this.toastService.showSuccessToast("Site License displayed");
       }, (err)=>{
          console.log("Error : ", err)
           this.toastService.showErrorToast("Unable to get site license")
      });
     }, (err)=>{
      console.log("Error : ", err)
       this.toastService.showErrorToast("Unable to get user details")
     });
 }
}
