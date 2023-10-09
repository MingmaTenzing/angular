import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { environment } from "../environment/eniroment";

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config')

export const APP_CONFG: AppConfig = {
    apiEndPoint : environment.apiEndPoint   
}