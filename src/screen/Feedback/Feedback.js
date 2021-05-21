import React, { useState } from 'react';
import { Card, Col, Grid } from 'native-base';

import Praveen from 'asset/image/praveen.jpeg';
import { CONSTANT } from 'constant';
import WebView from 'component/WebView';
import {
  FeedbackContainer,
  Avatar,
  Name,
  SocialIcon,
  IconContainer,
  CardContent,
} from './Feedback.style';
import { AUTHOR_SOCIAL_LINKS } from './Feedback.schema';

const Feedback = () => {
  const [uri, setUri] = useState('');

  return (
    <>
      <If condition={Boolean(uri)}>
        <WebView uri={uri} onClose={() => setUri('')} />
      </If>
      <FeedbackContainer>
        <Card>
          <CardContent cardBody>
            <Grid>
              <Avatar large source={Praveen} />
              <Col>
                <Name>{CONSTANT.SOCIOH.AUTHOR_NAME}</Name>
                <Grid>
                  <For each="social" index="index" of={AUTHOR_SOCIAL_LINKS}>
                    <IconContainer
                      key={`social_link_${index}`}
                      onPress={() => setUri(social.url)}>
                      <SocialIcon {...social} />
                    </IconContainer>
                  </For>
                </Grid>
              </Col>
            </Grid>
          </CardContent>
        </Card>
      </FeedbackContainer>
    </>
  );
};

export default Feedback;
