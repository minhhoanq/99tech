import {
    CreateResourceDto,
    UpdateResourceDto,
} from "../../application/dtos/resource.dto";
import { Resource } from "../entities/resource";
import { ResourceFilter } from "../repositories/resource.interface";

export interface IResourceService {
    getResourcesFilter(filters: ResourceFilter): Promise<Resource[]>;
    getResources(): Promise<Resource[] | null>;
    getResource(id: number): Promise<Resource | null>;
    createResource(createResourceDTO: CreateResourceDto): Promise<Resource>;
    updateResource(
        id: number,
        updateResourceDto: UpdateResourceDto
    ): Promise<Resource>;
    deleteResource(id: number): Promise<Resource>;
}
