import { Icon } from 'components';

import { ThemeColors, AvailableIcons } from 'types/global';

import * as S from './styles';

export type HexagonProps = {
  icon: AvailableIcons;
  color?: ThemeColors;
  background?: ThemeColors;
};

const Hexagon = ({
  icon,
  color = 'white',
  background = 'secondary'
}: HexagonProps) => (
  <S.Wrapper background={background}>
    <S.IconWrapper>
      <Icon icon={icon} color={color} size="xlarge" />
    </S.IconWrapper>
    <S.HexagonWrapper>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 86.60254037844386 100"
      >
        <path
          fill="currentColor"
          d="M34.64101615137754 4.999999999999999Q43.30127018922193 0 51.96152422706632 4.999999999999999L77.94228634059948 20Q86.60254037844386 25 86.60254037844386 35L86.60254037844386 65Q86.60254037844386 75 77.94228634059948 80L51.96152422706632 95Q43.30127018922193 100 34.64101615137754 95L8.660254037844387 80Q0 75 0 65L0 35Q0 25 8.660254037844387 20Z"
        ></path>
      </svg>
    </S.HexagonWrapper>
  </S.Wrapper>
);

export default Hexagon;
