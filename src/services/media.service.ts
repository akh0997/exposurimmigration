import { URLS } from "../constants/api.constant";
import { UploadFilePayload } from "../models/media.model";
import { ApiService } from "./api.services";
const apiService = new ApiService();
export class MediaService {
  generatSignedUrl(payload: UploadFilePayload) {
    return apiService.post({ url: URLS.SIGNED_URL, data: payload });
  }
  uploadFile(url: string, file: File) {
    return apiService.uploadFile({ url: url, data: file });
  }
}
