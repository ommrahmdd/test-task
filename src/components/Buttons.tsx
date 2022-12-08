import React from "react";
export function MainBtn({
  content,
  clickHandler,
}: {
  content: string;
  clickHandler?: () => void;
}) {
  return (
    <button
      className={`text-white bg-mainColor border border-mainColor py-2 px-5 rounded-full capitalize text-xs transition-all duration-300 ease-in-out hover:bg-white hover:text-mainColor `}
      onClick={(e) => {
        clickHandler ? clickHandler() : null;
      }}
    >
      {content}
    </button>
  );
}
export function SecondaryBtn({
  content,
  icon,
}: {
  content?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <button
      className={`text-mainColor border border-mainColor py-2  rounded-full capitalize text-xs transition-all duration-300 ease-in-out hover:bg-mainColor hover:text-white ${
        icon ? "p-2 py-2 text-lg " : "px-5"
      }`}
    >
      {content || icon}
    </button>
  );
}

export function MainBtnWithGrey({
  content,
  clickHandler,
}: {
  content: string;
  clickHandler?: () => void;
}) {
  return (
    <button
      className={`text-white bg-gray-800 bg-opacity-60 border  py-2 px-10 rounded-3xl capitalize text-xs transition-all duration-300 ease-in-out shadow-lg  font-semibold hover:bg-white hover:text-mainColor lg:px-14 `}
      onClick={(e) => {
        clickHandler ? clickHandler() : null;
      }}
    >
      {content}
    </button>
  );
}
export function SecondaryBtnWithOpacity({
  content,
  icon,
}: {
  content?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <button
      className={`text-mainColor border border-mainColor py-2  rounded-full capitalize text-xs transition-all duration-300 ease-in-out hover:bg-mainColor hover:text-white ${
        icon ? "p-2 py-2 text-lg " : "px-10 lg:px-14"
      }`}
    >
      {content || icon}
    </button>
  );
}
export function MainBtnWithOpacity({
  content,
  clickHandler,
}: {
  content: string;
  clickHandler?: () => void;
}) {
  return (
    <button
      className={`text-mainColor bg-mainColor bg-opacity-20 border  py-2 px-5 rounded-full capitalize text-xs transition-all duration-300 ease-in-out shadow-lg font-semibold hover:bg-white hover:text-mainColor `}
      onClick={(e) => {
        clickHandler ? clickHandler() : null;
      }}
    >
      {content}
    </button>
  );
}
