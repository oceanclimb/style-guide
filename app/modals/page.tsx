"use client";

import { useState, useEffect } from "react";
import { X, Check } from "@phosphor-icons/react";

type ModalSize = "small" | "medium" | "large" | "huge" | "destructive" | null;

export default function ModalsPage() {
    const [openModal, setOpenModal] = useState<ModalSize>(null);
    const [selectedRadio, setSelectedRadio] = useState("selected");
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: true,
        checkbox2: true,
        checkbox3: false,
    });
    const [selectOpen, setSelectOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select Option");
    const [datasetName] = useState("Customer Analytics Q4 2025");

    const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpenModal(null);
            }
        };

        if (openModal) {
            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }
    }, [openModal]);

    const handleOverlayClick = () => {
        setOpenModal(null);
    };

    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const getModalWidth = (size: ModalSize) => {
        switch (size) {
            case "small":
                return "400px";
            case "medium":
                return "700px";
            case "large":
                return "1000px";
            case "huge":
                return "95%";
            case "destructive":
                return "500px";
            default:
                return "400px";
        }
    };

    const renderModalBody = () => (
        <div style={{ marginBottom: "20px" }}>
            <p style={{ color: "var(--text-primary)", marginBottom: "10px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <p style={{ color: "var(--text-primary)", marginBottom: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>

            {/* Radio Group */}
            <div style={{ marginBottom: "20px" }}>
                <label
                    style={{
                        display: "block",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: "8px",
                    }}
                >
                    Group
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {["selected", "deselected", "deselected2"].map((value, index) => (
                        <label
                            key={value}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                cursor: "pointer",
                            }}
                        >
                            <input
                                type="radio"
                                name="radio-group"
                                checked={selectedRadio === value}
                                onChange={() => setSelectedRadio(value)}
                                style={{
                                    width: "16px",
                                    height: "16px",
                                    cursor: "pointer",
                                    accentColor: "var(--primary-default)",
                                }}
                            />
                            <span style={{ fontSize: "14px", color: "var(--text-primary)" }}>
                                {index === 0 ? "Selected" : "Deselected"}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Checkbox Group */}
            <div style={{ marginBottom: "20px" }}>
                <label
                    style={{
                        display: "block",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: "8px",
                    }}
                >
                    Group
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {Object.entries(checkboxes).map(([key, value]) => (
                        <label
                            key={key}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                cursor: "pointer",
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={value}
                                onChange={() =>
                                    setCheckboxes({ ...checkboxes, [key]: !value })
                                }
                                style={{
                                    width: "16px",
                                    height: "16px",
                                    cursor: "pointer",
                                    accentColor: "var(--primary-default)",
                                }}
                            />
                            <span style={{ fontSize: "14px", color: "var(--text-primary)" }}>
                                Checkbox
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Select Menu - only show in medium and large modals */}
            {(openModal === "medium" || openModal === "large" || openModal === "huge") && (
                <div style={{ marginBottom: "20px" }}>
                    <label
                        style={{
                            display: "block",
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "var(--text-secondary)",
                            marginBottom: "8px",
                        }}
                    >
                        Choose an option
                    </label>
                    <div style={{ position: "relative" }}>
                        <button
                            onClick={() => setSelectOpen(!selectOpen)}
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
                                if (!selectOpen) {
                                    e.currentTarget.style.borderColor = "var(--green-400)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!selectOpen) {
                                    e.currentTarget.style.borderColor = "var(--border-default)";
                                }
                            }}
                        >
                            <span>{selectedOption}</span>
                            <span
                                style={{
                                    transform: selectOpen ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "transform 0.2s",
                                }}
                            >
                                ▼
                            </span>
                        </button>
                        {selectOpen && (
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
                                            setSelectedOption(option);
                                            setSelectOpen(false);
                                        }}
                                        style={{
                                            width: "100%",
                                            padding: "8px 12px",
                                            fontSize: "13px",
                                            backgroundColor:
                                                selectedOption === option
                                                    ? "var(--primary-subtle-bg)"
                                                    : "transparent",
                                            color:
                                                selectedOption === option
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
                                            if (selectedOption !== option) {
                                                e.currentTarget.style.backgroundColor =
                                                    "var(--bg-surface-secondary)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (selectedOption !== option) {
                                                e.currentTarget.style.backgroundColor =
                                                    "transparent";
                                            }
                                        }}
                                    >
                                        <span>{option}</span>
                                        {selectedOption === option && (
                                            <Check size={14} weight="bold" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );

    const renderModalButtons = () => (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "10px",
                height: "60px",
                padding: "0 20px",
                borderTop: "1px solid var(--border-default)",
            }}
        >
            <button
                onClick={() => setOpenModal(null)}
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
                Cancel
            </button>
            <button
                onClick={() => setOpenModal(null)}
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
                Save
            </button>
        </div>
    );

    return (
        <div className="p-8 max-w-6xl">
            <h1 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>Modals</h1>
            <p
                className="mb-8"
                style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--font-size-body-lg)",
                }}
            >
                Choose from a variety of modal sizes. Need to close one? You've got options: click the X button, click the background, or hit Escape.
            </p>

            {/* Modal Trigger Buttons */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Modal Sizes
                </h2>
                <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body)" }}
                >
                    Click any button below to open a modal of that size.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => setOpenModal("small")}
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
                        Small Modal
                    </button>

                    <button
                        onClick={() => setOpenModal("medium")}
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
                        Medium Modal
                    </button>

                    <button
                        onClick={() => setOpenModal("large")}
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
                        Large Modal
                    </button>

                    <button
                        onClick={() => setOpenModal("huge")}
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
                        Huge Modal
                    </button>

                    <button
                        onClick={() => setOpenModal("destructive")}
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
                        Destructive Action
                    </button>
                </div>
            </section>

            {/* Modal Overlay */}
            {openModal && (
                <div
                    onClick={handleOverlayClick}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000,
                        padding: "20px",
                    }}
                >
                    {/* Modal Container */}
                    <div
                        onClick={handleModalClick}
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            borderRadius: "10px",
                            boxShadow: "var(--shadow-xl)",
                            width: "100%",
                            maxWidth: getModalWidth(openModal),
                            maxHeight: "90vh",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            position: "relative",
                        }}
                    >
                        {/* Modal Header */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                height: "60px",
                                padding: "0 20px",
                                borderBottom: "1px solid var(--border-default)",
                                flexShrink: 0,
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    color: "var(--text-primary)",
                                    margin: 0,
                                }}
                            >
                                {openModal === "destructive"
                                    ? "Permanent Data"
                                    : openModal.charAt(0).toUpperCase() + openModal.slice(1)}
                            </h3>
                            <button
                                onClick={() => setOpenModal(null)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "4px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "4px",
                                    transition: "background-color 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                        "var(--bg-surface-secondary)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                }}
                                aria-label="Close modal"
                            >
                                <X size={20} style={{ color: "var(--text-secondary)" }} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div
                            style={{
                                padding: "20px",
                                overflowY: "auto",
                                flex: 1,
                            }}
                        >
                            {openModal === "destructive" ? (
                                <p
                                    style={{
                                        color: "var(--text-primary)",
                                        marginBottom: "0",
                                        lineHeight: "1.6",
                                    }}
                                >
                                    You are about to delete{" "}
                                    <strong style={{ color: "var(--text-primary)" }}>
                                        {datasetName}
                                    </strong>
                                    . This action cannot be undone. Once confirmed, this data will be
                                    wiped from our servers immediately and forever. Neither your admin
                                    nor our support team will be able to recover this data.
                                </p>
                            ) : (
                                renderModalBody()
                            )}
                        </div>

                        {/* Modal Buttons */}
                        {openModal === "destructive" ? (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    gap: "10px",
                                    height: "60px",
                                    padding: "0 20px",
                                    borderTop: "1px solid var(--border-default)",
                                    flexShrink: 0,
                                }}
                            >
                                <button
                                    onClick={() => setOpenModal(null)}
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
                                        e.currentTarget.style.backgroundColor =
                                            "var(--secondary-hover)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "var(--secondary-default)";
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setOpenModal(null)}
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
                                        e.currentTarget.style.backgroundColor =
                                            "var(--destructive-hover)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "var(--destructive-default)";
                                    }}
                                >
                                    Yes, Delete Forever
                                </button>
                            </div>
                        ) : (
                            renderModalButtons()
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
