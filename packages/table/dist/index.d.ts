import * as React from 'react';

interface Column {
    title: string | React.ReactNode;
    key: string;
}
interface Props extends React.TableHTMLAttributes<HTMLTableElement> {
    columns: Column[];
    dataSource: any[];
}
declare const Table: (props: Props) => JSX.Element;

export { Table };
