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
export class SiteService {

	 constructor(private http: Http) { }
	  
	   siteList(accessToken,username){
		   return new Promise((resolve, reject) => {
			  let headers = new Headers();
		      this.http.get(Constants.BASE_URL+Constants.SITE_LIST_API + "?access_token="+accessToken+"&user="+username)
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
