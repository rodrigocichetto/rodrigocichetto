import { useEffect } from 'react';

import { motion, animate } from 'framer-motion';

import { Absolute, Text } from 'components';

import * as S from './styles';

export type WelcomeProps = {
  onComplete?: () => void;
};

const Welcome = ({ onComplete = () => null }: WelcomeProps) => {
  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.5 } }
  };

  useEffect(() => {
    const controls = animate(0, 100, {
      onComplete: () => setTimeout(onComplete, 4000)
    });

    return controls.stop;
  }, [onComplete]);

  return (
    <Absolute center>
      <S.Wrapper {...animation}>
        <motion.span
          animate={{
            rotate: [8, -8, 8],
            transition: { ease: 'linear', duration: 1.4, repeat: Infinity }
          }}
        >
          👋
        </motion.span>

        <Text tag="h1" size="xxlarge">
          Hi,
          <br /> {`I'm `} <strong>&lt;RodrigoCichetto /&gt;</strong> &#47;&#47;
          &#x1F3AE; shibetto
        </Text>
      </S.Wrapper>
    </Absolute>
  );
};

export default Welcome;
