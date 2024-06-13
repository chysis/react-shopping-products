import styled from '@emotion/styled';

export const Grid = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: auto auto;
  gap: 20px 16px;

  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  gap: 50px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const ErrorImage = styled.img`
  width: 200px;
`;

export const ErrorMessage = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-align: center;
`;

export const RefetchButton = styled.button`
  width: 200px;
  height: 30px;

  font-size: 15px;
`;
