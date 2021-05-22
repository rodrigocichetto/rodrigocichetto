import { gql } from 'graphql-request';

const GET_HOME_PAGE = gql`
  {
    homePage {
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

export default GET_HOME_PAGE;
