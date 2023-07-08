import * as React from "react";
import "./style.css";

interface Column {
    title: string | React.ReactNode;
    key: string;
}

interface Props extends React.TableHTMLAttributes<HTMLTableElement> {
    columns: Column[];
    dataSource: any[];
}

export const Table = (props: Props) => {
    const { columns, dataSource, ...rest } = props;

    return <table className="fluentliteui" {...rest}>
        <thead>
            <tr>
                {columns.map(column => {
                    return <td className={`td_${column.key}`}>{column.title}</td>
                })}
            </tr>
        </thead>
        <tbody>
            {
                dataSource.map(item => {
                    return <tr>
                        {
                            columns.map(column => {
                                return <td>{item[column.key]}</td>
                            })
                        }
                    </tr>
                })
            }
        </tbody>
    </table>
};
