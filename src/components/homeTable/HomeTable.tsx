import React from "react";
import { Table } from "antd";
import type { ColumnType } from "antd/es/table";
import useHomeTable from "./HomeTableTs";
import "./table.css";

export default function HomeTable() {
  let { columns, data } = useHomeTable();
  return (
    <Table
      pagination={{
        defaultPageSize: 8,
        showSizeChanger: false,
      }}
      columns={columns}
      dataSource={data}
      className="table-striped-rows"
      rowKey={(record) => record.key}
      rowSelection={{
        selectedRowKeys: [],
        onChange: () => {},
      }}
      size="middle"
    />
  );
}
