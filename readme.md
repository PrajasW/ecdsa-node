## ECDSA NODE
This project will describe how transactions work on the blockchain.
> The network is still centralized as you are running it on your device, so it doesn't replicate blockchains but gives us a basic idea.
 
### Client
The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

#### Transctions
To make a transaction you will need to put in your public key the reciver's public key, amount you want to transfer and a message signed with your public key.

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

> You may edit the `server/index.js` file and change the initial balances there

## Utils
To get started:
1. Open a terminal within the `/utils` folder 
2. Run `npm install` to install all the depedencies 

To send and recive funds you would need to set up a wallet
### Generate A Wallet
```bash
node generate.js
```
to generate a private key and a private key and address
> Keep this private key secret and DO NOT SHARE IT

### Signature

Make changes in utils/sign.js and put your private key, reciver's public key and the amount you want to send.

You will recive a signed messaage keep note of the *r,s and recovery* as you will need it to enter it when you send a transaction

```bash
node sign.js

Signature {
  r: 10187057734768772572151456624558235510282114055562821402096535102789086376466n,
  s: 41671454139765189342066431228164223132116482590945543039638384294043040072716n,
  recovery: 1
}
```

## Transaction
![image](https://github.com/PrajasW/ecdsa-node/assets/74056138/6368ccd3-5877-4c81-8ba3-49efca38337c)
