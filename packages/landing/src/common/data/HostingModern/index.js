export const MenuItems = [
  {
    label: 'Home',
    path: '#home',
    offset: '70',
  },
  {
    label: 'Products',
    path: '#services',
    offset: '70',
  },
  {
    label: 'Features',
    path: '#features',
    offset: 20,
  },
  {
    label: 'Earning $CHECKR',
    path: '#pricing',
    offset: '70',
  },
  {
    label: 'Latest Reviews',
    path: '#news',
    offset: '70',
  },
  {
    label: 'FAQs',
    path: '#faq',
    offset: '70',
  },
  {
    label: '',
    path: '#',
    offset: '70',
  },
];

export const Services = [
  {
    id: 1,
    title: 'Products Review',
    price: '--/Epoch',
  },
  {
    id: 2,
    title: 'Apps',
    price: '--/Epoch',
  },
  {
    id: 3,
    title: 'Books',
    price: '--/Epoch',
  },
  {
    id: 4,
    title: 'Movies',
    price: '--/Epoch',
  },
  {
    id: 5,
    title: 'Events',
    price: '--/Epoch',
  },
  {
    id: 6,
    title: 'Avg Poster Earnings',
    price: '$00.00/Epoch',
  },
  {
    id: 7,
    title: 'Avg. Checker Earnings',
    price: '$00.00/Epoch',
  },
  {
    id: 8,
    title: 'Total Checkers',
    price: '00000',
  },
];

export const accordions = [
  {
    id: 1,
    expanded: true,
    title: 'Submit posts for reviews',
    desc:
      'Connecting Maiar Wallet, anyone can submit a post for getting reviews using $CHECKR tokens. Posts can be about products, apps, books, movies and events.',
  },
  {
    id: 2,
    expanded: false,
    title: 'Submitted posts are validated by Checkers',
    desc:
      'Anyone can join CheckerChain to become Checkers. They randomly receive posts for validation tasks.',
  },
  {
    id: 3,
    expanded: false,
    title: "$CHECKR token as reward for reaching review consensus",
    desc:
      'Based on review metrics, new $CHECRK tokens are rewarded based on Post Score and Checker Score.',
  },
];

import featureIcon1 from 'common/assets/image/hostingModern/features/1.png';
import featureIcon2 from 'common/assets/image/hostingModern/features/2.png';
import featureIcon3 from 'common/assets/image/hostingModern/features/3.png';
import featureIcon4 from 'common/assets/image/hostingModern/features/4.png';
import featureIcon5 from 'common/assets/image/hostingModern/features/5.png';
import featureIcon6 from 'common/assets/image/hostingModern/features/6.png';
export const features = [
  {
    id: 1,
    icon: featureIcon1,
    title: 'Decentralized Review Network',
    desc:
      'Transparent, authentic and open review network that everyone can rely on.',
  },
  {
    id: 2,
    icon: featureIcon2,
    title: 'Bolt Performance',
    desc:
      'Uses Elrond Network to process all checkings; super-fast & scalable.',
  },
  {
    id: 3,
    icon: featureIcon3,
    title: 'Secure Transaction',
    desc:
      'Uses crypto-wallet for all transactions. Your post, your review. Anonymomity included.',
  },
  {
    id: 4,
    icon: featureIcon4,
    title: 'Review to Earn',
    desc:
      'Get rewards on $CHECKR tokens for all posts and reviews. Highly rewarding model.',
  },
  {
    id: 5,
    icon: featureIcon5,
    title: 'Usecases for businesses',
    desc:
      'Business utilizes our review network to get authentic feedbacks. All revenue shared.',
  },
  {
    id: 6,
    icon: featureIcon6,
    title: 'Tamper-proof, Censorship-resistant',
    desc:
      'All p  osts and reviews are processed through smart-contracts. Uses IPFS.',
  },
];

export const pricingInfo = [
  {
    id: 1,
    title: 'Web2 Reviews',
    desc: 'Are you still using web2 solutions for reviews and surveys?',
    price: 25.99,
    buttonText: 'Expensive. Non-Transparent.',
    isRecommended: false,
    features: [
      {
        id: 1,
        name: 'No consensus mechanism on reviews. Manual and can be tampered.',
        isDisabled: false,
      },
      {
        id: 2,
        name:
          'Highly centralized and expensive. Unable to reach wider population.',
        isDisabled: false,
      },
      {
        id: 3,
        name: 'Need to trust the reviewers without any proof-of-work',
        isDisabled: false,
      },
    ],
  },
  {
    id: 2,
    title: 'CheckerChain',
    desc: 'Decentralized web3 solutions for review industry',
    price: 29.99,
    buttonText: 'Inexpensive. 100% Transparent.',
    isRecommended: true,
    features: [
      {
        id: 1,
        name: 'Get reviews anytime, anywhere at a cost of few pennies.',
        isDisabled: false,
      },
      {
        id: 2,
        name: '100% Authentic reviews. Censorship-resistant and Tamper-proof.',
        isDisabled: false,
      },
      {
        id: 3,
        name: 'Earning platform for business. Qualify to earn $CHECKR tokens.',
        isDisabled: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Other Web3 solution',
    desc: 'Promises are good; but useless without working product. ',
    price: 34.99,
    buttonText: 'Not yet built.',
    isRecommended: false,
    features: [
      {
        id: 1,
        name: 'No mechanism for reviews. No application built or tested.',
        isDisabled: false,
      },
      {
        id: 2,
        name: 'No mechanism for reviews. No application built or tested.',
        isDisabled: false,
      },
      {
        id: 3,
        name: 'No mechanism for reviews. No application built or tested.',
        isDisabled: false,
      },
    ],
  },
];

import author1 from 'common/assets/image/hostingModern/author1.png';
export const testimonials = [
  {
    id: 1,
    image: author1,
    name: 'Melina Pettendorfer',
    designation: 'CEO of Uber',
    quote:
      "Best host I've had in 10 years. Smooth migration, no stress, and friendly support one click away. I'm very happy and recommend their services",
  },
  {
    id: 2,
    image: author1,
    name: 'Kelsi Gordon',
    designation: 'Insurance Broker',
    quote:
      'My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business',
  },
  {
    id: 3,
    image: author1,
    name: 'Tasha Zuzalek',
    designation: 'Facebook Project Manager',
    quote:
      "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team.",
  },
];

import news1 from 'common/assets/image/hostingModern/news1.png';
import news2 from 'common/assets/image/hostingModern/news2.png';
import news3 from 'common/assets/image/hostingModern/news3.png';
export const newsFeed = [
  {
    id: 1,
    image: news1,
    title: 'An introduction to CheckerChain',
    excerpt:
      'Learn what core team has to say about CheckerChain ecosystem about decentralized review and survey industry.',
    link: '#',
  },
  {
    id: 2,
    image: news2,
    title: 'Why did we choose to build on Elrond?',
    excerpt:
      'Elrond Blockchain is highly scalable, blazing fast and secure to handle millions of transactions. This is exactly what CheckerChain requires.',
    link: '#',
  },
  {
    id: 3,
    image: news3,
    title: 'Tokenomics & Rewards of CheckerChain',
    excerpt:
      'The max supply of $CHECKR token is 1,000,000,000 and all revenues collected in the platform are shared with ecosystem participants.',
    link: '#',
  },
];

export const faqs = [
  {
    id: 1,
    title: 'How much can I earn as Poster, Validator and Influencer?',
    desc: `15% of the total supply are allocated for Poster, Validator and Influencer. On top of this, there will be revenue earned from partnered business.`,
  },
  {
    id: 4,
    title: 'Is $CHECKR token available to purchase?',
    desc: `No. $CHECKR token will be minted in Q1 2022 with official announcement. Stay tuned in by joining our twitter and telegram.`,
  },
  ];
