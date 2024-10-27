import { FC } from 'react';

import type { GlyphIconType } from '../types';

const UsersFour: FC<GlyphIconType> = ({ className, color }) => {
  return (
    <svg className={`object-contain duration-500 ${className}`} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.12828 12.5355C1.22494 12.608 1.33492 12.6608 1.45196 12.6908C1.56899 12.7207 1.69079 12.7274 1.81039 12.7103C1.92999 12.6932 2.04506 12.6527 2.14902 12.5912C2.25298 12.5296 2.34379 12.4482 2.41628 12.3515C2.9733 11.6088 3.69559 11.006 4.52595 10.5909C5.3563 10.1757 6.27192 9.95953 7.20028 9.95953C8.12865 9.95953 9.04426 10.1757 9.87462 10.5909C10.705 11.006 11.4273 11.6088 11.9843 12.3515C12.1309 12.5466 12.3489 12.6754 12.5904 12.7097C12.832 12.744 13.0772 12.6809 13.2723 12.5344C13.3418 12.4827 13.4034 12.4211 13.4551 12.3515C14.0122 11.6088 14.7344 11.006 15.5648 10.5909C16.3952 10.1757 17.3108 9.95953 18.2391 9.95953C19.1675 9.95953 20.0831 10.1757 20.9135 10.5909C21.7438 11.006 22.4661 11.6088 23.0231 12.3515C23.1697 12.5467 23.3878 12.6757 23.6294 12.7101C23.8711 12.7445 24.1165 12.6815 24.3117 12.535C24.5069 12.3884 24.6359 12.1703 24.6703 11.9287C24.7047 11.687 24.6417 11.4416 24.4951 11.2464C23.6808 10.1547 22.5948 9.2951 21.3453 8.75318C22.0303 8.12774 22.5103 7.30981 22.7221 6.40672C22.934 5.50363 22.8679 4.55759 22.5325 3.69275C22.1971 2.82791 21.608 2.08467 20.8426 1.56059C20.0773 1.03651 19.1713 0.756069 18.2437 0.756069C17.3161 0.756069 16.4102 1.03651 15.6448 1.56059C14.8794 2.08467 14.2904 2.82791 13.955 3.69275C13.6196 4.55759 13.5535 5.50363 13.7653 6.40672C13.9772 7.30981 14.4571 8.12774 15.1422 8.75318C14.2399 9.14332 13.4203 9.70183 12.7272 10.3988C12.034 9.70183 11.2144 9.14332 10.3122 8.75318C10.9972 8.12774 11.4772 7.30981 11.689 6.40672C11.9009 5.50363 11.8348 4.55759 11.4994 3.69275C11.164 2.82791 10.5749 2.08467 9.80955 1.56059C9.04418 1.03651 8.13824 0.756069 7.21063 0.756069C6.28303 0.756069 5.37709 1.03651 4.61172 1.56059C3.84635 2.08467 3.2573 2.82791 2.92189 3.69275C2.58647 4.55759 2.52036 5.50363 2.73223 6.40672C2.9441 7.30981 3.42404 8.12774 4.10908 8.75318C2.85403 9.29333 1.76274 10.1534 0.944284 11.2475C0.871795 11.3442 0.819052 11.4542 0.789068 11.5712C0.759084 11.6882 0.752445 11.81 0.769531 11.9296C0.786617 12.0492 0.827093 12.1643 0.888648 12.2683C0.950203 12.3722 1.03163 12.463 1.12828 12.5355ZM18.2403 2.59953C18.7862 2.59953 19.3198 2.7614 19.7737 3.06468C20.2275 3.36795 20.5813 3.799 20.7902 4.30333C20.9991 4.80765 21.0537 5.3626 20.9473 5.89798C20.8408 6.43337 20.5779 6.92516 20.1919 7.31115C19.8059 7.69714 19.3141 7.96001 18.7787 8.0665C18.2433 8.173 17.6884 8.11834 17.1841 7.90944C16.6798 7.70054 16.2487 7.34679 15.9454 6.89291C15.6422 6.43903 15.4803 5.90541 15.4803 5.35953C15.4803 4.62754 15.7711 3.92552 16.2887 3.40792C16.8063 2.89032 17.5083 2.59953 18.2403 2.59953ZM7.20028 2.59953C7.74616 2.59953 8.27978 2.7614 8.73366 3.06468C9.18754 3.36795 9.54129 3.799 9.75019 4.30333C9.95909 4.80765 10.0137 5.3626 9.90725 5.89798C9.80076 6.43337 9.53789 6.92516 9.1519 7.31115C8.76591 7.69714 8.27412 7.96001 7.73873 8.0665C7.20335 8.173 6.6484 8.11834 6.14408 7.90944C5.63975 7.70054 5.2087 7.34679 4.90543 6.89291C4.60216 6.43903 4.44028 5.90541 4.44028 5.35953C4.44028 4.62754 4.73107 3.92552 5.24867 3.40792C5.76627 2.89032 6.46829 2.59953 7.20028 2.59953ZM21.3453 20.7132C22.0303 20.0877 22.5103 19.2698 22.7221 18.3667C22.934 17.4636 22.8679 16.5176 22.5325 15.6527C22.1971 14.7879 21.608 14.0447 20.8426 13.5206C20.0773 12.9965 19.1713 12.7161 18.2437 12.7161C17.3161 12.7161 16.4102 12.9965 15.6448 13.5206C14.8794 14.0447 14.2904 14.7879 13.955 15.6527C13.6196 16.5176 13.5535 17.4636 13.7653 18.3667C13.9772 19.2698 14.4571 20.0877 15.1422 20.7132C14.2399 21.1033 13.4203 21.6618 12.7272 22.3588C12.034 21.6618 11.2144 21.1033 10.3122 20.7132C10.9972 20.0877 11.4772 19.2698 11.689 18.3667C11.9009 17.4636 11.8348 16.5176 11.4994 15.6527C11.164 14.7879 10.5749 14.0447 9.80955 13.5206C9.04418 12.9965 8.13824 12.7161 7.21063 12.7161C6.28303 12.7161 5.37709 12.9965 4.61172 13.5206C3.84635 14.0447 3.2573 14.7879 2.92189 15.6527C2.58647 16.5176 2.52036 17.4636 2.73223 18.3667C2.9441 19.2698 3.42404 20.0877 4.10908 20.7132C2.85403 21.2533 1.76274 22.1134 0.944284 23.2075C0.871795 23.3042 0.819052 23.4142 0.789068 23.5312C0.759084 23.6482 0.752445 23.77 0.769531 23.8896C0.786617 24.0092 0.827093 24.1243 0.888648 24.2283C0.950203 24.3322 1.03163 24.423 1.12828 24.4955C1.22494 24.568 1.33492 24.6208 1.45196 24.6507C1.56899 24.6807 1.69079 24.6874 1.81039 24.6703C1.92999 24.6532 2.04506 24.6127 2.14902 24.5512C2.25298 24.4896 2.34379 24.4082 2.41628 24.3115C2.9733 23.5688 3.69559 22.966 4.52595 22.5509C5.3563 22.1357 6.27192 21.9195 7.20028 21.9195C8.12865 21.9195 9.04426 22.1357 9.87462 22.5509C10.705 22.966 11.4273 23.5688 11.9843 24.3115C12.1309 24.5066 12.3489 24.6354 12.5904 24.6697C12.832 24.704 13.0772 24.6409 13.2723 24.4944C13.3418 24.4427 13.4034 24.3811 13.4551 24.3115C14.0122 23.5688 14.7344 22.966 15.5648 22.5509C16.3952 22.1357 17.3108 21.9195 18.2391 21.9195C19.1675 21.9195 20.0831 22.1357 20.9135 22.5509C21.7438 22.966 22.4661 23.5688 23.0231 24.3115C23.1697 24.5067 23.3878 24.6357 23.6294 24.6701C23.8711 24.7045 24.1165 24.6415 24.3117 24.495C24.5069 24.3484 24.6359 24.1303 24.6703 23.8887C24.7047 23.647 24.6417 23.4016 24.4951 23.2064C23.6808 22.1146 22.5948 21.2551 21.3453 20.7132ZM7.20028 14.5595C7.74616 14.5595 8.27978 14.7214 8.73366 15.0247C9.18754 15.3279 9.54129 15.759 9.75019 16.2633C9.95909 16.7677 10.0137 17.3226 9.90725 17.858C9.80076 18.3934 9.53789 18.8852 9.1519 19.2711C8.76591 19.6571 8.27412 19.92 7.73873 20.0265C7.20335 20.133 6.6484 20.0783 6.14408 19.8694C5.63975 19.6605 5.2087 19.3068 4.90543 18.8529C4.60216 18.399 4.44028 17.8654 4.44028 17.3195C4.44028 16.5875 4.73107 15.8855 5.24867 15.3679C5.76627 14.8503 6.46829 14.5595 7.20028 14.5595ZM18.2403 14.5595C18.7862 14.5595 19.3198 14.7214 19.7737 15.0247C20.2275 15.3279 20.5813 15.759 20.7902 16.2633C20.9991 16.7677 21.0537 17.3226 20.9473 17.858C20.8408 18.3934 20.5779 18.8852 20.1919 19.2711C19.8059 19.6571 19.3141 19.92 18.7787 20.0265C18.2433 20.133 17.6884 20.0783 17.1841 19.8694C16.6798 19.6605 16.2487 19.3068 15.9454 18.8529C15.6422 18.399 15.4803 17.8654 15.4803 17.3195C15.4803 16.5875 15.7711 15.8855 16.2887 15.3679C16.8063 14.8503 17.5083 14.5595 18.2403 14.5595Z" fill={color} />
    </svg>
  );
};

export default UsersFour;
