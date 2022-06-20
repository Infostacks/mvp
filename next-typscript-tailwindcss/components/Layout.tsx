import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="flex flex-row bg-slate-400 h-20 items-center pl-5">
        <li className="list-none text-2xl">Home</li>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
