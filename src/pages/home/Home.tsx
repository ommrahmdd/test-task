import React, { useEffect } from "react";
import Select, { components } from "react-select";
import { Link } from "react-router-dom";

import { HiUserGroup } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowBack, IoMdArrowDropdown } from "react-icons/io";
import { CgArrowsExchangeAltV, CgAddR } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

import Container from "../../components/Container";
import Nav from "../../components/Nav/Nav";
import {
  MainBtn,
  MainBtnWithGrey,
  MainBtnWithOpacity,
  SecondaryBtn,
  SecondaryBtnWithOpacity,
} from "../../components/Buttons";
import useHome from "./HomeTs";
import HomeTable from "../../components/homeTable/HomeTable";
import AddUsersTable from "../../components/AddUsersTable/AddUsersTable";

export default function Home() {
  let {
    sidebarSelection,
    sidebarLowerList,
    sidebarUpperList,
    arrowRef,
    sideRef,
    handleSideActivation,
    handleAddUserLayoutActivation_close,
    handleAddUserLayoutActivation_open,
    addUserLayoutActivation,
  } = useHome();
  return (
    <>
      {/* -------------STYLE: Nav */}
      <Nav />
      {/* ------------- */}
      {/* -------------STYLE: Home */}
      <Container>
        <main className="">
          {/* Arrow Button */}
          <button
            className="fixed z-20 bg-white text-mainColor cursor-pointer left-48  top-28 text-xl  rounded-full p-1 shadow-md transition-all duration-500 ease-in-out hover:bg-mainColor hover:text-white md:left-60"
            ref={arrowRef}
            onClick={handleSideActivation}
          >
            <IoIosArrowBack />
          </button>
          {/* Sidebar */}
          <div
            className="w-8/12 h-full px-3  fixed top-0 left-0 z-10 border-r-2 border-secondaryColor border-opacity-30 shadow-sm bg-white transition-all duration-300 ease-in-out md:w-4/12 lg:w-2/12"
            ref={sideRef}
          >
            {/* Main Content */}
            {/* 1) Select  */}
            <div className=" my-10">
              <Select
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => (
                    <CgArrowsExchangeAltV className="text-2xl text-secondaryColor" />
                  ),
                }}
                defaultValue={sidebarSelection[0]}
                options={sidebarSelection}
                styles={{
                  control: (baseStyle, state) => ({
                    ...baseStyle,
                    borderColor: state.isFocused ? "pink" : "grey",
                    borderRadius: "1rem",
                    fontWeight: "700",
                    paddingRight: "1rem",
                    color: "#1e293b",
                    cursor: "pointer",
                  }),
                }}
              />
            </div>
            {/* 2) list */}
            <div className="h-[75%]">
              {/* Home Link */}
              <Link
                to="#"
                className="block pb-4 px-3 text-xs font-bold border-b-2 border-secondaryColor md:text-sm"
              >
                Home
              </Link>
              <div className="w-full h-full mt-3 flex flex-col items-start justify-between">
                {/* Upper list */}
                <div className="w-full ">
                  {sidebarUpperList.map((item, index) => (
                    <details
                      key={index}
                      className={`details py-3 px-3 my-3 w-full ${
                        index === 3 ? "itemActive" : null
                      }`}
                    >
                      <summary className="list-none font-bold flex justify-between items-center cursor-pointer text-xs md:text-sm">
                        <span>{item.title}</span>
                        {item.items ? (
                          <IoMdArrowDropdown className="arrow text-2xl open:rotate-90 " />
                        ) : null}
                      </summary>
                      {item.items ? (
                        <ul className="flex flex-col items-start mt-2">
                          {item.items?.map((internalItem, index) => (
                            <li
                              className="py-2 font-semibold capitalize transition-all duration-300 ease-in-out hover:opacity-30"
                              key={index}
                            >
                              <Link to={internalItem.to}>
                                {internalItem.to}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </details>
                  ))}
                </div>
                {/* Lower list */}
                <div className="w-full ">
                  {sidebarLowerList.map((item, index) => (
                    <details
                      key={index}
                      className={`details py-3 px-3 my-3 w-full ${
                        index === 3 ? "active" : null
                      }`}
                    >
                      <summary className="list-none font-bold flex justify-between items-center cursor-pointer text-xs md:text-sm">
                        <span>{item.title}</span>
                        {item.items ? (
                          <IoMdArrowDropdown className="arrow text-2xl open:rotate-90 " />
                        ) : null}
                      </summary>
                      <ul>
                        {item.items?.map((internalItem, index) => (
                          <li
                            className="my-3 font-semibold capitalize"
                            key={index}
                          >
                            <Link to={internalItem.to}>{internalItem.to}</Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Main home */}
          <div className="w-full min-h-screen py-5 px-3 lg:w-10/12 lg:ml-auto">
            {/* Header */}
            <div className="mb-12 flex items-center gap-x-3">
              <HiUserGroup className="text-4xl text-mainColor" />
              <h2 className="text-3xl text-textColor font-bold">Users</h2>
            </div>
            {/* Search and filter */}
            <div className="flex flex-col items-start gap-y-10 lg:gap-y-0 lg:flex-row lg:justify-between">
              {/* Search */}
              <div className="relative flex items-center">
                <BiSearch className="absolute ml-3 text-xl text-secondaryColor rotate-90" />
                <input
                  type="text"
                  placeholder="Can I help you ?"
                  className="border border-secondaryColor rounded-lg py-2 px-5 pl-10 min-w-[17rem] outline-none placeholder:text-sm lg:min-w-[25rem]"
                />
                <select
                  id=""
                  className="text-mainColor px-3 font-medium capitalize border border-secondaryColor rounded-lg py-2 -ml-20 outline-none md:-mx-10 lg:-mx-4"
                >
                  <option value="code">code</option>
                  <option value="name">name</option>
                  <option value="email">email</option>
                </select>
                {/* <Select
                  options={searchSelector}
                  defaultValue={searchSelector[0]}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      marginLeft: "-1rem",
                      padding: ".2rem .5rem",
                      fontSize: ".8rem",
                      outline: "none",
                      color: "#fb2576",
                      fontWeight: "600",
                      outline: state.isFocused ? "none" : "",
                    }),
                  }}
                /> */}
              </div>
              {/* Filter and buttons */}
              <div className="self-end flex items-center gap-x-2 lg:gap-x-4 lg:self-auto">
                <SecondaryBtn content="filters" />
                <SecondaryBtn icon={<BsThreeDots />} />
                <div className="bg-secondaryColor opacity-80 h-6 w-[.1rem] rounded-full"></div>
                <MainBtn
                  content="add new brand"
                  clickHandler={() => {
                    if (addUserLayoutActivation)
                      handleAddUserLayoutActivation_close();
                    else handleAddUserLayoutActivation_open();
                  }}
                />
              </div>
            </div>
            {/* Table */}
            <div className="py-8">
              <HomeTable />
            </div>
          </div>
        </main>
        {/* -------------STYLE: Add new User Layout */}
        {addUserLayoutActivation && (
          <>
            <section className="fixed z-30 w-[90%] h-[95vh] px-5 bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-start justify-around">
              {/* Header */}
              <div className="w-full py-5 flex items-center justify-between border-b border-secondaryColor">
                <button className="flex items-center gap-x-2">
                  <CgAddR className="text-2xl text-mainColor" />
                  <span className="font-bold text-sm">Add New User</span>
                </button>
                <button>
                  <IoCloseSharp
                    className="text-2xl transition-all duration-300 ease-in-out hover:opacity-50 hover:rotate-90"
                    onClick={handleAddUserLayoutActivation_close}
                  />
                </button>
              </div>
              {/* Table */}
              <div className="w-full addUsersTable">
                <AddUsersTable />
              </div>
              {/* Footer */}
              <div className="w-full border-t border-secondaryColor py-5 flex flex-col  space-y-3 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
                <MainBtnWithOpacity content="Add New Input User" />
                <div className="flex justify-between lg:space-x-5 lg:block">
                  <div
                    className="inline-block"
                    onClick={handleAddUserLayoutActivation_close}
                  >
                    <SecondaryBtnWithOpacity content="Cancel" />
                  </div>
                  <div className="inline-block ">
                    <MainBtnWithGrey content="Add" />
                  </div>
                </div>
              </div>
            </section>
            {/* Overlay */}
            <div
              className="fixed top-0 left-0 z-20 h-[100vh] w-full bg-black bg-opacity-75"
              onClick={handleAddUserLayoutActivation_close}
            ></div>
          </>
        )}
      </Container>
      {/* ------------- */}
    </>
  );
}
