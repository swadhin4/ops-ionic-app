import { Injectable } from '@angular/core';
import { ToastController  } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

    constructor(public toastCtrl: ToastController){
    	/*let toast = this.toastCtrl.create({
    	    message: 'Wrong password, holmes.',
    	    duration: 3000,
    	    position: 'top'
    	});
    	toast.present();*/
    	
    }

   /* presentToast(text:string):void{
        let toastData = {
            message: text,
            duration: 3000,
            position: 'top'
        }

        this.showToast(toastData);
    }

    presentClosableToast(text:string):void{
        let toastData = {
            message: text,
            showCloseButton: true,
            closeButtonText: 'X',
            position: 'top' 
        };

        this.showToast(toastData);
    }*/
    async showSuccessToast(msg: string) {
        const toast = await this.toastCtrl.create({
          message: msg,
          duration: 2000,
          showCloseButton: true,
          color:'success',
          closeButtonText: 'X',
          position: 'bottom',
        });
        toast.present();
      }
    async showErrorToast(msg: string) {
        const toast = await this.toastCtrl.create({
          message: msg,
          duration: 2000,
          showCloseButton: true,
          color:'danger',
          closeButtonText: 'X',
          position: 'bottom',
        });
        toast.present();
      }
  
}
