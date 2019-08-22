import { Component, OnInit } from '@angular/core';
import { IncidentService }  from './../../services/incident.service';
import { AuthenticationService } from './../../services/authentication.service';
import { ToastService }  from './../../services/toast.service';
import { LoadingService } from './../../services/loading.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-incident',
  templateUrl: './incident.page.html',
  styleUrls: ['./incident.page.scss'],
})
export class IncidentPage implements OnInit {
	  responseData:any;
	  incidentList:any;
	  incidentDetail:any;
	  spType:any;
	  extCount=0;
	  rspCount=0;

	
  constructor(private incidentService:IncidentService,
		  private authenticationService:AuthenticationService,
		  private toastService:ToastService,
		  protected loading: LoadingService,private router: Router) { }
  
	   ngOnInit() {
		 this.getIncidentList('EXTSP');
		 this.getIncidentCounts(); 
		}
		async getIncidentCounts() {
			this.authenticationService.getUser().then((res)=>{ 
				console.log(res);
				this.incidentService.incidentsCount(res.accessToken,res.username).then((res)=>{
					 this.responseData=res;
					 
					 if(this.responseData==null){
						this.extCount=0;
						this.rspCount=0
					 }else{
						 console.log("Response : ", this.responseData);
						 this.loading.dismiss('Incident Validation');
						 if(this.responseData.statusCode==200){
							 var counts = this.responseData.object.split(",");
							this.extCount=counts[0];
							this.rspCount=counts[1];
						 }
					 }
					   //this.toastService.showSuccessToast("Incident list displayed");
				 }, (err)=>{
						console.log("Error : ", err)
						this.loading.dismiss('Incident Validation');
						   //this.toastService.showErrorToast("Unable to get incident list")
				  });
			 }, (err)=>{
				console.log("Error : ", err)
				this.loading.dismiss('Incident Validation');
				   this.toastService.showErrorToast("Unable to get user details")
			   });
		}
	  async getIncidentList(spType){
		  if(spType=='EXTSP'){
			this.spType="External Service Provider";
		  }else{
			this.spType="Registered Service Provider";
		  }
		
		let accessToken="";
		await this.loading.presentLoading('Incident Validation', 'Getting Incident List...');
			 this.authenticationService.getUser().then((res)=>{ 
		 console.log(res);
		 this.incidentService.incidentList(res.accessToken,res.username,spType).then((res)=>{
			  this.responseData=res;
			  //this.loading.dismiss('Incident Validation');
			  if(this.responseData==null){
				  this.loading.dismiss('Incident Validation');
				  this.toastService.showErrorToast("No incidents available")	
			  }else{
				  console.log("Response : ", this.responseData);
				  this.loading.dismiss('Incident Validation');
				  if(this.responseData.statusCode==200){
					  this.incidentList=this.responseData.object;
				  }
			  }
				//this.toastService.showSuccessToast("Incident list displayed");
		  }, (err)=>{
				 console.log("Error : ", err)
				 this.loading.dismiss('Incident Validation');
					//this.toastService.showErrorToast("Unable to get incident list")
		   });
	  }, (err)=>{
		 console.log("Error : ", err)
		 this.loading.dismiss('Incident Validation');
			this.toastService.showErrorToast("Unable to get user details")
		});
 
	   }

	 	getIncidentDetail(incidentNumber:string, spType:string){
			this.loading.dismiss('Incident Validation');
		  this.router.navigateByUrl('members/incident/detail/'+incidentNumber+"/"+spType);
	    }
}
