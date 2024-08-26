import { Icon } from '@/components';
import type { ThemeColors, AvailableIcons } from '@/types/global';

import * as S from './styles';

export type HexagonProps = {
  icon: AvailableIcons;
  color?: ThemeColors;
  background?: ThemeColors;
  gamer?: boolean;
};

const Hexagon = ({
  icon,
  color = 'white',
  background = 'secondary',
  gamer
}: HexagonProps) => (
  <S.Wrapper background={background}>
    <S.IconWrapper>
      <Icon icon={icon} color={color} size="xlarge" />
    </S.IconWrapper>
    <S.HexagonWrapper>
      {gamer ? (
        <svg
          aria-label="hexagon-gamer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 86.6 100"
        >
          <linearGradient
            id="a"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="50"
            x2="86.603"
            y2="50"
          >
            <stop offset="0" stopColor="#f79533" />
            <stop offset=".2" stopColor="#f37055" />
            <stop offset=".4" stopColor="#ef4e7b" />
            <stop offset=".6" stopColor="#a166ab" />
            <stop offset=".8" stopColor="#5073b8" />
            <stop offset="1" stopColor="#1098ad" />
          </linearGradient>
          <path
            d="M34.6 5C40.4 1.7 46.2 1.7 52 5l26 15c5.8 3.3 8.7 8.3 8.7 15v30c0 6.7-2.9 11.7-8.7 15L52 95c-5.8 3.3-11.5 3.3-17.3 0l-26-15C2.9 76.7 0 71.7 0 65V35c0-6.7 2.9-11.7 8.7-15L34.6 5z"
            fill="url(#a)"
          />
        </svg>
      ) : (
        <svg
          aria-label="hexagon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 86.60254037844386 100"
        >
          <path
            fill="currentColor"
            d="M34.64101615137754 4.999999999999999Q43.30127018922193 0 51.96152422706632 4.999999999999999L77.94228634059948 20Q86.60254037844386 25 86.60254037844386 35L86.60254037844386 65Q86.60254037844386 75 77.94228634059948 80L51.96152422706632 95Q43.30127018922193 100 34.64101615137754 95L8.660254037844387 80Q0 75 0 65L0 35Q0 25 8.660254037844387 20Z"
          ></path>
        </svg>
      )}
    </S.HexagonWrapper>
  </S.Wrapper>
);

Hexagon.displayName = 'Hexagon';

export default Hexagon;
