import React from "react";
import type { ColumnsType } from "antd/es/table";
import { BsThreeDots } from "react-icons/bs";
import { RiArrowUpDownFill } from "react-icons/ri";
import userImage from "./../../assets/imgs/user.jpg";

export default function HomeTableTs() {
  interface DataType {
    key: React.Key;
    code: string;
    name: React.ReactNode;
    mobile: string;
    email: string;
    jobTitle: string;
    auth: string;
    joinDate: string;
    empty: React.ReactNode;
  }
  const data: DataType[] = [];
  for (let i = 0; i < 80; i++) {
    data.push({
      key: i,
      code: "BD5428844",
      name: (
        <div className="flex items-center gap-x-2">
          <img
            src={userImage}
            alt="user image"
            className="w-8 h-8 rounded-full shadow-lg"
          />
          <span>A Customer name {i}</span>
        </div>
      ),
      mobile: "01022445566",
      email: "islamsoltan@gmail.com",
      jobTitle: "Product manager",
      joinDate: "Mon ,5 Nov 2020 10.00am",
      auth: "Trustree (CRM)",
      empty: (
        <div className="">
          <BsThreeDots className="text-2xl" />
        </div>
      ),
    });
  }
  const columns: ColumnsType<DataType> = [
    {
      title: (
        <div className="flex items-center gap-x-1">
          <span className="font-bold text-textColor">Code</span>
          <RiArrowUpDownFill className="text-secondaryColor" />
        </div>
      ),
      dataIndex: "code",
      responsive: ["md"],
    },
    {
      title: (
        <div className="flex items-center gap-x-1">
          <span className="font-bold text-textColor">Name</span>
          <RiArrowUpDownFill className="text-secondaryColor" />
        </div>
      ),
      dataIndex: "name",
    },
    {
      title: (
        <div className="flex items-center gap-x-1">
          <span className="font-bold text-textColor">Mobile Number</span>
          <RiArrowUpDownFill className="text-secondaryColor" />
        </div>
      ),
      dataIndex: "mobile",
      responsive: ["md"],
    },
    {
      title: (
        <div className="flex items-center gap-x-1">
          <span className="font-bold text-textColor">Email</span>
          <RiArrowUpDownFill className="text-secondaryColor" />
        </div>
      ),
      dataIndex: "email",
      responsive: ["md"],
    },
    {
      title: (
        <div className="flex items-center gap-x-1">
          <span className="font-bold text-textColor">Job Title</span>
          <RiArrowUpDownFill className="text-secondaryColor" />
        </div>
      ),
      dataIndex: "jobTitle",
      responsive: ["lg"],
    },
    {
      title: (
        <div className="flex items-center gap-x-1">
          <span className="font-bold text-textColor">Authorized Module</span>
          <RiArrowUpDownFill className="text-secondaryColor" />
        </div>
      ),
      dataIndex: "auth",
      responsive: ["lg"],
    },
    {
      title: (
        <div className="flex items-center gap-x-1">
          <span className="font-bold text-textColor">Joining Date</span>
          <RiArrowUpDownFill className="text-secondaryColor" />
        </div>
      ),
      dataIndex: "joinDate",
      responsive: ["lg"],
    },
    {
      title: "",
      dataIndex: "empty",
      responsive: ["lg"],
    },
  ];
  return { columns, data };
}
