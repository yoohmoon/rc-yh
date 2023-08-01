import React from 'react';
import HeadNav from '../components/Header/HeadNav';
import { styled } from 'styled-components';
import Modal from '../components/Modal/Modal';

const RoomDetail = () => {
  return (
    <Container>
      <Modal />
      <NavWrapper>
        <HeadNav isDetail={true} />
      </NavWrapper>
    </Container>
  );
};

const Container = styled.div``;

const NavWrapper = styled.div`
  padding: 0 116px;
  border-bottom: 1px solid ${(props) => props.theme.spLightGray};
`;

export default RoomDetail;