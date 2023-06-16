import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  // address is the public_key
  const [address, setAddress] = useState("");
  // const [signatureR,setSignatureR] = useState("");
  // const [signatureS,setSignatureS] = useState("");
  // const [signatureRecovery,setSignatureRecovery] = useState(0);

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
      />
      <Transfer 
        setBalance={setBalance}
        address={address}
        
        // signatureR = {signatureR}
        // signatureS = {signatureS}
        // signatureRecovery = {signatureRecovery}

        // setSignatureR = {setSignatureR}
        // setSignatureS = {setSignatureS}
        // setSignatureRecovery = {setSignatureRecovery}
        />
    </div>
  );
}

export default App;
