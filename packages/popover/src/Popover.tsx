import * as React from "react";
import "./style.css";
import { useRef, useState } from "react";
interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    pop: string | JSX.Element | JSX.Element[];
    children: React.ReactNode;
}

export const Popover = (props: Props) => {
    const { content, children, pop: popHTMLElement, ...rest } = props;
    const [show, setShow] = useState<boolean>(false);
    const [x, setX] = useState<number>(0);
    const pop: any = useRef();
    const popwapper: any = useRef();

    const { top, right, bottom, left } = pop.current?.getBoundingClientRect?.() ?? {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };

    const { left: a, right: b } = popwapper.current?.getBoundingClientRect?.() ?? {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };
    return (
        <div {...rest} className="fluentliteui popover" ref={popwapper}>
            <div className='popover-hover' onMouseOver={({ clientX, clientY }) => {
                setX(clientX);
            }}>{children}</div>
            <div className="popover-pop" ref={pop} style={{ left: `${(right - left) / 2 * -1 + (b - a) / 2}px` }}>
                <div className="popover-content">
                    {popHTMLElement}
                </div>
                <div className="popover-arrow"></div>
            </div>
        </div>
    );
};
