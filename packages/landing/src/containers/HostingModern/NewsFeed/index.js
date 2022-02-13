import React from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { angleRight } from 'react-icons-kit/fa/angleRight';
import Container from 'common/components/UI/ContainerTwo';
import BlogPost from 'common/components/BlogPost';
import SectionHeading from '../SectionHeading';
import SectionWrapper, { ContentWrapper } from './newsFeed.style';
import { newsFeed } from 'common/data/HostingModern';

const NewsFeed = () => {
  return (
    <SectionWrapper id="news">
      <Container>
        <SectionHeading
          slogan="Latest newsfeed"
          title="Read our recent blog posts"
        />
        <ContentWrapper>
          {newsFeed.map((news) => (
            <BlogPost
              key={news.id}
              thumbUrl={news.image}
              title={news.title}
              excerpt={news.excerpt}
              link={
                <Link href={news.link}>
                  <a className="excerptLink">
                    Coming soon <Icon icon={angleRight} />
                  </a>
                </Link>
              }
            />
          ))}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default NewsFeed;
