import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { useLoading } from "../context/LoadingContext";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const loadingContext = useLoading();
  const router = useRouter();

  useEffect(() => {
    loadingContext?.complete();
  }, [router.isReady]);

  return (
    <main className="w-full py-4 min-h-screen max-w-5xl mx-auto ">
      <LoadingBar color="blue" ref={loadingContext?.ref} />
      {children}
    </main>
  );
};

export default Layout;
