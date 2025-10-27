import React from "react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>This is everywhere under /signin/user</p>
      {children}
    </div>
  );
}
