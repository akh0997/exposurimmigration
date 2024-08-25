import { URLS } from "../constants/api.constant";
import { LoginPayloadModel } from "../models/auth.model";
import { ApiService } from "./api.services";

const apiService = new ApiService();

export class AuthService {
  refreshToken = async (refreshToken: string) => {
    const obj = {
      url: URLS.REFRESH_TOKEN,
      data: { refreshToken: refreshToken },
    };
    return await apiService.post(obj);
  };

  login = async (data: LoginPayloadModel) => {
    return await apiService.post({
      url: URLS.LOGIN,
      data: { ...data },
    });
  };
}
