# @fluentliteui/table

install
```
yarn add @fluentliteui/table
```

usage
```jsx
import { table } from "@fluentliteui/table";
import "@fluentliteui/table/dist/index.css";

function App() {
    return <>
        <Table style={{ width: "100%" }} columns={[
          {
            title: <Button variant="info">Tom</Button>,
            key: "name"
          }, {
            title: "age",
            key: "age"
          }
        ]} dataSource={[
          {
            name: "tom",
            age: <Button variant="info">19</Button>
          }, {
            name: "jerry",
            age: 20
          }
        ]} />
    <>
}
```