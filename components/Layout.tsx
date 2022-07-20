import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="w-full py-4 min-h-screen max-w-5xl mx-auto ">
      {children}
    </main>
  );
};

export default Layout;
