import { ethers } from 'ethers';

/**
 *
 * @returns null if provider or wallet absent else the provider
 */
export const connect = async () => {
	const { ethereum } = window;
	if (!ethereum) {
		console.log('Error, wallet absent');
		alert('Install a wallet');
		return null;
	}

	const provider = new ethers.providers.Web3Provider(window.ethereum);

	return provider;
};

/**
 *
 * @returns connected and selected user address
 */
export const getUserAddress = async () => {
	const provider = connect();

	if (!provider) {
		console.log('provider is null');
		return null;
	}

	const signer = provider.getSigner();

	return signer !== '' ? null : signer;
};

/**
 *
 * @returns Contract object
 */
export const getContract = async () => {
	const contAdd = '';

	const contAbi = '';

	const provider = connect();

	if (!provider) {
		console.log('provider is null');
		return null;
	}

	const signer = await provider.getSigner();
	const contract = new ethers.Contract(contAdd, contAbi, signer);

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
