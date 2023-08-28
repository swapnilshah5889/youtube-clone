

export const SearchLogo = () => {
    return (
        <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
    );
}

export const SearchBar = () => {

    return (
        <>   
            <div className="relative w-48 md:w-80 lg:w-96">
                <input type="search" id="default-search" className="block w-full p-2 pl-5 pr-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                
                <button type="submit" className="text-white absolute right-1.5 bottom-1 bg-transparent hover:bg-transparent font-medium rounded-full text-sm px-2 py-2 dark:bg-transparent dark:hover:bg-transparent">
                    <SearchLogo />
                </button>
            </div>
        </>

    );
}
