import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import { closeCircled } from 'react-icons-kit/ionicons/closeCircled';

import Container from 'common/components/UI/ContainerTwo';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import gift from 'common/assets/image/hostingModern/gift.png';
import TopBarWrapper, {
  TopbarInner,
  TopBarMobile,
  Wrapper,
} from './topbar.style';

const TopBar = () => {
  const [closeTopBar, setCloseTopBar] = useState(false);

  const handleClose = () => {
    setCloseTopBar(true);
  };

  return (
    <TopBarWrapper isHide={closeTopBar && closeTopBar}>
      <Container>
        <TopbarInner>
          <p className="caption">
            <Image src={gift?.src} alt="gift icon" />
            Mainnet $CHECKR token is "CHECKR-60108b".  Follow us in twitter & telegram
            <strong className="tlds">Airdropping 100 $CHECKR Token </strong>
          </p>

          <Link href="https://docs.google.com/presentation/u/2/d/1UaDXyh2_506mj55pOHcYeBhgMLBuQKeS_HjnJe1bWxc/edit?usp=sharing">
            <a target="_blank" className="dealsLink">
              <span>Lightpaper</span>
              <Icon className="close" icon={arrowRight} size={14} />
            </a>
          </Link>
          <Button
            onClick={handleClose}
            className="closeTopBar"
            icon={<Icon className="close" icon={closeCircled} size={20} />}
          />
        </TopbarInner>
        <TopBarMobile>
          <Wrapper>
            <p className="caption">
              <Image src={gift?.src} alt="gift icon" />
              <span>Mainnet $CHECKR token is "CHECKR-60108b".  Follow us in twitter & telegram</span>
            </p>
            <p>
              <strong className="tlds">Airdropping 100 $CHECKR Token </strong>

              <Link href="https://docs.google.com/presentation/u/2/d/1UaDXyh2_506mj55pOHcYeBhgMLBuQKeS_HjnJe1bWxc/edit?usp=sharing">
                <a target="_blank" className="dealsLink">
                  <span>Lightpaper</span>
                  <Icon className="close" icon={arrowRight} size={14} />
                </a>
              </Link>
            </p>
          </Wrapper>
          <Button
            onClick={handleClose}
            className="closeTopBar"
            icon={<Icon className="close" icon={closeCircled} size={20} />}
          />
        </TopBarMobile>
      </Container>
    </TopBarWrapper>
  );
};

export default TopBar;
