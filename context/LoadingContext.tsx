import React, {
  createContext,
  ReactNode,
  Ref,
  useContext,
  useRef,
} from "react";
import { LoadingBarRef } from "react-top-loading-bar";

const LoadingContext = createContext<{ ref: Ref<LoadingBarRef> } | null>(null);

const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const ref = useRef<LoadingBarRef>(null);
  return (
    <LoadingContext.Provider value={{ ref: ref }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;

export const useLoading = () => useContext(LoadingContext);
