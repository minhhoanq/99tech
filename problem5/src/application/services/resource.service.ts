import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Resource } from "../../domain/entities/resource";
import {
    IResourceRepository,
    ResourceFilter,
} from "../../domain/repositories/resource.interface";
import { IResourceService } from "../../domain/services/resource.interface";
import { TYPES } from "../../shared/constants/type";
import { ResourceRepository } from "../../infrastructure/database/repositories/resource.repository";
import { CreateResourceDto, UpdateResourceDto } from "../dtos/resource.dto";

@injectable()
export class ResourceService implements IResourceService {
    private _ResourceRepo: IResourceRepository;

    constructor(
        @inject(TYPES.ResourceRepository) resourceRepo: ResourceRepository
    ) {
        this._ResourceRepo = resourceRepo;
    }

    //get resource by filter
    async getResourcesFilter(filters: ResourceFilter): Promise<Resource[]> {
        return await this._ResourceRepo.find(filters);
    }

    //get all resources
    async getResources(): Promise<Resource[] | null> {
        return await this._ResourceRepo.findMany();
    }

    //get resource detail
    async getResource(id: number): Promise<Resource | null> {
        return await this._ResourceRepo.findById(id);
    }

    //create new resource
    async createResource(
        createResourceDTO: CreateResourceDto
    ): Promise<Resource> {
        return await this._ResourceRepo.create(createResourceDTO);
    }

    //update resource by id
    async updateResource(
        id: number,
        updateResourceDto: UpdateResourceDto
    ): Promise<Resource> {
        return await this._ResourceRepo.update(id, updateResourceDto);
    }

    //delete resource by id
    async deleteResource(id: number): Promise<Resource> {
        return await this._ResourceRepo.delete(id);
    }
}
