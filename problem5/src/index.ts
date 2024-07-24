import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./presentation/routers";
const app = express();

//cors
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//init router
app.use("/api/v1", router);

// Custom error interface
interface CustomError extends Error {
    status?: number;
}

// handling error
app.use((_req, _res, next) => {
    const error = new Error("Not found") as CustomError;
    error.status = 404;
    next(error);
});

app.use(
    (error: CustomError, req: Request, res: Response, next: NextFunction) => {
        const statusCode = error.status || 500;
        res.status(statusCode).json({
            status: error.status || "error",
            reasonStatuscode: `error ${statusCode}`,
            message: error.message || "Server error",
        });
    }
);

export default app;
