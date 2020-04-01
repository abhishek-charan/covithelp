import { Injectable } from "@angular/core";
import {
  ToastController,
  LoadingController,
  AlertController
} from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class CommonPopoverService {
  loading: any;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}

  /**
   * Toast
   * @param message string message
   */
  async toastPopOver(message) {
    return new Promise<any>(async (resolve, reject) => {
      let toast = await this.toastCtrl.create({
        message: message,
        buttons: [{ text: "Close", role: "cancel" }],
        duration: 2500,
        position: "top"
      });
      toast.onDidDismiss().then(() => {
        resolve(true);
      });

      toast.present();
    });
  }

  /**
   * To show loader
   * @param message
   */
  async loaderPresent(message) {
    this.loading = await this.loadingCtrl.create({
      message: message || "Loading..."
    });
    return await this.loading.present();
  }

  /**
   * To dismiss loader
   */
  loaderDismiss() {
    if (this.loading) this.loading.dismiss();
  }

  /**
   * To show alert/dialog box
   * @param message
   * @param title
   */
  alertPopOver(message?, title?) {
    return new Promise<any>(async (resolve, reject) => {
      let alert = await this.alertCtrl.create({
        header: title,
        message: message,
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              resolve(false);
            }
          },
          {
            text: "OK",
            handler: () => {
              resolve(true);
            }
          }
        ]
      });
      return await alert.present();
    });
  }
}
