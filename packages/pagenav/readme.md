# @fluentliteui/pagenav

install
```
yarn add @fluentliteui/pagenav
```

usage
```jsx
import { pagenav } from "@fluentliteui/pagenav";
import "@fluentliteui/pagenav/dist/index.css";

function App() {
  const [pageNavAction, setPageNavAction] = useState<number>(1);
  return <Pagenav max={30} unactiveStyle={{background:"rgb(240, 240, 240)",border:"solid 1px rgb(240, 240, 240)"}} active={pageNavAction} onPageChange={setPageNavAction} />
}
```