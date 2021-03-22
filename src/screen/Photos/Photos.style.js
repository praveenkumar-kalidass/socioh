import styled from 'styled-components/native';

import { SPACING } from '../../constant';

export const PhotosContainer = styled.View`
  flex: 1;
  padding-horizontal: ${SPACING.SPACE_20};
`;

export const Gallery = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${SPACING.SPACE_20};
`;

export const GalleryGrid = styled.View`
  width: 30%;
  margin-vertical: ${SPACING.SPACE_10};
`;

export const GalleryItem = styled.Image`
  aspect-ratio: 1;
  height: auto;
  width: auto;
`;

export const NoPhotosContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const NoPhotos = styled.Text`
  text-align: center;
`;
