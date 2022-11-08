import Image from "next/image";
import duck from "../public/duck.jpeg";
import { useMetamask } from "@thirdweb-dev/react";


export const Login = () => {
    const connectMetaMask = useMetamask();

    return(
        <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center mb-10">
                <Image src={duck}
                alt='logo'
                className="rounded-full h-56 w-56 mb-10"
                 />

                 <h1 className="text-6xl text-white font-bold">THE LUCKY DUCK DRAW</h1>
                 <h2 className="text-white pt-6">Get Started by Connecting with your MetaMask</h2>

                 <button className= "bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold" onClick={connectMetaMask}>Login with MetaMask</button>
            </div>
        </div>
    )
}