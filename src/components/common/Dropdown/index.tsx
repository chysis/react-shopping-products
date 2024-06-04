import { useEffect, useRef, useState } from 'react';
import { LowerArrow, UpperArrow } from './Arrows';
import * as S from './style';

type Option = {
  content: string;
  value: string;
};

interface DropdownProps {
  size: S.Size;
  options: Option[];
  defaultContent: string;
  onSelect: (value: string) => void;
}

const Dropdown = ({ size, options, defaultContent, onSelect }: DropdownProps) => {
  const [curContent, setCurContent] = useState<string>(defaultContent);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = () => {
    setIsOpened((prev) => !prev);
  };

  const handleOptionSelect = (option: Option) => {
    onSelect(option.value);
    setCurContent(option.content);
    setIsOpened(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Container ref={dropdownRef}>
      <S.Dropdown size={size} onClick={handleDropdownClick}>
        <S.DropdownText selectedOption={curContent}>{curContent}</S.DropdownText>
        {isOpened ? <UpperArrow /> : <LowerArrow />}
      </S.Dropdown>
      {isOpened && (
        <S.OptionContainer size={size}>
          {options.map((option, index) => {
            return (
              <S.Option key={`${option.content}_${index}`} id={option.value} onClick={() => handleOptionSelect(option)}>
                {option.content}
              </S.Option>
            );
          })}
        </S.OptionContainer>
      )}
    </S.Container>
  );
};

export default Dropdown;
