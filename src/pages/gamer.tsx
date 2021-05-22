import { GetStaticProps } from 'next';

import { Profile, ToggleTheme, Absolute, Menu } from 'components';

import client from 'graphql/client';
import GET_GAMER_PAGE from 'graphql/queries/getGamerPage';

import { GamerPageProps } from 'types/api';

import { getImageUrl } from 'utils/image';

export const Gamer = ({
  picture,
  name,
  description,
  role,
  socialLinks
}: GamerPageProps) => (
  <>
    <Menu />
    <ToggleTheme absolute />
    <Absolute center top="45%">
      <Profile
        {...{
          picture: getImageUrl(picture.url),
          name,
          description,
          role,
          socialLinks
        }}
        gamer
      />
    </Absolute>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { gamerPage } = await client.request(GET_GAMER_PAGE);

  return {
    props: {
      ...gamerPage.profile
    }
  };
};

export default Gamer;
