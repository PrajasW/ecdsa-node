const {secp256k1,Signature} = require("ethereum-cryptography/secp256k1")
const {keccak256} = require("ethereum-cryptography/keccak")
const {toHex,utf8ToBytes} = require("ethereum-cryptography/utils")

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
app.use(cors());
app.use(express.json());

// ######################
// SET UP INITIAL BALANCES HERE
const balances = {
  "02c8044b7676cd83ea4ecfc0c3994bfc8d66d541d563903c4ffb380a4481f99cb8": 100000,  //bank god
};
// ######################

// no changes made
app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});


app.post("/send", (req, res) => {  
  const { sender, recipient, amount,signatureS, signatureR, signatureRecovery } = req.body;
  
  const signature = new secp256k1.Signature(BigInt(signatureR.slice(0,-1)),BigInt(signatureS.slice(0,-1)),signatureRecovery)
  const message_hash = keccak256(utf8ToBytes(`${sender} sends ${recipient} ${amount} BTC`));
  const isSigned = secp256k1.verify(signature, message_hash, sender );
  if(isSigned){
    setInitialBalance(sender);
    setInitialBalance(recipient);
    if (balances[sender] < amount) {
      res.status(400).send({ message: "Not enough funds!" });
    } else {
      balances[sender] -= amount;
      balances[recipient] += amount;
      res.send({ balance: balances[sender] });
    }
  }
  else{
    res.status(401).send({
       message: "Unable to Verify Signature!",
       signature: signature,
       recipient: recipient,
       sender: sender,
       });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
