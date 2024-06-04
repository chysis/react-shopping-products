import * as S from './style';

interface TitleProps {
  content: string;
}

const Title = ({ content }: TitleProps) => {
  return <S.Title>{content}</S.Title>;
};

export default Title;
