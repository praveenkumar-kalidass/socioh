import React from 'react';
import { useWindowDimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { COLOR } from '../../constant';
import { Background } from './Background.style';

const Background2 = () => {
  const { height, width } = useWindowDimensions();

  return (
    <Background>
      <Svg height={height} width={width}>
        <Circle
          cx={width - (width / 8 - 10)}
          cy={height / 4}
          r={width / 6}
          fill={COLOR.SECONDARY}
        />
        <Circle
          cx={width / 8 - 10}
          cy={height / 1.75}
          r={width / 8}
          fill={COLOR.PRIMARY}
        />
        <Circle
          cx={width - width / 10 - 25}
          cy={height * 0.9 - 10}
          r={width / 10}
          fill={COLOR.PRIMARY}
        />
      </Svg>
    </Background>
  );
};

export default Background2;
