import React from 'react';
import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Input from 'common/components/Input';
import Select from 'common/components/Select';
import Button from 'common/components/Button';
import Link from 'next/link';


import BannerSection, {
  ContentWrapper,
  BannerContent,
  DomainChecker,
  DomainControl,
  BannerImage,
} from './banner.style';

import illustration from 'common/assets/image/hostingModern/illustration.png';

const options = [
  { label: '.COM', value: 'dot-com' },
  { label: '.NET', value: 'dot-net' },
  { label: '.ORG', value: 'dot-org' },
];

const Banner = () => {
  return (
    <BannerSection id="home">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading as="h1" content="A Decentralized Review Aggregator Platform." />
            <Text content="Submit Products, Apps, Books, Movies, & Events for decentralized reviews. Earn $CHECKR token on merits of review consensus. 100% revenue shared." />
            <Link href="https://elrond.com">
              <a target="_blank" className="joinButton">
                <Button title="Powered by Elrond" />
              </a>
            </Link>
          </BannerContent>
          <BannerImage>
            <NextImage src={illustration} alt="" />
          </BannerImage>
        </ContentWrapper>
      </Container>
    </BannerSection>
  );
};

export default Banner;
