import { Component, OnInit } from '@angular/core';
import { SiteService }  from './../../../services/site.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { ToastService }  from './../../../services/toast.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  responseData:any;
  siteDetail:any;
  siteID: string;
  private sub: any;
  editable:boolean;
  iconValue="md-create";
  constructor(private siteService:SiteService,
    private authenticationService:AuthenticationService,
    private toastService:ToastService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
  
      this.siteID = this.route.snapshot.paramMap.get('siteId');
    this.editable=false;
      console.log(this.siteID);
    this.getSiteDetail();
    
  }

  getSiteDetail(){
    let accessToken="";
    this.authenticationService.getUser().then((res)=>{ 
      console.log(res);
      this.siteService.siteDetail(res.accessToken,res.username,this.siteID).then((res)=>{
           this.responseData=res;
         console.log("Response : ", this.responseData);
         if(this.responseData.statusCode==200){
           this.siteDetail=this.responseData.object;
         }
         this.toastService.showSuccessToast("Site detail displayed");
       }, (err)=>{
          console.log("Error : ", err)
           this.toastService.showErrorToast("Unable to get site detail")
      });
     }, (err)=>{
      console.log("Error : ", err)
       this.toastService.showErrorToast("Unable to get user details")
     });
 }

 editSiteDetail(iconValue){
  this.editable=true;
  if(iconValue=="md-create"){
    this.iconValue = "md-checkmark";
  }else{
    console.log(this.siteDetail);
    if(this.siteDetail.siteId!=null){
      this.updateSiteDetail();
    }
    this.iconValue = "md-create";
  }
  
 }
  updateSiteDetail() {
    let accessToken="";
    this.authenticationService.getUser().then((res)=>{ 
      console.log(res);
      this.siteService.updateSiteDetail(res.accessToken,res.username,this.siteDetail).then((res)=>{
           this.responseData=res;
         console.log("Response : ", this.responseData);
         if(this.responseData.statusCode==200){
           this.siteDetail=this.responseData.object;
         }
         this.toastService.showSuccessToast("Site detail updated");
       }, (err)=>{
          console.log("Error : ", err)
           this.toastService.showErrorToast("Unable to update site detail")
      });
     }, (err)=>{
      console.log("Error : ", err)
       this.toastService.showErrorToast("Unable to get user details")
     });
   
  }

  siteMapPage(siteId:string){
    this.router.navigateByUrl('members/site/sitemaps/'+siteId);
    }
    siteTimes(siteId:string){
      this.router.navigateByUrl('members/site/operations/'+siteId);
    }
    siteLicense(siteId:string){
      this.router.navigateByUrl('members/site/licenses/'+siteId);
    }
    siteSubmeter(siteId:string){
      this.router.navigateByUrl('members/site/submeter/'+siteId);
    }
  }


