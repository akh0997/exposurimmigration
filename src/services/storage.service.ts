import { StorageEnums } from "../enums/storageEnums";


export class StorageService {
  setKey(key: StorageEnums, data: any) {
    try {
      let stringifiedData = JSON.stringify(data);
      localStorage.setItem(key, stringifiedData);
    } catch (error) {}
  }

  removeKey(key: StorageEnums) {
    try {
      localStorage.removeItem(key);
    } catch (error) {}
  }

  getKey(key: StorageEnums) {
    try {
      const stringifiedData = localStorage.getItem(key);
      if (stringifiedData) {
        return JSON.parse(stringifiedData);
      }
      return null;
    } catch (error) {}
  }
  clearLocalStorage() {
    try {
      localStorage.clear();
      console.log("Storage cleared");
    } catch (error) {
      console.error("Error clearing local storage:", error);
    }
  }
}
