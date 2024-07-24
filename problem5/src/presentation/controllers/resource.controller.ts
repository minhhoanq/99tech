import { inject, injectable } from "inversify";
import "reflect-metadata";
import { IResourceService } from "../../domain/services/resource.interface";
import { TYPES } from "../../shared/constants/type";
import { NextFunction, Request, Response } from "express";
import { Created, SuccessResponse } from "../../shared/core/success.response";
import logger from "../../infrastructure/logger";
import {
    CreateResourceDto,
    UpdateResourceDto,
} from "../../application/dtos/resource.dto";
import { ResourceFilter } from "../../domain/repositories/resource.interface";

@injectable()
export class ResourceController {
    private _resourceService: IResourceService;

    constructor(
        @inject(TYPES.ResourceService) resourceService: IResourceService
    ) {
        this._resourceService = resourceService;
    }

    async getResourcesFilter(req: Request, res: Response, next: NextFunction) {
        try {
            const filter = <ResourceFilter>req.query;
            new SuccessResponse({
                message: "Create resource successfully!",
                metadata: await this._resourceService.getResourcesFilter(
                    filter
                ),
            }).send(res);
        } catch (error) {
            logger.error(`Error create resource: ${error}`);
            next(error);
        }
    }

    async getResources(req: Request, res: Response, next: NextFunction) {
        try {
            new SuccessResponse({
                message: "Create resource successfully!",
                metadata: await this._resourceService.getResources(),
            }).send(res);
        } catch (error) {
            logger.error(`Error create resource: ${error}`);
            next(error);
        }
    }

    async getResource(req: Request, res: Response, next: NextFunction) {
        try {
            new SuccessResponse({
                message: "Create resource successfully!",
                metadata: await this._resourceService.getResource(
                    +req.params.id
                ),
            }).send(res);
        } catch (error) {
            logger.error(`Error create resource: ${error}`);
            next(error);
        }
    }

    async createResource(req: Request, res: Response, next: NextFunction) {
        try {
            const body = <CreateResourceDto>req.body;
            new Created({
                message: "Create resource successfully!",
                metadata: await this._resourceService.createResource(body),
            }).send(res);
        } catch (error) {
            logger.error(`Error create resource: ${error}`);
            next(error);
        }
    }

    async updateResource(req: Request, res: Response, next: NextFunction) {
        try {
            const body = <UpdateResourceDto>req.body;
            new SuccessResponse({
                message: "Update resource successfully!",
                metadata: await this._resourceService.updateResource(
                    +req.params.id,
                    body
                ),
            }).send(res);
        } catch (error) {
            logger.error(`Error update resource: ${error}`);
            next(error);
        }
    }

    async deleteResource(req: Request, res: Response, next: NextFunction) {
        try {
            new SuccessResponse({
                message: "Update resource successfully!",
                metadata: await this._resourceService.deleteResource(
                    +req.params.id
                ),
            }).send(res);
        } catch (error) {
            logger.error(`Error delete resource: ${error}`);
            next(error);
        }
    }
}
