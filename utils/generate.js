const secp = require("ethereum-cryptography/secp256k1")
const {toHex} = require("ethereum-cryptography/utils")
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hash(message) {
    message = keccak256(utf8ToBytes(message))
    return message
}


const private_key = hash(toHex(secp.secp256k1.utils.randomPrivateKey()));

console.log('private_key : ', toHex(private_key))

const public_key = secp.secp256k1.getPublicKey(private_key);
// const public_key = secp.secp256k1.getPublicKey("asdf");

console.log('public_key : ', toHex(public_key))

function getAddress(publicKey) {
    const sliced_publickey = publicKey.slice(1)
    const hash_sliced_publickey = keccak256(sliced_publickey)
    const address = hash_sliced_publickey.slice(12)
    return address
}

const address = getAddress(public_key)

console.log('Address : ', toHex(address))