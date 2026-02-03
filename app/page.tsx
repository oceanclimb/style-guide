import { Sparkle, Palette, Code } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div className="p-8">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Sparkle size={40} weight="duotone" style={{ color: "var(--primary-default)" }} />
          <h1 style={{ color: "var(--text-primary)", margin: 0 }}>
            Style Guide
          </h1>
        </div>
        <p
          className="text-lg"
          style={{
            fontSize: "var(--font-size-body-lg)",
            lineHeight: "var(--line-height-body-lg)",
            color: "var(--text-secondary)",
          }}
        >
          A comprehensive design system built with Next.js and Tailwind CSS. Explore our color
          palettes, typography, components, and design patterns.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div
          className="p-6 rounded-lg"
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-default)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <Palette
            size={32}
            weight="duotone"
            style={{ color: "var(--primary-default)", marginBottom: "12px" }}
          />
          <h3 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>
            Semantic Color System
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body-sm)" }}>
            Carefully crafted color scales with semantic tokens that adapt seamlessly between light
            and dark modes.
          </p>
        </div>

        <div
          className="p-6 rounded-lg"
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-default)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <Code
            size={32}
            weight="duotone"
            style={{ color: "var(--primary-default)", marginBottom: "12px" }}
          />
          <h3 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>
            Production-Ready Components
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body-sm)" }}>
            Fully accessible UI components with consistent styling, states, and interactions across
            all patterns.
          </p>
        </div>

        <div
          className="p-6 rounded-lg"
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-default)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <Sparkle
            size={32}
            weight="duotone"
            style={{ color: "var(--primary-default)", marginBottom: "12px" }}
          />
          <h3 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>
            Accessibility First
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body-sm)" }}>
            WCAG 2.1 AA compliant with proper contrast ratios, focus states, and keyboard
            navigation support.
          </p>
        </div>
      </div>

      {/* Design Principles */}
      <div
        className="p-8 rounded-lg mb-12"
        style={{
          backgroundColor: "var(--primary-subtle-bg)",
          border: "1px solid var(--primary-default)",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
          Design Principles
        </h2>
        <ul
          className="space-y-3"
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {[
            {
              title: "Accessibility first",
              desc: "All components meet WCAG 2.1 AA contrast requirements",
            },
            {
              title: "Semantic naming",
              desc: "Tokens describe purpose, not appearance",
            },
            {
              title: "Mode agnostic",
              desc: "Components reference semantic tokens, not raw values",
            },
            {
              title: "Consistent spacing",
              desc: "5px base unit throughout the entire system",
            },
            {
              title: "Predictable behavior",
              desc: "Same interaction patterns across all components",
            },
          ].map((principle, index) => (
            <li key={index} className="flex gap-3">
              <span style={{ color: "var(--primary-default)", fontWeight: 600 }}>•</span>
              <div>
                <strong style={{ color: "var(--text-primary)" }}>{principle.title}:</strong>{" "}
                <span style={{ color: "var(--text-secondary)" }}>{principle.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
