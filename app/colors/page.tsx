"use client";

interface ColorSwatchProps {
    name: string;
    hex: string;
    rgb: string;
}

function ColorSwatch({ name, hex, rgb }: ColorSwatchProps) {
    return (
        <div
            className="flex items-center gap-4 p-3 rounded-md"
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
                <div
                    className="font-mono text-xs"
                    style={{ color: "var(--text-tertiary)", fontSize: "10px" }}
                >
                    {rgb}
                </div>
            </div>
        </div>
    );
}

export default function ColorsPage() {
    const greenScale = [
        { name: "green-50", hex: "#ECFDF3", rgb: "rgb(236, 253, 243)" },
        { name: "green-100", hex: "#D1FAE5", rgb: "rgb(209, 250, 229)" },
        { name: "green-200", hex: "#A7F3C9", rgb: "rgb(167, 243, 201)" },
        { name: "green-300", hex: "#6EE7A0", rgb: "rgb(110, 231, 160)" },
        { name: "green-400", hex: "#34D970", rgb: "rgb(52, 217, 112)" },
        { name: "green-500", hex: "#2BA84A", rgb: "rgb(43, 168, 74)" },
        { name: "green-600", hex: "#22863A", rgb: "rgb(34, 134, 58)" },
        { name: "green-700", hex: "#1B6B2F", rgb: "rgb(27, 107, 47)" },
        { name: "green-800", hex: "#165626", rgb: "rgb(22, 86, 38)" },
        { name: "green-900", hex: "#11401D", rgb: "rgb(17, 64, 29)" },
        { name: "green-950", hex: "#0A2912", rgb: "rgb(10, 41, 18)" },
    ];

    const grayScale = [
        { name: "gray-50", hex: "#FAFAFA", rgb: "rgb(250, 250, 250)" },
        { name: "gray-100", hex: "#F4F4F5", rgb: "rgb(244, 244, 245)" },
        { name: "gray-200", hex: "#E4E4E7", rgb: "rgb(228, 228, 231)" },
        { name: "gray-300", hex: "#D4D4D8", rgb: "rgb(212, 212, 216)" },
        { name: "gray-400", hex: "#A1A1AA", rgb: "rgb(161, 161, 170)" },
        { name: "gray-500", hex: "#71717A", rgb: "rgb(113, 113, 122)" },
        { name: "gray-600", hex: "#52525B", rgb: "rgb(82, 82, 91)" },
        { name: "gray-700", hex: "#3F3F46", rgb: "rgb(63, 63, 70)" },
        { name: "gray-800", hex: "#27272A", rgb: "rgb(39, 39, 42)" },
        { name: "gray-900", hex: "#18181B", rgb: "rgb(24, 24, 27)" },
        { name: "gray-950", hex: "#09090B", rgb: "rgb(9, 9, 11)" },
    ];

    return (
        <div className="p-8 max-w-6xl">
            <h1 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>Colors</h1>
            <p
                className="mb-8"
                style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--font-size-body-lg)",
                    maxWidth: "700px",
                }}
            >
                Our color system is built on semantic naming and accessibility. All colors meet WCAG 2.1 AA
                contrast requirements and adapt seamlessly between light and dark modes.
            </p>

            {/* Green Scale */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Green Scale (Primary / CTA)
                </h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Base color: #2BA84A (Medium Jungle). Used for primary actions, CTAs, and success states.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {greenScale.map((color) => (
                        <ColorSwatch key={color.name} {...color} />
                    ))}
                </div>
            </section>

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
