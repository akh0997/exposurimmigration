import axios from "axios";
import { ApiPayload } from "../models/api.model";

const baseurl = process.env.REACT_APP_BASE_URL;
export class ApiService {
  async get(obj: ApiPayload) {
    return await axios.get(`${baseurl}${obj.url}`, {
      params: obj?.data,
    });
  }
  async post(obj: ApiPayload) {
    return await axios.post(`${baseurl}${obj.url}`, obj?.data);
  }

  async delete(obj: ApiPayload) {
    return await axios.delete(`${baseurl}${obj.url}`, {
      params: obj?.data,
    });
  }
  async put(obj: ApiPayload) {
    return await axios.put(`${baseurl}${obj.url}`, obj?.data, {});
  }
  async patch(obj: ApiPayload) {
    return await axios.patch(`${baseurl}${obj.url}`, obj?.data, {});
  }
  async uploadFile(obj: ApiPayload) {
    return await axios.put(`${obj.url}`, obj?.data, {});
  }
}
