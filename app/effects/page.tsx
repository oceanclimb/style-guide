"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "@phosphor-icons/react";

interface EffectCardProps {
    name: string;
    className: string;
    delay?: number;
}

function EffectCard({ name, className, delay = 0 }: EffectCardProps) {
    const [copied, setCopied] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [delay]);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(className);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            ref={cardRef}
            className={`effect-card ${isVisible ? "visible" : ""}`}
            style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-default)",
                borderRadius: "10px",
                padding: "24px",
                position: "relative",
                minHeight: "140px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
        >
            {/* Copy Button - Only visible on hover */}
            <button
                onClick={handleCopy}
                className="copy-button"
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    width: "32px",
                    height: "32px",
                    borderRadius: "5px",
                    border: "1px solid var(--border-default)",
                    backgroundColor: "var(--bg-surface-secondary)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    opacity: 0,
                }}
                aria-label="Copy class name"
            >
                {copied ? (
                    <Check size={16} style={{ color: "var(--primary-default)" }} />
                ) : (
                    <Copy size={16} style={{ color: "var(--text-secondary)" }} />
                )}
            </button>

            {/* Effect Name - This element will animate */}
            <div
                className={className}
                style={{
                    fontSize: "var(--font-size-body)",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    textAlign: "center",
                }}
            >
                {name}
            </div>
        </div>
    );
}

export default function EffectsPage() {
    const fadeEffects = [
        { name: "Fade In", className: "animate-fade-in" },
        { name: "Fade Out", className: "animate-fade-out" },
        { name: "Fade In Up", className: "animate-fade-in-up" },
        { name: "Fade In Down", className: "animate-fade-in-down" },
        { name: "Fade In Left", className: "animate-fade-in-left" },
        { name: "Fade In Right", className: "animate-fade-in-right" },
        { name: "Fade In Scale", className: "animate-fade-in-scale" },
    ];

    const scaleEffects = [
        { name: "Scale Up", className: "animate-scale-up" },
        { name: "Scale Down", className: "animate-scale-down" },
        { name: "Zoom In", className: "animate-zoom-in" },
        { name: "Zoom Out", className: "animate-zoom-out" },
        { name: "Pulse", className: "animate-pulse-scale" },
    ];

    const slideEffects = [
        { name: "Slide In Up", className: "animate-slide-in-up" },
        { name: "Slide In Down", className: "animate-slide-in-down" },
        { name: "Slide In Left", className: "animate-slide-in-left" },
        { name: "Slide In Right", className: "animate-slide-in-right" },
        { name: "Slide Out Up", className: "animate-slide-out-up" },
        { name: "Slide Out Down", className: "animate-slide-out-down" },
        { name: "Slide Fade In", className: "animate-slide-fade-in" },
    ];

    const rotationEffects = [
        { name: "Flip Horizontal", className: "animate-flip-horizontal" },
        { name: "Flip Vertical", className: "animate-flip-vertical" },
        { name: "Rotate In", className: "animate-rotate-in" },
        { name: "Rotate Out", className: "animate-rotate-out" },
        { name: "Spin", className: "animate-spin-custom" },
    ];

    const blurEffects = [
        { name: "Blur In", className: "animate-blur-in" },
        { name: "Blur Out", className: "animate-blur-out" },
    ];

    return (
        <div className="p-8">
            <h1 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>Effects</h1>
            <p
                className="mb-12"
                style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--font-size-body-lg)",
                }}
            >
                A comprehensive collection of animation effects for creating engaging user experiences.
            </p>

            {/* Fade Variations */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "20px" }}>
                    Fade Variations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {fadeEffects.map((effect, index) => (
                        <EffectCard
                            key={effect.className}
                            name={effect.name}
                            className={effect.className}
                            delay={index * 50}
                        />
                    ))}
                </div>
            </section>

            {/* Scale Effects */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "20px" }}>
                    Scale Effects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {scaleEffects.map((effect, index) => (
                        <EffectCard
                            key={effect.className}
                            name={effect.name}
                            className={effect.className}
                            delay={index * 50}
                        />
                    ))}
                </div>
            </section>

            {/* Slide Effects */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "20px" }}>
                    Slide Effects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {slideEffects.map((effect, index) => (
                        <EffectCard
                            key={effect.className}
                            name={effect.name}
                            className={effect.className}
                            delay={index * 50}
                        />
                    ))}
                </div>
            </section>

            {/* Rotation */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "20px" }}>
                    Rotation
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {rotationEffects.map((effect, index) => (
                        <EffectCard
                            key={effect.className}
                            name={effect.name}
                            className={effect.className}
                            delay={index * 50}
                        />
                    ))}
                </div>
            </section>

            {/* Blur */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "20px" }}>
                    Blur
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {blurEffects.map((effect, index) => (
                        <EffectCard
                            key={effect.className}
                            name={effect.name}
                            className={effect.className}
                            delay={index * 50}
                        />
                    ))}
                </div>
            </section>

        </div>
    );
}

