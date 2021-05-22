import { ReactNode } from 'react';

import * as S from './styles';

export type AbsoluteProps = {
  center?: boolean;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  children: ReactNode;
};

const Absolute = ({
  center,
  top,
  right,
  bottom,
  left,
  children
}: AbsoluteProps) => (
  <S.Wrapper {...{ center, top, right, bottom, left }}>{children}</S.Wrapper>
);

export default Absolute;
