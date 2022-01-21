import express, {Router, Express} from "express";
import serverRenderer from "./middleware/renderer";
import {resolve} from "path";
import { PORT } from "./config/globals";

const app: Express = express();
const router: Router = express.Router();

router.use("/[js|css|images|fonts]/*",
    express.static(resolve(__dirname, "..", "dist")),
);
router.use("/*", serverRenderer);
app.use(router);

// start the app
app.listen(PORT, () => {
    console.log("listening on " + PORT + "...");
});