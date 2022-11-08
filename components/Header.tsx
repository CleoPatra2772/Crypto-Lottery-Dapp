import { NavButton } from "./navButton"
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";


interface Props {
   
}

export const Header = ({}: Props) => {
    return(
        <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
            <div className="flex items-center space-x-2">
                <img
                className="rounded-full h-15 w-20"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7xUdvo7lmyTPjipOZO8_Q4DLwpM2IZeRFg&usqp=CAU"
                alt=""
                />
            
                <div>
                <h1 className="text-lg text-white font-bold">Lucky Ducks</h1>
                <p className="text-xs text-emerald-500 truncate">User: ... </p>
            </div>
        </div>

            <div className="hidden md:flex md:col-span-3 items-center justify-center rounded-md">
                <div className="bg-[#0A1F1C] p-4 space-x-2">
                    <NavButton isActive title="Buy Tickets"/>
                    <NavButton title="Logout"/>
                </div>
            </div>

            <div className="flex flex-col ml-auto text-right">
                <Bars3BottomRightIcon className="h-9 w-8 mx-auto text-white cursor-pointer"/>
            
            <span className="md:hidden">
                <NavButton title="logout" />
            </span>
            </div>

           
        </header>
    )
}