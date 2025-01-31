
import Link from "next/link"
import SignUpFrom from "./SignUpFrom";
import Main from "./Main";

export default function Login() {

    return (
        <main className="w-full flex">
            <div className="relative flex-1 hidden items-center justify-center min-h-screen my-16 bg-white lg:flex">
                <div className="relative z-10 w-full max-w-md">
                    {/* <img src="https://floatui.com/logo-dark.svg" width={150} /> */}

                    <div className=" mt-16 space-y-3">
                        <h3 className="text-gray-900 text-3xl font-bold">Start growing your business quickly</h3>
                        <p className="text-gray-800">
                            Create your account and get access to reach India’s biggest industrial community.
                        </p>
                        <div className="flex items-center -space-x-2 overflow-hidden">
                            <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 rounded-full border-2 border-white" />
                            <p className="text-sm text-gray-800 font-medium translate-x-5">
                                Join 5000+ users
                            </p>
                        </div>
                    </div>
                </div>
                <div


                    className="absolute inset-0 my-auto h-[500px]"
                    style={{
                        background: "linear-gradient(152.92deg, rgba(0, 177, 253, 0.2) 4.54%, rgba(0, 177, 253, 0.26) 34.2%, rgba(113, 250, 202, 0.1) 77.55%)", filter: "blur(85px)"
                    }}
                >

                </div>
            </div>
            <div className="flex-1 flex items-center justify-center h-screen">
                <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
                    <div className="">
                        {/* <img src="https://floatui.com/logo.svg" width={150} className="lg:hidden" /> */}
                        <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Sign up</h3>
                            <p className="">Already have an account? <Link href="/auth/login" className="font-medium text-primary hover:text-primary">Log in</Link></p>
                        </div>
                    </div>

                    <Main />
                </div>
            </div>
        </main>
    )
}