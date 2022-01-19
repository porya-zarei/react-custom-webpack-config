import {FC} from "react";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
    return (
        <div>
            <h1 className="hover:text-red-500">Home Page</h1>
            <p className="text-gray-500">
                HI everyone!
                My name is <span className="text-green-500">Porya</span>.
            </p>
        </div>
    );
};

export default HomePage;
