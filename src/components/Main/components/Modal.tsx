import React from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import loginModal from '../../../store/loginModal';

const Modal = () => {
  // ➕ 아래에서 위로 등장하는 애니메이션 효과 추가

  const [openLoginModal, setOpenLoginModal] = useRecoilState(loginModal);
  const closeModal = () => {
    setOpenLoginModal(false);
  };

  return (
    <Container modalState={openLoginModal} onClick={closeModal}>
      <ModalContainer modalState={openLoginModal}>
        <ModalHeader>
          <h5>로그인 또는 회원가입</h5>
        </ModalHeader>
        <MainSection>
          <h4>에어비앤비에 오신 것을 환영합니다</h4>
        </MainSection>
      </ModalContainer>
    </Container>
  );
};

const Container = styled.div<{ modalState: boolean }>`
  display: ${(props) => (props.modalState ? 'flex' : 'none')};
  justify-content: center;

  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  padding: 40px 0;
  /* margin: 0 auto; */
`;

const ModalContainer = styled.div<{ modalState: boolean }>`
  display: ${(props) => (props.modalState ? 'block' : 'none')};
  width: 570px;
  background-color: #fff;
  border-radius: 12px;
`;

const ModalHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 1px solid ${(props) => props.theme.borderGray};

  h5 {
    font-weight: 700;
  }
`;

const MainSection = styled.section`
  padding: 20px 20px;
`;

export default Modal;
