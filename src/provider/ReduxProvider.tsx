"use client";
import store from "@/redux/store";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const [isRendering, setIsRendering] = useState<boolean>(false);
  useEffect(() => {
    setIsRendering(true);
  }, []);
  if (!isRendering) {
    return "";
  }
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
