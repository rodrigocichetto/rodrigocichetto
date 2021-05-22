import { gql } from 'graphql-request';

const GET_GAMER_PAGE = gql`
  {
    gamerPage {
      profile {
        picture {
          url
        }
        name
        description
        socialLinks {
          icon
          url
        }
        role
      }
    }
  }
`;

export default GET_GAMER_PAGE;
