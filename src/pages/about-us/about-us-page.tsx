import {FC} from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../components/small-parts/page-container/page-container";

interface AboutUsPageProps {}

const AboutUsPage: FC<AboutUsPageProps> = () => {
    return (
        <PageContainer minHeight="screen" display="flex">
            <div className="w-full">
                <br />
                <br />
                <br />
                <br />
                <h1 className="hover:text-red-500">About Us Page</h1>
                <p className="text-gray-500">
                    HI everyone! My name is{" "}
                    <span className="text-green-500">Porya ZZZ</span>.
                </p>
                
            </div>
        </PageContainer>
    );
};

export default AboutUsPage;
