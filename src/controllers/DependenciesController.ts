import {Path, GET, PathParam, QueryParam} from "typescript-rest";
import { Request, Response } from "express";
import {deserialize, JsonProperty} from 'json-typescript-mapper';

// Services
import { DependenciesService } from '../services/DependenciesService';

@Path("/npm")
export class DependenciesController {

  private depenendienciesService : DependenciesService;

  constructor(){

    this.depenendienciesService = new DependenciesService();
  }

  @Path("/dependencies/:npmPackage/")
  @GET
  async passwordchange(@PathParam('npmPackage') npmPackage: string,
                 @QueryParam('version') version: string) {
    let response = await this.depenendienciesService.loadDependencies(npmPackage, version);
    console.log('Response from main service'+response);
    return response;
  }

}
