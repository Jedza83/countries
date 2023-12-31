import { CiSearch } from "react-icons/ci";

const Search = ({ setSearchText, darkMode }) => {
  return (
    <div className="flex items-center w-full">
      <CiSearch
        className={`cursor-pointer ml-10 ${
          darkMode ? "dark:text-white" : "text-black"
        }`}
      />
      <input
        type="text"
        placeholder="Search for a country..."
        className={`outline-none w-50 p-2 m-5 ${
          darkMode
            ? "dark:bg-dark-blue dark:text-white"
            : "dark:bg-white dark:text-black"
        } placeholder-${darkMode ? "white" : "black"} rounded-r-md`}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <span className="flex-grow"></span>
    </div>
  );
};

export default Search;
