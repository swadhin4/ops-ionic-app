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

	   siteDetail(accessToken,username,siteId){
		return new Promise((resolve, reject) => {
			let headers = new Headers();
			headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
		   this.http.get(Constants.BASE_URL+Constants.SELECTED_SITE_API+"/"+siteId + "?access_token="+accessToken+"&user="+username)
			 .subscribe(res => {
				  resolve(res.json());
				  let responseObj =  res.json();
				  console.log(responseObj);
			 }, (err) => {
			   reject(err);
			 });
		 });
	   }

	   siteSalesTime(accessToken,username,siteId){
		return new Promise((resolve, reject) => {
			let headers = new Headers();
			headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
		   this.http.get(Constants.BASE_URL+Constants.SELECTED_SITE_SALES_TIMES_API+"/"+siteId + "?access_token="+accessToken+"&user="+username)
			 .subscribe(res => {
				  resolve(res.json());
				  let responseObj =  res.json();
				  console.log(responseObj);
			 }, (err) => {
			   reject(err);
			 });
		 });
	   }

	   siteDeliveryTime(accessToken,username,siteId){
		return new Promise((resolve, reject) => {
			let headers = new Headers();
			headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
		   this.http.get(Constants.BASE_URL+Constants.SELECTED_SITE_DELIVERY_TIMES_API+"/"+siteId + "?access_token="+accessToken+"&user="+username)
			 .subscribe(res => {
				  resolve(res.json());
				  let responseObj =  res.json();
				  console.log(responseObj);
			 }, (err) => {
			   reject(err);
			 });
		 });
	   }

	   siteLicense(accessToken,username,siteId){
		return new Promise((resolve, reject) => {
			let headers = new Headers();
			headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
		   this.http.get(Constants.BASE_URL+Constants.SELECTED_SITE_LICENSE_API+"/"+siteId + "?access_token="+accessToken+"&user="+username)
			 .subscribe(res => {
				  resolve(res.json());
				  let responseObj =  res.json();
				  console.log(responseObj);
			 }, (err) => {
			   reject(err);
			 });
		 });
	   }

	   siteSubmeters(accessToken,username,siteId){
		return new Promise((resolve, reject) => {
			let headers = new Headers();
			headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
		   this.http.get(Constants.BASE_URL+Constants.SELECTED_SITE_SUBMETER_API+"/"+siteId + "?access_token="+accessToken+"&user="+username)
			 .subscribe(res => {
				  resolve(res.json());
				  let responseObj =  res.json();
				  console.log(responseObj);
			 }, (err) => {
			   reject(err);
			 });
		 });
	   }

	   updateSiteDetail(accessToken: any, username: any, siteDetail: any) {
		return new Promise((resolve, reject) => {
			let headers = new Headers();
			headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
		   this.http.post(Constants.BASE_URL+Constants.UPDATE_SITE_DETAIL_API +"/"+siteDetail.siteId + "?access_token="+accessToken+"&user="+username, siteDetail)
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