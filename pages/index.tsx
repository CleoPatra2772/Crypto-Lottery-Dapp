import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import { Loading } from '../components/Loading'
import {
  useContract,
  useMetamask,
  useDisconnect,
  useAddress,
  //useContractData,
  //useContractCall,
} from "@thirdweb-dev/react";
import { Login } from '../components/Login';



const Home: NextPage = () => {

  const address = useAddress();
  const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS)

 
  if(isLoading) return <Loading />

  if (!address) return <Login />

  

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Lucky Duck Draw</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Header />

       
      
    </div>
  )
}

export default Home
