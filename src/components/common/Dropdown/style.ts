import styled from '@emotion/styled';

export type Size = 'default' | 'full';

const DROPDOWN_SIZE = {
  default: '125px',
  full: '100%',
};

export const Container = styled.div`
  position: relative;
  margin: 16px 0;
  width: 125px;
`;

export const Dropdown = styled.button<{ size: Size }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 36px;
  width: ${({ size }) => DROPDOWN_SIZE[size]};

  padding: 8px;
  border-radius: 8px;

  outline: none;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.optionBorder};
  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export const DropdownText = styled.span<{ selectedOption: string }>`
  color: ${({ selectedOption, theme }) => (selectedOption === '' ? theme.colors.semiBlack : theme.colors.black)};

  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 20px;
`;

export const OptionContainer = styled.ul<{ size: Size }>`
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  position: absolute;
  top: 100%;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: ${({ size }) => DROPDOWN_SIZE[size]};
  height: fit-content;

  padding: 8px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.optionBorder};
  background-color: ${({ theme }) => theme.colors.white};

  margin-top: 5px;
`;

export const Option = styled.li`
  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.description};
  width: 100%;
  height: 31px;

  padding-left: 10px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.optionBg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
