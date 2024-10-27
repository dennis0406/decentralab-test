import { colors } from '@/styles/colors';
import Icons from '../Icons';

const TierChat = () => {
  return (
    <div className="px-10 py-4 relative flex flex-col">
      <Icons glyph="dottedLine" color={colors.blue[800]} />
      <div className="flex gap-6 py-2">
        {Array(6)
          .fill([])
          .map((_item, index) => (
            <div
              className="h-[62px] grid grid-rows-2 gap-6"
              key={index.toString()}
            >
              <Icons glyph={`tier${index + 1}`}className={[4,5].includes(index) ? '-mt-1' : ''} />
              <span className='text-sm font-normal'>{`Tier ${index + 1}`}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TierChat;
