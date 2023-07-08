import * as React from "react";
import "./style.css";

interface Props extends React.HTMLAttributes<HTMLElement> {
    loading: boolean;
    size?: number;
    children?: React.ReactNode;
}

export const Loading = (props: Props) => {
    const { loading, size = 30, children, ...rest } = props;

    return <div className="fluentliteui loading" {...rest} style={children === undefined ? { width: `${size}px`, height: `${size}px` } : {}}>
        {children}
        {
            loading && <div className={children ? "loadingwapper" : ""}>
                <div className="loadingIcon" style={{ width: `${size}px`, height: `${size}px` }}></div>
            </div>
        }
    </div>
};
