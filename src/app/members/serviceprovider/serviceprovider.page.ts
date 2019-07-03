import { Component, OnInit } from '@angular/core';
import { ServiceproviderService }  from './../../services/serviceprovider.service';
import { AuthenticationService } from './../../services/authentication.service';
import { ToastService }  from './../../services/toast.service';
@Component({
  selector: 'app-serviceprovider',
  templateUrl: './serviceprovider.page.html',
  styleUrls: ['./serviceprovider.page.scss'],
})
export class ServiceproviderPage implements OnInit {
  responseData:any;
  serviceProviderList:any;
  constructor( private serviceProviderService:ServiceproviderService,
     private authenticationService:AuthenticationService,
     private toastService:ToastService) { }

  ngOnInit() {
    let accessToken="";
			   this.authenticationService.getUser().then((res)=>{ 
				   console.log(res);
				   this.serviceProviderService.serviceProviderList(res.accessToken,res.username,"EXTSP").then((res)=>{
				        this.responseData=res;
						if(this.responseData==null){
							this.toastService.showErrorToast("No Assets available")	
						}else{
							console.log("Response : ", this.responseData);
							if(this.responseData.statusCode==200){
                this.serviceProviderList=this.responseData.object;
                this.toastService.showSuccessToast("SP List displayed");
							}else{
              	this.toastService.showErrorToast("No SP  available");
					  	 }
						}
				    }, (err)=>{
						   console.log("Error : ", err)
					  		this.toastService.showErrorToast("Unable to get SP list")
					 });
			    }, (err)=>{
				   console.log("Error : ", err)
			  		this.toastService.showErrorToast("Unable to get user details")
			  	});
		   
  }

}
