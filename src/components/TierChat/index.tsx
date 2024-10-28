'use client';
import { useState } from 'react';
import Icons from '../Icons';
import SplineChart from '../SplineChart';

import { colors } from '@/styles/colors';
import { GLYPHS, SPLINE_CHARTS, TIERS } from './constants';
import { glyphs } from '../Icons/Glyphs';

const TierChat = () => {
  const [selectedTier, setSelectedTier] = useState(TIERS[4]);

  const handleVerticalLineClick = (val: number) => () => {
    const tempSelectedTier = TIERS.filter(
      (item) => item.index + 10 > val && item.index - 10 < val
    );
    if (tempSelectedTier.length > 0) {
      setSelectedTier(tempSelectedTier[0]);
    }
  };

  const handleTierClick = (tier: keyof typeof glyphs) => () => {
    if (TIERS.filter(item => item.glyph === tier).length > 0) {
      setSelectedTier(TIERS.filter(item => item.glyph === tier)[0]);
    }
  }

  return (
    <div className="px-10 py-4 relative flex flex-col">
      <div className="relative">
        <Icons glyph="dottedLine" color={colors.blue[800]} />
        <SplineChart
          data={SPLINE_CHARTS}
          width={362}
          height={180}
          className="absolute top-0 left-0"
        />
        <div className="flex absolute bottom-0 left-0 items-end">
          {SPLINE_CHARTS.map((item, index) => (
            <div
              key={index.toString()}
              className={`bg-gradient-to-b from-blue to-blueDarkOpacity relative`}
              onClick={handleVerticalLineClick(index)}
              style={{ height: `${item.toFixed(0)}px`, width: '0.999999px' }}
            >
              {selectedTier.index === index && (
                <>
                  <div className="w-[6px] h-[6px] bg-white border border-blueStroke rounded-full absolute left-0 -top-[5px] z-50 -translate-x-[50%]"></div>
                  <div className={`px-2 py-1 rounded bg-gradient-to-r from-darkBlue100 via-darkBlue200 to-darkBlue300 flex flex-col gap-1 w-[122px] text-xs absolute left-0 top-1 z-50 -translate-x-[50%] border-[0.2px] border-darkBlue400 ${['tier1', 'tier2', 'tier3', 'tier4'].includes(selectedTier.glyph) && '-translate-y-[100%] !-top-2'} ${selectedTier.glyph === 'tier1' && '-translate-x-[12%]'} ${selectedTier.glyph === 'tier6' && '-translate-x-[55%]'}`}>
                    <p>F0 (Rebate): {selectedTier.f0}%</p>
                    <p>F1 (Commission): {selectedTier.f1}%</p>
                    <p>F2 (Commission): {selectedTier.f2}%</p>
                  </div>
                  <div style={{ height: `${(item + 40).toFixed(0)}px`, width: '0.999999px' }} className='bg-white z-20 absolute top-0 left-0'></div>

                  <div style={{ height: `${(item + 45).toFixed(0)}px`, width: ['tier1', 'tier2', 'tier3'].includes(selectedTier.glyph) ? '16px' : '26px' }} className={`bg-darkBlue500 z-10 absolute top-0 left-0 -translate-x-[50%] ${['tier1', 'tier2', 'tier3'].includes(selectedTier.glyph) ? 'blur-sm': 'blur-md'}`}></div>
                  <div style={{ height: `${(item + 45).toFixed(0)}px`, width: ['tier1', 'tier2', 'tier3'].includes(selectedTier.glyph) ? '46px' : '86px' }} className='[clip-path:polygon(27%_0%,75%_0%,56%_100%,45%_100%)] absolute top-0 left-0 -translate-x-[50%] z-0 bg-gradient-to-t from-[#1E94F4] to-[#0621CE00]'></div>
                  <div style={{ height: `${(item + 45).toFixed(0)}px`, width: ['tier1', 'tier2', 'tier3'].includes(selectedTier.glyph) ? '26px' :'46px' }} className='[clip-path:polygon(27%_0%,75%_0%,56%_100%,45%_100%)] absolute top-0 left-0 -translate-x-[50%] z-0 bg-gradient-to-t from-[#061ACE] to-[##4EAEFD00]'></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-6 py-2 z-50">
        {GLYPHS.map((item, index) => (
          <div
            className="h-[62px] grid grid-rows-2 gap-6"
            onClick={handleTierClick(item)}
            key={index.toString()}
          >
            <Icons
              glyph={item}
              className={[4, 5].includes(index) ? '-mt-1' : ''}
            />
            <span className="text-sm font-normal">{`Tier ${index + 1}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TierChat;
