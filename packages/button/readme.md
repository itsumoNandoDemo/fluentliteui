# @fluentliteui/button

install
```
yarn add @fluentliteui/button
```

usage
```jsx
import { Button } from "@fluentliteui/button";
import "@fluentliteui/button/dist/index.css";

function App() {
    return <>
        <Button variant="default">Default</Button>
        <Button onClick={() => { console.log('hello') }} 
        variant="primary">Primary</Button>
        <Button onClick={() => { console.log('hello') }} variant="warning">Warning</Button>
        <Button variant="success">Success</Button>
        <Button variant="info">Info</Button>
    <>
}
```