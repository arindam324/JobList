import { SearchIcon, PaperAirplaneIcon } from "@heroicons/react/solid";

const SearchBar = () => {
  return (
    <div className="flex items-center placeholder-white rounded-md text-white p-4 bg-gradient-to-br from-purple-600 to-indigo-700">
      <div className="w-1/2 flex items-center px-2 rounded-md bg-gray-900">
        <SearchIcon className="h-6 w-6 " />
        <input
          type="text"
          className="w-full bg-gray-900 px-4 py-2 focus:outline-none"
          placeholder="Search: anything"
        />
      </div>
      <div className="w-1/2 bg-gray-900 flex px-2 rounded-md items-center">
        <PaperAirplaneIcon className="h-6 w-6 rotate-[45deg]" />
        <input
          type="text"
          className="w-full bg-gray-900 px-4 py-2 focus:outline-none"
          placeholder="location"
        />
      </div>
    </div>
  );
};

export default SearchBar;
