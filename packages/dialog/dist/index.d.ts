import * as React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    show: boolean;
    body: React.ReactNode;
    footer: React.ReactNode;
}
declare const Dialog: (props: Props) => JSX.Element;

export { Dialog };
