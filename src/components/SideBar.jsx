
export const SideBarButton = () => {

    return (
        <div className="flex px-4 py-2 items-center cursor-pointer rounded-md ml-2 mr-2 hover:bg-gray-700">
            <div >
                <img className='w-4 h-4' 
                    src="/login.png" alt='img'></img>
            </div>
            <div className="text-sm ml-3">
                Button
            </div>
        </div>
    );
};

export const SideBarSection = () => {

    return (
        <div className="w-full">
            
            <div className="flex flex-col  mb-2">
                <SideBarButton />
                <SideBarButton />
                <SideBarButton />
                <SideBarButton />
                <SideBarButton />
                <SideBarButton />
            </div>
            <hr style={{borderTop:'1px solid #777', borderRadius:'5px'}}></hr>
        </div>
    );

};

export const SideBar = () => {

    return (
        <div className="flex flex-col">
            <SideBarSection />
            <SideBarSection />
            <SideBarSection />
            <SideBarSection />
            <SideBarSection />
        </div>
    );
};