import styled from 'styled-components';

export const ContainerLoginScreen = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const LogoImage = styled.img``;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #d9d9d9;
  padding: 22px;
  width: 100%;
  height: 100vh;
  max-width: 646px;
`;

export const LimitedContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
`;
