import { Component, OnInit } from '@angular/core';
import { SiteService }  from './../../services/site.service';
import { AuthenticationService } from './../../services/authentication.service';
import { ToastService }  from './../../services/toast.service';
@Component({
  selector: 'app-site',
  templateUrl: './site.page.html',
  styleUrls: ['./site.page.scss'],
})
export class SitePage implements OnInit {
	responseData:any;
	siteList:any;
    constructor(private siteService:SiteService,
		  private authenticationService:AuthenticationService,
		  private toastService:ToastService) { }

	  ngOnInit() {
		  let accessToken="";
		   this.authenticationService.getUser().then((res)=>{ 
			   console.log(res);
			   this.siteService.siteList(res.accessToken,res.username).then((res)=>{
			        this.responseData=res;
				  	console.log("Response : ", this.responseData);
				  	if(this.responseData.statusCode==200){
				  		this.siteList=this.responseData.object;
				  	}
				  	this.toastService.showSuccessToast("Site list displayed");
			    }, (err)=>{
					   console.log("Error : ", err)
				  		this.toastService.showErrorToast("Unable to get site list")
				 });
		    }, (err)=>{
			   console.log("Error : ", err)
		  		this.toastService.showErrorToast("Unable to get user details")
		  	});
	  }

}
