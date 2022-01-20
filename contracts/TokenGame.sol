// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenGame is  ERC721, ERC721URIStorage, Ownable {

    // Tokens used to purchase NFTs
    ERC20 public purchaseToken; 

    constructor ( ERC20 purchaseToken_) ERC721("OGan NFTverse", "OGN") {
        setPurchaseTokenAddress(purchaseToken_);
    }

    function setPurchaseTokenAddress(ERC20 _purchaseToken) public onlyOwner {
        purchaseToken = _purchaseToken;
    }

    function safeMint(address _to, uint256 tokenId, string memory uri) public onlyOwner {
        _safeMint(_to, tokenId);
        _setTokenURI( tokenId, uri);
    }

    function transferCards(uint256 price, address receiver, uint256[] memory tokenIds)public onlyOwner{
        require(purchaseToken.allowance(receiver, address(this))>=price, "Allowance lower than pack price");
        purchaseToken.transferFrom(receiver, address(this), price);
        uint256 cnt = 0;
        for(cnt = 0; cnt<tokenIds.length; cnt++){
            safeTransferFrom(msg.sender, receiver, tokenIds[cnt]);
        }
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
