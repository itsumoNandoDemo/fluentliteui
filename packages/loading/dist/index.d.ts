import * as React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
    loading: boolean;
    size?: number;
    children?: React.ReactNode;
}
declare const Loading: (props: Props) => JSX.Element;

export { Loading };
