"use client";
import store from "@/redux/store";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const [isRendering, setIsRendering] = useState<boolean>(false);
  useEffect(() => {
    setIsRendering(true);
  }, []);
  if (!isRendering) {
    return "";
  }
  return (
    <>
      <Toaster richColors={true} position="top-center" />
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default ReduxProvider;
