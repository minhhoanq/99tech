import express from "express";
import { container } from "../../../infrastructure/di/inversify.config";
import { ResourceController } from "../../controllers/resource.controller";
import { TYPES } from "../../../shared/constants/type";
import { asyncHandler } from "../../../shared/helpers/asyncHandler";
import { validationResource } from "../../middlewares/resource.validation";
import { filterResourceSchema } from "../../../application/dtos/resource.dto";
const router = express.Router();

const controller = container.get<ResourceController>(TYPES.ResourceController);

//create
router.post("/", asyncHandler(controller.createResource.bind(controller)));
//get all
router.get("/", asyncHandler(controller.getResources.bind(controller)));
//get by query
router.get(
    "/query",
    validationResource(filterResourceSchema),
    asyncHandler(controller.getResourcesFilter.bind(controller))
);
//update by id
router.patch("/:id", asyncHandler(controller.updateResource.bind(controller)));
//delete by id
router.delete("/:id", asyncHandler(controller.deleteResource.bind(controller)));
//get by id
router.get("/:id", asyncHandler(controller.getResource.bind(controller)));

export default router;
