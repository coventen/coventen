
import Link from "next/link"
import SignUpFrom from "./SignUpFrom";
import Main from "./Main";

export default function Login() {

    return (
        <main className="w-full flex">

            {/*  end of info section */}
            <div className="flex-1 flex items-center justify-center h-screen">
                <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
                    <div className="">
                        {/* <img src="https://floatui.com/logo.svg" width={150} className="lg:hidden" /> */}
                        <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl text-center">Employee Registration</h3>
                        </div>
                    </div>

                    <Main />
                </div>
            </div>
        </main>
    )
}