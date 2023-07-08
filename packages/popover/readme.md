# @fluentliteui/popover

install
```
yarn add @fluentliteui/popover
```

usage
```jsx
import { popover } from "@fluentliteui/popover";
import "@fluentliteui/popover/dist/index.css";

function App() {
    return <>
        <Popover pop={<div style={{ width: "100px" }}><h2>hello</h2><p>tom</p></div>}><Button>helllo</Button></Popover>
    <>
}
```