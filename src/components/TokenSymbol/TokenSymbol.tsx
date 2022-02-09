import React from 'react';

//Graveyard ecosystem logos
import hyehLogo from '../../assets/img/crypto_tomb_logo.png';
import yehShareLogo from '../../assets/img/crypto_tomb_share.bf1a6c52.png';
import hyehLogoPNG from '../../assets/img/crypto_tomb_logo.png';
import yehShareLogoPNG from '../../assets/img/crypto_tomb_share.bf1a6c52.png';
import tBondLogo from '../../assets/img/crypto_tomb_bond.png';

import hyehFtmLpLogo from '../../assets/img/hyeh_ftm_lp.png';
import yehShareFtmLpLogo from '../../assets/img/yehshare_ftm_lp.png';

import wftmLogo from '../../assets/img/ftm_logo_blue.svg';
import wethLogo from '../../assets/img/spooky.png';
import tombLogo from '../../assets/img/tomb_logo.png';
import tShareLogo from '../../assets/img/tshare_logo.png';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  HYEHPNG: hyehLogoPNG,
  YEHSHAREPNG: yehShareLogoPNG,
  TSHARE: tShareLogo,
  TBOND: tBondLogo,
  WFTM: wftmLogo,
  WETH: wethLogo,
  TOMB: tombLogo,
  HYEH: hyehLogo,
  YEHSHARE: yehShareLogo,
  'TOMB-FTM-LP': hyehFtmLpLogo,
  'TSHARE-FTM-LP': yehShareFtmLpLogo,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 64 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
};

export default TokenSymbol;
