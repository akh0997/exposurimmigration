import axios from "axios";
import { SKIP_TOKEN_URL } from "../constants/api.constant";
import { StorageEnums } from "../enums/storageEnums";
import { StorageService } from "../services/storage.service";
const storageService = new StorageService();
const interceptor = () => {
  axios.interceptors.request.use(async (req) => {
    let JWTToken: any = storageService.getKey(
      StorageEnums.CREDENTIALS
    )?.accessToken;

    if (
      JWTToken != null &&
      !SKIP_TOKEN_URL.find((url) => req.url?.includes(url))
    ) {
      req.headers.Authorization = `Bearer ${JWTToken}`;
    }
    return {
      ...req,
    };
  });

  axios.interceptors.response.use(
    (res: any) => {
      return res;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
};

export default interceptor;
