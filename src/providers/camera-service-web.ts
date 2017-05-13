import { Injectable } from '@angular/core';
import { TakePictureResponse } from "../message/takepicture.response";
import { TakePictureRequest } from "../message/takepicture.request";
import { IPictureService } from "../interfaces/ipicture.service";

@Injectable()
export class CameraServiceWeb implements IPictureService {

  constructor(
    
  ) {
    console.log('Hello CameraService Provider');
  }

  takePicture(request: TakePictureRequest): Promise<TakePictureResponse> {
    return new Promise<TakePictureResponse>((resolve, reject) => {
      reject("Navegador não suporta uso de camera.");
    })
  }

}
