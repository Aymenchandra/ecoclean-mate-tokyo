import { useState, useCallback } from "react";

const SLIDES = [
    {
        img: "https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450",
        title: "Mountain Retreat",
        role: "Landscape Design",
        desc: "Serene alpine vistas crafted for the modern explorer.",
    },
    {
        img: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450",
        title: "Ocean Horizon",
        role: "Marine Photography",
        desc: "Where endless blue meets the edge of the world.",
    },
    {
        img: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450",
        title: "Urban Pulse",
        role: "City Architecture",
        desc: "Steel and glass shaping tomorrow's skyline.",
    },
    {
        img: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450",
        title: "Forest Canopy",
        role: "Nature Expedition",
        desc: "Ancient trees whispering stories of centuries past.",
    },
    {
        img: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450",
        title: "Desert Dunes",
        role: "Arid Landscapes",
        desc: "Golden waves of sand sculpted by ancient winds.",
    },
];

const POSITIONS = [
    { rotateY: -42, translateZ: -180, translateX: -260, scale: 0.82, opacity: 0.7, zIndex: 1 },
    { rotateY: 0, translateZ: 0, translateX: 0, scale: 1.00, opacity: 1.0, zIndex: 3 },
    { rotateY: 42, translateZ: -180, translateX: 260, scale: 0.82, opacity: 0.7, zIndex: 1 },
];

function getPosition(index, active, total) {
    const diff = ((index - active) % total + total) % total;
    const centered = diff > total / 2 ? diff - total : diff;
    const posIdx = centered + 1; // map -1,0,1 → 0,1,2
    if (posIdx < 0 || posIdx >= POSITIONS.length) return null;
    return POSITIONS[posIdx];
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

  .carousel-root {
    font-family: 'DM Sans', sans-serif;
    background: linear-gradient(160deg, #0f0c1a 0%, #1a1230 50%, #0d1a2a 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    position: relative;
    overflow: hidden;
  }

  .carousel-root::before {
    content: '';
    position: absolute;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99,51,190,0.18) 0%, transparent 70%);
    top: -200px;
    left: -150px;
    pointer-events: none;
  }

  .carousel-root::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(30,120,200,0.14) 0%, transparent 70%);
    bottom: -100px;
    right: -100px;
    pointer-events: none;
  }

  .carousel-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    color: #f5f0ff;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
    text-align: center;
  }

  .carousel-subtitle {
    font-size: 14px;
    font-weight: 300;
    color: rgba(200,180,255,0.55);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 64px;
    text-align: center;
  }

  .scene {
    perspective: 1100px;
    width: 100%;
    max-width: 860px;
    height: 420px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-wrapper {
    position: absolute;
    width: 280px;
    transition: transform 0.55s cubic-bezier(0.45,0.05,0.25,1),
                opacity   0.55s cubic-bezier(0.45,0.05,0.25,1);
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .card {
    width: 280px;
    border-radius: 18px;
    overflow: hidden;
    background: #1c1530;
    border: 1px solid rgba(140,100,255,0.18);
    box-shadow: 0 20px 60px rgba(0,0,0,0.55);
    transition: border-color 0.4s;
  }

  .card-wrapper.is-active .card {
    border-color: rgba(140,100,255,0.5);
    box-shadow: 0 24px 80px rgba(80,40,200,0.35);
  }

  .card img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    display: block;
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(140,100,255,0.25);
    color: rgba(200,180,255,0.85);
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
    z-index: 10;
    user-select: none;
  }

  .nav-btn:hover {
    background: rgba(120,80,240,0.22);
    border-color: rgba(140,100,255,0.5);
    transform: translateY(-50%) scale(1.08);
  }

  .nav-btn:active {
    transform: translateY(-50%) scale(0.96);
  }

  .nav-btn.prev { left: -28px; }
  .nav-btn.next { right: -28px; }

  .pagination {
    display: flex;
    gap: 8px;
    margin-top: 52px;
    align-items: center;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(140,100,255,0.28);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: width 0.3s, background 0.3s, border-radius 0.3s;
  }

  .dot.is-active {
    width: 22px;
    border-radius: 3px;
    background: rgba(160,110,255,0.85);
  }
`;

export default function Carousel() {
    const [active, setActive] = useState(0);
    const total = SLIDES.length;

    const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);
    const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);

    return (
        <>
            <style>{css}</style>
            <div className="carousel-root">
                <h2 className="carousel-title">Curated Journeys</h2>
                <p className="carousel-subtitle">A world through the lens</p>

                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                    <button className="nav-btn prev" onClick={prev} aria-label="Previous">&#8592;</button>

                    <div className="scene">
                        {SLIDES.map((slide, i) => {
                            const pos = getPosition(i, active, total);
                            if (!pos) return null;
                            const isActive = i === active;

                            const style = {
                                transform: `translateX(${pos.translateX}px) translateZ(${pos.translateZ}px) rotateY(${pos.rotateY}deg) scale(${pos.scale})`,
                                opacity: pos.opacity,
                                zIndex: pos.zIndex,
                            };

                            return (
                                <div
                                    key={i}
                                    className={`card-wrapper${isActive ? " is-active" : ""}`}
                                    style={style}
                                    onClick={() => setActive(i)}
                                >
                                    <div className="card">
                                        <img src={slide.img} alt={slide.title} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <button className="nav-btn next" onClick={next} aria-label="Next">&#8594;</button>
                </div>

                <div className="pagination">
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            className={`dot${i === active ? " is-active" : ""}`}
                            onClick={() => setActive(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
