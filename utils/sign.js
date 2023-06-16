const { keccak256 } = require('ethereum-cryptography/keccak');
const {secp256k1} = require('ethereum-cryptography/secp256k1');
const { toHex, utf8ToBytes } = require('ethereum-cryptography/utils');

// #####################################
// fill in the info here
const privateKey = "a69493917180ed2905be211d748fd72babbbe4168a5a776282889c5a097bcfc7";
const target = "0368a46f1db66c83882a1ff7c6930fd28b63430441b9a74a994b22b0c37f3f57c8"
const amount = 69
// #####################################

const publicKey = secp256k1.getPublicKey(privateKey);

const message = `${toHex(publicKey)} sends ${target} ${amount} BTC`;
const messageHash = keccak256(utf8ToBytes(message));

const signature = secp256k1.sign(messageHash, privateKey);
// to verify the signature
const isSigned = secp256k1.verify(signature, messageHash, publicKey);

console.log(signature)
