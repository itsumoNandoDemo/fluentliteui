import * as React from "react";
import "./style.css";
import { useEffect, useRef, useState } from "react";

interface Option {
    title: string;
    key: string;
    value: string | number | boolean;
}

interface Props extends React.HTMLAttributes<HTMLElement> {
    titleWidth?: number;
    optionWidth?: number;
    title: string;
    value: string | number | boolean;
    options: Option[];
    onOptionChange: (value: string) => void;
}

export const Dropdown = (props: Props) => {
    const { titleWidth = 120, optionWidth = 320, title, value, options, onOptionChange, ...rest } = props;


    const inputElement: any = useRef();

    const [show, setShow] = useState<boolean>(false);

    const optionsDom: any = useRef();


    const totalHeight = window.innerHeight || document.documentElement.clientHeight;
    const totalWidth = window.innerWidth || document.documentElement.clientWidth;

    useEffect(() => {
        if (show) {
            inputElement.current.focus();
            if (optionsDom.current) {
                const { top, right, bottom, left } = optionsDom.current?.getBoundingClientRect?.() ?? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                };
                if (totalHeight < bottom) {
                    optionsDom.current.style.height = `${(totalHeight - top - 20)}px`;
                    optionsDom.current.style.overflowY = 'scroll';
                }
            }
        }
    }, [show])


    return <div className="wapper" {...rest}>
        <div className="label" style={{ width: `${titleWidth}px` }}>{title} : </div>
        <div tabIndex={0} ref={inputElement} onBlur={() => { setShow(false) }} >
            <div className="value" style={{ width: `${optionWidth}px` }} onClick={() => {
                setShow(!show);
            }}><span className='text' style={{ width: `${optionWidth}px` }}>{value}</span><span className={show ? "icon_rotate" : "icon"}></span></div>
            {
                show && <div ref={optionsDom} className="options" style={{ width: `${optionWidth + 2}px` }}>
                    {
                        options.map((item: any) => {
                            return <div key={item.key} title={item.title} className={item.value === value ? 'option select' : 'option'} onClick={() => {
                                onOptionChange(item.value);
                                setShow(false);
                            }}>{item.title}</div>
                        })
                    }
                </div>
            }
        </div>
    </div>
};
