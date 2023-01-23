import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

const Upload = () => {
   const [category, setCategory] = useState("");
   const [type, setType] = useState("");
   const [description, setDescription] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
  return (
    <div  style={{ justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }} >

     <p>Category :</p>
      <input
        name='category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

    <p>Type :</p>
      <input
        name='type'
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

    <p>Desc :</p>
      <input
        name='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />


      <p>Name :</p>
      <input
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='eg : Enter the file name'
      />
      
       <p>Email :</p>
      <input
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

        {/* <Button onClick={inputFileHandler}>
          {selectedFile ? "Remove File" : "Upload File"}
          <input
            ref={inputFileRef}
            style={{ display: "none" }}
            type='file'
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </Button>

        <Button
        style={headbtns_wrapper_btn}
        text='Mint NFT'
        onClick={mintNFThandler}
      >
        {btnBusy ? <Spinner /> : "Store"}
      </Button> */}

    </div>
  )
}

export default Upload