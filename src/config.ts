// import { ChainId } from '@pancakeswap-libs/sdk';
import { ChainId } from '@spookyswap/sdk';
import { Configuration } from './tomb-finance/config';
import { BankInfo } from './tomb-finance';

const configurations: { [env: string]: Configuration } = {
  production: {
    chainId: ChainId.MAINNET,
    networkName: 'Fantom Opera Mainnet',
    ftmscanUrl: 'https://ftmscan.com',
    defaultProvider: 'https://rpc.ftm.tools/',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WFTM: ['0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18],
      FUSDT: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6], // This is actually usdc on mainnet not fusdt
      USDC: ['0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE', 18],
      TSHARE: ['0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37', 18],
      TOMB: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
      'USDT-FTM-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
      'TOMB-FTM-LP': ['0x2A651563C9d3Af67aE0388a5c8F89b867038089e', 18],
      'TSHARE-FTM-LP': ['0x4733bc45eF91cF7CcEcaeeDb794727075fB209F2', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding TOMB
        - 2 = LP asset staking rewarding TSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  TombFtmRewardPool: {
    name: 'Earn TOMB by FTM',
    poolId: 0,
    sectionInUI: 0,
    contract: 'TombFtmRewardPool',
    depositTokenName: 'WFTM',
    earnTokenName: 'HYEH',
    finished: false,
    sort: 1,
    closedForStaking: true,
  },
  TombBooRewardPool: {
    name: 'Earn HYEH by USDC',
    poolId: 1,
    sectionInUI: 0,
    contract: 'TombBooGenesisRewardPool',
    depositTokenName: 'USDC',
    earnTokenName: 'HYEH',
    finished: false,
    sort: 2,
    closedForStaking: true,
  },
  TombShibaRewardPool: {
    name: 'Earn HYEH by TOMB',
    poolId: 2,
    sectionInUI: 0,
    contract: 'TombShibaGenesisRewardPool',
    depositTokenName: 'TOMB',
    earnTokenName: 'HYEH',
    finished: false,
    sort: 3,
    closedForStaking: true,
  },
  TombZooRewardPool: {
    name: 'Earn HYEH by TSHARE',
    poolId: 3,
    sectionInUI: 0,
    contract: 'TombZooGenesisRewardPool',
    depositTokenName: 'TSHARE',
    earnTokenName: 'HYEH',
    finished: false,
    sort: 4,
    closedForStaking: true,
  },
  TombFtmLPTombRewardPool: {
    name: 'Earn TOMB by TOMB-FTM LP',
    poolId: 0,
    sectionInUI: 1,
    contract: 'TombFtmLpTombRewardPool',
    depositTokenName: 'TOMB-FTM-LP',
    earnTokenName: 'TOMB',
    finished: false,
    sort: 5,
    closedForStaking: true,
  },
  TombFtmLPTombRewardPoolOld: {
    name: 'Earn TOMB by TOMB-FTM LP',
    poolId: 0,
    sectionInUI: 1,
    contract: 'TombFtmLpTombRewardPoolOld',
    depositTokenName: 'TOMB-FTM-LP',
    earnTokenName: 'TOMB',
    finished: true,
    sort: 9,
    closedForStaking: true,
  },
  TombFtmLPTShareRewardPool: {
    name: 'Earn TSHARE by TOMB-FTM LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'TombFtmLPTShareRewardPool',
    depositTokenName: 'TOMB-FTM-LP',
    earnTokenName: 'TSHARE',
    finished: false,
    sort: 6,
    closedForStaking: false,
  },
  TshareFtmLPTShareRewardPool: {
    name: 'Earn TSHARE by TSHARE-FTM LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'TshareFtmLPTShareRewardPool',
    depositTokenName: 'TSHARE-FTM-LP',
    earnTokenName: 'TSHARE',
    finished: false,
    sort: 7,
    closedForStaking: false,
  },
};

export default configurations[process.env.NODE_ENV || 'production'];
