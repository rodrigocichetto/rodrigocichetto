'use client';
import { motion } from 'framer-motion';

import { ProfilePicture, Tag, Text, Hexagon } from '@/components';
import { SocialLink } from '@/types/global';

import * as S from './styles';

export type ProfileProps = {
  picture: string;
  name: string;
  description?: string;
  socialLinks?: SocialLink[];
  role?: string;
  tag?: string;
  nameTag?: string;
  gamer?: boolean;
};

const Profile = ({
  picture,
  name,
  description,
  socialLinks,
  role,
  tag,
  nameTag,
  gamer
}: ProfileProps) => (
  <S.Wrapper>
    {!!tag && (
      <S.TagWrapper position="top">
        <Tag>{tag}</Tag>
      </S.TagWrapper>
    )}

    <S.Content>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
      >
        <S.InnerProfile>
          <ProfilePicture
            src={picture}
            color={gamer ? 'gamerProfileBackground' : 'menu'}
          />

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
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5 } }}
      >
        <S.Info>
          {!!description && <Text>{description}</Text>}

          {!!socialLinks && (
            <S.Social evenly={socialLinks.length <= 3}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{
                    scale: 0
                  }}
                  animate={{
                    scale: 1,
                    transition: { delay: index * 0.2 + 1.5 }
                  }}
                >
                  <Hexagon icon={social.icon} gamer={gamer} />
                </motion.a>
              ))}
            </S.Social>
          )}
        </S.Info>
      </motion.div>
    </S.Content>

    {!!tag && (
      <S.TagWrapper position="bottom">
        <Tag>/{tag}</Tag>
      </S.TagWrapper>
    )}
  </S.Wrapper>
);

Profile.displayName = 'Profile';

export default Profile;
