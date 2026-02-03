"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Palette,
    TextAa,
    Ruler,
    Sparkle,
    Desktop,
    Textbox,
    CursorClick,
    Bell,
    Compass,
    FrameCorners,
    Table,
    Eye,
    List,
} from "@phosphor-icons/react";

interface NavItem {
    name: string;
    href: string;
    icon: React.ReactNode;
}

const navItems: NavItem[] = [
    { name: "Colors", href: "/colors", icon: <Palette size={20} /> },
    { name: "Typography", href: "/typography", icon: <TextAa size={20} /> },
    { name: "Spacing", href: "/spacing", icon: <Ruler size={20} /> },
    { name: "Effects", href: "/effects", icon: <Sparkle size={20} /> },
    { name: "Icons", href: "/icons", icon: <Desktop size={20} /> },
    { name: "Inputs", href: "/inputs", icon: <Textbox size={20} /> },
    { name: "Buttons", href: "/buttons", icon: <CursorClick size={20} /> },
    { name: "Feedback", href: "/feedback", icon: <Bell size={20} /> },
    { name: "Navigation", href: "/navigation", icon: <Compass size={20} /> },
    { name: "Overlays", href: "/overlays", icon: <FrameCorners size={20} /> },
    { name: "Data Display", href: "/data-display", icon: <Table size={20} /> },
    { name: "Accessibility", href: "/accessibility", icon: <Eye size={20} /> },
];

interface SidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: (value: boolean) => void;
}

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
    const pathname = usePathname();

    return (
        <aside
            className="fixed left-0 top-0 h-screen transition-all duration-300"
            style={{
                width: isCollapsed ? "60px" : "240px",
                backgroundColor: "var(--bg-surface)",
                borderRight: "1px solid var(--border-default)",
                zIndex: 40,
            }}
        >
            {/* Header */}
            <div
                className="flex items-center border-b"
                style={{
                    height: "60px",
                    borderColor: "var(--border-default)",
                    padding: isCollapsed ? "0" : "0 16px",
                    justifyContent: isCollapsed ? "center" : "space-between",
                }}
            >
                {!isCollapsed && (
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <span
                            className="font-semibold"
                            style={{
                                fontSize: "var(--font-size-h6)",
                                color: "var(--text-primary)",
                            }}
                        >
                            Style Guide
                        </span>
                    </Link>
                )}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="flex items-center justify-center rounded-md transition-colors hover-bg"
                    style={{
                        width: "32px",
                        height: "32px",
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                    }}
                    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    <List size={24} weight="bold" style={{ color: "var(--primary-default)" }} />
                </button>
            </div>

            {/* Navigation */}
            <nav className="overflow-y-auto" style={{ height: "calc(100vh - 60px)", padding: "8px" }}>
                <div className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="nav-link flex items-center rounded-md transition-all"
                                style={{
                                    height: "40px",
                                    padding: isCollapsed ? "0" : "0 12px",
                                    gap: isCollapsed ? "0" : "12px",
                                    justifyContent: isCollapsed ? "center" : "flex-start",
                                    backgroundColor: isActive
                                        ? "var(--primary-subtle-bg)"
                                        : "transparent",
                                    color: isActive
                                        ? "var(--primary-subtle-text)"
                                        : "var(--text-secondary)",
                                    fontWeight: isActive ? 600 : 400,
                                    textDecoration: "none",
                                }}
                                title={isCollapsed ? item.name : undefined}
                            >
                                <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                                    {item.icon}
                                </span>
                                {!isCollapsed && (
                                    <span
                                        style={{
                                            fontSize: "var(--font-size-body)",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {item.name}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </aside>
    );
}
