import {
    CreateResourceDto,
    UpdateResourceDto,
} from "../../application/dtos/resource.dto";
import { Resource } from "../entities/resource";

export interface ResourceFilter {
    name?: string;
    price?: number;
    minPrice?: number;
    maxPrice?: number;
    page?: number;
    pageSize?: number;
}

export interface IResourceRepository {
    findMany(): Promise<Resource[] | null>;
    find(filter: ResourceFilter): Promise<Resource[] | null>;
    findById(id: number): Promise<Resource | null>;
    create(data: CreateResourceDto): Promise<Resource>;
    update(id: number, data: UpdateResourceDto): Promise<Resource>;
    delete(id: number): Promise<Resource>;
}
