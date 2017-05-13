import { TakePictureRequest } from "../message/takepicture.request";
import { TakePictureResponse } from "../message/takepicture.response";

export interface IPictureService {
    takePicture(request: TakePictureRequest): Promise<TakePictureResponse>;
}
