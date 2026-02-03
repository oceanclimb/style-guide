"use client";

import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";

interface ColorSwatchProps {
    name: string;
    hex: string;
}

function ColorSwatch({ name, hex }: ColorSwatchProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(name);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="group relative flex items-center gap-4 p-3 rounded-md"
            style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-default)",
            }}
        >
            <div
                className="w-16 h-16 rounded-md flex-shrink-0"
                style={{
                    backgroundColor: hex,
                    border: "1px solid var(--border-default)",
                }}
            />
            <div className="flex-1">
                <div
                    className="font-semibold mb-1"
                    style={{ color: "var(--text-primary)", fontSize: "var(--font-size-body)" }}
                >
                    {name}
                </div>
                <div
                    className="font-mono text-sm"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body-sm)" }}
                >
                    {hex}
                </div>
            </div>

            <button
                onClick={handleCopy}
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-md hover:bg-[var(--bg-surface-secondary)]"
                title="Copy variable name"
                type="button"
            >
                {copied ? (
                    <Check size={18} color="var(--primary-default)" />
                ) : (
                    <Copy size={18} color="var(--text-secondary)" />
                )}
            </button>
        </div>
    );
}

export default function ColorsPage() {
    const greenScale = [
        { name: "green-50", hex: "#ECFDF3" },
        { name: "green-100", hex: "#D1FAE5" },
        { name: "green-200", hex: "#A7F3C9" },
        { name: "green-300", hex: "#6EE7A0" },
        { name: "green-400", hex: "#34D970" },
        { name: "green-500", hex: "#2BA84A" },
        { name: "green-600", hex: "#22863A" },
        { name: "green-700", hex: "#1B6B2F" },
        { name: "green-800", hex: "#165626" },
        { name: "green-900", hex: "#11401D" },
        { name: "green-950", hex: "#0A2912" },
    ];

    const grayScale = [
        { name: "white", hex: "#FFFFFF" },
        { name: "black", hex: "#000000" },
        { name: "gray-50", hex: "#FAFAFA" },
        { name: "gray-100", hex: "#F4F4F5" },
        { name: "gray-200", hex: "#E4E4E7" },
        { name: "gray-300", hex: "#D4D4D8" },
        { name: "gray-400", hex: "#A1A1AA" },
        { name: "gray-500", hex: "#71717A" },
        { name: "gray-600", hex: "#52525B" },
        { name: "gray-700", hex: "#3F3F46" },
        { name: "gray-800", hex: "#27272A" },
        { name: "gray-900", hex: "#18181B" },
        { name: "gray-950", hex: "#09090B" },
    ];

    const yellowScale = [
        { name: "yellow-50", hex: "#FEFCE8" },
        { name: "yellow-100", hex: "#FEF9C3" },
        { name: "yellow-200", hex: "#FEF08A" },
        { name: "yellow-300", hex: "#FDE047" },
    ];

    const warningScale = [
        { name: "warning-50", hex: "#FFFBEB" },
        { name: "warning-100", hex: "#FEF3C7" },
        { name: "warning-200", hex: "#FDE68A" },
        { name: "warning-300", hex: "#FCD34D" },
    ];

    const errorScale = [
        { name: "error-50", hex: "#FEF2F2" },
        { name: "error-100", hex: "#FEE2E2" },
        { name: "error-200", hex: "#FECACA" },
        { name: "error-300", hex: "#FCA5A5" },
        { name: "error-400", hex: "#F87171" },
        { name: "error-500", hex: "#F55757" },
    ];

    const infoScale = [
        { name: "info-50", hex: "#EFF6FF" },
        { name: "info-100", hex: "#DBEAFE" },
        { name: "info-200", hex: "#BFDBFE" },
        { name: "info-300", hex: "#93C5FD" },
    ];

    const purpleScale = [
        { name: "purple-50", hex: "#FAF5FF" },
        { name: "purple-100", hex: "#F3E8FF" },
        { name: "purple-200", hex: "#E9D5FF" },
        { name: "purple-300", hex: "#D8B4FE" },
    ];

    return (
        <div className="p-8">
            <h1 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>Colors</h1>
            <p
                className="mb-8"
                style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--font-size-body-lg)",
                }}
            >
                All colors meet WCAG 2.1 AA contrast requirements and adapt seamlessly between light and dark modes.
            </p>

            {/* Gray Scale */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Gray Scale (Neutral)
                </h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Neutral colors for backgrounds, text, borders, and UI elements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {grayScale.map((color) => (
                        <ColorSwatch key={color.name} {...color} />
                    ))}
                </div>
            </section>

            {/* Green Scale */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Green Scale (Primary / CTA)
                </h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Base color: green-500 (#2BA84A). Used for primary actions, CTAs, and success states.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {greenScale.map((color) => (
                        <ColorSwatch key={color.name} {...color} />
                    ))}
                </div>
            </section>

            {/* Accent Colors */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Accent Colors
                </h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Secondary colors for warnings, errors, information, and other accents.
                </p>

                <div className="space-y-8">
                    {/* Yellow */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)]">Yellow</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {yellowScale.map((color) => (
                                <ColorSwatch key={color.name} {...color} />
                            ))}
                        </div>
                    </div>

                    {/* Warning (Orange) */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)]">Warning (Orange)</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {warningScale.map((color) => (
                                <ColorSwatch key={color.name} {...color} />
                            ))}
                        </div>
                    </div>

                    {/* Error (Red) */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)]">Error (Red)</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {errorScale.map((color) => (
                                <ColorSwatch key={color.name} {...color} />
                            ))}
                        </div>
                    </div>

                    {/* Info (Blue) */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)]">Info (Blue)</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {infoScale.map((color) => (
                                <ColorSwatch key={color.name} {...color} />
                            ))}
                        </div>
                    </div>

                    {/* Purple */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)]">Purple</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {purpleScale.map((color) => (
                                <ColorSwatch key={color.name} {...color} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Semantic Colors Demo */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Semantic Color Tokens
                </h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    These tokens automatically adapt to light and dark modes. Use these in your components
                    instead of raw color values.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Primary */}
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h3 className="mb-4" style={{ color: "var(--text-primary)" }}>
                            Primary
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-12 h-12 rounded"
                                    style={{ backgroundColor: "var(--primary-default)" }}
                                />
                                <span style={{ color: "var(--text-secondary)" }}>primary-default</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-12 h-12 rounded"
                                    style={{ backgroundColor: "var(--primary-hover)" }}
                                />
                                <span style={{ color: "var(--text-secondary)" }}>primary-hover</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-12 h-12 rounded"
                                    style={{ backgroundColor: "var(--primary-active)" }}
                                />
                                <span style={{ color: "var(--text-secondary)" }}>primary-active</span>
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h3 className="mb-4" style={{ color: "var(--text-primary)" }}>
                            Text
                        </h3>
                        <div className="space-y-2">
                            <div style={{ color: "var(--text-primary)" }}>text-primary</div>
                            <div style={{ color: "var(--text-secondary)" }}>text-secondary</div>
                            <div style={{ color: "var(--text-tertiary)" }}>text-tertiary</div>
                            <div style={{ color: "var(--text-muted)" }}>text-muted</div>
                            <div style={{ color: "var(--text-disabled)" }}>text-disabled</div>
                        </div>
                    </div>

                    {/* Backgrounds */}
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h3 className="mb-4" style={{ color: "var(--text-primary)" }}>
                            Backgrounds
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-12 h-12 rounded border"
                                    style={{
                                        backgroundColor: "var(--bg-page)",
                                        borderColor: "var(--border-default)",
                                    }}
                                />
                                <span style={{ color: "var(--text-secondary)" }}>bg-page</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-12 h-12 rounded border"
                                    style={{
                                        backgroundColor: "var(--bg-surface)",
                                        borderColor: "var(--border-default)",
                                    }}
                                />
                                <span style={{ color: "var(--text-secondary)" }}>bg-surface</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-12 h-12 rounded border"
                                    style={{
                                        backgroundColor: "var(--bg-surface-secondary)",
                                        borderColor: "var(--border-default)",
                                    }}
                                />
                                <span style={{ color: "var(--text-secondary)" }}>bg-surface-secondary</span>
                            </div>
                        </div>
                    </div>

                    {/* Borders */}
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h3 className="mb-4" style={{ color: "var(--text-primary)" }}>
                            Borders
                        </h3>
                        <div className="space-y-3">
                            <div
                                className="p-3 rounded"
                                style={{ border: "2px solid var(--border-default)" }}
                            >
                                <span style={{ color: "var(--text-secondary)" }}>border-default</span>
                            </div>
                            <div
                                className="p-3 rounded"
                                style={{ border: "2px solid var(--border-strong)" }}
                            >
                                <span style={{ color: "var(--text-secondary)" }}>border-strong</span>
                            </div>
                            <div
                                className="p-3 rounded"
                                style={{ border: "2px solid var(--border-focus)" }}
                            >
                                <span style={{ color: "var(--text-secondary)" }}>border-focus</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
