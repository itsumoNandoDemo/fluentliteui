import * as React from 'react';

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    pop: string | JSX.Element | JSX.Element[];
    children: React.ReactNode;
}
declare const Popover: (props: Props) => JSX.Element;

export { Popover };
