import React, { useRef, useState } from "react";
import {
  AiFillAlipayCircle,
  AiFillAlert,
  AiFillChrome,
  AiFillDingtalkCircle,
} from "react-icons/ai";
export default function HomeTs() {
  let [isActive, setIsActive] = useState<boolean>(true);
  let [addUserLayoutActivation, setAddUserActivation] =
    useState<boolean>(false);
  let sideRef = useRef(null);
  let arrowRef = useRef(null);
  let addUserLayoutRef = useRef(null);

  let searchSelector = [
    {
      value: "code",
      label: "Code",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "phone",
      label: "Phone",
    },
  ];
  let sidebarSelection = [
    {
      label: (
        <div className="flex items-center gap-x-3">
          <AiFillAlipayCircle className="text-mainColor text-2xl" />
          <span>Inframodern</span>
        </div>
      ),
      value: "Inframodern",
    },
    {
      label: (
        <div className="flex items-center gap-x-3">
          <AiFillAlert className="text-mainColor text-2xl" />
          <span>example 1</span>
        </div>
      ),
      value: "example 1",
    },
    {
      label: (
        <div className="flex items-center gap-x-3">
          <AiFillChrome className="text-mainColor text-2xl" />
          <span>example 2</span>
        </div>
      ),
      value: "example 2",
    },
    {
      label: (
        <div className="flex items-center gap-x-3">
          <AiFillDingtalkCircle className="text-mainColor text-2xl" />
          <span>example 3</span>
        </div>
      ),
      value: "example 3",
    },
  ];

  let sidebarUpperList = [
    {
      title: "Products data",
      items: [
        { text: "example1", to: "example1" },
        { text: "example2", to: "example2" },
      ],
    },
    {
      title: "Brand & Branches",
      items: [
        { text: "example1", to: "example1" },
        { text: "example2", to: "example2" },
      ],
    },
    {
      title: "Customers",
    },
    {
      title: "Users",
    },
  ];
  let sidebarLowerList = [
    {
      title: "Setting",
      items: [
        { text: "example1", to: "example1" },
        { text: "example2", to: "example2" },
      ],
    },
    {
      title: "Notification & Updates",
    },
  ];

  let handleSideActivation = () => {
    if (isActive) {
      (arrowRef.current as any).style.transform = "rotate(180deg)";
      (sideRef.current as any).style.opacity = "0";
      (sideRef.current as any).style.display = "none";
      (arrowRef.current as any).style.left = "1%";
      (sideRef.current as any).style.width = "0";
      setIsActive(false);
    } else {
      (arrowRef.current as any).style.transform = "rotate(0)";
      (arrowRef.current as any).style.left = "13.5rem";
      (arrowRef.current as any).style.transition = ".1 all ease-in-out";

      (sideRef.current as any).style.opacity = "3";
      (sideRef.current as any).style.display = "block";
      (sideRef.current as any).style.width = "auto";
      setIsActive(true);
    }
  };

  let handleAddUserLayoutActivation_open = () => {
    setAddUserActivation(true);
  };
  let handleAddUserLayoutActivation_close = () => {
    setAddUserActivation(false);
  };

  return {
    sidebarSelection,
    sidebarLowerList,
    sidebarUpperList,
    handleSideActivation,
    sideRef,
    arrowRef,
    addUserLayoutActivation,
    addUserLayoutRef,
    handleAddUserLayoutActivation_open,
    handleAddUserLayoutActivation_close,
  };
}
