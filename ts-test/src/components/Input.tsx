import React from 'react';
import styled from 'styled-components';

interface InputProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isFocus: boolean,
    placeholderText: string,
    onFocus: () => void,
    onBlur: ()=> void,
    max: number
}

const Input = ({ value, onChange, isFocus, placeholderText, onFocus, onBlur, max }: InputProps) => {
    return (
        <StyledInput type='text' placeholder={placeholderText} value={value} onChange={onChange} $isFocus={isFocus} onFocus={onFocus} onBlur={onBlur} maxLength={max} />
    );
};

const StyledInput = styled.input<{ $isFocus: boolean }>`
    width: 90%;
    font-size: 2rem;
    border-radius: 10px;
    border: 1px solid;
    color: ${({$isFocus})=> $isFocus ? "red" : "black"};
`;

export default Input;