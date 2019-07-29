import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import CardRegisterInput from '../../atoms/CardRegisterInput';

const useLinkedInput = (ref: any, initVal: string, maxLength: number, next?: any) => {
  const inputRef = useRef<any>();
  const [value, setValue] = useState(initVal);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;

    if (value.length <= maxLength && new RegExp('^[0-9]*$').exec(value)) {
      setValue(value);
    }
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
        if (value.length === maxLength) {
          inputRef.current.blur();
        } else {
          inputRef.current.focus();
        }
      }
    }
  }));

  if (value.length === maxLength && next) {
    next.current.getNext(inputRef);
  }

  return { inputRef, value, onChange };
};

interface ILinkedInputProps {
  maxLength: number;
  type: string;
  placeholder?: string;
  next?: any;
}

const LinkedInput = forwardRef((props: ILinkedInputProps, ref: any) => {
  const state = useLinkedInput(ref, '', props.maxLength, props.next);

  return (
    <CardRegisterInput
      ref={state.inputRef}
      type={props.type}
      placeholder={
        props.placeholder
          ? props.placeholder
          : Array.from({ length: props.maxLength }, () => Math.floor(Math.random() * 10)).join('')
      }
      value={state.value}
      onChange={state.onChange}
    />
  );
});

export default LinkedInput;
