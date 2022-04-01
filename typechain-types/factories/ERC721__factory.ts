/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001865380380620018658339810160408190526200003491620001c1565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b5050506200027b565b828054620000769062000228565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200011f578081fd5b81516001600160401b03808211156200013c576200013c62000265565b604051601f8301601f19908116603f0116810190828211818310171562000167576200016762000265565b8160405283815260209250868385880101111562000183578485fd5b8491505b83821015620001a6578582018301518183018401529082019062000187565b83821115620001b757848385830101525b9695505050505050565b60008060408385031215620001d4578182fd5b82516001600160401b0380821115620001eb578384fd5b620001f9868387016200010e565b935060208501519150808211156200020f578283fd5b506200021e858286016200010e565b9150509250929050565b6002810460018216806200023d57607f821691505b602082108114156200025f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6115da806200028b6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101b8578063b88d4fde146101cb578063c87b56dd146101de578063e985e9c5146101f1576100df565b80636352211e1461017d57806370a082311461019057806395d89b41146101b0576100df565b8063095ea7b3116100bd578063095ea7b31461014257806323b872dd1461015757806342842e0e1461016a576100df565b806301ffc9a7146100e457806306fdde031461010d578063081812fc14610122575b600080fd5b6100f76100f2366004610e7e565b610204565b6040516101049190610f79565b60405180910390f35b6101156102ae565b6040516101049190610f84565b610135610130366004610eb6565b610340565b6040516101049190610f29565b610155610150366004610e55565b61038c565b005b610155610165366004610d0b565b610424565b610155610178366004610d0b565b61045c565b61013561018b366004610eb6565b610477565b6101a361019e366004610cbf565b6104ac565b60405161010491906113cd565b6101156104f0565b6101556101c6366004610e1b565b6104ff565b6101556101d9366004610d46565b610515565b6101156101ec366004610eb6565b610554565b6100f76101ff366004610cd9565b6105d7565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061029757507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806102a657506102a682610605565b90505b919050565b6060600080546102bd90611445565b80601f01602080910402602001604051908101604052809291908181526020018280546102e990611445565b80156103365780601f1061030b57610100808354040283529160200191610336565b820191906000526020600020905b81548152906001019060200180831161031957829003601f168201915b5050505050905090565b600061034b8261064f565b6103705760405162461bcd60e51b815260040161036790611259565b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061039782610477565b9050806001600160a01b0316836001600160a01b031614156103cb5760405162461bcd60e51b815260040161036790611313565b806001600160a01b03166103dd61066c565b6001600160a01b031614806103f957506103f9816101ff61066c565b6104155760405162461bcd60e51b815260040161036790611142565b61041f8383610670565b505050565b61043561042f61066c565b826106f6565b6104515760405162461bcd60e51b815260040161036790611370565b61041f83838361077b565b61041f83838360405180602001604052806000815250610515565b6000818152600260205260408120546001600160a01b0316806102a65760405162461bcd60e51b8152600401610367906111fc565b60006001600160a01b0382166104d45760405162461bcd60e51b81526004016103679061119f565b506001600160a01b031660009081526003602052604090205490565b6060600180546102bd90611445565b61051161050a61066c565b83836108c6565b5050565b61052661052061066c565b836106f6565b6105425760405162461bcd60e51b815260040161036790611370565b61054e84848484610987565b50505050565b606061055f8261064f565b61057b5760405162461bcd60e51b8152600401610367906112b6565b60006105856109ba565b905060008151116105a557604051806020016040528060008152506105d0565b806105af846109cc565b6040516020016105c0929190610efa565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b6000908152600260205260409020546001600160a01b0316151590565b3390565b600081815260046020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03841690811790915581906106bd82610477565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006107018261064f565b61071d5760405162461bcd60e51b8152600401610367906110e5565b600061072883610477565b9050806001600160a01b0316846001600160a01b031614806107635750836001600160a01b031661075884610340565b6001600160a01b0316145b80610773575061077381856105d7565b949350505050565b826001600160a01b031661078e82610477565b6001600160a01b0316146107b45760405162461bcd60e51b815260040161036790610ff4565b6001600160a01b0382166107da5760405162461bcd60e51b815260040161036790611051565b6107e583838361041f565b6107f0600082610670565b6001600160a01b0383166000908152600360205260408120805460019290610819908490611402565b90915550506001600160a01b03821660009081526003602052604081208054600192906108479084906113d6565b909155505060008181526002602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a461041f83838361041f565b816001600160a01b0316836001600160a01b031614156108f85760405162461bcd60e51b8152600401610367906110ae565b6001600160a01b038381166000818152600560209081526040808320948716808452949091529081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016851515179055517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319061097a908590610f79565b60405180910390a3505050565b61099284848461077b565b61099e84848484610b4d565b61054e5760405162461bcd60e51b815260040161036790610f97565b60408051602081019091526000815290565b606081610a0d575060408051808201909152600181527f300000000000000000000000000000000000000000000000000000000000000060208201526102a9565b8160005b8115610a375780610a2181611499565b9150610a309050600a836113ee565b9150610a11565b60008167ffffffffffffffff811115610a79577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610aa3576020820181803683370190505b5090505b841561077357610ab8600183611402565b9150610ac5600a866114d2565b610ad09060306113d6565b60f81b818381518110610b0c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610b46600a866113ee565b9450610aa7565b6000610b61846001600160a01b0316610c99565b15610c8e57836001600160a01b031663150b7a02610b7d61066c565b8786866040518563ffffffff1660e01b8152600401610b9f9493929190610f3d565b602060405180830381600087803b158015610bb957600080fd5b505af1925050508015610be9575060408051601f3d908101601f19168201909252610be691810190610e9a565b60015b610c43573d808015610c17576040519150601f19603f3d011682016040523d82523d6000602084013e610c1c565b606091505b508051610c3b5760405162461bcd60e51b815260040161036790610f97565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610773565b506001949350505050565b6001600160a01b03163b151590565b80356001600160a01b03811681146102a957600080fd5b600060208284031215610cd0578081fd5b6105d082610ca8565b60008060408385031215610ceb578081fd5b610cf483610ca8565b9150610d0260208401610ca8565b90509250929050565b600080600060608486031215610d1f578081fd5b610d2884610ca8565b9250610d3660208501610ca8565b9150604084013590509250925092565b60008060008060808587031215610d5b578081fd5b610d6485610ca8565b9350610d7260208601610ca8565b925060408501359150606085013567ffffffffffffffff80821115610d95578283fd5b818701915087601f830112610da8578283fd5b813581811115610dba57610dba611544565b604051601f8201601f19908116603f01168101908382118183101715610de257610de2611544565b816040528281528a6020848701011115610dfa578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215610e2d578182fd5b610e3683610ca8565b915060208301358015158114610e4a578182fd5b809150509250929050565b60008060408385031215610e67578182fd5b610e7083610ca8565b946020939093013593505050565b600060208284031215610e8f578081fd5b81356105d081611573565b600060208284031215610eab578081fd5b81516105d081611573565b600060208284031215610ec7578081fd5b5035919050565b60008151808452610ee6816020860160208601611419565b601f01601f19169290920160200192915050565b60008351610f0c818460208801611419565b835190830190610f20818360208801611419565b01949350505050565b6001600160a01b0391909116815260200190565b60006001600160a01b03808716835280861660208401525083604083015260806060830152610f6f6080830184610ece565b9695505050505050565b901515815260200190565b6000602082526105d06020830184610ece565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527f63656976657220696d706c656d656e7465720000000000000000000000000000606082015260800190565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201527f6f776e6572000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560408201527f726f206164647265737300000000000000000000000000000000000000000000606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606082015260800190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560408201527f7200000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60408201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606082015260800190565b90815260200190565b600082198211156113e9576113e96114e6565b500190565b6000826113fd576113fd611515565b500490565b600082821015611414576114146114e6565b500390565b60005b8381101561143457818101518382015260200161141c565b8381111561054e5750506000910152565b60028104600182168061145957607f821691505b60208210811415611493577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156114cb576114cb6114e6565b5060010190565b6000826114e1576114e1611515565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffff00000000000000000000000000000000000000000000000000000000811681146115a157600080fd5b5056fea2646970667358221220da89740b0d4737e5adfc56bcb4b7d14f99f412b1e89d66d315f4d5660e75cfe264736f6c63430008010033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly contractName: "ERC721";
  public readonly contractName: "ERC721";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
