import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Observable, from } from 'rxjs';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Constants from './../constants/api.service';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {


  constructor(private http: Http) { }


   incidentsCount(accessToken,username){
	   return new Promise((resolve, reject) => {
		      let headers = new Headers();
	      this.http.get(Constants.BASE_URL+Constants.INCIDENTS_COUNT_API +"?access_token="+accessToken+"&user="+username)
	        .subscribe(res => {
	        	 resolve(res.json());
	        	 let responseObj =  res.json();
	        	 console.log(responseObj);
	        }, (err) => {
	          reject(err);
	        });
	    });
   }
   incidentList(accessToken,username, assignedTo){
	   return new Promise((resolve, reject) => {
		      let headers = new Headers();
	      this.http.get(Constants.BASE_URL+Constants.INCIDENT_LIST_API +"/"+assignedTo + "?access_token="+accessToken+"&user="+username)
	        .subscribe(res => {
	        	 resolve(res.json());
	        	 let responseObj =  res.json();
	        	 console.log(responseObj);
	        }, (err) => {
	          reject(err);
	        });
	    });
   }

   getIncidentDetail(accessToken: any, username: any, incidentNumber: any, spType:string) {
	return new Promise((resolve, reject) => {
		let headers = new Headers();
		this.http.get(Constants.BASE_URL+Constants.SELECTED_INCIDENT_API+"/"+incidentNumber+"/"+spType + "?access_token="+accessToken+"&user="+username)
		.subscribe(res => {
			resolve(res.json());
			let responseObj =  res.json();
			console.log(responseObj);
		}, (err) => {
			reject(err);
		});
	  });
   }
}
