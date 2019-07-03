import { Component, OnInit } from '@angular/core';
import { IncidentService }  from './../../services/incident.service';
import { AuthenticationService } from './../../services/authentication.service';
import { ToastService }  from './../../services/toast.service';
@Component({
  selector: 'app-incident',
  templateUrl: './incident.page.html',
  styleUrls: ['./incident.page.scss'],
})
export class IncidentPage implements OnInit {
	  responseData:any;
	  incidentList:any;
  constructor(private incidentService:IncidentService,
		  private authenticationService:AuthenticationService,
		  private toastService:ToastService) { }
  
	  ngOnInit() {
		   	   let accessToken="";
			   this.authenticationService.getUser().then((res)=>{ 
				   console.log(res);
				   this.incidentService.incidentList(res.accessToken,res.username).then((res)=>{
				        this.responseData=res;
						if(this.responseData==null){
							this.toastService.showErrorToast("No incidents available")	
						}else{
							console.log("Response : ", this.responseData);
							if(this.responseData.statusCode==200){
								this.incidentList=this.responseData.object;
							}
						}
					  	//this.toastService.showSuccessToast("Incident list displayed");
				    }, (err)=>{
						   console.log("Error : ", err)
					  		//this.toastService.showErrorToast("Unable to get incident list")
					 });
			    }, (err)=>{
				   console.log("Error : ", err)
			  		this.toastService.showErrorToast("Unable to get user details")
			  	});
		   
	  }
}
