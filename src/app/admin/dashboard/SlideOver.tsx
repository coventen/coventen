
interface ISliceOver {
    slideOverOpen: boolean;
    setSlideOverOpen: (value: boolean) => void;
}

const SlideOver = ({ slideOverOpen, setSlideOverOpen }: ISliceOver) => {


    const openSlideOver = () => {
        setSlideOverOpen(true);
    };

    const closeSlideOver = () => {
        setSlideOverOpen(false);
    };

    return (
        <div className="relative z-50 w-auto h-auto">

            {slideOverOpen && (
                <div className="relative z-[99]">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-10"
                        onClick={closeSlideOver}
                    ></div>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <div
                                    className="w-screen max-w-md"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="flex flex-col h-full py-5 overflow-y-scroll bg-white border-l shadow-lg border-neutral-100/70">
                                        <div className="px-4 sm:px-5">
                                            <div className="flex items-start justify-between pb-1">
                                                <h2
                                                    className="text-base font-semibold leading-6 text-gray-900"
                                                    id="slide-over-title"
                                                >
                                                    Notifications
                                                </h2>
                                                <div className="flex items-center h-auto ml-3">
                                                    <button
                                                        onClick={closeSlideOver}
                                                        className="absolute top-0 right-0 z-30 flex items-center justify-center px-3 py-2 mt-4 mr-5 space-x-1 text-xs font-medium uppercase border rounded-md border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="w-4 h-4"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M6 18L18 6M6 6l12 12"
                                                            ></path>
                                                        </svg>
                                                        <span>Close</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative flex-1 px-4 mt-5 sm:px-5">
                                            <div className="absolute inset-0 px-4 sm:px-5">
                                                <div className="relative h-full overflow-hidden border border-dashed rounded-md border-neutral-300"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SlideOver;
