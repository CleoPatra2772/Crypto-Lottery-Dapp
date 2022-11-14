import{
    StarIcon,
    CurrencyDollarIcon,
    ArrowPathIcon,
    ArrowUturnDownIcon,
} from "@heroicons/react/24/solid";
import {
    useContract,
    useMetamask,
    useDisconnect,
    useAddress,
    useContractRead,
    useContractWrite,
  } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import { currency } from "../constants";

export const AdminControls = () => {

    const { contract, isLoading } = useContract(
        process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
    );

    const { data: totalCommission } = useContractRead(
        contract,
        "operatorTotalCommission"
    );

    const { mutateAsync: RefundAll } = useContractWrite(
        contract,
        "RefundAll"
    );

    const { mutateAsync: restartDraw } = useContractWrite(
        contract,
        "restartDraw"
    );

    const { mutateAsync: DrawWinnerTicket } = useContractWrite(
        contract,
        "DrawWinnerTicket"
    );

    const { mutateAsync: WithdrawCommission} = useContractWrite(
        contract,
        "WithdrawCommission"
    );

    const onDrawWinner = async () => {
        const notification = toast.loading("Pick a Lucky Duck !");

        try{
            const data = await DrawWinnerTicket([{}]);

            toast.success("A Lucky Duck has been selected", {
                id: notification,
            });
            console.info("contract call success", data);
        } catch(err){
            toast.error("Whoops! Something went wrong!", {
                id: notification,
            });

            console.error("contract call failed", err);
        }
    };

    const onRestartDraw = async () => {
        const notification = toast.loading("Restarting the draw . . .");

        try{
            const data = await restartDraw([{}]);

            toast.success("Successfully restarted the draw!", {
                id: notification,
            });
            console.info("contract call success", data);
        } catch(err){
            toast.error("Whoops! Something went wrong!", {
                id: notification,
            });

            console.error("contract call failed", err);
        }
    };

    const onRefundAll = async () => {
        const notification = toast.loading("Refunding . . .");

        try{
            const data = await RefundAll([{}]);

            toast.success("Your have refunded successfully!", {
                id: notification,
            });
            console.info("contract call success", data);
        } catch(err){
            toast.error("Whoops! Something went wrong!", {
                id: notification,
            });

            console.error("contract call failed", err);
        }
    };
    
    const onWithdrawCommission = async () => {
        const notification = toast.loading("Withdrawing commission . . .");

        try{
            const data = await WithdrawCommission([{}]);

            toast.success("Your commission has been withdrawn successfully!", {
                id: notification,
            });
            console.info("contract call success", data);
        } catch(err){
            toast.error("Whoops! Something went wrong!", {
                id: notification,
            });

            console.error("contract call failed", err);
        }
    };



    return (
    <div className="text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border">
        <h2 className="font-bold">Admin Controls</h2>
        <p className="mb-5">Total Commission to be withdrawn: {" "}
        {totalCommission && ethers.utils.formatEther(totalCommission?.toString())} {" "}
        {currency}</p>

        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <button className="admin-button" onClick={onDrawWinner}>
                <StarIcon className="h-6 mx-auto mb-2 "/>
                Draw Winner</button>
            <button className="admin-button" onClick={onWithdrawCommission}>
                <CurrencyDollarIcon className="h-6 mx-auto mb-2 "/>
                Withdraw Commission</button>
            <button className="admin-button" onClick={onRestartDraw} >
                <ArrowPathIcon className="h-6 mx-auto mb-2"/>
                Restart the Draw</button>
            <button className="admin-button" onClick={onRefundAll}>
                <ArrowUturnDownIcon className="h-6 mx-auto mb-2"/>
                Refund All</button>
        </div>
    </div>
    )
}