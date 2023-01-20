import './App.css';
import { ethers } from "ethers";
import React, { useState } from "react";
import Header from './components/Header';
import contract_abi from './contract_abi.json'
const CONTRACT_ADDRESS = "0x5c950F8CF6613779F0E897E5793b1881fE4f05eA"

function App() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  
  const connectWalletHandler = async () => {
    if (!window.ethereum) {
      alert("Need to install Metamask!");
    }
    window.ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
      setAccount(accounts[0]);
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      setProvider(provider);
      const signer = provider.getSigner();
      setSigner(signer);
      connectContract(signer)
    });
  }

  const connectContract = async (signer) => {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, contract_abi, signer);
    setContract(contract)
  }

  return (
    <div className="App">
      <Header account={account} onConnect={connectWalletHandler} />
    </div>
  );
}

export default App;