import { useState } from 'react';
import { useToggle } from '../../hooks';
import styled from 'styled-components';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const StyledComboBox = styled.div`
  position: relative;
  width: 200px;
  height: 35px;
  border-radius: 15px;
  border: 2px solid #000;
  cursor: pointer;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 15px;
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  overflow-y: scroll;
  transition: all 0.2s ease-in;
  border-radius: 15px;
  max-height: 0;
  box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.3);
  z-index: 1;
  background-color: #fff;
  &.active {
    max-height: 300px;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #949494;
    border-radius: 45px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #303030;
  }
`;

const OptionItem = styled.li`
  padding: 10px 15px;
  transition: all 0.2s ease-in-out;
  width: 100%;
  &:hover,
  &.selected {
    font-weight: bold;
  }
  &:last-child {
    border-bottom: 0 none;
  }
`;

export function ComboBox({ categories, initialLabel, mainColor }) {
  const [label, setLabel] = useState(initialLabel);
  const [active, setActive] = useToggle(false);
  const onSelect = (category) => {
    setLabel(category);
  };
  return (
    <StyledComboBox onClick={setActive} className={active ? 'active' : ''}>
      <Label>
        {label}
        <KeyboardArrowDownRoundedIcon />
      </Label>
      <OptionsList mainColor={mainColor} className={active ? 'active' : ''}>
        {categories.map((category, index) => (
          <OptionItem
            key={index}
            onClick={() => onSelect(category)}
            className={category === label ? 'selected' : ''}
          >
            {category}
          </OptionItem>
        ))}
      </OptionsList>
    </StyledComboBox>
  );
}
