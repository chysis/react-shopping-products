import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 430px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 430px;
  background-color: white;

  z-index: ${({ theme }) => theme.zIndex.header};
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  width: 100%;

  padding: 36px 24px;
  margin-top: 64px;
  overflow-y: auto;
  min-height: calc(100vh - 64px);
`;
