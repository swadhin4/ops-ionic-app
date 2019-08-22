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
export class AssetService {

  constructor(private http: Http) { }
  
   assetList(accessToken,username, assetType){
	   return new Promise((resolve, reject) => {
		      let headers = new Headers();
	      this.http.get(Constants.BASE_URL+Constants.ASSET_LIST_API + "/" + assetType + "?access_token="+accessToken+"&user="+username)
	        .subscribe(res => {
	        	 resolve(res.json());
	        	 let responseObj =  res.json();
	        	 console.log(responseObj);
	        }, (err) => {
	          reject(err);
	        });
	    });
   }

   assetDetail(accessToken,username,assetId){
	return new Promise((resolve, reject) => {
		let headers = new Headers();
		headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
	   this.http.get(Constants.BASE_URL+Constants.SELECTED_ASSET_API+"/"+assetId + "?access_token="+accessToken+"&user="+username)
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
