import * as React from "react";
import "./style.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
    children: React.ReactNode;
}

export const Button = (props: Props) => {
    const { variant = "default", children, ...rest } = props;

    return (
        <div className={`fluentliteui ${variant}`}>
            <button {...rest}>
                {children}
            </button>
        </div>
    );
};
