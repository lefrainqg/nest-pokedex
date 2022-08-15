import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adpater.interface";

@Injectable()
export class AxiosAdapter implements HttpAdapter {

   private axios: AxiosInstance = axios;

   async get<T>(url: string): Promise<T> {
      try {
         const { data } = await this.axios.get<T>(url);
         return data;
      } catch (error) {
         throw new Error(`An error has ocurred, check logs for more detail`);
      }
   }

}