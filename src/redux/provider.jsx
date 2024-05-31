"use client";

import { Provider } from "react-redux";
import { store } from "@/redux";
import { ProviderWrapper } from "./wrapper";

export const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ProviderWrapper>{children}</ProviderWrapper>
    </Provider>
  );
};
