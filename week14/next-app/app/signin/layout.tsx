import React from "react";

export default function SigninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>This layout applies to all routes under /signin</p>
      {children}
    </div>
  );
}
