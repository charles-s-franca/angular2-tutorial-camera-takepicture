import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera-page';
import { CameraService } from "../../providers/camera-service";
import { CameraServiceWeb } from "../../providers/camera-service-web";
import { Camera } from "@ionic-native/camera";
import { CameraProvider } from "../../providers/camera-provider";

@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
  ],
  exports: [
    CameraPage
  ],providers: [
    CameraService,
    CameraServiceWeb,
    Camera,
    CameraProvider
  ]
})
export class CameraPageModule {}
