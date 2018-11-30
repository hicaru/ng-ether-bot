export interface IBlock {
  author: string;
  difficulty: string;
  extraData: string;
  gasLimit: number;
  gasUsed: number;
  hash: string;
  logsBloom: string;
  miner: string;
  number: number;
  parentHash: string;
  receiptsRoot: string;
  sealFields: string[];
  sha3Uncles: string;
  signature: string;
  size: number;
  stateRoot: string;
  step: string;
  timestamp: number;
  totalDifficulty: string;
  transactions: string[];
  transactionsRoot: string;
  uncles: any[];
}
export interface ITransaction {
  blockHash: string;
  blockNumber: number;
  chainId: string | number;
  condition: string | number;
  creates: string | number;
  from: string;
  gas: number;
  gasPrice: string;
  hash: string;
  input: string;
  nonce: number;
  publicKey: string;
  r: string;
  raw: string;
  s: string;
  standardV: string;
  to: string;
  transactionIndex: number;
  v: string;
  value: string;
}