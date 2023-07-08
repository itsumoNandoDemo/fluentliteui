import * as React from 'react';

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    gap?: number;
    justify?: string;
    direction?: string;
    children?: React.ReactNode;
}
declare const Space: (props: Props) => JSX.Element;

export { Space };
