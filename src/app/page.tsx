import Link from 'next/link';

import Icons from '@/components/Icons';
import TierChat from '@/components/TierChat';

import { colors } from '@/styles/colors';
import UseGuide from '@/components/UseGuide';

const Home = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center  bg-gradient-to-r from-black to-blackPurple blur-[5.62] border-b border-b-darkBlue">
        <div className="px-10 gap-4 flex flex-col w-[441px]">
          <p className="font-bold text-2xl break-words">
            Unlock Rewards with the Copin Referral Program
          </p>
          <div>
            <p className="font-normal text-base">
              Earn rebates and commissions by inviting friends.
            </p>
            <p className="font-normal text-base">
              Grow your network and benefit from our 6-tier reward system.
            </p>
          </div>
          <Link
            href={'/referral-ranking'}
            className="text-blueLight font-semibold text-base flex gap-2 items-center"
          >
            View referral Ranking{' '}
            <Icons glyph="arrowRight" color={colors.blue[700]} />
          </Link>
        </div>
        <TierChat />
      </div>
      <UseGuide/>
    </div>
  );
};

export default Home;
