import { ProfilePicture, Tag, Text, Hexagon } from 'components';

import { AvailableIcons } from 'types/global';

import * as S from './styles';

type SocialLink = {
  icon: AvailableIcons;
  url: string;
};

export type ProfileProps = {
  picture: string;
  name: string;
  description?: string;
  socialLinks?: SocialLink[];
  role?: string;
  tag?: string;
  nameTag?: string;
};

const Profile = ({
  picture,
  name,
  description,
  socialLinks,
  role,
  tag,
  nameTag
}: ProfileProps) => (
  <S.Wrapper>
    {!!tag && (
      <S.TagWrapper position="top">
        <Tag>{tag}</Tag>
      </S.TagWrapper>
    )}

    <S.Content>
      <S.InnerProfile>
        <ProfilePicture src={picture} />

        <div>
          {!!nameTag && <Tag>{nameTag}</Tag>}

          <Text tag="h1" size="xxlarge" weight="bold" color="primary">
            {name}
          </Text>

          {!!role && (
            <Text family="secondary" weight="bold">
              {role}
            </Text>
          )}

          {!!nameTag && <Tag>/{nameTag}</Tag>}
        </div>
      </S.InnerProfile>

      <S.Info>
        {!!description && (
          <Text family="secondary" align="justify">
            {description}
          </Text>
        )}

        {!!socialLinks && (
          <S.Social>
            {socialLinks.map(social => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                <Hexagon icon={social.icon} />
              </a>
            ))}
          </S.Social>
        )}
      </S.Info>
    </S.Content>

    {!!tag && (
      <S.TagWrapper position="bottom">
        <Tag>/{tag}</Tag>
      </S.TagWrapper>
    )}
  </S.Wrapper>
);

export default Profile;
