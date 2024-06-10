import styled from '@emotion/styled';

export const Container = styled.div<{ directionStyle: 'row' | 'column' }>`
  display: flex;

  flex-direction: ${({ directionStyle }) => directionStyle};
  justify-content: ${({ directionStyle }) => (directionStyle === 'row' ? 'space-between' : 'center')};
  align-items: center;
  text-align: ${({ directionStyle }) => (directionStyle === 'column' ? 'center' : 'left')};

  margin-bottom: 12px;
  gap: 12px;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.paymentDetailTitle};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Amount = styled.div`
  font-size: ${({ theme }) => theme.fontSize.paymentDetailAmount};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
