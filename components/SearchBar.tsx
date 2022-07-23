import { SearchIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import { useTheme } from "../context/ThemeProvider";

const SearchBar = () => {
  const theme = useTheme();
  return (
    <div className="flex  my-2 space-x-2 items-center placeholder-white rounded-md text-white p-4 bg-gradient-to-br from-purple-600 to-indigo-700">
      <div
        className={`w-1/2 flex items-center px-2 rounded-md ${
          theme?.isDark ? "bg-gray-900" : "bg-gray-200 text-black"
        } `}
      >
        <SearchIcon className="h-6 w-6 " />
        <input
          type="text"
          className={`w-full ${
            theme?.isDark ? "bg-gray-900" : "bg-gray-200 text-black"
          } x px-4 py-2 focus:outline-none`}
          placeholder="Search: anything"
        />
      </div>
      <div
        className={`w-1/2 ${
          theme?.isDark ? "bg-gray-900" : "bg-gray-200 text-black"
        }  flex px-2 rounded-md items-center`}
      >
        <PaperAirplaneIcon className="h-6 w-6 rotate-[45deg]" />
        <input
          type="text"
          className={`w-full px-4 py-2   ${
            theme?.isDark ? "bg-gray-900" : "bg-gray-200 text-black"
          } focus:outline-none`}
          placeholder="location"
        />
      </div>
    </div>
  );
};

export default SearchBar;
