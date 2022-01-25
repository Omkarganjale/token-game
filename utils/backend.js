import { ethers } from 'ethers';

/**
 *
 * @returns null if provider or wallet absent else the provider
 */
export const connect = async () => {
	const provider = new AlchemyProvider('rinkeby', ALCHEMY_API_KEY);

	return ethers.Wallet(PRIV_KEY, provider);
};

/**
 *
 * @returns connected and selected user address
 */
export const getUserAddress = async () => {
	const wallet = connect();

	if (!wallet) {
		console.log('provider is null');
		return null;
	}

	const userAdd = wallet.address;

	return userAdd;
};

/**
 *
 * @returns Contract object
 */
export const getContract = async () => {
	const contAdd = '';

	const contAbi = '';

	const wallet = connect();

	if (!wallet) {
		console.log('provider is null');
		return null;
	}

	const contract = new ethers.Contract(contAdd, contAbi, wallet);

	return contract;
};

/**
 * Contract wrapper object can be used to invoke smart contract functions using following syntax:
 * 1) Calling
 * contractObj.name();
 *
 * 2) Signing a Tx
 * contractObj.connect(signer);
 * contractObj.transfer(_to, amount);
 */
