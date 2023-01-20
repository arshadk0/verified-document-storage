import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";
import React, { useState } from "react";
import Header from './components/Header';

function App() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

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
    });
  }
  return (
    <div className="App">
      <Header account={account} onConnect={connectWalletHandler} />
    </div>
  );
}

export default App;