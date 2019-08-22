import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Device } from '@ionic-native/device/ngx';
import { Geolocation  } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    HttpModule,
    TooltipsModule.forRoot()
 

   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    Geolocation ,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}