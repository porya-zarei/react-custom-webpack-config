import {renderToString} from "react-dom/server";
import {resolve} from "path";
import {readFile} from "fs";
import {NextFunction, Request, Response} from "express";
import serverAppRenderer from "../../src/app.server";
const serverRenderer = (req: Request, res: Response, next: NextFunction):void => {
    const filePath:string = resolve(__dirname, "..", "..", "dist", "index.html");
    readFile(filePath, "utf8", (err, htmlData) => {
        if (err) {
            console.error("err", err);
            return res.status(404).end();
        }
        console.log("in mid => ", req.baseUrl);
        const html:string = renderToString(
            serverAppRenderer(req.baseUrl),
        );
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`,
            ),
        );
    });
};
export default serverRenderer;