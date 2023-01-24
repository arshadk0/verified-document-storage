import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import "./App.css";
import { ethers } from "ethers";
import React, { useState } from "react";
import Header from "./components/Header";
import contract_abi from "./contract_abi.json";
import Spinner from "react-bootstrap/Spinner";
import Upload from "./Upload.js"
import Home from "./Home.js"
const CONTRACT_ADDRESS = "0x5c950F8CF6613779F0E897E5793b1881fE4f05eA";



function App() {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  const connectWalletHandler = async () => {
    if (!window.ethereum) {
      alert("Need to install Metamask!");
    }
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        setAccount(accounts[0]);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        const signer = provider.getSigner();
        setSigner(signer);
        setLoading(false);
        connectContract(signer);
      });
  };

  const connectContract = async (signer) => {
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      contract_abi,
      signer
    );
    setContract(contract);
  };

  return (
    <BrowserRouter>
    <div>
      <Header account={account} onConnect={connectWalletHandler} />
      {loading ? (
        <div  className="mx-auto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <div className="flex" style={{ position: 'relative', left:4, top:18}}>
        <p className="ms-2 fontt">Awaiting Metamask connection...</p>
        <p className="ms-4 fontt-bold">Click "Connect Wallet"</p>
        </div>
       </div>
      ) : (
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/upload" element={<Upload account={account} contract={contract}/>} />
        </Routes>
      )}
    </div>
    </BrowserRouter>
  );
}

export default App;
