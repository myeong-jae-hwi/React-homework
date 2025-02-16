import { tm } from '@/utils/tw-marge';

interface BadgeProps {
  type: '불꽃' | '물' | '풀' | '전기' | '에스퍼' | '노말' | '악';
}

function Badge({ type }: BadgeProps) {
  return (
    <span
      className={tm(
        'badge',
        {
          불꽃: 'border-1 border-red-400 text-red-400 px-4 rounded-full m-5 font-medium',
          물: 'border-1 border-blue-400 text-blue-400 px-4 rounded-full m-5 font-medium',
          풀: 'border-1 border-green-400 text-green-400 px-4 rounded-full m-5 font-medium',
          전기: 'border-1 border-yellow-400 text-yellow-400 px-4 rounded-full m-5 font-medium',
          에스퍼:
            'border-1 border-purple-400 text-purple-400 px-4 rounded-full m-5 font-medium',
          노말: 'border-1 border-gray-400 text-gray-400 px-4 rounded-full m-5 font-medium',
          악: 'border-1 border-black text-black px-4 rounded-full m-5 font-medium',
        }[type]
      )}
    >
      {type}
    </span>
  );
}

export default Badge;
