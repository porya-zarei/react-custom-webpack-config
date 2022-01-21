import {FC} from "react";
import {BsSearch} from "react-icons/bs";

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = () => {
    return (
        <div className="h-full flex justify-center items-center w-[150px] md:w-[200px] lg:w-[250px] border border-gray-200 bg-white p-2 rounded-md">
            <span className="w-auto h-full">
                <BsSearch size={20} />
            </span>
            <input
                type="text"
                className="w-full h-full px-4 py-2 border-none rounded-lg outline-none"
                placeholder="Search..."
            />
        </div>
    );
};

export default SearchInput;
