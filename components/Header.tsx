import { NavButton } from "./NavButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

interface Props {
   
}

export const Header = ({}: Props) => {
    const address = useAddress();
    const disconnect = useDisconnect();

    return(
        <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
            <div className="flex items-center space-x-2">
                <img
                className="rounded-full h-15 w-20"
                src="https://ih1.redbubble.net/image.2110784472.0513/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                alt=""
                />
            
                <div>
                <h1 className="text-lg text-white font-bold">Lucky Ducks</h1>
                <p className="text-xs text-emerald-500 truncate">User: {address?.substring(0,5)}...{address?.substring(address.length, address.length - 5)} </p>
            </div>
        </div>

            <div className="hidden md:flex md:col-span-3 items-center justify-center rounded-md">
                <div className="bg-[#0A1F1C] p-4 space-x-2">
                    <NavButton isActive title="Buy Tickets"/>
                    <NavButton onClick={disconnect}title="Logout"/>
                </div>
            </div>

            <div className="flex flex-col ml-auto text-right">
                <Bars3BottomRightIcon className="h-9 w-8 mx-auto text-white cursor-pointer"/>
            
            <span className="md:hidden">
                <NavButton onClick={disconnect} title="logout" />
            </span>
            </div>

           
        </header>
    )
}