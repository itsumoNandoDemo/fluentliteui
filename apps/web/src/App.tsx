import React, { useState } from "react";
import { Button } from "@fluentliteui/button";
import "@fluentliteui/button/dist/index.css";

import { Space } from "@fluentliteui/space";
import "@fluentliteui/space/dist/index.css";

import { Table } from "@fluentliteui/table";
import "@fluentliteui/table/dist/index.css";

import { Pagenav } from "@fluentliteui/pagenav";
import "@fluentliteui/Pagenav/dist/index.css";

import { Loading } from "@fluentliteui/loading";
import "@fluentliteui/loading/dist/index.css";

import { Popover } from "@fluentliteui/popover";
import "@fluentliteui/popover/dist/index.css";

import { Dropdown } from "@fluentliteui/dropdown";
import "@fluentliteui/dropdown/dist/index.css";

import { Dialog } from "@fluentliteui/dialog";
import "@fluentliteui/dialog/dist/index.css";

import "./App.css";

function App() {
  const [pageNavAction, setPageNavAction] = useState<number>(1);
  const [dropdownValue, setDropdownValue] = useState<string | number | boolean>("tom");
  const [showDialog, setShowDialog] = useState<boolean>(true);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
          fluentliteui
          <div className="Turborepo">components</div>
        </h1>
        <p>Buttons</p>
        <Space>
          <Button variant="default">Default</Button>
          <Button onClick={() => { console.log('hello') }} variant="primary">Primary</Button>
          <Button onClick={() => { console.log('hello') }} variant="warning">Warning</Button>
          <Button variant="success">Success</Button>
          <Button variant="info">Info</Button>
        </Space>
        <Space gap={0} direction="column">
          <Button variant="default">up</Button>
          <Button variant="primary">down</Button>
        </Space>
        <p>Dialog</p>
        <Button onClick={() => {
          setShowDialog(true);
        }}>open</Button>
        <Dialog style={{ width: "300px" }} show={showDialog} footer={<Button variant="primary" onClick={() => { setShowDialog(false); }}>确定</Button>} body={<>hhh</>} />
        <p>Dropdown</p>
        <Dropdown title={"name"} value={dropdownValue} options={[{
          title: "Tom",
          key: "tom",
          value: "tom"
        }, {
          title: "Jerry",
          key: "jerry",
          value: "Jerry"
        }]} onOptionChange={setDropdownValue} />
        <p>Popover</p>
        <Popover pop={<div style={{ width: "100px" }}><h2>hello</h2><p>tom</p></div>}><Button>helllo</Button></Popover>
        <p>Loading</p>
        <Loading loading={true}>
          <Table style={{ width: "500px" }} columns={[
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
        </Loading>
        <Button variant={"primary"} ><Loading size={20} loading={true} /></Button>
        <p>Table</p>
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
        <p>Pagenav</p>
        <Pagenav max={30} active={pageNavAction} onPageChange={setPageNavAction} />
        <Pagenav style={{ width: "100%", justifyContent: "end" }} max={30} unactiveStyle={{ background: "rgb(240, 240, 240)", border: "solid 1px rgb(240, 240, 240)" }} active={pageNavAction} onPageChange={setPageNavAction} />
      </header>
    </div>
  );
}

export default App;
