import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

const KeypadHeader = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  font-size: 14px;
  background: #8a919f;
  color: #ffffff;
`;

const KeyPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  >button: focus {
    outline: none;
    border: solid #4480d9;
    border-width: 3px 0 0 3px;
  }
`;

const KeyPadButton = styled.button`
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
  border: solid #8a919f;
  border-width: 1px 0 0 1px;
  background: #9aa2b1;
  color: #ffffff;
`;

const KeypadFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 50%;
  height: 61px;
  font-size: 20px;
  border: solid #8a919f;
  border-width: 1px 0 0 1px;
  background: #9aa2b1;
  color: #ffffff;
`;

interface IVirtualKeyboardProps {
  handleKeyboardNumber(val: number): void;
  handleKeyboardNumberDelete(): void;
  handleClose(): void;
}

const VirtualKeyboard: React.FC<IVirtualKeyboardProps> = props => {
  return (
    <Wrapper>
      <KeypadHeader>
        <div onClick={() => props.handleClose()}>닫기</div>
      </KeypadHeader>
      <KeyPad>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1].map(val => (
          <KeyPadButton key={'keypad' + val} onClick={() => props.handleKeyboardNumber(val)}>
            {val >= 0 && val}
          </KeyPadButton>
        ))}
        {/* <KeyPadButton onClick={() => props.handleKeyboardNumberDelete()}>
        </KeyPadButton> */}
      </KeyPad>
      <KeypadFooter>
        <Button onClick={() => props.handleKeyboardNumberDelete()}>전체삭제</Button>
        <Button onClick={() => props.handleKeyboardNumberDelete()}>삭제</Button>
      </KeypadFooter>
    </Wrapper>
  );
};

export default VirtualKeyboard;
