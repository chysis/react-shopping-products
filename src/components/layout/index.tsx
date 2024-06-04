import React from 'react';
import * as S from './style';

interface LayoutProps {
  header: React.ReactNode;
}

export default function Layout({
  children,
  header,
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>{header}</S.HeaderWrapper>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
}
