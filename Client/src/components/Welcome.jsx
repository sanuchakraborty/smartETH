import React, { useContext }  from 'react'
import { AiFillPlayCircle } from "react-icons/ai"
import image from "../../images/image.png";
import { TransactionContext } from "../context/TransactionContext";
const companyCommonStyles = "min-h-[100px] w- sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


const Welcome = () => {
    const {currentAccount, connectWallet}=useContext(TransactionContext);

    
  return (
    <div id="welcome" className="flex w-full justify-center ">
      <div className="mb-[60px] flex flex-row items-center justify-between md:p-20 py-2 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="px-10 text-8xl sm:text-5xl text-red text-gradient py-8 ml-10">
            <h1 className="text-10xl sm:text-5xl text-center -tm-2">Transfer Crypto Through<br /> <br /> smartETH<br></br></h1>
          </h1>
          <h3 className="-px-14 ml-20 text-center mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world <br /> Buy and sell cryptocurrencies easily on<h2 className="text-orange-600 text-xl">smartETH</h2> 
          </h3>

          {!currentAccount && (
            <button 
              type="button"
              onClick={connectWallet}
              className="ml-52 flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className=" text-white text-base font-semibold">
                Connect Your Wallet
              </p>
            </button>
          )}
          {currentAccount && (
            <button 
              type="button"
              className="ml-52 flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className=" text-white text-base font-semibold">
                Metamask Wallet Connected
              </p>
            </button>
          )}


          <br />
          <br />
      
        

        
            <div className=" w-[170%]  mb-0 mt-0 items-start">
            <div className="ml-28 grid sm:grid-cols-3 grid-cols-2 mt-10">
                <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
                Web 3.0
                </div>
            <div className={companyCommonStyles}>Blockchain</div>
                <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
                    Ethereum
                </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
                 Security
            </div>
            <div className={companyCommonStyles}>Reliability</div>
                <div className={`rounded-br-2xl ${companyCommonStyles}`}>
                    Low Charges
                </div>
                
                </div>
            </div>
            {/* <div  className="items-end mt-10 ml-0">
             <span className="   place-items-end text-orange-500"><a href='./Downloadable.txt' download>Click here</a></span>
               <span className="  text-white">  to downoad the guidelines if you want to test sending Ethereum on a test network</span> 
              
             </div> */}
        </div>

      </div> 
      <div>
      <img src={image} alt="logo" className="w-90 h-80 mt-28 mb-0 mr-20 " />
      </div>
      
      </div>

    
  )
}
export default Welcome;
