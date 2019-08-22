import { Component, OnInit } from '@angular/core';
import { SiteService }  from './../../../services/site.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { ToastService }  from './../../../services/toast.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-submeter',
  templateUrl: './submeter.page.html',
  styleUrls: ['./submeter.page.scss'],
})
export class SubmeterPage implements OnInit {
  responseData:any;
  siteSubmeters:any;
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
    this.getSiteSubmeter();
  }

  getSiteSubmeter(){
    let accessToken="";
    this.authenticationService.getUser().then((res)=>{ 
      console.log(res);
      this.siteService.siteSubmeters(res.accessToken,res.username,this.siteID).then((res)=>{
           this.responseData=res;
         console.log("Response : ", this.responseData);
         if(this.responseData.statusCode==200){
           this.siteSubmeters=this.responseData.object;
         }
         this.toastService.showSuccessToast("Site Submeter displayed");
       }, (err)=>{
          console.log("Error : ", err)
           this.toastService.showErrorToast("Unable to get site submeter")
      });
     }, (err)=>{
      console.log("Error : ", err)
       this.toastService.showErrorToast("Unable to get user details")
     });
 }

}
