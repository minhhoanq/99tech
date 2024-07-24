import { injectable } from "inversify";
import "reflect-metadata";
import { Prisma, PrismaClient } from "@prisma/client";
import { Resource } from "../../../domain/entities/resource";
import {
    IResourceRepository,
    ResourceFilter,
} from "../../../domain/repositories/resource.interface";
import {
    CreateResourceDto,
    UpdateResourceDto,
} from "../../../application/dtos/resource.dto";

@injectable()
export class ResourceRepository implements IResourceRepository {
    private _prisma: PrismaClient;
    constructor() {
        this._prisma = new PrismaClient();
    }

    //find resource by query
    async find(filter: ResourceFilter): Promise<Resource[]> {
        const {
            name,
            page = 1,
            pageSize = 10,
            minPrice = 0,
            maxPrice,
        } = filter;

        let where: Prisma.ResourceWhereInput = {
            price: {
                gte: +minPrice,
                ...(maxPrice !== undefined ? { lte: +maxPrice } : {}),
            },
            ...(name ? { name: { contains: name, mode: "insensitive" } } : {}),
        };

        const result: Resource[] = await this._prisma.resource.findMany({
            where,
            orderBy: {
                name: "asc",
            },
            select: {
                id: true,
                name: true,
                desc: true,
                price: true,
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
        });

        return result;
    }

    //find all resource
    async findMany(): Promise<Resource[]> {
        const result: Resource[] = await this._prisma.resource.findMany({
            select: {
                id: true,
                name: true,
                desc: true,
                price: true,
            },
        });
        return result;
    }

    //find resource by id
    async findById(id: number): Promise<Resource | null> {
        const result: Resource | null = await this._prisma.resource.findFirst({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                desc: true,
                price: true,
            },
        });
        return result || null;
    }

    //create new resource
    async create(data: CreateResourceDto): Promise<Resource> {
        const result: Resource = await this._prisma.resource.create({
            data: {
                ...data,
                updatedAt: new Date(),
            },
            select: {
                id: true,
                name: true,
                desc: true,
                price: true,
            },
        });

        return result;
    }

    //update resource by id
    async update(id: number, data: UpdateResourceDto): Promise<Resource> {
        return await this._prisma.resource.update({
            where: {
                id: id,
            },
            data,
            select: {
                id: true,
                name: true,
                desc: true,
                price: true,
            },
        });
    }

    //delete resource by id
    async delete(id: number): Promise<Resource> {
        const result: Resource = await this._prisma.resource.delete({
            where: {
                id,
            },
        });

        return result;
    }
}
