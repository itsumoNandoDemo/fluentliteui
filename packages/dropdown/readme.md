# @fluentliteui/dropdown

install
```
yarn add @fluentliteui/dropdown
```

usage
```jsx
import { Dropdown } from "@fluentliteui/dropdown";
import "@fluentliteui/dropdown/dist/index.css";

function App() {
  const [dropdownValue, setDropdownValue] = useState<string | number | boolean>("tom");
  <Dropdown title={"name"} value={dropdownValue} options={[{
          title: "Tom",
          key: "tom",
          value: "tom"
        }, {
          title: "Jerry",
          key: "jerry",
          value: "Jerry"
        }]} onOptionChange={setDropdownValue} />
}
```