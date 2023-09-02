import React from 'react';

const SearchInput = () => {
    return (
        <form action="" className="  max-w-3xl mx-auto ">
            <div className="relative flex p-1 rounded-full h-20 bg-white dark:bg-gray-800 dark:border-gray-600  shadow-md md:p-2">
                <div id="categories" className="hidden  rounded-full bg-transparent w-80 relative md:p-4 md:flex justify-between items-center select-none">

                    <input type="text" name="catName" id="catName" value="Services" className="pl-3 border-none outline-none w-full bg-white text-base font-medium cursor-pointer dark:bg-transparent dark:text-gray-50" />
                    <input type="checkbox" name="toggleLstCat" id="toggleLstCat" className="peer border-none outline-none hidden " />
                    <label role="button" htmlFor="toggleLstCat" className="absolute top-0 left-0 w-full h-full"></label>
                    <span className="min-w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-gray-700 dark:fill-gray-200" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <div id="categorieLst" className="absolute transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1 top-full left-0 w-full bg-white  shadow-md rounded-lg py-2">
                        <ul className="flex flex-col w-full">
                            <ul className="flex flex-col w-full">
                                <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">Products</li>
                                <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">Labs</li>
                                <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">Marketing</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <input placeholder="Your favorite food" className="w-full p-4 border-none outline-none rounded-full  bg-transparent dark:text-white dark:placeholder-gray-300" type="text" />
                <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded-full text-center transition bg-primary  md:px-12">
                    <span className="hidden text-white font-semibold md:block">
                        Search
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-white md:hidden" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default SearchInput;