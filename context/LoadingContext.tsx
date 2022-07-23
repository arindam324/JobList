import { useRouter } from "next/router";
import React, {
  createContext,
  ReactNode,
  Ref,
  useContext,
  useEffect,
  useRef,
} from "react";
import { LoadingBarRef } from "react-top-loading-bar";

const LoadingContext = createContext<{
  ref: Ref<LoadingBarRef>;
  continue: () => void;
  complete: () => void;
} | null>(null);

const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const ref = useRef<LoadingBarRef>(null);

  const continues = () => {
    ref?.current?.continuousStart(0, 100);
  };
  const complete = () => {
    ref?.current?.complete();
  };

  return (
    <LoadingContext.Provider
      value={{ ref: ref, continue: continues, complete: complete }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;

export const useLoading = () => useContext(LoadingContext);
