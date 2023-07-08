import * as React from 'react';

interface Option {
    title: string;
    key: string;
    value: string | number | boolean;
}
interface Props extends React.HTMLAttributes<HTMLElement> {
    titleWidth?: number;
    optionWidth?: number;
    title: string;
    value: string | number | boolean;
    options: Option[];
    onOptionChange: (value: string) => void;
}
declare const Dropdown: (props: Props) => JSX.Element;

export { Dropdown };
