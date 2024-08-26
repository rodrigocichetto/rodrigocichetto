import { ThemeColors } from '@/types/global';

import * as S from './styles';

export type ProfilePictureProps = {
  src: string;
  color?: ThemeColors;
  background?: string;
};

const ProfilePicture = ({
  src,
  color = 'menu',
  background
}: ProfilePictureProps) => (
  <S.Wrapper>
    <S.Container>
      <S.ContainerInner>
        <S.Circle color={color} background={background} />
        <img src={src} />
      </S.ContainerInner>
    </S.Container>
  </S.Wrapper>
);

export default ProfilePicture;
