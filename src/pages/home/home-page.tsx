import {FC} from "react";
import {Link} from "react-router-dom";
import PageContainer from "../../components/small-parts/page-container/page-container";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
    return (
        <PageContainer minHeight="screen" display="flex">
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Hi everyone! My name is <span className="text-green-500">Porya</span>.
                </h1>
            </div>
        </PageContainer>
    );
};

export default HomePage;
