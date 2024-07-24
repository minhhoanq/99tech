import { Container } from "inversify";
import { IResourceRepository } from "../../domain/repositories/resource.interface";
import { TYPES } from "../../shared/constants/type";
import { ResourceRepository } from "../database/repositories/resource.repository";
import { IResourceService } from "../../domain/services/resource.interface";
import { ResourceService } from "../../application/services/resource.service";
import { ResourceController } from "../../presentation/controllers/resource.controller";

const container = new Container();

container
    .bind<IResourceRepository>(TYPES.ResourceRepository)
    .to(ResourceRepository);
container.bind<IResourceService>(TYPES.ResourceService).to(ResourceService);
container.bind(TYPES.ResourceController).to(ResourceController);

export { container };
