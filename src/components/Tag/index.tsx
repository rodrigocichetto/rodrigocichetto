import { ReactNode } from 'react';

import { Text } from 'components';

import * as S from './styles';

export type TagProps = {
  children?: ReactNode;
};

const Tag = ({ children }: TagProps) => (
  <S.Wrapper>
    <Text tag="span" family="secondary">
      &lt;{children}&gt;
    </Text>
  </S.Wrapper>
);

export default Tag;
