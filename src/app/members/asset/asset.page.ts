import { Component, OnInit } from '@angular/core';
import { AssetService }  from './../../services/asset.service';
import { AuthenticationService } from './../../services/authentication.service';
import { ToastService }  from './../../services/toast.service';
import { LoadingService } from './../../services/loading.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-asset',
  templateUrl: './asset.page.html',
  styleUrls: ['./asset.page.scss'],
})
export class AssetPage implements OnInit {
    responseData:any;
	assetList:any;
	  assetType:any;
	  eCount=0;
	  sCount=0;
  constructor(private assetService:AssetService,
		  private authenticationService:AuthenticationService,
		  private toastService:ToastService,
		  protected loading: LoadingService,
		  private router: Router) { }
  
	  async ngOnInit() {
		this.getAssetList('E');
	  }
	
	  async getAssetList(assetType:string){
		if(assetType=='E'){
			this.assetType="Equipments";
		  }else{
			this.assetType="Services";
		  }
		  let accessToken="";
		  await this.loading.presentLoading('AssetValidation', 'Getting Asset List...');
		this.authenticationService.getUser().then((res)=>{ 
			console.log(res);
			this.assetService.assetList(res.accessToken,res.username,assetType).then((res)=>{
				 this.responseData=res;
				 this.loading.dismiss('AssetValidation');
				 if(this.responseData==null){
					 this.toastService.showErrorToast("No Assets available")	
				 }else{
					 console.log("Response : ", this.responseData);
					 if(this.responseData.statusCode==200){
						 this.loading.dismiss('AssetValidation');
						this.assetList=this.responseData.object;
						this.toastService.showSuccessToast("Asset list displayed");
		 
					 }else{
					   this.toastService.showErrorToast("No Assets available");
					   this.loading.dismiss('AssetValidation');
					}
				 }
			 }, (err)=>{
					console.log("Error : ", err)
					this.loading.dismiss('AssetValidation');
					   this.toastService.showErrorToast("Unable to get asset list")
					   this.assetList=null;
			  });
		 }, (err)=>{
			console.log("Error : ", err)
			this.loading.dismiss('AssetValidation');
			   this.toastService.showErrorToast("Unable to get user details")
		   });
	
	  }

	  openAssetDetail(assetID,assetType){
		this.authenticationService.authenticationState.subscribe(state => {
			console.log(assetType);
			console.log(state);
			if (state) {
				if(assetType == "S")
					this.router.navigate(['members/asset/detail',assetID]);
				else if (assetType == "E")
					this.router.navigate(['members/asset/detail/equipment',assetID]);
			} else {
				this.router.navigate(['login']);
			}
		});

	}

}
