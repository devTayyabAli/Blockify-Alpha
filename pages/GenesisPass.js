import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { TitleText } from '../components';
import Genesis from '../Assets/Genesis pass.png'


const Mint=() =>(
  <div className="md:max-w-3xl glass filter backdrop-blur-sm py-4 rounded-md px-20 md:px-20 flex flex-col items-center redeem_div">
  <h1 className="uppercase font-bold text-white text-xl md:text-xl bg-gradient-to-br bg-clip-text mt-3 top_title_withoutAddress">
    Claim your genesis pass
  </h1>
  <TitleText title={<>Pass Token for Blockify</>} textStyles="text-center" />

  <img src="/get-started.png" alt="" className="genesis_img" />

  <w3m-button />
  {/* <button
        className="bg-[#000000] text-[#ffffff] mt-6 mb-2 border-2 border-[#5F2EEA] px-8 py-4 text-xl font-bold hover:bg-[#5F2EEA] hover:text-[#ffffff] genesis_pass_connect_btn"
        onClick={handleConnectWallet}
      >
        Connect Wallet
      </button> */}
</div>
)
export default Mint;




