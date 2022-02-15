import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import List from 'common/components/List';

import FooterWrapper, {
  FooterInner,
  CopyrightInfo,
  FooterWidget,
  Nav,
} from './footer.style';
import LogoImage from 'common/assets/image/hostingModern/logo.png';

import data from 'common/data/AgencyModern';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <CopyrightInfo>
            <Fade up delay={100}>
              <p>
                <Link href="#">Terms of use</Link> {' '}
                <Link href="#"></Link>
              </p>
              <Text
                className="copyright"
                content="All rights reserved. CheckerChain"
              />
            </Fade>
          </CopyrightInfo>

          <FooterWidget>
            <Fade up delay={200}>
              <Heading as="h4" content="About Us" />
              <Nav>
                {data.aboutUs.map((item) => (
                  <Link key={item.id} href={item.link}>
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={300}>
              <Heading as="h4" content="Information" />
              <Nav>
                {data.ourInformation.map((item) => (
                  <Link key={item.id} target="_blank" href={item.link}>
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={400}>
              <Heading as="h4" content="Important Links" />
              <Nav>
                {data.myAccount.map((item) => (
                  <Link key={item.id} target="_blank" href={item.link}>
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={500}>
              <Heading as="h4" content="Connect" />
              <Nav>
                {data.social.map((item) => (
                  <Link key={item.id} target="_blank" href={item.link}>
                    <Image src={item.icon?.src} alt="Facebook" />
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
