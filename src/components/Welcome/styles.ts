import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    width: 80vw;
    flex-direction: row;

    span {
      display: inline-flex;
      font-size: 5rem;
      margin-right: ${theme.spacings.medium};
    }

    ${media.lessThan('medium')`
      flex-direction: column;

      h1 {
        font-size: ${theme.font.sizes.xlarge};
      }

      span {
        width: 7rem;
        margin-bottom: ${theme.spacings.xsmall};
      }
    `}
  `}
`;
