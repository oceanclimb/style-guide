"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "@phosphor-icons/react";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
            }}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            {theme === "light" ? (
                <Moon size={20} weight="regular" style={{ color: "var(--text-secondary)" }} />
            ) : (
                <Sun size={20} weight="regular" style={{ color: "var(--text-secondary)" }} />
            )}
        </button>
    );
}
