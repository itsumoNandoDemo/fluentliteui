# @fluentliteui/space

install
```
yarn add @fluentliteui/space
```

usage
```jsx
import { space } from "@fluentliteui/space";
import "@fluentliteui/space/dist/index.css";

function App() {
    return <>
        <Space>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </Space>
        <Space gap={0} direction="column">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </Space>
    <>
}
```