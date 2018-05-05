import * as request from "request-promise-native";

export class NpmApiService {

  private _baseUrl : string = 'https://registry.npmjs.org/';

  aync loadPackage(npmPackage:string, version?: string) : Promise<any>{
    version = version != null ? version : 'latest';
    let params: string = npmPackage +'/'+version;
    console.log(this._baseUrl+params);
    return request.get(this._baseUrl+params);
  }
}
