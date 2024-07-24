import { z } from "zod";

export const resourceBody = {
    name: z.string({ required_error: "Name is required!" }),
    desc: z.string({ required_error: "Description is required!" }),
    price: z.number({ required_error: "Price is required!" }).min(1),
};

export const createResourceSchema = {
    body: z.object(resourceBody),
};

export const updateResourceSchema = {
    params: z.object({
        id: z.string({ required_error: "Id is required" }),
    }),
    body: z.object(resourceBody).partial(),
};

export const filterResourceSchema = z.object({
    query: z.object({
        name: z.string().optional(),
        minPrice: z.preprocess((val) => {
            if (typeof val === "string") {
                return parseFloat(val);
            }
            return val;
        }, z.number().optional()),
        maxPrice: z.preprocess((val) => {
            if (typeof val === "string") {
                return parseFloat(val);
            }
            return val;
        }, z.number().optional()),
        page: z.preprocess((val) => {
            if (typeof val === "string") {
                return parseInt(val, 10);
            }
            return val;
        }, z.number().optional()),
        pageSize: z.preprocess((val) => {
            if (typeof val === "string") {
                return parseInt(val, 10);
            }
            return val;
        }, z.number().optional()),
    }),
});

export interface CreateResourceDto {
    name: string;
    desc: string;
    price: number;
}
export interface UpdateResourceDto extends Partial<CreateResourceDto> {}
