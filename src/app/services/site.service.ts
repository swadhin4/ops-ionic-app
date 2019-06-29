import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Observable, from } from 'rxjs';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let siteListAPI = "http://localhost:8484/ops/api/site/v1/list";

@Injectable({
  providedIn: 'root'
})
export class SiteService {

	 constructor(private http: Http) { }
	  
	   siteList(accessToken,username){
		   return new Promise((resolve, reject) => {
			  let headers = new Headers();
		      this.http.get(siteListAPI + "?access_token="+accessToken+"&user="+username)
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
