import { Component, OnInit } from '@angular/core';
import { AssetService }  from './../../../services/asset.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { ToastService }  from './../../../services/toast.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from './../../../services/loading.service';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  responseData:any;
  assetDetail:{};
  assetID: string;
  private sub: any;
  editable:boolean;
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
    this.editable=false;
    this.isDisabled = true;
      console.log(this.assetID);
      console.log(this.isDisabled);
    this.getAssetDetail();
  }

  editAsset(){
    this.isDisabled = false;
    console.log(this.assetID);

  }
  getAssetDetail(){
    this.authenticationService.getUser().then((res)=>{ 
      console.log(res);
      this.assetService.assetDetail(res.accessToken,res.username,this.assetID).then((res)=>{
       this.responseData=res;
       this.loading.dismiss('AssetValidation');
       if(this.responseData==null){
         this.toastService.showErrorToast("No Assets available")	
       }else{
         console.log("Response : ", this.responseData);
         if(this.responseData.statusCode==200){
           this.loading.dismiss('AssetValidation');
           this.assetDetails=this.responseData.object;
   this.toastService.showSuccessToast("Asset detail displayed");
   
         }else{
           this.toastService.showErrorToast("No Assets available");
           this.loading.dismiss('AssetValidation');
          }
       }
       }, (err)=>{
          console.log("Error : ", err)
          this.loading.dismiss('AssetValidation');
           this.toastService.showErrorToast("Unable to get asset details")
      });
     }, (err)=>{
      console.log("Error : ", err)
      this.loading.dismiss('AssetValidation');
       this.toastService.showErrorToast("Unable to get user details")
     });
  }

}
