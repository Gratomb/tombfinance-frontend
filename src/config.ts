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
      FUSDT: ['0x04068da6c83afcfa0e13ba15a6696662335d5b75', 6], // This is actually usdc on mainnet not fusdt
      TOMBBOND: ['0x24248cd1747348bdc971a5395f4b3cd7fee94ea0', 18],
      YEHSHARE: ['0x1af917f53c48f50db5bc6cee1464b631bc1f40f9', 18],
      HYEH: ['0x0cb0a530cb554f2a2dfdd48090f61234865425c4', 18],
      TOMBS: ['0x6c021ae822bea943b2e66552bde1d2696a53fbb7', 18],
      TSHARES: ['0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37', 18],
      DAI: ['0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e', 18],
      'USDT-FTM-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
      'HYEH-WFTM LP': ['0x7B065c1Bb925c3ae7d7ABaA406aD939bEFe2eb11', 18],
      'YEHSHARE-WFTM LP': ['0x26D6A54c72507f387fa3a0AAe5c2B62098a49786', 18],
      'TSHARE-FTM-LP': ['0x26D6A54c72507f387fa3a0AAe5c2B62098a49786', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
};

const newLocal = 'TombShibaGenesisRewardPool';
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
  TombFtmGenesisRewardPool: {
    name: 'Earn HYEH by FTM',
    poolId: 0,
    sectionInUI: 0,
    contract: 'TombFtmGenesisRewardPool',
    depositTokenName: 'WFTM',
    earnTokenName: 'HYEH',
    finished: false,
    multiplier: '840x',
    sort: 1,
    closedForStaking: false,
  },
  TombBooRewardPool: {
    name: 'Earn HYEH by HYEH-WFTM LP',
    poolId: 5,
    sectionInUI: 0,
    contract: 'TombBooGenesisRewardPool',
    depositTokenName: 'HYEH-WFTM LP',
    earnTokenName: 'HYEH',
    finished: false,
    multiplier: '6920x',
    sort: 6,
    closedForStaking: false,
  },
  TombShibaRewardPool: {
    name: 'Earn HYEH by TOMBS',
    poolId: 2,
    sectionInUI: 0,
    contract: 'TombShibaGenesisRewardPool',
    depositTokenName: 'TOMBS',
    earnTokenName: 'HYEH',
    finished: false,
    multiplier: '640x',
    sort: 3,
    closedForStaking: false,
  },
  TombZooRewardPool: {
    name: 'Earn HYEH by TSHARES',
    poolId: 3,
    sectionInUI: 0,
    contract: 'TombZooGenesisRewardPool',
    depositTokenName: 'TSHARES',
    earnTokenName: 'HYEH',
    finished: false,
    multiplier: '720x',
    sort: 4,
    closedForStaking: false,
  },
  TombDaiRewardPool: {
    name: 'Earn HYEH by DAI',
    poolId: 4,
    sectionInUI: 0,
    contract: 'TombDaiGenesisRewardPool',
    depositTokenName: 'DAI',
    earnTokenName: 'HYEH',
    finished: false,
    multiplier: '440x',
    sort: 5,
    closedForStaking: false,
  },
  TombFtmLPTombRewardPool: {
    name: 'Earn TOMB by TOMB-FTM LP',
    poolId: 0,
    sectionInUI: 1,
    contract: 'TombFtmLpTombRewardPool',
    depositTokenName: 'HYEH-WFTM LP',
    earnTokenName: 'TOMB',
    finished: false,
    multiplier: '0x',
    sort: 5,
    closedForStaking: true,
  },
  TombFtmLPTombRewardPoolOld: {
    name: 'Earn TOMB by TOMB-FTM LP',
    poolId: 0,
    sectionInUI: 1,
    contract: 'TombFtmLpTombRewardPoolOld',
    depositTokenName: 'HYEH-WFTM LP',
    earnTokenName: 'TOMB',
    finished: true,
    multiplier: '0x',
    sort: 9,
    closedForStaking: true,
  },
  TombFtmLPTShareRewardPool: {
    name: 'Earn TSHARE by TOMB-FTM LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'TombFtmLPTShareRewardPool',
    depositTokenName: 'HYEH-WFTM LP',
    earnTokenName: 'TSHARE',
    finished: false,
    multiplier: '2400x',
    sort: 6,
    closedForStaking: false,
  },
  TshareFtmLPTShareRewardPool: {
    name: 'Earn YEHSHARE by YEHSHARE-WFTM LP LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'TshareFtmLPTShareRewardPool',
    depositTokenName: 'YEHSHARE-WFTM LP',
    earnTokenName: 'TSHARE',
    finished: false,
    multiplier: '1600x',
    sort: 7,
    closedForStaking: false,
  },
};

export default configurations[process.env.NODE_ENV || 'production'];
