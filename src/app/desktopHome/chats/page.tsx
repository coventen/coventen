
import React from 'react';
import Main from './Main';



const ChatsPage = () => {

    return (

        <>
            <div className="flex h-screen antialiased text-gray-800 bg-bgLight">
                <div className="flex flex-row h-full min-h-screen lg:max-h-[100vh] w-full overflow-x-hidden p-7">
                    <Main />
                </div>
            </div>

        </>



    );
};

export default ChatsPage;