import dotenv from "dotenv";

if (process.env.NODE_ENV === "dev") {
    dotenv.config({ path: `.env.dev` });
} else {
    dotenv.config();
}

interface Config {
    BASE_URL?: string;
    PORT: string;
    DB_URL: string;
}

const config: Config = {
    BASE_URL: process.env.BASE_URL,
    PORT: process.env.PORT!,
    DB_URL: process.env.DB_URL!,
};

export default config;
