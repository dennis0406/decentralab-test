import Link from 'next/link';

import Icons from '@/components/Icons';
import TierChat from '@/components/TierChat';
import UseGuide from '@/components/UseGuide';
import Footer from '@/components/Footer';

import { colors } from '@/styles/colors';

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center  bg-gradient-to-r from-black to-blackPurple blur-[5.62] border-b border-b-darkBlue">
        <div className="px-10 gap-4 flex flex-col w-full md:max-w-[441px] py-10 md:py-0">
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
      <UseGuide />
      <Footer />
    </div>
  );
};

export default Home;
