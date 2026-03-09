import { useState, useEffect, useRef } from 'react';
import './ProjectDetail.css';

const ArchitectureDiagram = ({ steps }) => {
    const [activeStep, setActiveStep] = useState(null);
    const [animatedSteps, setAnimatedSteps] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const timeoutRef = useRef([]);

    const clearTimeouts = () => {
        timeoutRef.current.forEach(clearTimeout);
        timeoutRef.current = [];
    };

    const playAnimation = () => {
        clearTimeouts();
        setAnimatedSteps([]);
        setActiveStep(null);
        setIsPlaying(true);

        steps.forEach((step, i) => {
            const t = setTimeout(() => {
                setAnimatedSteps((prev) => [...prev, step.id]);
                setActiveStep(step);
                if (i === steps.length - 1) {
                    setTimeout(() => setIsPlaying(false), 500);
                }
            }, i * 550);
            timeoutRef.current.push(t);
        });
    };

    useEffect(() => {
        const t = setTimeout(playAnimation, 400);
        return () => {
            clearTimeout(t);
            clearTimeouts();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleStepClick = (step) => {
        if (!isPlaying) setActiveStep(activeStep?.id === step.id ? null : step);
    };

    /* Evenly space steps vertically in the SVG */
    const totalSteps = steps.length;
    const yStart = 8;
    const yEnd = 78;
    const yGap = totalSteps > 1 ? (yEnd - yStart) / (totalSteps - 1) : 0;

    return (
        <div className="arch-diagram">
            <svg viewBox="0 0 100 84" className="arch-svg">
                {/* Connection lines */}
                {steps.slice(0, -1).map((step, i) => {
                    const y1 = yStart + i * yGap + 4;
                    const y2 = yStart + (i + 1) * yGap - 3.5;
                    const isLit = animatedSteps.includes(step.id) && animatedSteps.includes(steps[i + 1].id);
                    return (
                        <line
                            key={`line-${i}`}
                            x1={50} y1={y1} x2={50} y2={y2}
                            className={`arch-line ${isLit ? 'arch-line--lit' : ''}`}
                        />
                    );
                })}

                {/* Chevron arrows */}
                {steps.slice(0, -1).map((step, i) => {
                    const y1 = yStart + i * yGap + 4;
                    const y2 = yStart + (i + 1) * yGap - 3.5;
                    const midY = (y1 + y2) / 2;
                    const isLit = animatedSteps.includes(step.id) && animatedSteps.includes(steps[i + 1].id);
                    return (
                        <path
                            key={`chev-${i}`}
                            d={`M48.8,${midY - 0.6} L50,${midY + 0.6} L51.2,${midY - 0.6}`}
                            className={`arch-chevron ${isLit ? 'arch-chevron--lit' : ''}`}
                        />
                    );
                })}

                {/* Step nodes */}
                {steps.map((step, i) => {
                    const y = yStart + i * yGap;
                    const isVisible = animatedSteps.includes(step.id);
                    const isActive = activeStep?.id === step.id;
                    return (
                        <g key={step.id} onClick={() => handleStepClick(step)} style={{ cursor: 'pointer' }}>
                            {isActive && (
                                <circle cx={50} cy={y} r="4.6"
                                    className="arch-node-ring" />
                            )}
                            <circle cx={50} cy={y}
                                r={isActive ? '3.6' : '3.2'}
                                className={`arch-node ${isVisible ? 'arch-node--visible' : ''} ${isActive ? 'arch-node--active' : ''}`}
                            />
                            <text x={50} y={y + 1} textAnchor="middle"
                                className={`arch-num ${isActive ? 'arch-num--active' : ''} ${isVisible ? 'arch-num--visible' : ''}`}>
                                {step.num}
                            </text>
                            <text x={57} y={y + 0.8}
                                className={`arch-label ${isVisible ? 'arch-label--visible' : ''}`}>
                                {step.label}
                            </text>
                        </g>
                    );
                })}
            </svg>

            {/* Replay button */}
            <div className="arch-replay-wrap">
                <button
                    onClick={playAnimation}
                    disabled={isPlaying}
                    className={`arch-replay-btn ${isPlaying ? 'arch-replay-btn--disabled' : ''}`}
                >
                    {isPlaying ? 'Playing...' : '↻ Replay animation'}
                </button>
            </div>

            {/* Detail panel */}
            <div className={`arch-detail-panel ${activeStep ? 'arch-detail-panel--active' : ''}`}>
                {activeStep ? (
                    <>
                        <div className="arch-detail-label">
                            Step {activeStep.num} — {activeStep.label}
                        </div>
                        <div className="arch-detail-text">{activeStep.detail}</div>
                    </>
                ) : (
                    <div className="arch-detail-placeholder">
                        Click any step to explore how it works
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArchitectureDiagram;