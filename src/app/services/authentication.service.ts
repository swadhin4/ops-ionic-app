import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Observable, from } from 'rxjs';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Constants from './../constants/api.service';
const TOKEN_KEY = 'auth-token';
const LOGGEDIN_USER = 'null';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  authenticationState = new BehaviorSubject(false);
  userdetails={
		  username:null,
  		  role:null,	
  		  firstName:null,
  		  lastName:null,
  		  accessToken:null
  }; 
  constructor(private storage: Storage, private plt: Platform,private http: Http) { 
    this.plt.ready().then(() => {
      this.checkToken();
    });
    console.log("Hello Authservice Provider"); 
  }
  getUser(){
		return  this.storage.get(LOGGEDIN_USER);
  }
  getToken(){
		return  this.storage.get(TOKEN_KEY) ;
  }
  checkToken() {
	return  this.storage.get(TOKEN_KEY).then(res => {
		      if (res) {
		        this.authenticationState.next(true);
		        console.log(this.authenticationState);
		      }
		})
  }
 
  login(credentials, type, deviceId){
	  return new Promise((resolve, reject) => {
	      let headers = new Headers();
	      this.http.get(Constants.BASE_URL+Constants.AUTH_API + "?userdetails="+credentials+"&loginType="+type+"&loginDevice="+deviceId)
	        .subscribe(res => {
	        	 resolve(res.json());
	        	 let responseObj =  res.json();
	        	 console.log(responseObj);
	        	 if(responseObj.statusCode==200){
	        		  this.userdetails.username=responseObj.user.username;
	        		  this.userdetails.role=responseObj.user.roleDesc;
	        		  this.userdetails.firstName=responseObj.user.firstName;
	        		  this.userdetails.lastName=responseObj.user.lastName;
	        		  this.userdetails.accessToken=responseObj.object.access_token;
	        		  this.storage.set(LOGGEDIN_USER, this.userdetails);
	        		  this.storage.set(TOKEN_KEY, 'Bearer '+responseObj.object.access_token).then(() => {
	        		      this.authenticationState.next(true);
	        		  });
	        	 }
	        }, (err) => {
	          reject(err);
	        });
	    });
  }
 
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  isAuthenticated() {
	  return this.authenticationState.value;
  }
 
}