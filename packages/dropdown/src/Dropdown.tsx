import * as React from "react";
import "./style.css";
import { useEffect, useRef, useState } from "react";

interface Option {
    title: string;
    key: string;
    value: string | number | boolean;
}

interface Props extends React.HTMLAttributes<HTMLElement> {
    disabled?: boolean;
    label: string | React.ReactNode;
    value: string | number | boolean;
    options: Option[];
    onOptionChange: (value: string) => void;
}

export const Dropdown = (props: Props) => {
    const { disabled = false, label, value, options, onOptionChange, ...rest } = props;

    const dropdown: any = useRef();
    const optionsDom: any = useRef();

    const [showOptions, setShowOptions] = useState<boolean>(false);

    const totalHeight = window.innerHeight || document.documentElement.clientHeight;
    const totalWidth = window.innerWidth || document.documentElement.clientWidth;


    useEffect(() => {
        if (showOptions) {
            dropdown.current.focus();
            if (optionsDom.current) {
                const { top, bottom } = optionsDom.current?.getBoundingClientRect?.() ?? {
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
    }, [showOptions])


    return <div {...rest}><div className="fluentliteui dropdown-wapper">
        <div className="label">{label}</div>
        <div className="dropdown" tabIndex={0} ref={dropdown} onBlur={() => { setShowOptions(false) }} >
            <div {...{ disabled }} className="value" onClick={() => {
                if (!disabled) {
                    setShowOptions(!showOptions);
                }
            }}><div className='text'>{value}</div><div className={showOptions ? "icon_rotate" : "icon"}></div>
                {disabled && <div className="mask"></div>}
            </div>
            {
                showOptions && <div ref={optionsDom} className="options">
                    {
                        options.map((item: any) => {
                            return <div key={item.key} title={item.title} className={item.value === value ? 'option select' : 'option'} onClick={() => {
                                onOptionChange(item.value);
                                setShowOptions(false);
                            }}>{item.title}</div>
                        })
                    }
                </div>
            }
        </div>
    </div>
    </div>
};
