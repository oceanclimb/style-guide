"use client";

import { ThemeProvider } from "./ThemeProvider";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { ReactNode, useState } from "react";

export function ClientLayout({ children }: { children: ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <ThemeProvider>
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <Header isCollapsed={isCollapsed} />
            <main
                style={{
                    marginLeft: isCollapsed ? "60px" : "240px",
                    marginTop: "60px",
                    minHeight: "calc(100vh - 60px)",
                    transition: "margin-left 300ms",
                }}
            >
                {children}
            </main>
        </ThemeProvider>
    );
}
