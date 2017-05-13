import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TakePictureResponse } from "../message/takepicture.response";
import { TakePictureRequest } from "../message/takepicture.request";
import { IPictureService } from "../interfaces/ipicture.service";

@Injectable()
export class CameraService implements IPictureService {

  constructor(
    private camera: Camera
  ) {
    console.log('Hello CameraService Provider');
  }

  takePicture(request: TakePictureRequest): Promise<TakePictureResponse> {
    return new Promise<TakePictureResponse>((resolve, reject) => {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum: request.saveToPhotoAlbum
      }

      this.camera.getPicture(options).then((imageData) => {
        try {
          //let base64Image = 'data:image/jpeg;base64,' + imageData;
          let base64Image = imageData;
          let response = new TakePictureResponse();

          response.photoPath = base64Image;
          resolve(response);
        } catch (error) {
          reject(error);
        }
      }, (err) => {
        reject(err);
      });
    })
  }

}
