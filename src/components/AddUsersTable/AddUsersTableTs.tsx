import React, { useState } from "react";
import { ColumnsType } from "antd/es/table";
import Select from "react-select";
import { MdEmail, MdPermContactCalendar } from "react-icons/md";
import { ImKey } from "react-icons/im";
import { BiTrashAlt } from "react-icons/bi";
import { CgArrowsExchangeAltV } from "react-icons/cg";
export default function AddUsersTableTs() {
  interface IDataType {
    key: React.Key;
    email: React.ReactNode;
    jobTitle: React.ReactNode;
    code: React.ReactNode;
    auth: React.ReactNode;
    empty: React.ReactNode;
  }
  let columns: ColumnsType<IDataType> = [
    {
      title: <div className="p-2"></div>,
      dataIndex: "empty",
    },
    {
      title: (
        <div className="px-1 flex flex-col items-start gap-y-2 justify-center">
          <p className="font-bold">Email</p>
          <p className="text-secondaryColor text-xs font-extralight hidden lg:block lg:font-medium ">
            Type this user's email, to add and contact later.
          </p>
        </div>
      ),
      dataIndex: "email",
    },
    {
      title: (
        <div className="px-1 flex flex-col items-start gap-y-2 justify-center">
          <p className="font-bold">Job Title</p>
          <p className="text-secondaryColor text-xs font-extralight hidden lg:block lg:font-medium ">
            What's this new user title?
          </p>
        </div>
      ),
      dataIndex: "jobTitle",
    },
    {
      title: (
        <div className="px-1 flex flex-col items-start gap-y-2 justify-center">
          <p className="font-bold">Code</p>
          <p className="text-secondaryColor text-xs font-extralight hidden lg:block lg:font-medium ">
            Enter this new user code.
          </p>
        </div>
      ),
      dataIndex: "code",
    },
    {
      title: (
        <div className="px-1 flex flex-col items-start gap-y-2 justify-center">
          <p className="font-bold">Authoirzed module</p>
          <p className="text-secondaryColor text-xs font-extralight hidden lg:block lg:font-medium ">
            Which inframodern this user's authorized to use?
          </p>
        </div>
      ),
      dataIndex: "auth",
    },
    {
      title: "",
      dataIndex: "",
      render: () => (
        <div className="w-7 h-7 flex justify-center items-center mx-2 rounded-lg text-lg border-2 border-mainColor text-mainColor cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:bg-mainColor">
          <BiTrashAlt />
        </div>
      ),
    },
  ];
  let selectOptions = [
    {
      value: "Inframodern",
      label: "Inframodern",
    },
    {
      value: "example1",
      label: "example 2",
    },
    {
      value: "example2",
      label: "example 2",
    },
  ];

  const size = 6;
  let mockData: IDataType[] = [];
  for (let i = 0; i <= size; i++) {
    mockData.push({
      key: i + 1,
      empty: (
        <div className="flex justify-center items-center w-5 h-6 border-2 font-bold border-mainColor text-mainColor bg-white lg:w-8 lg:h-9">
          <span>{i + 1}</span>
        </div>
      ),
      email: (
        <div className="relative flex items-center  py-2 min-w-[12rem] overflow-hidden lg:py-4">
          <div className="z-10 absolute bg-secondaryColor text-xs px-2 rounded-tl-lg rounded-bl-lg hidden lg:inline-block lg:text-lg lg:py-3 lg:px-3">
            <MdEmail className="" />
          </div>
          <input
            type="text"
            className="border border-secondaryColor absolute py-1 px-10 text-sm  rounded-lg outline-none lg:outline lg:py-1 lg:px-12 lg:text-sm "
            placeholder="Example@example.com"
          />
        </div>
      ),
      code: (
        <div className="relative flex items-center w-auto p-2 min-w-[12rem] overflow-hidden lg:p-4">
          <div className="z-10 absolute bg-secondaryColor text-xs py-2 px-2 rounded-tl-lg rounded-bl-lg hidden lg:inline-block lg:text-lg lg:py-3 lg:px-3">
            <MdPermContactCalendar className="" />
          </div>
          <input
            type="text"
            className="border border-secondaryColor absolute py-1 px-10 text-sm  rounded-lg outline-none lg:outline-1 lg:py-1 lg:px-12 lg:text-sm "
            placeholder="#000000000"
          />
        </div>
      ),
      auth: (
        <div className="relative flex items-center w-auto p-2 min-w-[12rem]  lg:p-4">
          <div className="z-10 absolute left-3 bg-secondaryColor text-xs py-2 px-2 rounded-tl-lg rounded-bl-lg  hidden lg:inline-block lg:text-lg lg:py-[.7rem] lg:px-3">
            <MdPermContactCalendar className="" />
          </div>
          <Select
            options={selectOptions}
            defaultValue={selectOptions[0]}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: () => (
                <CgArrowsExchangeAltV className="text-2xl text-secondaryColor" />
              ),
            }}
            styles={{
              container: () => ({
                width: "100%",
                zIndex: 5,
              }),
              control: (base, state) => ({
                ...base,
                width: "100%",
                padding: "0 2.4rem",
                borderRadius: ".5rem",
                outline: state.isFocused ? "0" : "0",
                border: state.isFocused ? "0" : "",
              }),
              option: (base, state) => ({
                ...base,
              }),
              menu: (base, state) => ({
                ...base,
                zIndex: 1000,
              }),
            }}
          />
        </div>
      ),

      jobTitle: (
        <div className="relative flex items-center w-auto p-2 min-w-[12rem] overflow-hidden lg:p-4">
          <div className="z-10 absolute bg-secondaryColor text-xs py-2 px-2 rounded-tl-lg rounded-bl-lg hidden lg:inline-block lg:text-lg lg:py-3 lg:px-3">
            <ImKey className="" />
          </div>
          <input
            type="text"
            className="border border-secondaryColor absolute py-1 px-10 text-sm  rounded-lg outline-none lg:outline-1 lg:py-1 lg:px-12 lg:text-sm "
            placeholder="CFO, Accountant, etc"
          />
        </div>
      ),
    });
  }
  let [data, setData] = useState<IDataType[]>(mockData);

  // let handleAddNewUser = () => {
  //   setData(
  //     (prevState) =>
  //       [
  //         ...prevState,
  //         {
  //           key: prevState.length + 1,
  //           empty: (
  //             <div className="flex justify-center items-center w-5 h-6 border-2 font-bold border-mainColor text-mainColor bg-white lg:w-8 lg:h-9">
  //               <span>{prevState.length + 1}</span>
  //             </div>
  //           ),
  //           email: (
  //             <div className="relative flex items-center  py-2 min-w-[12rem] overflow-hidden lg:py-4">
  //               <div className="z-10 absolute bg-secondaryColor text-xs px-2 rounded-tl-lg rounded-bl-lg hidden lg:inline-block lg:text-lg lg:py-3 lg:px-3">
  //                 <MdEmail className="" />
  //               </div>
  //               <input
  //                 type="text"
  //                 className="border border-secondaryColor absolute py-1 px-10 text-sm  rounded-lg outline-none lg:outline lg:py-1 lg:px-12 lg:text-sm "
  //                 placeholder="Example@example.com"
  //               />
  //             </div>
  //           ),
  //           code: (
  //             <div className="relative flex items-center w-auto p-2 min-w-[12rem] overflow-hidden lg:p-4">
  //               <div className="z-10 absolute bg-secondaryColor text-xs py-2 px-2 rounded-tl-lg rounded-bl-lg hidden lg:inline-block lg:text-lg lg:py-3 lg:px-3">
  //                 <MdPermContactCalendar className="" />
  //               </div>
  //               <input
  //                 type="text"
  //                 className="border border-secondaryColor absolute py-1 px-10 text-sm  rounded-lg outline-none lg:outline-1 lg:py-1 lg:px-12 lg:text-sm "
  //                 placeholder="#000000000"
  //               />
  //             </div>
  //           ),
  //           auth: (
  //             <div className="relative flex items-center w-auto p-2 min-w-[12rem]  lg:p-4">
  //               <div className="z-10 absolute left-3 bg-secondaryColor text-xs py-2 px-2 rounded-tl-lg rounded-bl-lg  hidden lg:inline-block lg:text-lg lg:py-[.7rem] lg:px-3">
  //                 <MdPermContactCalendar className="" />
  //               </div>
  //               <Select
  //                 options={selectOptions}
  //                 defaultValue={selectOptions[0]}
  //                 components={{
  //                   IndicatorSeparator: () => null,
  //                   DropdownIndicator: () => (
  //                     <CgArrowsExchangeAltV className="text-2xl text-secondaryColor" />
  //                   ),
  //                 }}
  //                 styles={{
  //                   container: () => ({
  //                     width: "100%",
  //                     zIndex: 5,
  //                   }),
  //                   control: (base, state) => ({
  //                     ...base,
  //                     width: "100%",
  //                     padding: "0 2.4rem",
  //                     borderRadius: ".5rem",
  //                     outline: state.isFocused ? "0" : "0",
  //                     border: state.isFocused ? "0" : "",
  //                   }),
  //                   option: (base, state) => ({
  //                     ...base,
  //                   }),
  //                   menu: (base, state) => ({
  //                     ...base,
  //                     zIndex: 1000,
  //                   }),
  //                 }}
  //               />
  //             </div>
  //           ),

  //           jobTitle: (
  //             <div className="relative flex items-center w-auto p-2 min-w-[12rem] overflow-hidden lg:p-4">
  //               <div className="z-10 absolute bg-secondaryColor text-xs py-2 px-2 rounded-tl-lg rounded-bl-lg hidden lg:inline-block lg:text-lg lg:py-3 lg:px-3">
  //                 <ImKey className="" />
  //               </div>
  //               <input
  //                 type="text"
  //                 className="border border-secondaryColor absolute py-1 px-10 text-sm  rounded-lg outline-none lg:outline-1 lg:py-1 lg:px-12 lg:text-sm "
  //                 placeholder="CFO, Accountant, etc"
  //               />
  //             </div>
  //           ),
  //         },
  //       ] as IDataType[]
  //   );
  //   console.log(data);
  // };

  return { columns, data };
}
