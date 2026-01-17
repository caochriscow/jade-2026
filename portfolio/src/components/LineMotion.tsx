"use client"

import { motion, type Variants } from "motion/react"

const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i 
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "tween", duration: 0.4, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

export default function LineMotion() {
    return (
        <motion.svg
            viewBox="0 0 100 100"
            initial="hidden"
            className={"inset-0 w-full h-screen"}
            animate="visible"
            preserveAspectRatio={"xMidYMid slice"}
        >
            <defs>
                <linearGradient
                    id="lineGradient"
                    gradientUnits="userSpaceOnUse"
                    x1="130"
                    y1="0"
                    x2="40"
                    y2="30"
                >
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="0%" stopColor="#00d4ff" />
                </linearGradient>
            </defs>
            <defs>
                <linearGradient
                    id="lineGradienttwo"
                    gradientUnits="userSpaceOnUse"
                    x1="40"
                    y1="30"
                    x2="100"
                    y2="60"
                >
                    <stop offset="10%" stopColor="#00d4ff" />
                    <stop offset="60%" stopColor="#ff0088" />
                </linearGradient>
            </defs>
            <motion.line
                x1="130"
                y1="0"
                x2="40"
                y2="30"
                stroke="url(#lineGradient)"
                variants={draw}
                custom={0}
                style={shape}
            />
            <motion.line
                x1="40"
                y1="30"
                x2="100"
                y2="60"
                stroke="url(#lineGradienttwo)"
                variants={draw}
                custom={0.5}
                style={shape}
            />
            <motion.line
                x1="100"
                y1="60"
                x2="35"
                y2="100"
                stroke="#ff0088"
                custom={1}
                variants={draw}
                style={shape}
            />
        </motion.svg>
    )
}

/**
 * ==============   Styles   ================
 */

const shape: React.CSSProperties = {
    strokeWidth: 2,
    strokeLinecap: "round",
    fill: "transparent",
}
