import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {React.Children.map(children, (child, idx) => (
        <div key={idx} className="p-4 border rounded">
          {child}
        </div>
      ))}
    </div>
  );
};

export default Layout;
