import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="w-[96%] mx-auto ">{children}</div>;
}
