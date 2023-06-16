import { useState } from "react";
import server from "./server";

//  signatureR, signatureS, signatureRecovery, setSignatureR, setSignatureS, setSignatureRecovery
function Transfer({ address, setBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [signatureR,setSignatureR] = useState("");
  const [signatureS,setSignatureS] = useState("");
  const [signatureRecovery,setSignatureRecovery] = useState(0);

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    try {
      const send_req = {
        sender: address,
        amount: parseInt(sendAmount),
        recipient: recipient,
        signatureR : signatureR,
        signatureS: signatureS,
        signatureRecovery: signatureRecovery,
      }
      console.log(send_req)
      const { data: { balance }, } 
      = await server.post(`send`, send_req);
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Signature R
        <input
          placeholder="632...461n"
          value={signatureR}
          onChange={setValue(setSignatureR)}
        ></input>
      </label>
      
      <label>
        Signature S
        <input
          placeholder="172...264n"
          value={signatureS}
          onChange={setValue(setSignatureS)}
        ></input>
      </label>

      <label>
        Signature Recovery
        <input
          placeholder="0"
          value={signatureRecovery}
          onChange={setValue(setSignatureRecovery)}
        ></input>
      </label>

      <label>
        Amount
        <input
          placeholder="0"
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
