"use client";

import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
    isCollapsed: boolean;
}

// Map pathnames to page titles
const pageTitles: Record<string, string> = {
    "/": "Overview",
    "/colors": "Colors",
    "/typography": "Typography",
    "/spacing": "Spacing",
    "/effects": "Effects",
    "/icons": "Icons",
    "/inputs": "Inputs",
    "/buttons": "Buttons",
    "/feedback": "Feedback",
    "/navigation": "Navigation",
    "/modals": "Modals",
    "/data-display": "Data Display",
    "/accessibility": "Accessibility",
};

export function Header({ isCollapsed }: HeaderProps) {
    const pathname = usePathname();
    const pageTitle = pageTitles[pathname] || "Style Guide";

    return (
        <header
            className="fixed top-0 right-0 flex items-center border-b z-30"
            style={{
                height: "60px",
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-default)",
                left: isCollapsed ? "60px" : "240px",
                transition: "left 300ms",
                padding: "0 24px",
                justifyContent: "space-between",
            }}
        >
            <h1
                style={{
                    fontSize: "var(--font-size-h6)",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    margin: 0,
                }}
            >
                {pageTitle}
            </h1>
            <ThemeToggle />
        </header>
    );
}
