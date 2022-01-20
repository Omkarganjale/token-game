const hre = require('hardhat');

async function main() {
	const PurchaseToken = await hre.ethers.getContractFactory('PurchaseToken');
	const purchaseToken = await PurchaseToken.deploy();
	await purchaseToken.deployed();
	console.log('Purchase Token address: ', purchaseToken.address);

	const TokenGame = await hre.ethers.getContractFactory('TokenGame');
	const tokenGame = await TokenGame.deploy(purchaseToken.address);
	await tokenGame.deployed();
	console.log('TokenGame address: ', tokenGame.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
