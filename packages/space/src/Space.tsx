import * as React from "react";
import './style.css';

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    gap?: number;
    justify?: string;
    direction?: string;
    children?: React.ReactNode;
}

export const Space = (props: Props) => {
    const { gap = 10, justify = "center", direction = "flex-row", children, ...rest } = props;

    return (
        <div className="fluentliteui">
            <div {...rest} style={{ gap: `${gap ? gap : 0}px` }}
                className={`space justify-${justify} ${direction === 'column' ? 'flex-column' : 'flex-row'}`}>
                {children}
            </div>
        </div>
    );
};
