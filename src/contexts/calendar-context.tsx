"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type CalendarContextType = {
  year?: string;
  month?: string;
  setYear: (year: string) => void;
  setMonth: (month: string) => void;
};

const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined,
);

export function CalendarProvider({ children }: { children: ReactNode }) {
  const [year, setYear] = useState<string | undefined>(undefined);
  const [month, setMonth] = useState<string | undefined>(undefined);

  return (
    <CalendarContext.Provider value={{ year, month, setYear, setMonth }}>
      {children}
    </CalendarContext.Provider>
  );
}

export function useCalendar() {
  const context = useContext(CalendarContext);
  if (!context)
    throw new Error("useCalendar must be used within CalendarProvider");
  return context;
}
