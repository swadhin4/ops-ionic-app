import { Component, OnInit } from '@angular/core';
import { SiteService }  from './../../services/site.service';
import { AuthenticationService } from './../../services/authentication.service';
import { ToastService }  from './../../services/toast.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from './../../services/loading.service';
@Component({
  selector: 'app-site',
  templateUrl: './site.page.html',
  styleUrls: ['./site.page.scss'],
})
export class SitePage implements OnInit {
	responseData:any;
	siteList:any;
	
  address:string;
    constructor(private siteService:SiteService,
		  private authenticationService:AuthenticationService,
		  private toastService:ToastService,
		  private router: Router, protected loading: LoadingService) { }

	  async ngOnInit() {
	
		  let accessToken="";
		  await this.loading.presentLoading('Site Page Validation', 'Getting Site List...');
		   this.authenticationService.getUser().then((res)=>{ 
			   console.log(res);
			   this.siteService.siteList(res.accessToken,res.username).then((res)=>{
					this.responseData=res;
				//	this.loading.dismiss('Site Page Validation');
					if(this.responseData==null){
							this.toastService.showErrorToast("No Sites available")	
							this.loading.dismiss('Site Page Validation');
						}else{
							console.log("Response : ", this.responseData);
							this.loading.dismiss('Site Page Validation');
							if(this.responseData.statusCode==200){
								this.siteList=this.responseData.object;
								this.toastService.showSuccessToast("Site list displayed");
							}
						
						}
				  
				  	
			    }, (err)=>{
					   console.log("Error : ", err)
					   this.loading.dismiss('Site Page Validation');
				  		this.toastService.showErrorToast("Unable to get site list")
				 });
		    }, (err)=>{
			   console.log("Error : ", err)
			   this.loading.dismiss('Site Page Validation');
		  		this.toastService.showErrorToast("Unable to get user details")
		  	});
	  }
	 
	  openSiteDetail(siteID){
		this.authenticationService.authenticationState.subscribe(state => {
			if (state) {
				this.router.navigate(['members/site/detail',siteID]);
			} else {
				this.router.navigate(['login']);
			}
		});

	}
	 
	}

