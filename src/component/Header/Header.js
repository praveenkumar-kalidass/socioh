import React from 'react';
import PropTypes from 'prop-types';
import { useWindowDimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { COLOR } from '../../constant';
import {
  HeaderContainer,
  HeaderContent,
  HeaderContentContainer,
  Title,
} from './Header.style';

const Header = ({ scene }) => {
  const { width } = useWindowDimensions();

  return (
    <HeaderContainer>
      <Svg height={135} width={width}>
        <Circle r={width} cx={width / 2} cy={-310} fill={COLOR.PRIMARY} />
      </Svg>
      <HeaderContentContainer>
        <HeaderContent>
          <Title>{scene.descriptor.options.title}</Title>
        </HeaderContent>
      </HeaderContentContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  scene: PropTypes.shape({
    descriptor: PropTypes.shape({
      options: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Header;
