import * as React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
    children: React.ReactNode;
}
declare const Button: (props: Props) => JSX.Element;

export { Button };
