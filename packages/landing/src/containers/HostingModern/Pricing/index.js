import React from 'react';
import Icon from 'react-icons-kit';
import { checkmarkCircled } from 'react-icons-kit/ionicons/checkmarkCircled';
import { closeCircled } from 'react-icons-kit/ionicons/closeCircled';

import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Text from 'common/components/Text';
import List from 'common/components/List';
import SectionHeading from '../SectionHeading';
import SectionWrapper, {
  ContentWrapper,
  PriceTable,
  Price,
} from './pricing.style';
import { pricingInfo } from 'common/data/HostingModern';

const Pricing = () => {
  return (
    <SectionWrapper id="pricing">
      <Container>
        <SectionHeading
          slogan="Why businesses choose CheckerChain"
          title="Start using web3 solutions for business reviews"
        />
        <ContentWrapper>
          {pricingInfo.map((pricing) => (
            <PriceTable
              key={pricing.id}
              className={pricing.isRecommended && 'recommended'}
            >
              <Text
                as="div"
                className="rec-label"
                content={pricing.isRecommended ? 'WEB3 Solution' : ''}
              />
              <Heading as="h4" content={pricing.title} />
              <Text className="desc" content={pricing.desc} />
              <Button
                className={`start-trial ${
                  !pricing.isRecommended && 'outlined'
                }`}
                title={pricing.buttonText}
              />
              {pricing.features.map((feature) => (
                <List
                  className={`listItem ${feature.isDisabled && 'disabled'}`}
                  key={feature.id}
                  text={feature.name}
                  icon={
                    <Icon
                      style={{
                        color: feature.isDisabled ? '#CED7E1' : '#E9C46A',
                      }}
                      icon={
                        feature.isDisabled ? closeCircled : checkmarkCircled
                      }
                      size="18"
                    />
                  }
                />
              ))}
            </PriceTable>
          ))}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Pricing;
