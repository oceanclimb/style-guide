export default function TypographyPage() {
    return (
        <div className="p-8">
            <h1 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>Typography</h1>
            <p
                className="mb-8"
                style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--font-size-body-lg)",
                }}
            >
                Our typography system uses Inter as the primary font.
            </p>

            {/* Type Scale */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>Type Scale</h2>
                <div className="space-y-6">
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h1 style={{ color: "var(--text-primary)" }}>Heading 1</h1>
                        <p
                            className="mt-2"
                            style={{ color: "var(--text-tertiary)", fontSize: "var(--font-size-body-sm)" }}
                        >
                            48px / 56px line-height / 700 weight
                        </p>
                    </div>

                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h2 style={{ color: "var(--text-primary)" }}>Heading 2</h2>
                        <p
                            className="mt-2"
                            style={{ color: "var(--text-tertiary)", fontSize: "var(--font-size-body-sm)" }}
                        >
                            36px / 44px line-height / 700 weight
                        </p>
                    </div>

                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h3 style={{ color: "var(--text-primary)" }}>Heading 3</h3>
                        <p
                            className="mt-2"
                            style={{ color: "var(--text-tertiary)", fontSize: "var(--font-size-body-sm)" }}
                        >
                            30px / 38px line-height / 600 weight
                        </p>
                    </div>

                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h4 style={{ color: "var(--text-primary)" }}>Heading 4</h4>
                        <p
                            className="mt-2"
                            style={{ color: "var(--text-tertiary)", fontSize: "var(--font-size-body-sm)" }}
                        >
                            24px / 32px line-height / 600 weight
                        </p>
                    </div>

                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h5 style={{ color: "var(--text-primary)" }}>Heading 5</h5>
                        <p
                            className="mt-2"
                            style={{ color: "var(--text-tertiary)", fontSize: "var(--font-size-body-sm)" }}
                        >
                            20px / 28px line-height / 600 weight
                        </p>
                    </div>

                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h6 style={{ color: "var(--text-primary)" }}>Heading 6</h6>
                        <p
                            className="mt-2"
                            style={{ color: "var(--text-tertiary)", fontSize: "var(--font-size-body-sm)" }}
                        >
                            16px / 24px line-height / 600 weight
                        </p>
                    </div>
                </div>
            </section>

            {/* Body Text */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>Body Text</h2>
                <div className="space-y-4">
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "var(--font-size-body-lg)",
                                lineHeight: "var(--line-height-body-lg)",
                                color: "var(--text-primary)",
                            }}
                        >
                            Body Large - 16px / 24px line-height / 400 weight
                        </p>
                        <p
                            className="mt-2"
                            style={{ color: "var(--text-tertiary)", fontSize: "var(--font-size-body-sm)" }}
                        >
                            Used for large body text and important paragraphs
                        </p>
                    </div>

                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "var(--font-size-body)",
                                lineHeight: "var(--line-height-body)",
                                color: "var(--text-primary)",
                            }}
                        >
                            Body - 14px / 20px line-height / 400 weight
                        </p>
                        <p
                            className="mt-2"
                            style={{ color: "var(--text-tertiary)", fontSize: "var(--font-size-body-sm)" }}
                        >
                            Default body text for most content
                        </p>
                    </div>

                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "var(--font-size-body-sm)",
                                lineHeight: "var(--line-height-body-sm)",
                                color: "var(--text-primary)",
                            }}
                        >
                            Body Small - 12px / 16px line-height / 400 weight
                        </p>
                        <p
                            className="mt-2"
                            style={{ color: "var(--text-tertiary)", fontSize: "var(--font-size-body-sm)" }}
                        >
                            Secondary text, captions, and helper text
                        </p>
                    </div>

                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "var(--font-size-caption)",
                                lineHeight: "var(--line-height-caption)",
                                color: "var(--text-primary)",
                            }}
                        >
                            Caption - 10px / 14px line-height / 400 weight
                        </p>
                        <p
                            className="mt-2"
                            style={{ color: "var(--text-tertiary)", fontSize: "var(--font-size-body-sm)" }}
                        >
                            Captions, fine print, and micro text
                        </p>
                    </div>
                </div>
            </section>

            {/* Text Styles */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>Text Styles</h2>
                <div className="space-y-4">
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <a href="#" style={{ color: "var(--text-link)" }}>
                            This is a link with underline
                        </a>
                        <p
                            className="mt-2"
                            style={{ color: "var(--text-tertiary)", fontSize: "var(--font-size-body-sm)" }}
                        >
                            Links use text-link color and underline decoration
                        </p>
                    </div>

                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <code>const example = "inline code";</code>
                        <p
                            className="mt-2"
                            style={{ color: "var(--text-tertiary)", fontSize: "var(--font-size-body-sm)" }}
                        >
                            Inline code with monospace font and subtle background
                        </p>
                    </div>

                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <blockquote>
                            This is a blockquote. It uses italic style with a left border accent.
                        </blockquote>
                        <p
                            className="mt-2"
                            style={{ color: "var(--text-tertiary)", fontSize: "var(--font-size-body-sm)" }}
                        >
                            Blockquotes for quotations and callouts
                        </p>
                    </div>
                </div>
            </section>

            {/* Code Block Example */}
            <section>
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>Code Block</h2>
                <pre>
                    {`function greet(name: string) {
  return \`Hello, \${name}!\`;
}

const message = greet("World");
console.log(message);`}
                </pre>
            </section>
        </div>
    );
}
