import { SearchBar, SearchLogo } from "./SearchBar";

const Logo = () => {

    return (
        <div className="inline-flex items-center cursor-pointer ml-2"> 
            <img className='rounded-full w-10 h-9 mr-1 object-contain' 
                    src="/youtube.png" alt='img'></img>
            <p className="hidden md:block lg:block text-lg">Youtube</p>
        </div>
    )
}

const AppBarButton = () => {

    return (
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1.5 px-4 border border-blue-500 hover:border-transparent rounded-full">
            <p className="hidden md:block lg:block">Sign In</p>
            <div className='block md:hidden lg:hidden rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
            </div>
        </button>
    );
}

export const AppBar = () => {

    return (
        <div className="flex justify-between p-2">
            <Logo />
            <div>
                <div className="hidden md:block lg:block">
                    <SearchBar />
                </div>
                <div className="inline-flex items-center block md:hidden lg:hidden">
                    <div className="mt-1 border-2 border-gray-700 rounded-full px-1.5 py-1.5">
                        <SearchLogo/>
                    </div>
                </div> 
            </div>
            <div className="inline-flex items-center mr-2">
                <AppBarButton />
            </div>
        </div>
    );
};