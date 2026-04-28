"use client";

import { useActivityLog } from "@/hooks/useActivityLog";
import React from "react";

export const ActivityLogProvider = ({ children }: { children: React.ReactNode }) => {
  useActivityLog();
  return <>{children}</>;
};
