// BackgroundSvg.js
import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const BackgroundSvg = () => {
  const svg = `<svg width="100%" height="100%" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="5%" stop-color="#F78DA7"></stop>
        <stop offset="95%" stop-color="#8ED1FC"></stop>
      </linearGradient>
    </defs>
    <path d="M 0,600 L 0,150 C 71.85645933014354,123.32057416267942 143.71291866028707,96.64114832535884 254,103 C 364.2870813397129,109.35885167464116 513.0047846889952,148.75598086124404 617,185 C 720.9952153110048,221.24401913875596 780.2679425837322,254.33492822966508 869,224 C 957.7320574162678,193.66507177033492 1075.9234449760766,99.90430622009569 1176,77 C 1276.0765550239234,54.0956937799043 1358.0382775119617,102.04784688995215 1440,150 L 1440,600 L 0,600 Z" fill="url(#gradient)" fill-opacity="0.53"/>
    <path d="M 0,600 L 0,350 C 74.56459330143542,345.5023923444976 149.12918660287085,341.00478468899524 238,350 C 326.87081339712915,358.99521531100476 430.0478468899521,381.48325358851673 550,385 C 669.9521531100479,388.51674641148327 806.6794258373205,373.06220095693783 907,368 C 1007.3205741626795,362.93779904306217 1071.2344497607658,368.2679425837321 1154,367 C 1236.7655502392342,365.7320574162679 1338.3827751196172,357.86602870813397 1440,350 L 1440,600 L 0,600 Z" fill="url(#gradient)" fill-opacity="1"/>
  </svg>`;

  return (
    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <SvgXml xml={svg} width="100%" height="100%" />
    </View>
  );
};

export default BackgroundSvg;

