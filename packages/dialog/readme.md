# @fluentliteui/dialog

install
```
yarn add @fluentliteui/dialog
```

usage
```jsx
import { dialog } from "@fluentliteui/dialog";
import "@fluentliteui/dialog/dist/index.css";

function App() {
    const [showDialog, setShowDialog] = useState<boolean>(true);
    return <>
        <Button onClick={() => {
          setShowDialog(true);
        }}>open</Button>
        <Dialog style={{ width: "300px" }} show={showDialog} footer={<Button variant="primary" onClick={() => { setShowDialog(false); }}>确定</Button>} body={<>hhh</>} />
    <>
}
```