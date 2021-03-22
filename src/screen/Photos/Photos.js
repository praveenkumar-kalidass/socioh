import React, { useEffect, useState } from 'react';
import { Card, CardItem } from 'native-base';

import useService from '../../hook/useService';
import { TRANSLATION } from '../../constant';
import {
  Gallery,
  GalleryGrid,
  GalleryItem,
  NoPhotos,
  NoPhotosContainer,
  PhotosContainer,
} from './Photos.style';

const Photos = () => {
  const [images, setImages] = useState([]);

  const { getPhotos } = useService();

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const photos = await getPhotos();
        setImages(photos);
      } catch (error) {
        console.warn('error', error);
      }
    };
    loadPhotos();
  }, []);

  return (
    <PhotosContainer>
      <Card>
        <CardItem cardBody>
          <Gallery>
            <If condition={!images.length}>
              <NoPhotosContainer>
                <NoPhotos testID="photos_empty">
                  {TRANSLATION.NO_PHOTOS}
                </NoPhotos>
              </NoPhotosContainer>
            </If>
            <For each="image" index="index" of={images}>
              <GalleryGrid key={`photo_${index}`}>
                <GalleryItem
                  testID={`photo_${index}`}
                  source={{ uri: image.uri }}
                />
              </GalleryGrid>
            </For>
          </Gallery>
        </CardItem>
      </Card>
    </PhotosContainer>
  );
};

export default Photos;
