import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  width: 182px;
  height: 224px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
`;

export const Information = styled.div`
  padding: 16px 8px 0 8px;
  margin-bottom: 4px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 20px;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.description};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 15px;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSize.description};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 15px;
`;
