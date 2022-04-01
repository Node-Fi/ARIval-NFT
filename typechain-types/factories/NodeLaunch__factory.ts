/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NodeLaunch, NodeLaunchInterface } from "../NodeLaunch";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_initBaseURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseExtension",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cost",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxMintAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_mintAmount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newBaseExtension",
        type: "string",
      },
    ],
    name: "setBaseExtension",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newBaseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newCost",
        type: "uint256",
      },
    ],
    name: "setCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newmaxMintAmount",
        type: "uint256",
      },
    ],
    name: "setmaxMintAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "walletOfOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040526005608081905264173539b7b760d91b60a09081526200002891600c91906200084f565b506000600d55612710600e556064600f556010805460ff191690553480156200005057600080fd5b50604051620033ec380380620033ec8339810160408190526200007391620009b5565b8251839083906200008c9060009060208501906200084f565b508051620000a29060019060208401906200084f565b505050620000bf620000b9620000e060201b60201c565b620000e4565b620000ca8162000136565b620000d73360646200019e565b50505062000ce2565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b62000140620000e0565b6001600160a01b03166200015362000274565b6001600160a01b031614620001855760405162461bcd60e51b81526004016200017c9062000ba0565b60405180910390fd5b80516200019a90600b9060208401906200084f565b5050565b6000620001aa62000283565b60105490915060ff1615620001be57600080fd5b60008211620001cc57600080fd5b600f54821115620001dc57600080fd5b600e54620001eb838362000bd5565b1115620001f757600080fd5b6200020162000274565b6001600160a01b0316336001600160a01b031614620002375781600d546200022a919062000bf0565b3410156200023757600080fd5b60015b8281116200026e57620002598462000253838562000bd5565b62000289565b80620002658162000c98565b9150506200023a565b50505050565b600a546001600160a01b031690565b60085490565b6200019a828260405180602001604052806000815250620002ab60201b60201c565b620002b78383620002ea565b620002c66000848484620003df565b620002e55760405162461bcd60e51b81526004016200017c9062000a98565b505050565b6001600160a01b038216620003135760405162461bcd60e51b81526004016200017c9062000b6b565b6200031e8162000518565b156200033e5760405162461bcd60e51b81526004016200017c9062000aea565b6200034c6000838362000535565b6001600160a01b03821660009081526003602052604081208054600192906200037790849062000bd5565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a46200019a60008383620002e5565b600062000400846001600160a01b0316620005d960201b62000f161760201c565b156200050c576001600160a01b03841663150b7a026200041f620000e0565b8786866040518563ffffffff1660e01b815260040162000443949392919062000a42565b602060405180830381600087803b1580156200045e57600080fd5b505af192505050801562000491575060408051601f3d908101601f191682019092526200048e9181019062000984565b60015b620004f1573d808015620004c2576040519150601f19603f3d011682016040523d82523d6000602084013e620004c7565b606091505b508051620004e95760405162461bcd60e51b81526004016200017c9062000a98565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905062000510565b5060015b949350505050565b6000908152600260205260409020546001600160a01b0316151590565b6200054d838383620002e560201b620007f21760201c565b6001600160a01b0383166200056d576200056781620005e8565b62000593565b816001600160a01b0316836001600160a01b03161462000593576200059383826200062c565b6001600160a01b038216620005b357620005ad81620006d9565b620002e5565b826001600160a01b0316826001600160a01b031614620002e557620002e58282620007b7565b6001600160a01b03163b151590565b600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6000600162000646846200080860201b62000c521760201c565b62000652919062000c12565b600083815260076020526040902054909150808214620006a6576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090620006ed9060019062000c12565b600083815260096020526040812054600880549394509092849081106200072457634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600883815481106200075457634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806200079b57634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000620007cf836200080860201b62000c521760201c565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b60006001600160a01b038216620008335760405162461bcd60e51b81526004016200017c9062000b21565b506001600160a01b031660009081526003602052604090205490565b8280546200085d9062000c5b565b90600052602060002090601f016020900481019282620008815760008555620008cc565b82601f106200089c57805160ff1916838001178555620008cc565b82800160010185558215620008cc579182015b82811115620008cc578251825591602001919060010190620008af565b50620008da929150620008de565b5090565b5b80821115620008da5760008155600101620008df565b600082601f83011262000906578081fd5b81516001600160401b038082111562000923576200092362000ccc565b604051601f8301601f19908116603f011681019082821181831017156200094e576200094e62000ccc565b8160405283815286602085880101111562000967578485fd5b6200097a84602083016020890162000c2c565b9695505050505050565b60006020828403121562000996578081fd5b81516001600160e01b031981168114620009ae578182fd5b9392505050565b600080600060608486031215620009ca578182fd5b83516001600160401b0380821115620009e1578384fd5b620009ef87838801620008f5565b9450602086015191508082111562000a05578384fd5b62000a1387838801620008f5565b9350604086015191508082111562000a29578283fd5b5062000a3886828701620008f5565b9150509250925092565b600060018060a01b03808716835280861660208401525083604083015260806060830152825180608084015262000a818160a085016020870162000c2c565b601f01601f19169190910160a00195945050505050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000821982111562000beb5762000beb62000cb6565b500190565b600081600019048311821515161562000c0d5762000c0d62000cb6565b500290565b60008282101562000c275762000c2762000cb6565b500390565b60005b8381101562000c4957818101518382015260200162000c2f565b838111156200026e5750506000910152565b60028104600182168062000c7057607f821691505b6020821081141562000c9257634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141562000caf5762000caf62000cb6565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6126fa8062000cf26000396000f3fe6080604052600436106101fe5760003560e01c806355f804b31161011d57806395d89b41116100b0578063c87b56dd1161007f578063da3ef23f11610064578063da3ef23f14610571578063e985e9c514610591578063f2fde38b146105b1576101fe565b8063c87b56dd1461053c578063d5abeb011461055c576101fe565b806395d89b41146104d2578063a22cb465146104e7578063b88d4fde14610507578063c668286214610527576101fe565b806370a08231116100ec57806370a0823114610468578063715018a6146104885780637f00c7a61461049d5780638da5cb5b146104bd576101fe565b806355f804b3146103fe5780635c975abb1461041e5780636352211e146104335780636c0360eb14610453576101fe565b806323b872dd1161019557806342842e0e1161016457806342842e0e14610371578063438b63001461039157806344a0d68a146103be5780634f6ccce7146103de576101fe565b806323b872dd146103165780632f745c59146103365780633ccfd60b1461035657806340c10f191461035e576101fe565b8063095ea7b3116101d1578063095ea7b3146102aa57806313faede6146102ca57806318160ddd146102ec578063239c70ae14610301576101fe565b806301ffc9a71461020357806302329a291461023957806306fdde031461025b578063081812fc1461027d575b600080fd5b34801561020f57600080fd5b5061022361021e366004611ce7565b6105d1565b6040516102309190611eff565b60405180910390f35b34801561024557600080fd5b50610259610254366004611ccd565b61062f565b005b34801561026757600080fd5b5061027061068a565b6040516102309190611f0a565b34801561028957600080fd5b5061029d610298366004611d65565b61071c565b6040516102309190611e6b565b3480156102b657600080fd5b506102596102c5366004611ca4565b61075f565b3480156102d657600080fd5b506102df6107f7565b604051610230919061250b565b3480156102f857600080fd5b506102df6107fd565b34801561030d57600080fd5b506102df610803565b34801561032257600080fd5b50610259610331366004611bc7565b610809565b34801561034257600080fd5b506102df610351366004611ca4565b610841565b610259610893565b61025961036c366004611ca4565b6108f8565b34801561037d57600080fd5b5061025961038c366004611bc7565b6109b8565b34801561039d57600080fd5b506103b16103ac366004611b7b565b6109d3565b6040516102309190611ebb565b3480156103ca57600080fd5b506102596103d9366004611d65565b610a91565b3480156103ea57600080fd5b506102df6103f9366004611d65565b610ad5565b34801561040a57600080fd5b50610259610419366004611d1f565b610b30565b34801561042a57600080fd5b50610223610b86565b34801561043f57600080fd5b5061029d61044e366004611d65565b610b8f565b34801561045f57600080fd5b50610270610bc4565b34801561047457600080fd5b506102df610483366004611b7b565b610c52565b34801561049457600080fd5b50610259610c96565b3480156104a957600080fd5b506102596104b8366004611d65565b610cdf565b3480156104c957600080fd5b5061029d610d23565b3480156104de57600080fd5b50610270610d32565b3480156104f357600080fd5b50610259610502366004611c7b565b610d41565b34801561051357600080fd5b50610259610522366004611c02565b610d53565b34801561053357600080fd5b50610270610d8c565b34801561054857600080fd5b50610270610557366004611d65565b610d99565b34801561056857600080fd5b506102df610e1f565b34801561057d57600080fd5b5061025961058c366004611d1f565b610e25565b34801561059d57600080fd5b506102236105ac366004611b95565b610e77565b3480156105bd57600080fd5b506102596105cc366004611b7b565b610ea5565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d63000000000000000000000000000000000000000000000000000000001480610627575061062782610f25565b90505b919050565b610637610fc7565b6001600160a01b0316610648610d23565b6001600160a01b0316146106775760405162461bcd60e51b815260040161066e90612362565b60405180910390fd5b6010805460ff1916911515919091179055565b606060008054610699906125cc565b80601f01602080910402602001604051908101604052809291908181526020018280546106c5906125cc565b80156107125780601f106106e757610100808354040283529160200191610712565b820191906000526020600020905b8154815290600101906020018083116106f557829003601f168201915b5050505050905090565b600061072782610fcb565b6107435760405162461bcd60e51b815260040161066e90612305565b506000908152600460205260409020546001600160a01b031690565b600061076a82610b8f565b9050806001600160a01b0316836001600160a01b0316141561079e5760405162461bcd60e51b815260040161066e906123f4565b806001600160a01b03166107b0610fc7565b6001600160a01b031614806107cc57506107cc816105ac610fc7565b6107e85760405162461bcd60e51b815260040161066e906121b9565b6107f28383610fe8565b505050565b600d5481565b60085490565b600f5481565b61081a610814610fc7565b8261106e565b6108365760405162461bcd60e51b815260040161066e90612451565b6107f28383836110f3565b600061084c83610c52565b821061086a5760405162461bcd60e51b815260040161066e90611f1d565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b61089b610fc7565b6001600160a01b03166108ac610d23565b6001600160a01b0316146108d25760405162461bcd60e51b815260040161066e90612362565b60405133904780156108fc02916000818181858888f193505050506108f657600080fd5b565b60006109026107fd565b60105490915060ff161561091557600080fd5b6000821161092257600080fd5b600f5482111561093157600080fd5b600e5461093e8383612520565b111561094957600080fd5b610951610d23565b6001600160a01b0316336001600160a01b0316146109835781600d54610977919061254c565b34101561098357600080fd5b60015b8281116109b2576109a08461099b8385612520565b61123e565b806109aa81612607565b915050610986565b50505050565b6107f283838360405180602001604052806000815250610d53565b606060006109e083610c52565b905060008167ffffffffffffffff811115610a0b57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610a34578160200160208202803683370190505b50905060005b82811015610a8957610a4c8582610841565b828281518110610a6c57634e487b7160e01b600052603260045260246000fd5b602090810291909101015280610a8181612607565b915050610a3a565b509392505050565b610a99610fc7565b6001600160a01b0316610aaa610d23565b6001600160a01b031614610ad05760405162461bcd60e51b815260040161066e90612362565b600d55565b6000610adf6107fd565b8210610afd5760405162461bcd60e51b815260040161066e906124ae565b60088281548110610b1e57634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b610b38610fc7565b6001600160a01b0316610b49610d23565b6001600160a01b031614610b6f5760405162461bcd60e51b815260040161066e90612362565b8051610b8290600b906020840190611a45565b5050565b60105460ff1681565b6000818152600260205260408120546001600160a01b0316806106275760405162461bcd60e51b815260040161066e90612273565b600b8054610bd1906125cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610bfd906125cc565b8015610c4a5780601f10610c1f57610100808354040283529160200191610c4a565b820191906000526020600020905b815481529060010190602001808311610c2d57829003601f168201915b505050505081565b60006001600160a01b038216610c7a5760405162461bcd60e51b815260040161066e90612216565b506001600160a01b031660009081526003602052604090205490565b610c9e610fc7565b6001600160a01b0316610caf610d23565b6001600160a01b031614610cd55760405162461bcd60e51b815260040161066e90612362565b6108f66000611258565b610ce7610fc7565b6001600160a01b0316610cf8610d23565b6001600160a01b031614610d1e5760405162461bcd60e51b815260040161066e90612362565b600f55565b600a546001600160a01b031690565b606060018054610699906125cc565b610b82610d4c610fc7565b83836112c2565b610d64610d5e610fc7565b8361106e565b610d805760405162461bcd60e51b815260040161066e90612451565b6109b284848484611365565b600c8054610bd1906125cc565b6060610da482610fcb565b610dc05760405162461bcd60e51b815260040161066e90612397565b6000610dca611398565b90506000815111610dea5760405180602001604052806000815250610e18565b80610df4846113a7565b600c604051602001610e0893929190611da9565b6040516020818303038152906040525b9392505050565b600e5481565b610e2d610fc7565b6001600160a01b0316610e3e610d23565b6001600160a01b031614610e645760405162461bcd60e51b815260040161066e90612362565b8051610b8290600c906020840190611a45565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610ead610fc7565b6001600160a01b0316610ebe610d23565b6001600160a01b031614610ee45760405162461bcd60e51b815260040161066e90612362565b6001600160a01b038116610f0a5760405162461bcd60e51b815260040161066e90611fd7565b610f1381611258565b50565b6001600160a01b03163b151590565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480610fb857507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806106275750610627826114f6565b3390565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038416908117909155819061103582610b8f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061107982610fcb565b6110955760405162461bcd60e51b815260040161066e9061215c565b60006110a083610b8f565b9050806001600160a01b0316846001600160a01b031614806110db5750836001600160a01b03166110d08461071c565b6001600160a01b0316145b806110eb57506110eb8185610e77565b949350505050565b826001600160a01b031661110682610b8f565b6001600160a01b03161461112c5760405162461bcd60e51b815260040161066e90612034565b6001600160a01b0382166111525760405162461bcd60e51b815260040161066e906120c8565b61115d838383611540565b611168600082610fe8565b6001600160a01b0383166000908152600360205260408120805460019290611191908490612589565b90915550506001600160a01b03821660009081526003602052604081208054600192906111bf908490612520565b909155505060008181526002602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a46107f28383836107f2565b610b828282604051806020016040528060008152506115c9565b600a80546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031614156112f45760405162461bcd60e51b815260040161066e90612125565b6001600160a01b0383811660008181526005602090815260408083209487168084529490915290819020805460ff1916851515179055517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190611358908590611eff565b60405180910390a3505050565b6113708484846110f3565b61137c848484846115fc565b6109b25760405162461bcd60e51b815260040161066e90611f7a565b6060600b8054610699906125cc565b6060816113e8575060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015261062a565b8160005b811561141257806113fc81612607565b915061140b9050600a83612538565b91506113ec565b60008167ffffffffffffffff81111561143b57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611465576020820181803683370190505b5090505b84156110eb5761147a600183612589565b9150611487600a86612640565b611492906030612520565b60f81b8183815181106114b557634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506114ef600a86612538565b9450611469565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b61154b8383836107f2565b6001600160a01b0383166115675761156281611748565b61158a565b816001600160a01b0316836001600160a01b03161461158a5761158a838261178c565b6001600160a01b0382166115a6576115a181611829565b6107f2565b826001600160a01b0316826001600160a01b0316146107f2576107f28282611902565b6115d38383611946565b6115e060008484846115fc565b6107f25760405162461bcd60e51b815260040161066e90611f7a565b6000611610846001600160a01b0316610f16565b1561173d57836001600160a01b031663150b7a0261162c610fc7565b8786866040518563ffffffff1660e01b815260040161164e9493929190611e7f565b602060405180830381600087803b15801561166857600080fd5b505af1925050508015611698575060408051601f3d908101601f1916820190925261169591810190611d03565b60015b6116f2573d8080156116c6576040519150601f19603f3d011682016040523d82523d6000602084013e6116cb565b606091505b5080516116ea5760405162461bcd60e51b815260040161066e90611f7a565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001490506110eb565b506001949350505050565b600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6000600161179984610c52565b6117a39190612589565b6000838152600760205260409020549091508082146117f6576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061183b90600190612589565b6000838152600960205260408120546008805493945090928490811061187157634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600883815481106118a057634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806118e657634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b600061190d83610c52565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160a01b03821661196c5760405162461bcd60e51b815260040161066e906122d0565b61197581610fcb565b156119925760405162461bcd60e51b815260040161066e90612091565b61199e60008383611540565b6001600160a01b03821660009081526003602052604081208054600192906119c7908490612520565b909155505060008181526002602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4610b82600083836107f2565b828054611a51906125cc565b90600052602060002090601f016020900481019282611a735760008555611ab9565b82601f10611a8c57805160ff1916838001178555611ab9565b82800160010185558215611ab9579182015b82811115611ab9578251825591602001919060010190611a9e565b50611ac5929150611ac9565b5090565b5b80821115611ac55760008155600101611aca565b600067ffffffffffffffff80841115611af957611af9612680565b604051601f8501601f19908116603f01168101908282118183101715611b2157611b21612680565b81604052809350858152868686011115611b3a57600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b038116811461062a57600080fd5b8035801515811461062a57600080fd5b600060208284031215611b8c578081fd5b610e1882611b54565b60008060408385031215611ba7578081fd5b611bb083611b54565b9150611bbe60208401611b54565b90509250929050565b600080600060608486031215611bdb578081fd5b611be484611b54565b9250611bf260208501611b54565b9150604084013590509250925092565b60008060008060808587031215611c17578081fd5b611c2085611b54565b9350611c2e60208601611b54565b925060408501359150606085013567ffffffffffffffff811115611c50578182fd5b8501601f81018713611c60578182fd5b611c6f87823560208401611ade565b91505092959194509250565b60008060408385031215611c8d578182fd5b611c9683611b54565b9150611bbe60208401611b6b565b60008060408385031215611cb6578182fd5b611cbf83611b54565b946020939093013593505050565b600060208284031215611cde578081fd5b610e1882611b6b565b600060208284031215611cf8578081fd5b8135610e1881612696565b600060208284031215611d14578081fd5b8151610e1881612696565b600060208284031215611d30578081fd5b813567ffffffffffffffff811115611d46578182fd5b8201601f81018413611d56578182fd5b6110eb84823560208401611ade565b600060208284031215611d76578081fd5b5035919050565b60008151808452611d958160208601602086016125a0565b601f01601f19169290920160200192915050565b600084516020611dbc8285838a016125a0565b855191840191611dcf8184848a016125a0565b8554920191839060028104600180831680611deb57607f831692505b858310811415611e0957634e487b7160e01b88526022600452602488fd5b808015611e1d5760018114611e2e57611e5a565b60ff19851688528388019550611e5a565b611e378b612514565b895b85811015611e525781548a820152908401908801611e39565b505083880195505b50939b9a5050505050505050505050565b6001600160a01b0391909116815260200190565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611eb16080830184611d7d565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611ef357835183529284019291840191600101611ed7565b50909695505050505050565b901515815260200190565b600060208252610e186020830184611d7d565b6020808252602b908201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560408201527f74206f6620626f756e6473000000000000000000000000000000000000000000606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527f63656976657220696d706c656d656e7465720000000000000000000000000000606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201527f6f776e6572000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560408201527f726f206164647265737300000000000000000000000000000000000000000000606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560408201527f7200000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60408201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606082015260800190565b6020808252602c908201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60408201527f7574206f6620626f756e64730000000000000000000000000000000000000000606082015260800190565b90815260200190565b60009081526020902090565b6000821982111561253357612533612654565b500190565b6000826125475761254761266a565b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561258457612584612654565b500290565b60008282101561259b5761259b612654565b500390565b60005b838110156125bb5781810151838201526020016125a3565b838111156109b25750506000910152565b6002810460018216806125e057607f821691505b6020821081141561260157634e487b7160e01b600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561263957612639612654565b5060010190565b60008261264f5761264f61266a565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610f1357600080fdfea2646970667358221220226374fb5e008c551559f1477e58119ba800f106c463b0dc93951ac3dc195e7264736f6c63430008010033";

type NodeLaunchConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NodeLaunchConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NodeLaunch__factory extends ContractFactory {
  constructor(...args: NodeLaunchConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "NodeLaunch";
  }

  deploy(
    _name: string,
    _symbol: string,
    _initBaseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NodeLaunch> {
    return super.deploy(
      _name,
      _symbol,
      _initBaseURI,
      overrides || {}
    ) as Promise<NodeLaunch>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _initBaseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _initBaseURI,
      overrides || {}
    );
  }
  attach(address: string): NodeLaunch {
    return super.attach(address) as NodeLaunch;
  }
  connect(signer: Signer): NodeLaunch__factory {
    return super.connect(signer) as NodeLaunch__factory;
  }
  static readonly contractName: "NodeLaunch";
  public readonly contractName: "NodeLaunch";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NodeLaunchInterface {
    return new utils.Interface(_abi) as NodeLaunchInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NodeLaunch {
    return new Contract(address, _abi, signerOrProvider) as NodeLaunch;
  }
}
