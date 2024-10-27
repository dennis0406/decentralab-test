import type { UseGuide } from './types';

export const USE_GUIDES: UseGuide[] = [
  {
    id: 1,
    icon: 'boundingBox',
    title: 'Two-Level Referral System',
    desc: 'Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)',
  },
  {
    id: 2,
    icon: 'usersFour',
    title: 'Earn Rebates & Commissions',
    desc: 'Earn rebates on your trades and commissions from F1 and F2.',
  },
  {
    id: 3,
    icon: 'treasureChest',
    title: 'Claim Daily Rewards',
    desc: 'Rewards are credited after trades close and claimable daily at 0:00 UTC.',
  },
  {
    id: 4,
    icon: 'medalMilitary',
    title: 'Referral Tier System',
    desc: 'Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days',
  },
];
