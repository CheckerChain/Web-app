import React from 'react';

import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';

import illustration from 'common/assets/image/hostingModern/illustration3.png';
import illustration2 from 'common/assets/image/hostingModern/illustration4.png';
import SectionWrapper, { Content, ButtonWrap } from './callToAction.style';
import Link from 'next/link';


const CallToAction = () => {
  return (
    <SectionWrapper>
      <Container>
        <Content>
          <Heading
            as="h3"
            content="Do you have any question? Feel free to join our community"
          />
          <ButtonWrap>
            <img src={illustration?.src} alt="" />
            <Link href="https://t.me/checkerchain">
              <a target="_blank" className="joinButton">
                <Button title="Join our Telegram" />
              </a>
            </Link>
            <img src={illustration2?.src} alt="" />
          </ButtonWrap>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default CallToAction;
