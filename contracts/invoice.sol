var sha256 = require('js-sha256');
##web3 send the eth transaction with hash of the order and the payment paymentAddress

##create variable orderHash
var orderHash = sha256(rawOrder);

##create variable paymentAddress
var paymentAddress = "0x72bee3ec321A76C4b796E413E7083A8cDb3b80fb"

##sha256

web3.eth.sendTransaction(orderHash, paymentAddress [, callback])
