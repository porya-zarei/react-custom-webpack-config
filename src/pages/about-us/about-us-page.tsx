import {FC} from "react";
import { Link } from "react-router-dom";

interface AboutUsPageProps {}

const AboutUsPage: FC<AboutUsPageProps> = () => {
    return (
        <div>
            <h1 className="hover:text-red-500">About Us Page</h1>
            <p className="text-gray-500">
                HI everyone! My name is{" "}
                <span className="text-green-500">Porya</span>.
            </p>
            <Link to="/">Go to Home Page</Link>
        </div>
    );
};

export default AboutUsPage;
