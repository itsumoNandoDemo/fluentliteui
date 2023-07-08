import * as React from "react";
import "./style.css";
import { useEffect, useState } from "react";
import { Button } from "@fluentliteui/button";

interface Props extends React.HTMLAttributes<HTMLElement> {
    max: number;
    active: number;
    activeStyle?: React.CSSProperties | undefined,
    unactiveStyle?: React.CSSProperties | undefined,
    onPageChange: (page: number) => void;
}

export const Pagenav = (props: Props) => {
    const { max, active, activeStyle, unactiveStyle, onPageChange, ...rest } = props;

    const showPageNumber = 10;

    const [btns, setBtns] = useState<any[]>([]);
    useEffect(() => {
        const arr = [];
        arr.push({
            title: `1<`,
            page: 1,
            active: false
        })


        let from = active - showPageNumber / 2;
        let to = active + showPageNumber / 2;

        let numbers: number[] = [];
        for (let index = from; index <= to; index++) {
            numbers.push(index);
        }

        const start = numbers.filter(i => i > 0)[0];
        const end = Math.min(start + showPageNumber - 1, max);

        for (let index = start; index <= end; index++) {
            arr.push({
                title: index,
                page: index,
                active: active === index ? true : false
            })
        }

        arr.push({
            title: `>${max}`,
            page: max,
            active: false
        })

        setBtns(arr);
    }, [max, active])


    return <div className="fluentliteui pagenav" {...rest}>
        {btns.map((btn: { active: any; title: any; page: number; }) => {
            return <Button style={btn.active ? activeStyle : unactiveStyle} variant={`page ${btn.active ? 'primary' : 'default'}`} onClick={() => {
                onPageChange(btn.page);
            }}>{btn.title}</Button>
        })}
    </div>
};
