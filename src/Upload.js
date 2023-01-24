import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { useIPFS } from "./context/ipfs/IPFSContext";

const Upload = ({account,contract}) => {
   const [category, setCategory] = useState("");
   const [type, setType] = useState("");
   const [description, setDescription] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [file, setFile] = useState()

   const { IPFSuploading, IPFSerror, IPFSupload } = useIPFS();


  function handleFileChange(event){
    setFile(event.target.files[0])
  }

  async function mintNFThandler() {
    if (!name) {
      return alert("Name cannot be empty")
    } else if (!description) {
      return alert("description cannot be empty")
    } else if (!file) {
      return alert("no file has been selected")
    }

    let address = await contract.signer.getAddress()

    try {
      const metadataUrl = await IPFSupload(
        {
          name: name,
          email: email,
          category: category,
          type: type,
          description: description,
        },
        file
      );
     // await mintNFT(metadataUrl, NFTAddress.value, address);
      alert("Mint Successful")

      // reset inputs
      setName("");
      setDescription("");
      setCategory("");
      setEmail("");
      setType("");
      setFile(null);
    } catch (error) {
      //console.error(error);
      alert("NFT Minting Failed");
    }
  }

  return (
    <div style={{display: 'flex', flexdirection: 'column'}}>
    <form>
      <label>Category:
        <input 
          type="text" 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <br></br>
      <label>Type:
        <input 
          type="type" 
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </label>
      <br></br>
      <label>Description:
        <input 
          type="description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br></br>
      <label>Name:
        <input 
          type="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br></br>
      <label>Email:
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br></br>
      <label>File:
        <input
            type="file"
            value={file}
            onChange={handleFileChange}
            />
      </label>
      <br></br>
      <br></br>
      <button onClick={mintNFThandler} >Upload File to IPFS</button>
    </form>
    </div>
  )
}

export default Upload