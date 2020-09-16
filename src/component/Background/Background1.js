import React from 'react';
import { useWindowDimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { COLOR } from '../../constant';
import { Background } from './Background.style';

const Background1 = () => {
  const { height, width } = useWindowDimensions();

  return (
    <Background>
      <Svg height={height} width={width}>
        <Circle
          cx={width / 8 - 10}
          cy={height / 4}
          r={width / 8}
          fill={COLOR.PRIMARY}
        />
        <Circle
          cx={width - (width / 8 - 10)}
          cy={height - (height / 8 - 20)}
          r={height / 8}
          fill={COLOR.SECONDARY}
        />
      </Svg>
    </Background>
  );
};

export default Background1;
