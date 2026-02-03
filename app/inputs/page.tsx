"use client";

import { useState } from "react";
import { MagnifyingGlass, Calendar, CaretDown, X, Check } from "@phosphor-icons/react";

export default function InputsPage() {
    const [searchValue, setSearchValue] = useState("");
    const [selectOpen, setSelectOpen] = useState<string | null>(null);
    const [selectSearchOpen, setSelectSearchOpen] = useState<string | null>(null);
    const [selectedValue, setSelectedValue] = useState<Record<string, string>>({
        "select-24": "Option 1",
        "select-30": "Option 2",
        "select-40": "Option 3",
        "select-search-24": "Apple",
        "select-search-30": "Banana",
        "select-search-40": "Cherry",
    });
    const [searchQuery, setSearchQuery] = useState("");
    const [dateValue, setDateValue] = useState("2026-02-02");

    const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];

    const filteredFruits = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-8 max-w-6xl">
            <h1 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>Inputs & Select Menus</h1>
            <p
                className="mb-8"
                style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--font-size-body-lg)",
                    maxWidth: "700px",
                }}
            >
                Form inputs and select menus in various sizes with consistent styling, hover states, and
                focus indicators. All components support both light and dark modes.
            </p>

            {/* Text Inputs */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>Text Inputs</h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Standard text inputs with three size variants: 24px, 30px, and 40px heights.
                </p>
                <div className="space-y-4" style={{ maxWidth: "400px" }}>
                    {/* 24px Input */}
                    <div>
                        <label
                            style={{
                                display: "block",
                                fontSize: "12px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Small (24px)
                        </label>
                        <input
                            type="text"
                            placeholder="Enter text..."
                            className="transition-all"
                            style={{
                                width: "100%",
                                height: "24px",
                                padding: "0 10px",
                                fontSize: "12px",
                                backgroundColor: "var(--bg-surface)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-default)",
                                borderRadius: "5px",
                                outline: "none",
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "var(--green-400)";
                                e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = "var(--border-default)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        />
                    </div>

                    {/* 30px Input */}
                    <div>
                        <label
                            style={{
                                display: "block",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Medium (30px)
                        </label>
                        <input
                            type="text"
                            placeholder="Enter text..."
                            className="transition-all"
                            style={{
                                width: "100%",
                                height: "30px",
                                padding: "0 12px",
                                fontSize: "13px",
                                backgroundColor: "var(--bg-surface)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-default)",
                                borderRadius: "5px",
                                outline: "none",
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "var(--green-400)";
                                e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = "var(--border-default)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        />
                    </div>

                    {/* 40px Input */}
                    <div>
                        <label
                            style={{
                                display: "block",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Large (40px)
                        </label>
                        <input
                            type="text"
                            placeholder="Enter text..."
                            className="transition-all"
                            style={{
                                width: "100%",
                                height: "40px",
                                padding: "0 14px",
                                fontSize: "14px",
                                backgroundColor: "var(--bg-surface)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-default)",
                                borderRadius: "5px",
                                outline: "none",
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "var(--green-400)";
                                e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = "var(--border-default)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Input with Icon */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>Inputs with Icons</h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Text inputs with leading or trailing icons for enhanced usability.
                </p>
                <div className="space-y-4" style={{ maxWidth: "400px" }}>
                    {/* Search Input - 30px */}
                    <div>
                        <label
                            style={{
                                display: "block",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Search (30px)
                        </label>
                        <div style={{ position: "relative" }}>
                            <MagnifyingGlass
                                size={16}
                                style={{
                                    position: "absolute",
                                    left: "12px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "var(--text-muted)",
                                    pointerEvents: "none",
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="transition-all"
                                style={{
                                    width: "100%",
                                    height: "30px",
                                    paddingLeft: "36px",
                                    paddingRight: searchValue ? "36px" : "12px",
                                    fontSize: "13px",
                                    backgroundColor: "var(--bg-surface)",
                                    color: "var(--text-primary)",
                                    border: "1px solid var(--border-default)",
                                    borderRadius: "5px",
                                    outline: "none",
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = "var(--green-400)";
                                    e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            />
                            {searchValue && (
                                <button
                                    onClick={() => setSearchValue("")}
                                    style={{
                                        position: "absolute",
                                        right: "8px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        padding: "4px",
                                        display: "flex",
                                        alignItems: "center",
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    <X size={14} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Search Input - 40px */}
                    <div>
                        <label
                            style={{
                                display: "block",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Search Large (40px)
                        </label>
                        <div style={{ position: "relative" }}>
                            <MagnifyingGlass
                                size={18}
                                style={{
                                    position: "absolute",
                                    left: "14px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "var(--text-muted)",
                                    pointerEvents: "none",
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="transition-all"
                                style={{
                                    width: "100%",
                                    height: "40px",
                                    paddingLeft: "42px",
                                    paddingRight: "14px",
                                    fontSize: "14px",
                                    backgroundColor: "var(--bg-surface)",
                                    color: "var(--text-primary)",
                                    border: "1px solid var(--border-default)",
                                    borderRadius: "5px",
                                    outline: "none",
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = "var(--green-400)";
                                    e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Select Menus */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>Select Menus</h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Custom select menus with dropdown functionality in all three sizes.
                </p>
                <div className="space-y-4" style={{ maxWidth: "400px" }}>
                    {/* 24px Select */}
                    <div style={{ position: "relative" }}>
                        <label
                            style={{
                                display: "block",
                                fontSize: "12px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Small Select (24px)
                        </label>
                        <button
                            onClick={() => setSelectOpen(selectOpen === "select-24" ? null : "select-24")}
                            className="transition-all"
                            style={{
                                width: "100%",
                                height: "24px",
                                padding: "0 10px",
                                fontSize: "12px",
                                backgroundColor: "var(--bg-surface)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-default)",
                                borderRadius: "5px",
                                outline: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                textAlign: "left",
                            }}
                            onMouseEnter={(e) => {
                                if (selectOpen !== "select-24") {
                                    e.currentTarget.style.borderColor = "var(--green-400)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectOpen !== "select-24") {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                }
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "var(--green-400)";
                                e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                            }}
                            onBlur={(e) => {
                                setTimeout(() => {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                    e.currentTarget.style.boxShadow = "none";
                                }, 200);
                            }}
                        >
                            <span>{selectedValue["select-24"]}</span>
                            <CaretDown size={12} />
                        </button>
                        {selectOpen === "select-24" && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "calc(100% + 4px)",
                                    left: 0,
                                    right: 0,
                                    backgroundColor: "var(--bg-surface)",
                                    border: "1px solid var(--border-default)",
                                    borderRadius: "5px",
                                    boxShadow: "var(--shadow-lg)",
                                    zIndex: 50,
                                    overflow: "hidden",
                                }}
                            >
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                            setSelectedValue({ ...selectedValue, "select-24": option });
                                            setSelectOpen(null);
                                        }}
                                        style={{
                                            width: "100%",
                                            padding: "6px 10px",
                                            fontSize: "12px",
                                            backgroundColor:
                                                selectedValue["select-24"] === option
                                                    ? "var(--primary-subtle-bg)"
                                                    : "transparent",
                                            color:
                                                selectedValue["select-24"] === option
                                                    ? "var(--primary-subtle-text)"
                                                    : "var(--text-primary)",
                                            border: "none",
                                            cursor: "pointer",
                                            textAlign: "left",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (selectedValue["select-24"] !== option) {
                                                e.currentTarget.style.backgroundColor =
                                                    "var(--bg-surface-secondary)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (selectedValue["select-24"] !== option) {
                                                e.currentTarget.style.backgroundColor = "transparent";
                                            }
                                        }}
                                    >
                                        <span>{option}</span>
                                        {selectedValue["select-24"] === option && (
                                            <Check size={12} weight="bold" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 30px Select */}
                    <div style={{ position: "relative" }}>
                        <label
                            style={{
                                display: "block",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Medium Select (30px)
                        </label>
                        <button
                            onClick={() => setSelectOpen(selectOpen === "select-30" ? null : "select-30")}
                            className="transition-all"
                            style={{
                                width: "100%",
                                height: "30px",
                                padding: "0 12px",
                                fontSize: "13px",
                                backgroundColor: "var(--bg-surface)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-default)",
                                borderRadius: "5px",
                                outline: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                textAlign: "left",
                            }}
                            onMouseEnter={(e) => {
                                if (selectOpen !== "select-30") {
                                    e.currentTarget.style.borderColor = "var(--green-400)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectOpen !== "select-30") {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                }
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "var(--green-400)";
                                e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                            }}
                            onBlur={(e) => {
                                setTimeout(() => {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                    e.currentTarget.style.boxShadow = "none";
                                }, 200);
                            }}
                        >
                            <span>{selectedValue["select-30"]}</span>
                            <CaretDown size={14} />
                        </button>
                        {selectOpen === "select-30" && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "calc(100% + 4px)",
                                    left: 0,
                                    right: 0,
                                    backgroundColor: "var(--bg-surface)",
                                    border: "1px solid var(--border-default)",
                                    borderRadius: "5px",
                                    boxShadow: "var(--shadow-lg)",
                                    zIndex: 50,
                                    overflow: "hidden",
                                }}
                            >
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                            setSelectedValue({ ...selectedValue, "select-30": option });
                                            setSelectOpen(null);
                                        }}
                                        style={{
                                            width: "100%",
                                            padding: "8px 12px",
                                            fontSize: "13px",
                                            backgroundColor:
                                                selectedValue["select-30"] === option
                                                    ? "var(--primary-subtle-bg)"
                                                    : "transparent",
                                            color:
                                                selectedValue["select-30"] === option
                                                    ? "var(--primary-subtle-text)"
                                                    : "var(--text-primary)",
                                            border: "none",
                                            cursor: "pointer",
                                            textAlign: "left",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (selectedValue["select-30"] !== option) {
                                                e.currentTarget.style.backgroundColor =
                                                    "var(--bg-surface-secondary)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (selectedValue["select-30"] !== option) {
                                                e.currentTarget.style.backgroundColor = "transparent";
                                            }
                                        }}
                                    >
                                        <span>{option}</span>
                                        {selectedValue["select-30"] === option && (
                                            <Check size={14} weight="bold" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 40px Select */}
                    <div style={{ position: "relative" }}>
                        <label
                            style={{
                                display: "block",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Large Select (40px)
                        </label>
                        <button
                            onClick={() => setSelectOpen(selectOpen === "select-40" ? null : "select-40")}
                            className="transition-all"
                            style={{
                                width: "100%",
                                height: "40px",
                                padding: "0 14px",
                                fontSize: "14px",
                                backgroundColor: "var(--bg-surface)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-default)",
                                borderRadius: "5px",
                                outline: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                textAlign: "left",
                            }}
                            onMouseEnter={(e) => {
                                if (selectOpen !== "select-40") {
                                    e.currentTarget.style.borderColor = "var(--green-400)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectOpen !== "select-40") {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                }
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "var(--green-400)";
                                e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                            }}
                            onBlur={(e) => {
                                setTimeout(() => {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                    e.currentTarget.style.boxShadow = "none";
                                }, 200);
                            }}
                        >
                            <span>{selectedValue["select-40"]}</span>
                            <CaretDown size={16} />
                        </button>
                        {selectOpen === "select-40" && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "calc(100% + 4px)",
                                    left: 0,
                                    right: 0,
                                    backgroundColor: "var(--bg-surface)",
                                    border: "1px solid var(--border-default)",
                                    borderRadius: "5px",
                                    boxShadow: "var(--shadow-lg)",
                                    zIndex: 50,
                                    overflow: "hidden",
                                }}
                            >
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                            setSelectedValue({ ...selectedValue, "select-40": option });
                                            setSelectOpen(null);
                                        }}
                                        style={{
                                            width: "100%",
                                            padding: "10px 14px",
                                            fontSize: "14px",
                                            backgroundColor:
                                                selectedValue["select-40"] === option
                                                    ? "var(--primary-subtle-bg)"
                                                    : "transparent",
                                            color:
                                                selectedValue["select-40"] === option
                                                    ? "var(--primary-subtle-text)"
                                                    : "var(--text-primary)",
                                            border: "none",
                                            cursor: "pointer",
                                            textAlign: "left",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (selectedValue["select-40"] !== option) {
                                                e.currentTarget.style.backgroundColor =
                                                    "var(--bg-surface-secondary)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (selectedValue["select-40"] !== option) {
                                                e.currentTarget.style.backgroundColor = "transparent";
                                            }
                                        }}
                                    >
                                        <span>{option}</span>
                                        {selectedValue["select-40"] === option && (
                                            <Check size={16} weight="bold" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Select with Search */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Select Menus with Search
                </h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Select menus with built-in search functionality for filtering options.
                </p>
                <div className="space-y-4" style={{ maxWidth: "400px" }}>
                    {/* 24px Select with Search */}
                    <div style={{ position: "relative" }}>
                        <label
                            style={{
                                display: "block",
                                fontSize: "12px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Small Searchable (24px)
                        </label>
                        <button
                            onClick={() =>
                                setSelectSearchOpen(
                                    selectSearchOpen === "select-search-24" ? null : "select-search-24"
                                )
                            }
                            className="transition-all"
                            style={{
                                width: "100%",
                                height: "24px",
                                padding: "0 10px",
                                fontSize: "12px",
                                backgroundColor: "var(--bg-surface)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-default)",
                                borderRadius: "5px",
                                outline: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                textAlign: "left",
                            }}
                            onMouseEnter={(e) => {
                                if (selectSearchOpen !== "select-search-24") {
                                    e.currentTarget.style.borderColor = "var(--green-400)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectSearchOpen !== "select-search-24") {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                }
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "var(--green-400)";
                                e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                            }}
                            onBlur={(e) => {
                                setTimeout(() => {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                    e.currentTarget.style.boxShadow = "none";
                                }, 200);
                            }}
                        >
                            <span>{selectedValue["select-search-24"]}</span>
                            <CaretDown size={12} />
                        </button>
                        {selectSearchOpen === "select-search-24" && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "calc(100% + 4px)",
                                    left: 0,
                                    right: 0,
                                    backgroundColor: "var(--bg-surface)",
                                    border: "1px solid var(--border-default)",
                                    borderRadius: "5px",
                                    boxShadow: "var(--shadow-lg)",
                                    zIndex: 50,
                                    overflow: "hidden",
                                }}
                            >
                                {/* Search Input */}
                                <div style={{ padding: "6px", borderBottom: "1px solid var(--border-default)" }}>
                                    <div style={{ position: "relative" }}>
                                        <MagnifyingGlass
                                            size={12}
                                            style={{
                                                position: "absolute",
                                                left: "8px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                color: "var(--text-muted)",
                                                pointerEvents: "none",
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            style={{
                                                width: "100%",
                                                height: "22px",
                                                paddingLeft: "26px",
                                                paddingRight: "8px",
                                                fontSize: "11px",
                                                backgroundColor: "var(--bg-surface-secondary)",
                                                color: "var(--text-primary)",
                                                border: "1px solid var(--border-default)",
                                                borderRadius: "4px",
                                                outline: "none",
                                            }}
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                    </div>
                                </div>
                                {/* Options */}
                                <div style={{ maxHeight: "150px", overflowY: "auto" }}>
                                    {filteredFruits.length === 0 ? (
                                        <div
                                            style={{
                                                padding: "8px 10px",
                                                fontSize: "11px",
                                                color: "var(--text-muted)",
                                                textAlign: "center",
                                            }}
                                        >
                                            No results found
                                        </div>
                                    ) : (
                                        filteredFruits.map((fruit) => (
                                            <button
                                                key={fruit}
                                                onClick={() => {
                                                    setSelectedValue({
                                                        ...selectedValue,
                                                        "select-search-24": fruit,
                                                    });
                                                    setSelectSearchOpen(null);
                                                    setSearchQuery("");
                                                }}
                                                style={{
                                                    width: "100%",
                                                    padding: "6px 10px",
                                                    fontSize: "12px",
                                                    backgroundColor:
                                                        selectedValue["select-search-24"] === fruit
                                                            ? "var(--primary-subtle-bg)"
                                                            : "transparent",
                                                    color:
                                                        selectedValue["select-search-24"] === fruit
                                                            ? "var(--primary-subtle-text)"
                                                            : "var(--text-primary)",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    textAlign: "left",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (selectedValue["select-search-24"] !== fruit) {
                                                        e.currentTarget.style.backgroundColor =
                                                            "var(--bg-surface-secondary)";
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (selectedValue["select-search-24"] !== fruit) {
                                                        e.currentTarget.style.backgroundColor = "transparent";
                                                    }
                                                }}
                                            >
                                                <span>{fruit}</span>
                                                {selectedValue["select-search-24"] === fruit && (
                                                    <Check size={12} weight="bold" />
                                                )}
                                            </button>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* 30px Select with Search */}
                    <div style={{ position: "relative" }}>
                        <label
                            style={{
                                display: "block",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Medium Searchable (30px)
                        </label>
                        <button
                            onClick={() =>
                                setSelectSearchOpen(
                                    selectSearchOpen === "select-search-30" ? null : "select-search-30"
                                )
                            }
                            className="transition-all"
                            style={{
                                width: "100%",
                                height: "30px",
                                padding: "0 12px",
                                fontSize: "13px",
                                backgroundColor: "var(--bg-surface)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-default)",
                                borderRadius: "5px",
                                outline: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                textAlign: "left",
                            }}
                            onMouseEnter={(e) => {
                                if (selectSearchOpen !== "select-search-30") {
                                    e.currentTarget.style.borderColor = "var(--green-400)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectSearchOpen !== "select-search-30") {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                }
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "var(--green-400)";
                                e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                            }}
                            onBlur={(e) => {
                                setTimeout(() => {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                    e.currentTarget.style.boxShadow = "none";
                                }, 200);
                            }}
                        >
                            <span>{selectedValue["select-search-30"]}</span>
                            <CaretDown size={14} />
                        </button>
                        {selectSearchOpen === "select-search-30" && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "calc(100% + 4px)",
                                    left: 0,
                                    right: 0,
                                    backgroundColor: "var(--bg-surface)",
                                    border: "1px solid var(--border-default)",
                                    borderRadius: "5px",
                                    boxShadow: "var(--shadow-lg)",
                                    zIndex: 50,
                                    overflow: "hidden",
                                }}
                            >
                                {/* Search Input */}
                                <div style={{ padding: "8px", borderBottom: "1px solid var(--border-default)" }}>
                                    <div style={{ position: "relative" }}>
                                        <MagnifyingGlass
                                            size={14}
                                            style={{
                                                position: "absolute",
                                                left: "10px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                color: "var(--text-muted)",
                                                pointerEvents: "none",
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            style={{
                                                width: "100%",
                                                height: "26px",
                                                paddingLeft: "32px",
                                                paddingRight: "10px",
                                                fontSize: "12px",
                                                backgroundColor: "var(--bg-surface-secondary)",
                                                color: "var(--text-primary)",
                                                border: "1px solid var(--border-default)",
                                                borderRadius: "4px",
                                                outline: "none",
                                            }}
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                    </div>
                                </div>
                                {/* Options */}
                                <div style={{ maxHeight: "180px", overflowY: "auto" }}>
                                    {filteredFruits.length === 0 ? (
                                        <div
                                            style={{
                                                padding: "10px 12px",
                                                fontSize: "12px",
                                                color: "var(--text-muted)",
                                                textAlign: "center",
                                            }}
                                        >
                                            No results found
                                        </div>
                                    ) : (
                                        filteredFruits.map((fruit) => (
                                            <button
                                                key={fruit}
                                                onClick={() => {
                                                    setSelectedValue({
                                                        ...selectedValue,
                                                        "select-search-30": fruit,
                                                    });
                                                    setSelectSearchOpen(null);
                                                    setSearchQuery("");
                                                }}
                                                style={{
                                                    width: "100%",
                                                    padding: "8px 12px",
                                                    fontSize: "13px",
                                                    backgroundColor:
                                                        selectedValue["select-search-30"] === fruit
                                                            ? "var(--primary-subtle-bg)"
                                                            : "transparent",
                                                    color:
                                                        selectedValue["select-search-30"] === fruit
                                                            ? "var(--primary-subtle-text)"
                                                            : "var(--text-primary)",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    textAlign: "left",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (selectedValue["select-search-30"] !== fruit) {
                                                        e.currentTarget.style.backgroundColor =
                                                            "var(--bg-surface-secondary)";
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (selectedValue["select-search-30"] !== fruit) {
                                                        e.currentTarget.style.backgroundColor = "transparent";
                                                    }
                                                }}
                                            >
                                                <span>{fruit}</span>
                                                {selectedValue["select-search-30"] === fruit && (
                                                    <Check size={14} weight="bold" />
                                                )}
                                            </button>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* 40px Select with Search */}
                    <div style={{ position: "relative" }}>
                        <label
                            style={{
                                display: "block",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Large Searchable (40px)
                        </label>
                        <button
                            onClick={() =>
                                setSelectSearchOpen(
                                    selectSearchOpen === "select-search-40" ? null : "select-search-40"
                                )
                            }
                            className="transition-all"
                            style={{
                                width: "100%",
                                height: "40px",
                                padding: "0 14px",
                                fontSize: "14px",
                                backgroundColor: "var(--bg-surface)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-default)",
                                borderRadius: "5px",
                                outline: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                textAlign: "left",
                            }}
                            onMouseEnter={(e) => {
                                if (selectSearchOpen !== "select-search-40") {
                                    e.currentTarget.style.borderColor = "var(--green-400)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectSearchOpen !== "select-search-40") {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                }
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "var(--green-400)";
                                e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                            }}
                            onBlur={(e) => {
                                setTimeout(() => {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                    e.currentTarget.style.boxShadow = "none";
                                }, 200);
                            }}
                        >
                            <span>{selectedValue["select-search-40"]}</span>
                            <CaretDown size={16} />
                        </button>
                        {selectSearchOpen === "select-search-40" && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "calc(100% + 4px)",
                                    left: 0,
                                    right: 0,
                                    backgroundColor: "var(--bg-surface)",
                                    border: "1px solid var(--border-default)",
                                    borderRadius: "5px",
                                    boxShadow: "var(--shadow-lg)",
                                    zIndex: 50,
                                    overflow: "hidden",
                                }}
                            >
                                {/* Search Input */}
                                <div style={{ padding: "10px", borderBottom: "1px solid var(--border-default)" }}>
                                    <div style={{ position: "relative" }}>
                                        <MagnifyingGlass
                                            size={16}
                                            style={{
                                                position: "absolute",
                                                left: "12px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                color: "var(--text-muted)",
                                                pointerEvents: "none",
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            style={{
                                                width: "100%",
                                                height: "32px",
                                                paddingLeft: "36px",
                                                paddingRight: "12px",
                                                fontSize: "13px",
                                                backgroundColor: "var(--bg-surface-secondary)",
                                                color: "var(--text-primary)",
                                                border: "1px solid var(--border-default)",
                                                borderRadius: "5px",
                                                outline: "none",
                                            }}
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                    </div>
                                </div>
                                {/* Options */}
                                <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                                    {filteredFruits.length === 0 ? (
                                        <div
                                            style={{
                                                padding: "12px 14px",
                                                fontSize: "13px",
                                                color: "var(--text-muted)",
                                                textAlign: "center",
                                            }}
                                        >
                                            No results found
                                        </div>
                                    ) : (
                                        filteredFruits.map((fruit) => (
                                            <button
                                                key={fruit}
                                                onClick={() => {
                                                    setSelectedValue({
                                                        ...selectedValue,
                                                        "select-search-40": fruit,
                                                    });
                                                    setSelectSearchOpen(null);
                                                    setSearchQuery("");
                                                }}
                                                style={{
                                                    width: "100%",
                                                    padding: "10px 14px",
                                                    fontSize: "14px",
                                                    backgroundColor:
                                                        selectedValue["select-search-40"] === fruit
                                                            ? "var(--primary-subtle-bg)"
                                                            : "transparent",
                                                    color:
                                                        selectedValue["select-search-40"] === fruit
                                                            ? "var(--primary-subtle-text)"
                                                            : "var(--text-primary)",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    textAlign: "left",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (selectedValue["select-search-40"] !== fruit) {
                                                        e.currentTarget.style.backgroundColor =
                                                            "var(--bg-surface-secondary)";
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (selectedValue["select-search-40"] !== fruit) {
                                                        e.currentTarget.style.backgroundColor = "transparent";
                                                    }
                                                }}
                                            >
                                                <span>{fruit}</span>
                                                {selectedValue["select-search-40"] === fruit && (
                                                    <Check size={16} weight="bold" />
                                                )}
                                            </button>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Date Pickers */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>Date Pickers</h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Date input fields with calendar icon for selecting dates.
                </p>
                <div className="space-y-4" style={{ maxWidth: "400px" }}>
                    {/* 24px Date Picker */}
                    <div>
                        <label
                            style={{
                                display: "block",
                                fontSize: "12px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Small Date (24px)
                        </label>
                        <div style={{ position: "relative" }}>
                            <Calendar
                                size={12}
                                style={{
                                    position: "absolute",
                                    left: "10px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "var(--text-muted)",
                                    pointerEvents: "none",
                                }}
                            />
                            <input
                                type="date"
                                value={dateValue}
                                onChange={(e) => setDateValue(e.target.value)}
                                className="transition-all"
                                style={{
                                    width: "100%",
                                    height: "24px",
                                    paddingLeft: "28px",
                                    paddingRight: "10px",
                                    fontSize: "12px",
                                    backgroundColor: "var(--bg-surface)",
                                    color: "var(--text-primary)",
                                    border: "1px solid var(--border-default)",
                                    borderRadius: "5px",
                                    outline: "none",
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = "var(--green-400)";
                                    e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            />
                        </div>
                    </div>

                    {/* 30px Date Picker */}
                    <div>
                        <label
                            style={{
                                display: "block",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Medium Date (30px)
                        </label>
                        <div style={{ position: "relative" }}>
                            <Calendar
                                size={14}
                                style={{
                                    position: "absolute",
                                    left: "12px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "var(--text-muted)",
                                    pointerEvents: "none",
                                }}
                            />
                            <input
                                type="date"
                                value={dateValue}
                                onChange={(e) => setDateValue(e.target.value)}
                                className="transition-all"
                                style={{
                                    width: "100%",
                                    height: "30px",
                                    paddingLeft: "34px",
                                    paddingRight: "12px",
                                    fontSize: "13px",
                                    backgroundColor: "var(--bg-surface)",
                                    color: "var(--text-primary)",
                                    border: "1px solid var(--border-default)",
                                    borderRadius: "5px",
                                    outline: "none",
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = "var(--green-400)";
                                    e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            />
                        </div>
                    </div>

                    {/* 40px Date Picker */}
                    <div>
                        <label
                            style={{
                                display: "block",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Large Date (40px)
                        </label>
                        <div style={{ position: "relative" }}>
                            <Calendar
                                size={16}
                                style={{
                                    position: "absolute",
                                    left: "14px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "var(--text-muted)",
                                    pointerEvents: "none",
                                }}
                            />
                            <input
                                type="date"
                                value={dateValue}
                                onChange={(e) => setDateValue(e.target.value)}
                                className="transition-all"
                                style={{
                                    width: "100%",
                                    height: "40px",
                                    paddingLeft: "40px",
                                    paddingRight: "14px",
                                    fontSize: "14px",
                                    backgroundColor: "var(--bg-surface)",
                                    color: "var(--text-primary)",
                                    border: "1px solid var(--border-default)",
                                    borderRadius: "5px",
                                    outline: "none",
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = "var(--green-400)";
                                    e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Input States */}
            <section>
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>Input States</h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Various input states including disabled, error, and success states.
                </p>
                <div className="space-y-4" style={{ maxWidth: "400px" }}>
                    {/* Disabled */}
                    <div>
                        <label
                            style={{
                                display: "block",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Disabled
                        </label>
                        <input
                            type="text"
                            placeholder="Disabled input"
                            disabled
                            style={{
                                width: "100%",
                                height: "30px",
                                padding: "0 12px",
                                fontSize: "13px",
                                backgroundColor: "var(--bg-surface-secondary)",
                                color: "var(--text-disabled)",
                                border: "1px solid var(--border-default)",
                                borderRadius: "5px",
                                outline: "none",
                                cursor: "not-allowed",
                                opacity: 0.6,
                            }}
                        />
                    </div>

                    {/* Error */}
                    <div>
                        <label
                            style={{
                                display: "block",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Error State
                        </label>
                        <input
                            type="text"
                            placeholder="Invalid input"
                            defaultValue="invalid@"
                            style={{
                                width: "100%",
                                height: "30px",
                                padding: "0 12px",
                                fontSize: "13px",
                                backgroundColor: "var(--bg-surface)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--error-500)",
                                borderRadius: "5px",
                                outline: "none",
                                boxShadow: "0 0 0 2px var(--error-100)",
                            }}
                        />
                        <p
                            style={{
                                fontSize: "11px",
                                color: "var(--error-500)",
                                marginTop: "4px",
                            }}
                        >
                            Please enter a valid email address
                        </p>
                    </div>

                    {/* Success */}
                    <div>
                        <label
                            style={{
                                display: "block",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                marginBottom: "4px",
                            }}
                        >
                            Success State
                        </label>
                        <input
                            type="text"
                            placeholder="Valid input"
                            defaultValue="user@example.com"
                            style={{
                                width: "100%",
                                height: "30px",
                                padding: "0 12px",
                                fontSize: "13px",
                                backgroundColor: "var(--bg-surface)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--green-400)",
                                borderRadius: "5px",
                                outline: "none",
                                boxShadow: "0 0 0 2px var(--green-100)",
                            }}
                        />
                        <p
                            style={{
                                fontSize: "11px",
                                color: "var(--green-600)",
                                marginTop: "4px",
                            }}
                        >
                            Email is valid
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
