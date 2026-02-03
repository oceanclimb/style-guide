"use client";

interface SpacingItemProps {
    name: string;
    value: string;
    pixels: number;
}

function SpacingItem({ name, value, pixels }: SpacingItemProps) {
    return (
        <div
            className="flex items-center gap-6 p-4 rounded-md"
            style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-default)",
            }}
        >
            {/* Visual representation */}
            <div className="flex items-center gap-2">
                <div
                    style={{
                        width: `${pixels}px`,
                        height: "40px",
                        backgroundColor: "var(--primary-default)",
                        borderRadius: "var(--radius-sm)",
                        transition: "all var(--transition-default)",
                    }}
                />
                <div
                    className="font-mono text-xs"
                    style={{
                        color: "var(--text-tertiary)",
                        minWidth: "50px",
                    }}
                >
                    {pixels}px
                </div>
            </div>

            {/* Token info */}
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
                    {value}
                </div>
            </div>
        </div>
    );
}

export default function SpacingPage() {
    const spacingValues = [
        { name: "spacing-0", value: "var(--spacing-0)", pixels: 0 },
        { name: "spacing-1", value: "var(--spacing-1)", pixels: 5 },
        { name: "spacing-2", value: "var(--spacing-2)", pixels: 10 },
        { name: "spacing-3", value: "var(--spacing-3)", pixels: 15 },
        { name: "spacing-4", value: "var(--spacing-4)", pixels: 20 },
        { name: "spacing-6", value: "var(--spacing-6)", pixels: 30 },
        { name: "spacing-8", value: "var(--spacing-8)", pixels: 40 },
        { name: "spacing-12", value: "var(--spacing-12)", pixels: 60 },
        { name: "spacing-16", value: "var(--spacing-16)", pixels: 80 },
        { name: "spacing-20", value: "var(--spacing-20)", pixels: 100 },
    ];

    return (
        <div className="p-8">
            <h1 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>Spacing</h1>
            <p
                className="mb-8"
                style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--font-size-body-lg)",
                }}
            >
                Our spacing system uses a consistent scale to create visual rhythm and hierarchy. The
                default spacing between most elements should be <strong>10px</strong> (spacing-2).
            </p>

            {/* Spacing Scale */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Spacing Scale
                </h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Standard spacing values for margins, padding, and gaps throughout the application.
                </p>
                <div className="grid grid-cols-1 gap-4">
                    {spacingValues.map((spacing) => (
                        <SpacingItem key={spacing.name} {...spacing} />
                    ))}
                </div>
            </section>

            {/* Usage Guidelines */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Usage Guidelines
                </h2>
                <div
                    className="p-6 rounded-lg"
                    style={{
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-default)",
                    }}
                >
                    <div className="space-y-4">
                        <div>
                            <h3
                                className="mb-2"
                                style={{
                                    color: "var(--text-primary)",
                                    fontSize: "var(--font-size-h5)",
                                }}
                            >
                                Default Spacing
                            </h3>
                            <p style={{ color: "var(--text-secondary)" }}>
                                Use <code>10px</code> (spacing-2) as the default spacing between most UI
                                elements like form fields, buttons, and content sections.
                            </p>
                        </div>

                        <div>
                            <h3
                                className="mb-2"
                                style={{
                                    color: "var(--text-primary)",
                                    fontSize: "var(--font-size-h5)",
                                }}
                            >
                                Compact Spacing
                            </h3>
                            <p style={{ color: "var(--text-secondary)" }}>
                                Use <code>5px</code> (spacing-1) for tighter layouts like list items,
                                table cells, or closely related content.
                            </p>
                        </div>

                        <div>
                            <h3
                                className="mb-2"
                                style={{
                                    color: "var(--text-primary)",
                                    fontSize: "var(--font-size-h5)",
                                }}
                            >
                                Generous Spacing
                            </h3>
                            <p style={{ color: "var(--text-secondary)" }}>
                                Use larger values like <code>30px</code>, <code>40px</code>, or{" "}
                                <code>60px</code> for section breaks, page margins, and major layout
                                divisions.
                            </p>
                        </div>

                        <div>
                            <h3
                                className="mb-2"
                                style={{
                                    color: "var(--text-primary)",
                                    fontSize: "var(--font-size-h5)",
                                }}
                            >
                                Extra Large Spacing
                            </h3>
                            <p style={{ color: "var(--text-secondary)" }}>
                                Use <code>80px</code> and <code>100px</code> for hero sections, landing
                                pages, or creating dramatic visual separation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Examples */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Interactive Examples
                </h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    See how different spacing values affect layout and visual hierarchy.
                </p>

                {/* Card Layout Example */}
                <div className="mb-8">
                    <h3
                        className="mb-4"
                        style={{
                            color: "var(--text-primary)",
                            fontSize: "var(--font-size-h4)",
                        }}
                    >
                        Card Layout (10px default spacing)
                    </h3>
                    <div
                        className="p-4 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <div
                            style={{
                                padding: "10px",
                                backgroundColor: "var(--bg-surface-secondary)",
                                borderRadius: "var(--radius-md)",
                                color: "var(--text-primary)",
                            }}
                        >
                            Card Item 1
                        </div>
                        <div
                            style={{
                                padding: "10px",
                                backgroundColor: "var(--bg-surface-secondary)",
                                borderRadius: "var(--radius-md)",
                                color: "var(--text-primary)",
                            }}
                        >
                            Card Item 2
                        </div>
                        <div
                            style={{
                                padding: "10px",
                                backgroundColor: "var(--bg-surface-secondary)",
                                borderRadius: "var(--radius-md)",
                                color: "var(--text-primary)",
                            }}
                        >
                            Card Item 3
                        </div>
                    </div>
                </div>

                {/* Button Group Example */}
                <div className="mb-8">
                    <h3
                        className="mb-4"
                        style={{
                            color: "var(--text-primary)",
                            fontSize: "var(--font-size-h4)",
                        }}
                    >
                        Button Group (10px gap)
                    </h3>
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        <button
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "var(--primary-default)",
                                color: "var(--primary-text)",
                                border: "none",
                                borderRadius: "var(--radius-md)",
                                fontSize: "var(--font-size-body)",
                                fontWeight: 600,
                                cursor: "pointer",
                            }}
                        >
                            Primary
                        </button>
                        <button
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "var(--secondary-default)",
                                color: "var(--secondary-text)",
                                border: "1px solid var(--secondary-border)",
                                borderRadius: "var(--radius-md)",
                                fontSize: "var(--font-size-body)",
                                fontWeight: 600,
                                cursor: "pointer",
                            }}
                        >
                            Secondary
                        </button>
                        <button
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "var(--destructive-default)",
                                color: "var(--destructive-text)",
                                border: "none",
                                borderRadius: "var(--radius-md)",
                                fontSize: "var(--font-size-body)",
                                fontWeight: 600,
                                cursor: "pointer",
                            }}
                        >
                            Destructive
                        </button>
                    </div>
                </div>

                {/* Section Spacing Example */}
                <div>
                    <h3
                        className="mb-4"
                        style={{
                            color: "var(--text-primary)",
                            fontSize: "var(--font-size-h4)",
                        }}
                    >
                        Section Spacing (40px between sections)
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                        <div
                            style={{
                                padding: "20px",
                                backgroundColor: "var(--bg-surface)",
                                border: "1px solid var(--border-default)",
                                borderRadius: "var(--radius-md)",
                            }}
                        >
                            <h4 style={{ color: "var(--text-primary)", marginBottom: "10px" }}>
                                Section 1
                            </h4>
                            <p style={{ color: "var(--text-secondary)" }}>
                                This section demonstrates generous spacing between major content areas.
                            </p>
                        </div>
                        <div
                            style={{
                                padding: "20px",
                                backgroundColor: "var(--bg-surface)",
                                border: "1px solid var(--border-default)",
                                borderRadius: "var(--radius-md)",
                            }}
                        >
                            <h4 style={{ color: "var(--text-primary)", marginBottom: "10px" }}>
                                Section 2
                            </h4>
                            <p style={{ color: "var(--text-secondary)" }}>
                                Notice the 40px gap creating clear visual separation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CSS Variables Reference */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    CSS Variables Reference
                </h2>
                <div
                    className="p-6 rounded-lg"
                    style={{
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-default)",
                    }}
                >
                    <pre
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "13px",
                            color: "var(--text-primary)",
                            backgroundColor: "var(--bg-surface-secondary)",
                            padding: "20px",
                            borderRadius: "var(--radius-md)",
                            overflow: "auto",
                        }}
                    >
                        {`/* Spacing Variables */
--spacing-0: 0px;
--spacing-1: 5px;
--spacing-2: 10px;   /* Default */
--spacing-3: 15px;
--spacing-4: 20px;
--spacing-6: 30px;
--spacing-8: 40px;
--spacing-12: 60px;
--spacing-16: 80px;
--spacing-20: 100px;

/* Usage Example */
.element {
  margin-bottom: var(--spacing-2);  /* 10px */
  padding: var(--spacing-4);        /* 20px */
  gap: var(--spacing-2);            /* 10px */
}`}
                    </pre>
                </div>
            </section>
        </div>
    );
}
