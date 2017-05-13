import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraProvider } from "../../providers/camera-provider";
import { TakePictureRequest } from "../../message/takepicture.request";

/**
 * Generated class for the CameraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-camera-page',
  templateUrl: 'camera-page.html',
})
export class CameraPage {
  public imagepath: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private cameraProvider: CameraProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  takePicture(){
    let request = new TakePictureRequest();
    request.saveToPhotoAlbum = true;

    this.cameraProvider.takePicture(request).then(cameraResponse=>{
      console.log(cameraResponse);
      this.imagepath = cameraResponse.photoPath;
    }).catch(error=>{
      console.log(error);
    })
  }

}
