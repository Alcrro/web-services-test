"use client";
import React, { ReactNode, useEffect } from "react";

const TasksWrapper = ({
  children,
  needsRefresh,
}: {
  children: ReactNode;
  needsRefresh: boolean;
}) => {
  useEffect(() => {
    if (!needsRefresh) return;
    async function getRefreshToken() {
      await fetch(`http://localhost:3000/api/auth/refresh`, {
        method: "POST",
        credentials: "include",
      }).then((res) => res.json());
    }
    getRefreshToken();
  }, [needsRefresh]);
  return <>{children}</>;
};

export default TasksWrapper;
