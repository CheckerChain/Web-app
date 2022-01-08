import React from 'react';
import Icon from 'react-icons-kit';
import { checkmarkCircled } from 'react-icons-kit/ionicons/checkmarkCircled';
import Container from 'common/components/UI/ContainerTwo';
import NextImage from 'common/components/NextImage';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import List from 'common/components/List';
import SectionWrapper, {
  ContentWrapper,
  Figure,
  Content,
  IconList,
} from './customerSupport.style';
import messenger from 'common/assets/image/hostingModern/messenger.png';

const CustomerSupport = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <Figure>
            <NextImage src={messenger} alt="messenger" />
          </Figure>
          <Content>
            <Heading content="CheckerChain ecosystem provides rewards for posters, checkers and influencers." />
            <Text content="Get your rankings on top every month to earn extra $CHECKR tokens. Posters, checkers and influencers are qualified." />

            <IconList>
              <List
                className="listItem"
                icon={<Icon icon={checkmarkCircled} size="18" />}
                text="Rewarding Ecoystem"
              />
              <List
                className="listItem"
                icon={<Icon icon={checkmarkCircled} size="18" />}
                text="Staking Mechanism"
              />
              <List
                className="listItem"
                icon={<Icon icon={checkmarkCircled} size="18" />}
                text="Leaderboard Rewards"
              />
              <List
                className="listItem"
                icon={<Icon icon={checkmarkCircled} size="18" />}
                text="Influcers Rewards"
              />
            </IconList>
          </Content>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CustomerSupport;
