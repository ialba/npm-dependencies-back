import { NpmApiService } from './NpmApiService';

export class DependenciesService {

  private npmApiService : NpmApiService;

  constructor(){
    this.npmApiService = new NpmApiService();
  }

  async loadDependencies(npmPackage:string, version?: string){
    let response;
    await this.npmApiService.loadPackage(npmPackage, version)
    .then((r) => {
      r = JSON.parse(r);
      response = r.dependencies;
    });
    return response;
  }
}
