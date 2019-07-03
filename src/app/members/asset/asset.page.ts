import { Component, OnInit } from '@angular/core';
import { AssetService }  from './../../services/asset.service';
import { AuthenticationService } from './../../services/authentication.service';
import { ToastService }  from './../../services/toast.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.page.html',
  styleUrls: ['./asset.page.scss'],
})
export class AssetPage implements OnInit {
    responseData:any;
	  assetList:any;
  constructor(private assetService:AssetService,
		  private authenticationService:AuthenticationService,
		  private toastService:ToastService) { }
  
	  ngOnInit() {
		   	  let accessToken="";
			   this.authenticationService.getUser().then((res)=>{ 
				   console.log(res);
				   this.assetService.assetList(res.accessToken,res.username).then((res)=>{
				        this.responseData=res;
						if(this.responseData==null){
							this.toastService.showErrorToast("No Assets available")	
						}else{
							console.log("Response : ", this.responseData);
							if(this.responseData.statusCode==200){
                this.assetList=this.responseData.object;
                this.toastService.showSuccessToast("Asset list displayed");
							}else{
              	this.toastService.showErrorToast("No Assets available");
					  	 }
						}
				    }, (err)=>{
						   console.log("Error : ", err)
					  		this.toastService.showErrorToast("Unable to get asset list")
					 });
			    }, (err)=>{
				   console.log("Error : ", err)
			  		this.toastService.showErrorToast("Unable to get user details")
			  	});
		   
	  }

}
