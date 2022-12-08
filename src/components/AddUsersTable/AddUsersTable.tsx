import React, { useEffect, useLayoutEffect } from "react";
import { Table } from "antd";
import useAddUsersTable from "./AddUsersTableTs";
import "./addUsersTable.css";
export default function AddUsersTable() {
  let { columns, data } = useAddUsersTable();

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(record) => record.key}
      size="middle"
      scroll={{ x: "max-content", y: 400 }}
      pagination={false}
    />
  );
}
