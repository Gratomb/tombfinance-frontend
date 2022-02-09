import React from 'react';

//Graveyard ecosystem logos
import tombLogo from '../../assets/img/crypto_tomb_logo.png';
import tShareLogo from '../../assets/img/crypto_tomb_share.bf1a6c52.png';
import tombLogoPNG from '../../assets/img/crypto_tomb_logo.png';
import tShareLogoPNG from '../../assets/img/crypto_tomb_share.bf1a6c52.png';
import tBondLogo from '../../assets/img/crypto_tomb_bond.png';

import tombFtmLpLogo from '../../assets/img/hyeh_ftm_lp.png';
import tShareFtmLpLogo from '../../assets/img/yehshare_ftm_lp.png';

import wftmLogo from '../../assets/img/ftm_logo_blue.svg';
import usdcLogo from '../../assets/img/spooky.png';
import twombLogo from '../../assets/img/tomb_logo.png';
import twoShareLogo from '../../assets/img/tshare_logo.png';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  TOMB: tombLogo, 
  TOMBPNG: tombLogoPNG,
  TSHARE: tShareLogo,
  TSHAREPNG: tShareLogoPNG,
  TBOND: tBondLogo,
  WFTM: wftmLogo,
  USDC: usdcLogo,
  TWOMB: twombLogo,
  TWOSHARE: twoShareLogo,
  'TOMB-FTM-LP': tombFtmLpLogo,
  'TSHARE-FTM-LP': tShareFtmLpLogo,
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
