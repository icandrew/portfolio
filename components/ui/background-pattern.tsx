'use client';

import React, { CSSProperties, forwardRef, useEffect, useRef, useState } from 'react';
import { SpacingToken } from '@/types';

// Utility function for ref handling
function setRef<T>(ref: React.Ref<T> | undefined, value: T | null) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref && 'current' in ref) {
        (ref as React.MutableRefObject<T | null>).current = value;
    }
}

type MaskType = 'none' | 'cursor' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

interface BackgroundProps {
    position?: CSSProperties['position'];
    gradient?: {
        display?: boolean;
        opacity?: number;
    };
    dots?: {
        display?: boolean;
        opacity?: number;
        color?: string;
        size?: SpacingToken;
    };
    lines?: {
        display?: boolean;
        opacity?: number;
        size?: SpacingToken;
    };
    mask?: MaskType;
    className?: string;
    style?: React.CSSProperties;
    darkGradient?: boolean;  // Added new prop
}

const Background = forwardRef<HTMLDivElement, BackgroundProps>(
    ({ position = 'fixed', gradient = {}, dots = {}, lines = {}, mask = 'none', className, style, darkGradient }, forwardedRef) => {
        const dotsColor = dots.color ?? 'brand-on-background-weak';
        const dotsSize = dots.size ?? '16';

        const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
        const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
        const maskSize = 1200;
        const backgroundRef = useRef<HTMLDivElement>(null);
        let lastCall = 0;
        const lastCallRef = useRef<number>(0); // Add useRef for lastCall

        // Handle ref forwarding
        useEffect(() => {
            setRef(forwardedRef, backgroundRef.current);
        }, [forwardedRef]);

        // Handle cursor movement
        useEffect(() => {
            if (mask !== 'cursor') return;

            const handleMouseMove = (event: MouseEvent) => {
                const now = Date.now();
                if (now - lastCallRef.current < 16) return; // Use lastCallRef instead
                lastCallRef.current = now;

                if (backgroundRef.current) {
                    const rect = backgroundRef.current.getBoundingClientRect();
                    setCursorPosition({
                        x: event.clientX - rect.left,
                        y: event.clientY - rect.top,
                    });
                }
            };

            document.addEventListener('mousemove', handleMouseMove);
            return () => document.removeEventListener('mousemove', handleMouseMove);
        }, [mask]);

        // Handle smooth cursor animation
        useEffect(() => {
            if (mask !== 'cursor') return;

            let animationFrameId: number;
            const updateSmoothPosition = () => {
                setSmoothPosition((prev) => {
                    const dx = cursorPosition.x - prev.x;
                    const dy = cursorPosition.y - prev.y;
                    const easingFactor = 0.05;

                    return {
                        x: Math.round(prev.x + dx * easingFactor),
                        y: Math.round(prev.y + dy * easingFactor),
                    };
                });
                animationFrameId = requestAnimationFrame(updateSmoothPosition);
            };

            animationFrameId = requestAnimationFrame(updateSmoothPosition);
            return () => cancelAnimationFrame(animationFrameId);
        }, [cursorPosition, mask]);

        const commonStyles: CSSProperties = {
            position,
            top: '0',
            left: '0',
            zIndex: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            ...style,
        };

        const getMaskStyle = (): CSSProperties => {
            const maskGradient = (x: string, y: string) => 
                `radial-gradient(circle ${maskSize / 2}px at ${x} ${y}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`;

            const positions = {
                cursor: `${smoothPosition.x}px ${smoothPosition.y}px`,
                topLeft: '0% 0%',
                topRight: '100% 0%',
                bottomLeft: '0% 100%',
                bottomRight: '100% 100%',
            };

            if (mask === 'none') return { maskImage: 'none' };
            if (mask in positions) {
                return {
                    maskImage: maskGradient(positions[mask as keyof typeof positions], ''),
                    maskSize: '100% 100%',
                };
            }
            return {};
        };

        return (
            <>
                {darkGradient && (
                    <div className="pointer-events-none fixed inset-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
                        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
                    </div>
                )}
                {gradient.display && (
                    <div
                        ref={backgroundRef}
                        className={className}
                        style={{
                            ...commonStyles,
                            opacity: gradient.opacity,
                            background: `
                                radial-gradient(100% 100% at 49.99% 0%, transparent 0%, hsl(var(--background)) 100%),
                                radial-gradient(87.4% 84.04% at 6.82% 16.24%, hsl(var(--primary) / 0.1) 0%, transparent 100%),
                                radial-gradient(217.89% 126.62% at 48.04% 0%, hsl(var(--accent) / 0.1) 0%, transparent 100%)
                            `,
                            ...getMaskStyle(),
                        }}
                    />
                )}
                {dots.display && (
                    <div
                        ref={backgroundRef}
                        className={className}
                        style={{
                            ...commonStyles,
                            opacity: dots.opacity,
                            backgroundImage: `radial-gradient(var(--${dotsColor}) 1px, var(--static-transparent) 1px)`,
                            backgroundSize: `var(--static-space-${dotsSize}) var(--static-space-${dotsSize})`,
                            ...getMaskStyle(),
                        }}
                    />
                )}
                {lines.display && (
                    <div
                        ref={backgroundRef}
                        className={className}
                        style={{
                            ...commonStyles,
                            opacity: lines.opacity,
                            backgroundImage: `repeating-linear-gradient(45deg, var(--brand-on-background-weak) 0, var(--brand-on-background-weak) 1px, var(--static-transparent) 1px, var(--static-transparent) ${lines.size})`,
                            ...getMaskStyle(),
                        }}
                    />
                )}
            </>
        );
    }
);

Background.displayName = 'Background';
export { Background };