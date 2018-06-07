import {Validator} from 'jsonschema';
import {multihash} from 'is-ipfs';
import {Buffer} from 'safe-buffer';
import {isValidAddress, isValidChecksumAddress} from 'ethereumjs-util';

// ethereum address validation
Validator.prototype.customFormats['address'] = function (input) {
    if (input) {
        return isValidAddress(input);
    }
    return true;
};

// checksummed ethereum address validation
Validator.prototype.customFormats['checkSummedAddress'] = function (input) {
    return isValidChecksumAddress(input);

};

// ipfs multihash validation
Validator.prototype.customFormats['multihash'] = function (input) {
    return multihash(input);
};

// Buffer type validation
Validator.prototype.customFormats['buffer'] = function (input) {
    return Buffer.isBuffer(input);

};

// will add more over the time
export default Validator;
