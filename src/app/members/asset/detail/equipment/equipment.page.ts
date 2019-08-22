import { Component, OnInit } from '@angular/core';
import { AssetService }  from './../../../../services/asset.service';
import { AuthenticationService } from './../../../../services/authentication.service';
import { ToastService }  from './../../../../services/toast.service';
import { LoadingService } from './../../../../services/loading.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.page.html',
  styleUrls: ['./equipment.page.scss'],
})
export class EquipmentPage implements OnInit {
  responseData:any;
   assetID: string;
  private sub: any;  
  isDisabled:boolean;
  assetDetails:any;
  constructor(private assetService:AssetService,
    private authenticationService:AuthenticationService,
    private toastService:ToastService,
    protected loading: LoadingService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.assetID = this.route.snapshot.paramMap.get('assetId');
    
    this.isDisabled = true;
      console.log(this.assetID);
      console.log(this.isDisabled);
      this.getAssetDetail();
  }


  editAsset(){
    this.isDisabled = false;
    console.log(this.assetID);

  }

 async getAssetDetail(){
  await this.loading.presentLoading('AssetDetailInformation', 'Getting Equipment Detail...');
    this.authenticationService.getUser().then((res)=>{ 
      console.log(res);
      this.assetService.assetDetail(res.accessToken,res.username,this.assetID).then((res)=>{
       this.responseData=res;
       this.loading.dismiss('AssetDetailInformation');
       if(this.responseData==null){
         this.toastService.showErrorToast("No Assets available")	
       }else{
         console.log("Response : ", this.responseData);
         if(this.responseData.statusCode==200){
           this.loading.dismiss('AssetDetailInformation');
           this.assetDetails=this.responseData.object;
   this.toastService.showSuccessToast("Asset detail displayed");
   
         }else{
           this.toastService.showErrorToast("No Assets available");
           this.loading.dismiss('AssetDetailInformation');
          }
       }
       }, (err)=>{
          console.log("Error : ", err)
          this.loading.dismiss('AssetDetailInformation');
           this.toastService.showErrorToast("Unable to get asset details")
      });
     }, (err)=>{
      console.log("Error : ", err)
      this.loading.dismiss('AssetValidation');
       this.toastService.showErrorToast("Unable to get user details")
     });
  }

}
