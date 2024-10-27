'use client';
import { useState } from 'react';
import Icons from '../Icons';
import SplineChart from '../SplineChart';

import { colors } from '@/styles/colors';
import { glyphs, splineCHarts, tiers } from './constants';

const TierChat = () => {
  const [selectedTier, setSelectedTier] = useState(tiers[4]);

  const handleVerticalLineClick = (val: number) => () => {
    const tempSelectedTier = tiers.filter(
      (item) => item.index + 10 > val && item.index - 10 < val
    );
    if (tempSelectedTier.length > 0) {
      setSelectedTier(tempSelectedTier[0]);
    }
  };

  return (
    <div className="px-10 py-4 relative flex flex-col">
      <div className="relative">
        <Icons glyph="dottedLine" color={colors.blue[800]} />
        <SplineChart
          data={splineCHarts}
          width={362}
          height={180}
          className="absolute top-0 left-0"
        />
        <div className="flex absolute bottom-0 left-0 items-end">
          {splineCHarts.map((item, index) => (
            <div
              key={index.toString()}
              className={`bg-gradient-to-b from-blue to-blueDarkOpacity ${index.toString()} relative`}
              onClick={handleVerticalLineClick(index)}
              style={{ height: `${item.toFixed(0)}px`, width: '0.999999px' }}
            >
              {selectedTier.index === index && (
                <>
                  <div className="w-[6px] h-[6px] bg-white border border-blueStroke rounded-full absolute left-0 -top-[5px] z-50"></div>
                  <div className={`px-2 py-1 rounded bg-gradient-to-r from-[rgba(255, 255, 255, 0.8] via-gray to-[rgba(255, 255, 255, 0.8] flex flex-col gap-1 w-[122px] text-xs absolute left-0 top-1 z-50 -translate-x-[50%] border-[0.5px] border-white ${['tier1', 'tier2', 'tier3', 'tier4'].includes(selectedTier.glyph) && '-translate-y-[100%] -top-2'}`}>
                    <p>F0 (Rebate): {selectedTier.f0}%</p>
                    <p>F1 (Commission): {selectedTier.f1}%</p>
                    <p>F2 (Commission): {selectedTier.f2}%</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-6 py-2">
        {Array(6)
          .fill([])
          .map((_item, index) => (
            <div
              className="h-[62px] grid grid-rows-2 gap-6"
              key={index.toString()}
            >
              <Icons
                glyph={glyphs[index]}
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
