import { Search } from "../icons";


const SearchInput = (props) => {
  return (
    <div className="flex w-full h-12 border border-silver dark:border-darkBorder lg:rounded-xl rounded-full" >
      <div className=" h-full aspect-square flex justify-center items-center">
        <Search className="w-6 h-6" />
      </div>


      <input
        placeholder="Search..."
        name="search"
        className="grow p-2 outline-none rounded-xl bg-transparent dark:text-white tracking-wider"
        autoComplete="off"
        {...props}
      />
    </div >
  )
}

export default SearchInput;