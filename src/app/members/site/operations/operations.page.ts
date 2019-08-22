import { Component, OnInit } from '@angular/core';
import { SiteService }  from './../../../services/site.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { ToastService }  from './../../../services/toast.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.page.html',
  styleUrls: ['./operations.page.scss'],
})
export class OperationsPage implements OnInit {
    siteID: string;
    responseData:any;
    salesTimeList:any;
    deliveryTimeList:any;

    public columns : any;

  constructor(private siteService:SiteService,
    private authenticationService:AuthenticationService,
    private toastService:ToastService,
    private router: Router,
    private route:ActivatedRoute) { 

    }

  ngOnInit() {
    this.siteID = this.route.snapshot.paramMap.get('siteId');
    this.getSalesOperationTime();
    this.getDeliveryOperationTime();
  }
  getSalesOperationTime(){
    let accessToken="";
    this.authenticationService.getUser().then((res)=>{ 
      console.log(res);
      this.siteService.siteSalesTime(res.accessToken,res.username,this.siteID).then((res)=>{
           this.responseData=res;
         console.log("Response : ", this.responseData);
         if(this.responseData.statusCode==200){
           this.salesTimeList=this.responseData.object;
          
         
         }
         this.toastService.showSuccessToast("Sales Time displayed");
       }, (err)=>{
          console.log("Error : ", err)
           this.toastService.showErrorToast("Unable to get site detail Sales Time")
      });
     }, (err)=>{
      console.log("Error : ", err)
       this.toastService.showErrorToast("Unable to get user details")
     });
  }

  getDeliveryOperationTime(){
    let accessToken="";
    this.authenticationService.getUser().then((res)=>{ 
      console.log(res);
      this.siteService.siteDeliveryTime(res.accessToken,res.username,this.siteID).then((res)=>{
           this.responseData=res;
         console.log("Response : ", this.responseData);
         if(this.responseData.statusCode==200){
           this.deliveryTimeList=this.responseData.object;
         }
         this.toastService.showSuccessToast("Delivery Times displayed");
       }, (err)=>{
          console.log("Error : ", err)
           this.toastService.showErrorToast("Unable to get site detail Delivery Times");
      });
     }, (err)=>{
      console.log("Error : ", err)
       this.toastService.showErrorToast("Unable to get user details")
     });
  }
}
