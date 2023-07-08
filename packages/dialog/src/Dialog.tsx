import * as React from "react";
import "./style.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    show: boolean;
    body: React.ReactNode;
    footer: React.ReactNode;
}

export const Dialog = (props: Props) => {
    const { show, body, footer, ...rest } = props;

    return (
        <>{show && <div className={`fluentliteui full-wapper`}>
            <div className="dialog-wapper"></div>
            <div className="dialog" {...rest}>
                <div className="title"></div>
                <div className="body">{body}</div>
                <div className="footer">{footer}</div>
            </div>
        </div>}</>
    );
};
