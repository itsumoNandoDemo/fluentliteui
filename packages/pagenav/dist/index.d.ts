import * as React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
    max: number;
    active: number;
    activeStyle?: React.CSSProperties | undefined;
    unactiveStyle?: React.CSSProperties | undefined;
    onPageChange: (page: number) => void;
}
declare const Pagenav: (props: Props) => JSX.Element;

export { Pagenav };
