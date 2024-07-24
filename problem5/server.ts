import config from "./src/config";
import app from "./src/index";
import dotenv from "dotenv";
dotenv.config();

const server = app.listen(config.PORT, () => {
    console.log(`Server problem5 runing on port: ` + config.PORT);
});

process.on("SIGINT", () =>
    server.close(() => console.log("Exit problem5 server express"))
);
