import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncidentService }  from './../../../services/incident.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { ToastService }  from './../../../services/toast.service';
import { LoadingService } from './../../../services/loading.service';
import { TooltipsModule } from 'ionic-tooltips';

import {
	ToastController,
	Platform
} from '@ionic/angular';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  incidentNumber:string;
  responseData:any;
  incidentDetail:{
	  ticketId:null,
	  ticketNumber:null,
	  siteName:null,
	  ticketTitle:null,
	  description:null,
	  assignedSP:null,
	  categoryName:null,
	  priority:null,
	  sla:null,
	  status:null,
	  issueStartTime:null,
	  createdOn:null

  };
  serviceProviderType:string;
  constructor(private platform: Platform,
    private activatedRoute: ActivatedRoute,
    private incidentService:IncidentService,
    private authenticationService:AuthenticationService,
    private toastService:ToastService,
    protected loading: LoadingService) { 

	}

  ngOnInit() {
    this.platform.ready();
	this.incidentNumber = this.activatedRoute.snapshot.paramMap.get('incidentNumber');
	this.serviceProviderType = this.activatedRoute.snapshot.paramMap.get('spType');
    this.getIncidentDetails(this.incidentNumber,this.serviceProviderType);
  }
  async getIncidentDetails(incidentNumber: string, spType:string) {
    await this.loading.presentLoading('IncidentInformation', 'Getting Incident Detail...');
		this.authenticationService.getUser().then( (res)=>{ 
      		console.log(res);
     
			this.incidentService.getIncidentDetail(res.accessToken,res.username,incidentNumber, spType).then((res)=>{
				 this.responseData=res;
				
				 if(this.responseData==null){
					 this.loading.dismiss('IncidentInformation');
					 this.toastService.showErrorToast("No incident available")	
				 }else{
					 console.log("Response : ", this.responseData);
					 this.loading.dismiss('IncidentInformation');
					 if(this.responseData.statusCode==200){
						 
						 this.incidentDetail=this.responseData.object;
						 this.incidentDetail.siteName=this.responseData.object.siteName;
						 console.log( this.incidentDetail);
					}
				 }
				   //this.toastService.showSuccessToast("Incident list displayed");
			 }, (err)=>{
       				 this.loading.dismiss('IncidentInformation');
					console.log("Error : ", err)
				
					   //this.toastService.showErrorToast("Unable to get incident list")
			  });
		 }, (err)=>{
			console.log("Error : ", err)
			this.loading.dismiss('IncidentInformation');
			   this.toastService.showErrorToast("Unable to get user details")
		   });
	
  }

}
