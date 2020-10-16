import React from 'react';
import { Card, CardItem, Col, Grid } from 'native-base';

import Praveen from '../../asset/image/praveen.jpeg';
import { CONSTANT } from '../../constant';
import {
  FeedbackContainer,
  Avatar,
  Name,
  SocialIcon,
  IconContainer,
} from './Feedback.style';
import { AUTHOR_SOCIAL_LINKS } from './Feedback.schema';

const Feedback = () => {
  return (
    <>
      <FeedbackContainer>
        <Card>
          <CardItem>
            <Grid>
              <Avatar large source={Praveen} />
              <Col>
                <Name>{CONSTANT.SOCIOH.AUTHOR_NAME}</Name>
                <Grid>
                  <For each="social" index="index" of={AUTHOR_SOCIAL_LINKS}>
                    <IconContainer key={`social_link_${index}`}>
                      <SocialIcon {...social} />
                    </IconContainer>
                  </For>
                </Grid>
              </Col>
            </Grid>
          </CardItem>
        </Card>
      </FeedbackContainer>
    </>
  );
};

export default Feedback;
