"use client";

import { useState } from "react";
import { ArrowRight, Download, Trash, Plus } from "@phosphor-icons/react";

export default function ButtonsPage() {
    const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

    const handleClick = (buttonId: string) => {
        setLoadingStates((prev) => ({ ...prev, [buttonId]: true }));
        setTimeout(() => {
            setLoadingStates((prev) => ({ ...prev, [buttonId]: false }));
        }, 2000);
    };

    return (
        <div className="p-8 max-w-6xl">
            <h1 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>Buttons</h1>
            <p
                className="mb-8"
                style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--font-size-body-lg)",
                    maxWidth: "700px",
                }}
            >
                Buttons are available in multiple variants, sizes, and states. All buttons include proper
                focus states and transitions.
            </p>

            {/* Primary Buttons */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>Primary Buttons</h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Used for primary actions and CTAs. High contrast and prominence.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                    {/* Small */}
                    <button
                        className="font-semibold rounded-md transition-colors"
                        style={{
                            backgroundColor: "var(--primary-default)",
                            color: "var(--primary-text)",
                            height: "30px",
                            padding: "0 12px",
                            fontSize: "12px",
                            border: "none",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary-default)";
                        }}
                    >
                        Small
                    </button>

                    {/* Medium (Default) */}
                    <button
                        className="font-semibold rounded-md transition-colors"
                        style={{
                            backgroundColor: "var(--primary-default)",
                            color: "var(--primary-text)",
                            height: "36px",
                            padding: "0 16px",
                            fontSize: "14px",
                            border: "none",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary-default)";
                        }}
                    >
                        Medium
                    </button>

                    {/* Large */}
                    <button
                        className="font-semibold rounded-md transition-colors"
                        style={{
                            backgroundColor: "var(--primary-default)",
                            color: "var(--primary-text)",
                            height: "44px",
                            padding: "0 20px",
                            fontSize: "16px",
                            border: "none",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary-default)";
                        }}
                    >
                        Large
                    </button>

                    {/* With Icon */}
                    <button
                        className="font-semibold rounded-md transition-colors flex items-center gap-2"
                        style={{
                            backgroundColor: "var(--primary-default)",
                            color: "var(--primary-text)",
                            height: "36px",
                            padding: "0 16px",
                            fontSize: "14px",
                            border: "none",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary-default)";
                        }}
                    >
                        Download
                        <Download size={20} weight="regular" />
                    </button>

                    {/* Disabled */}
                    <button
                        className="font-semibold rounded-md"
                        style={{
                            backgroundColor: "var(--primary-default)",
                            color: "var(--primary-text)",
                            height: "36px",
                            padding: "0 16px",
                            fontSize: "14px",
                            border: "none",
                            opacity: 0.5,
                            cursor: "not-allowed",
                        }}
                        disabled
                    >
                        Disabled
                    </button>

                    {/* Loading */}
                    <button
                        className="font-semibold rounded-md transition-colors"
                        style={{
                            backgroundColor: "var(--primary-default)",
                            color: "var(--primary-text)",
                            height: "36px",
                            padding: "0 16px",
                            fontSize: "14px",
                            border: "none",
                            cursor: loadingStates["primary-loading"] ? "wait" : "pointer",
                            opacity: loadingStates["primary-loading"] ? 0.8 : 1,
                        }}
                        onClick={() => handleClick("primary-loading")}
                    >
                        {loadingStates["primary-loading"] ? "Loading..." : "Click to Load"}
                    </button>
                </div>
            </section>

            {/* Secondary Buttons */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>Secondary Buttons</h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Used for secondary actions. Less prominent than primary buttons.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                    <button
                        className="font-semibold rounded-md transition-colors"
                        style={{
                            backgroundColor: "var(--secondary-default)",
                            color: "var(--secondary-text)",
                            border: "1px solid var(--secondary-border)",
                            height: "30px",
                            padding: "0 12px",
                            fontSize: "12px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-default)";
                        }}
                    >
                        Small
                    </button>

                    <button
                        className="font-semibold rounded-md transition-colors"
                        style={{
                            backgroundColor: "var(--secondary-default)",
                            color: "var(--secondary-text)",
                            border: "1px solid var(--secondary-border)",
                            height: "36px",
                            padding: "0 16px",
                            fontSize: "14px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-default)";
                        }}
                    >
                        Medium
                    </button>

                    <button
                        className="font-semibold rounded-md transition-colors"
                        style={{
                            backgroundColor: "var(--secondary-default)",
                            color: "var(--secondary-text)",
                            border: "1px solid var(--secondary-border)",
                            height: "44px",
                            padding: "0 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-default)";
                        }}
                    >
                        Large
                    </button>

                    <button
                        className="font-semibold rounded-md transition-colors flex items-center gap-2"
                        style={{
                            backgroundColor: "var(--secondary-default)",
                            color: "var(--secondary-text)",
                            border: "1px solid var(--secondary-border)",
                            height: "36px",
                            padding: "0 16px",
                            fontSize: "14px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-default)";
                        }}
                    >
                        <Plus size={20} weight="regular" />
                        Add Item
                    </button>
                </div>
            </section>

            {/* Tertiary/Ghost Buttons */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Tertiary / Ghost Buttons
                </h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Minimal styling for tertiary actions. Transparent background with hover state.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                    <button
                        className="font-semibold rounded-md transition-colors"
                        style={{
                            backgroundColor: "transparent",
                            color: "var(--text-secondary)",
                            border: "none",
                            height: "30px",
                            padding: "0 12px",
                            fontSize: "12px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-default)";
                            e.currentTarget.style.color = "var(--text-primary)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "var(--text-secondary)";
                        }}
                    >
                        Small
                    </button>

                    <button
                        className="font-semibold rounded-md transition-colors"
                        style={{
                            backgroundColor: "transparent",
                            color: "var(--text-secondary)",
                            border: "none",
                            height: "36px",
                            padding: "0 16px",
                            fontSize: "14px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-default)";
                            e.currentTarget.style.color = "var(--text-primary)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "var(--text-secondary)";
                        }}
                    >
                        Medium
                    </button>

                    <button
                        className="font-semibold rounded-md transition-colors flex items-center gap-2"
                        style={{
                            backgroundColor: "transparent",
                            color: "var(--text-secondary)",
                            border: "none",
                            height: "36px",
                            padding: "0 16px",
                            fontSize: "14px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-default)";
                            e.currentTarget.style.color = "var(--text-primary)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "var(--text-secondary)";
                        }}
                    >
                        Learn More
                        <ArrowRight size={20} weight="regular" />
                    </button>
                </div>
            </section>

            {/* Destructive Buttons */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Destructive Buttons
                </h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Used for destructive actions like delete, remove, or cancel operations.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                    <button
                        className="font-semibold rounded-md transition-colors"
                        style={{
                            backgroundColor: "var(--destructive-default)",
                            color: "var(--destructive-text)",
                            border: "none",
                            height: "30px",
                            padding: "0 12px",
                            fontSize: "12px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--destructive-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--destructive-default)";
                        }}
                    >
                        Delete
                    </button>

                    <button
                        className="font-semibold rounded-md transition-colors"
                        style={{
                            backgroundColor: "var(--destructive-default)",
                            color: "var(--destructive-text)",
                            border: "none",
                            height: "36px",
                            padding: "0 16px",
                            fontSize: "14px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--destructive-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--destructive-default)";
                        }}
                    >
                        Remove
                    </button>

                    <button
                        className="font-semibold rounded-md transition-colors flex items-center gap-2"
                        style={{
                            backgroundColor: "var(--destructive-default)",
                            color: "var(--destructive-text)",
                            border: "none",
                            height: "36px",
                            padding: "0 16px",
                            fontSize: "14px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--destructive-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--destructive-default)";
                        }}
                    >
                        <Trash size={20} weight="regular" />
                        Delete Item
                    </button>
                </div>
            </section>

            {/* Icon-only Buttons */}
            <section>
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Icon-only Buttons
                </h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Square buttons with just an icon. Always include a tooltip for accessibility.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                    <button
                        className="rounded-md transition-colors flex items-center justify-center"
                        style={{
                            backgroundColor: "var(--primary-default)",
                            color: "var(--primary-text)",
                            width: "30px",
                            height: "30px",
                            border: "none",
                            cursor: "pointer",
                        }}
                        title="Add"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary-default)";
                        }}
                    >
                        <Plus size={15} weight="regular" />
                    </button>

                    <button
                        className="rounded-md transition-colors flex items-center justify-center"
                        style={{
                            backgroundColor: "var(--primary-default)",
                            color: "var(--primary-text)",
                            width: "36px",
                            height: "36px",
                            border: "none",
                            cursor: "pointer",
                        }}
                        title="Add"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary-default)";
                        }}
                    >
                        <Plus size={20} weight="regular" />
                    </button>

                    <button
                        className="rounded-md transition-colors flex items-center justify-center"
                        style={{
                            backgroundColor: "var(--secondary-default)",
                            color: "var(--secondary-text)",
                            border: "1px solid var(--secondary-border)",
                            width: "36px",
                            height: "36px",
                            cursor: "pointer",
                        }}
                        title="Download"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-default)";
                        }}
                    >
                        <Download size={20} weight="regular" />
                    </button>

                    <button
                        className="rounded-md transition-colors flex items-center justify-center"
                        style={{
                            backgroundColor: "transparent",
                            color: "var(--text-secondary)",
                            border: "none",
                            width: "36px",
                            height: "36px",
                            cursor: "pointer",
                        }}
                        title="Delete"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--secondary-default)";
                            e.currentTarget.style.color = "var(--text-primary)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "var(--text-secondary)";
                        }}
                    >
                        <Trash size={20} weight="regular" />
                    </button>
                </div>
            </section>
        </div>
    );
}
