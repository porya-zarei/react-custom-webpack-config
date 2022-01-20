import {FC} from "react";

interface PageContainerProps {
    minHeight: "auto" | "full" | "screen";
    display: "flex" | "block";
    children: React.ReactNode;
}

const PageContainer: FC<PageContainerProps> = ({
    minHeight,
    display,
    children,
}) => {
    const classes: string[] = [`min-h-${minHeight}`,"pt-14"];
    if (display === "flex") {
        classes.push("flex justify-center items-center content-center");
    } else {
        classes.push(display);
    }
    return <section className={classes.join(" ")}>{children}</section>;
};

export default PageContainer;
