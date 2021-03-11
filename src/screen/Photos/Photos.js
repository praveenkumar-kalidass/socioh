import React from 'react';
import { Card, CardItem } from 'native-base';

import Praveen from '../../asset/image/praveen.jpeg';
import User from '../../asset/image/user.png';
import Bot from '../../asset/image/socioh_bot.jpg';
import {
  Gallery,
  GalleryGrid,
  GalleryItem,
  PhotosContainer,
} from './Photos.style';

const Photos = () => {
  return (
    <PhotosContainer>
      <Card>
        <CardItem cardBody>
          <Gallery>
            <GalleryGrid>
              <GalleryItem source={Praveen} />
            </GalleryGrid>
            <GalleryGrid>
              <GalleryItem source={User} />
            </GalleryGrid>
            <GalleryGrid>
              <GalleryItem source={Bot} />
            </GalleryGrid>
            <GalleryGrid>
              <GalleryItem source={Praveen} />
            </GalleryGrid>
          </Gallery>
        </CardItem>
      </Card>
    </PhotosContainer>
  );
};

export default Photos;
