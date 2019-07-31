import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';
import styled from 'styled-components';
import CardRegisterInput from '../../atoms/CardRegisterInput';
import VirtualKeyboard from '../../organisms/VirtualKeyboard';

const Wrapper = styled.div<{ isFocus: boolean }>`
  > input {
    outline: none;
    border: ${p => (p.isFocus ? 1 : 0)}px solid #4480d9;
  }
`;

const useLinkedInputUsingKeypad = (ref: any, initVal: string, maxLength: number, next?: any) => {
  const inputRef = useRef<any>();
  const keyboard = useRef<any>();
  const [value, setValue] = useState('');
  const [isFocus, handleFocus] = useState(false);

  const handleDocumentClickEvent = (e: any) => {
    if (!keyboard || !keyboard.current) {
      return;
    }

    if (keyboard && (keyboard.current.contains(e.target) || e.target === inputRef.current)) {
      handleFocus(true);
    } else {
      handleFocus(false);
    }
  };

  const onChangeFocus = (val: boolean) => {
    handleFocus(val);
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    },
    getValue: () => {
      return value;
    },
    setValue: (val: string) => {
      if (value.length < maxLength) {
        setValue(value + val);
        if (value.length === maxLength - 1) {
          handleFocus(false);
          document.removeEventListener('click', handleDocumentClickEvent, true);
          next.current.getNext(inputRef);
        }
      }
    },
    removeLastValue: () => {
      if (value.length > 0) {
        setValue(value.slice(0, -1));
      }
    },
    getRef: () => {
      return inputRef.current;
    },
    getNext: (findStartItem: any) => {
      if (next && value.length === maxLength) {
        if (findStartItem.current === next.current.getRef()) {
          next.current.blur();
        } else {
          next.current.getNext(findStartItem);
        }
      } else {
        inputRef.current.focus();
      }
    },
    offFocus: (onFocusRef: any) => {
      if (onFocusRef.current !== inputRef.current) {
        if (isFocus) {
          handleFocus(false);
        }
        next.current.offFocus(onFocusRef);
      }
    }
  }));

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('click', () => {
        setValue('');
        handleFocus(true);
      });
      inputRef.current.addEventListener('focus', () => {
        handleFocus(true);
      });
    }

    document.addEventListener('click', e => handleDocumentClickEvent(e), true);
  }, [inputRef, isFocus]);

  return { inputRef, value, isFocus, keyboard, onChangeFocus };
};

interface ILinkedInputProps {
  maxLength: number;
  title: string;
  placeholder: string;
  inputWidth?: number;
  next?: any;
}

const LinkedInputUsingKeypad = forwardRef((props: ILinkedInputProps, ref: any) => {
  const state = useLinkedInputUsingKeypad(ref, '', props.maxLength, props.next);
  const handleKeyboardNumber = (val: number) => {
    ref.current.setValue(val);
  };

  const handleKeyboardNumberDelete = () => {
    ref.current.removeLastValue();
  };

  const handleClose = () => {
    state.onChangeFocus(false);
  };

  return (
    <Wrapper isFocus={state.isFocus}>
      <CardRegisterInput
        ref={state.inputRef}
        placeholder={props.placeholder}
        value={state.value.replace(/[0-9]/g, '*')}
        inputWidth={props.inputWidth}
        readOnly
      />
      {state.isFocus && (
        <div ref={state.keyboard}>
          <VirtualKeyboard
            title={props.title}
            handleKeyboardNumber={handleKeyboardNumber}
            handleKeyboardNumberDelete={handleKeyboardNumberDelete}
            handleClose={handleClose}
          />
        </div>
      )}
    </Wrapper>
  );
});

export default LinkedInputUsingKeypad;
