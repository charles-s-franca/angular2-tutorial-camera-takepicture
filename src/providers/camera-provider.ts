import { Injectable } from '@angular/core';
import { TakePictureResponse } from "../message/takepicture.response";
import { TakePictureRequest } from "../message/takepicture.request";
import { IPictureService } from "../interfaces/ipicture.service";
import { CameraServiceWeb } from "./camera-service-web";
import { CameraService } from "./camera-service";
import { Platform } from "ionic-angular";

@Injectable()
export class CameraProvider {
  private pictureServiece: IPictureService;
  constructor(
    private cameraWebService: CameraServiceWeb,
    private cameraService: CameraService,
    private platform: Platform
  ) {
    if(this.platform.is('cordova')){
        this.pictureServiece = this.cameraService;
    }else{
        this.pictureServiece = this.cameraWebService;
    }
  }

  takePicture(request: TakePictureRequest):Promise<TakePictureResponse> {
    return this.pictureServiece.takePicture(request);
  }
}
