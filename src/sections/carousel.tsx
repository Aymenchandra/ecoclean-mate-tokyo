import { useState, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

const SLIDES = [
  { img: "/assets/history-works/20200806_212925.webp" },
  { img: "/assets/history-works/img_concept01.webp" },
  { img: "/assets/history-works/img_concept02.webp" },
  { img: "/assets/history-works/img_menu01.webp" },
  { img: "/assets/history-works/img_menu02.webp" },
  { img: "/assets/history-works/img_menu03.webp" },
  { img: "/assets/history-works/img_menu04.webp" },
  { img: "/assets/history-works/img_menu05.webp" },
  { img: "/assets/history-works/img_menu06.webp" },
  { img: "/assets/history-works/img_menu09.webp" },
  { img: "/assets/history-works/img_menu10.webp" },
  { img: "/assets/history-works/img_menu11.webp" },
  { img: "/assets/history-works/top_01sp.webp" },
  { img: "/assets/history-works/topsec02_01.webp" },
  { img: "/assets/history-works/topsec02_02.webp" },
  { img: "/assets/history-works/topsec02_03.webp" },
];

// 5 positions: far left, left, center, right, far right
const POSITIONS = [
  { translateX: -440, translateZ: -350, rotateY: 35, scale: 0.55, opacity: 0.4, zIndex: 1 },
  { translateX: -220, translateZ: -180, rotateY: 18, scale: 0.75, opacity: 0.7, zIndex: 2 },
  { translateX: 0, translateZ: 0, rotateY: 0, scale: 1.05, opacity: 1.0, zIndex: 5 },
  { translateX: 220, translateZ: -180, rotateY: -18, scale: 0.75, opacity: 0.7, zIndex: 2 },
  { translateX: 440, translateZ: -350, rotateY: -35, scale: 0.55, opacity: 0.4, zIndex: 1 },
];

function getPosition(index: number, active: number, total: number) {
  const diff = ((index - active) % total + total) % total;
  const centered = diff > Math.floor(total / 2) ? diff - total : diff;
  const posIdx = centered + 2; // -2,-1,0,1,2 → maps to 0,1,2,3,4
  if (posIdx < 0 || posIdx >= POSITIONS.length) return null;
  return POSITIONS[posIdx];
}

const Carousel = memo(function Carousel() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const total = SLIDES.length;

  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);
  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);
  const goToSlide = useCallback((index: number) => setActive(index), []);

  return (
    <>
      <style>{`
        .carousel-root {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(160deg, #0f0c1a 0%, #1a1230 50%, #0d1a2a 100%);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 40px;
          position: relative;
          overflow: hidden;
        }

        .carousel-root::before {
          content: '';
          position: absolute;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%);
          top: -250px;
          left: -200px;
          pointer-events: none;
          transform: translateZ(0);
        }

        .carousel-root::after {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(234,88,12,0.05) 0%, transparent 70%);
          bottom: -150px;
          right: -150px;
          pointer-events: none;
          transform: translateZ(0);
        }

        .carousel-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 600;
          color: #f5f0ff;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
          text-align: center;
        }

        .carousel-title-gradient {
          background: linear-gradient(135deg, #f97316, #ea580c, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .carousel-subtitle {
          font-size: 14px;
          font-weight: 300;
          color: rgba(251,146,60,0.55);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 64px;
          text-align: center;
        }

        .scene {
          perspective: 1200px;
          width: 100%;
          max-width: 1100px;
          height: 480px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-wrapper {
          position: absolute;
          width: 260px;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
                      opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          cursor: pointer;
          will-change: transform, opacity;
        }

        .card {
          width: 260px;
          border-radius: 20px;
          overflow: hidden;
          background: #1c1530;
          border: 1px solid rgba(249,115,22,0.18);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          transition: border-color 0.4s;
          position: relative;
          transform: translateZ(0);
        }

        .card-wrapper.is-active .card {
          border-color: rgba(249,115,22,0.5);
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
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(26, 18, 48, 0.85);
          border: 1px solid rgba(249,115,22,0.3);
          color: rgba(251,146,60,0.9);
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 20;
          user-select: none;
        }

        .nav-btn:hover {
          background: rgba(249,115,22,0.25);
          border-color: rgba(249,115,22,0.6);
          color: #f97316;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 0 30px rgba(249,115,22,0.3);
        }

        .nav-btn:active {
          transform: translateY(-50%) scale(0.95);
        }

        .nav-btn.prev { left: 20px; }
        .nav-btn.next { right: 20px; }

        .pagination {
          display: flex;
          gap: 10px;
          margin-top: 48px;
          align-items: center;
        }

        .dot {
          width: 48px;
          height: 48px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .dot::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(249,115,22,0.25);
          border: 1px solid rgba(249,115,22,0.15);
          transition: all 0.3s;
        }

        .dot:hover::before {
          background: rgba(249,115,22,0.5);
        }

        .dot.is-active::before {
          width: 28px;
          border-radius: 4px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          border-color: transparent;
          box-shadow: 0 0 12px rgba(249,115,22,0.5);
        }

        .nav-hint {
          color: rgba(255,255,255,0.3);
          font-size: 12px;
          margin-top: 32px;
          letter-spacing: 0.05em;
        }

        .nav-hint span {
          color: rgba(249,115,22,0.6);
        }

        @media (max-width: 1024px) {
          .scene {
            height: 420px;
            max-width: 900px;
          }
          
          .card-wrapper {
            width: 220px;
          }
          
          .card {
            width: 220px;
          }
          
          .nav-btn.prev { left: 10px; }
          .nav-btn.next { right: 10px; }
        }

        @media (max-width: 768px) {
          .scene {
            height: 380px;
            max-width: 100%;
          }
          
          .card-wrapper {
            width: 180px;
          }
          
          .card {
            width: 180px;
            border-radius: 16px;
          }
          
          .nav-btn {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .carousel-root {
            padding: 40px 16px;
          }
          
          .scene {
            height: 340px;
          }
          
          .card-wrapper {
            width: 140px;
          }
          
          .card {
            width: 140px;
          }
        }
      `}</style>
      <div className="carousel-root">
        {/* Section header */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs rounded-full px-4 py-1.5 mb-4">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-orange-500"></span>
            </span>
            {t("carousel.badge")}
          </span>
        </div>

        <h2 className="carousel-title">
          <span className="carousel-title-gradient">{t("carousel.title")}</span>
        </h2>
        <p className="carousel-subtitle">{t("carousel.subtitle")}</p>

        <div style={{ position: "relative", display: "flex", alignItems: "center", width: "100%", maxWidth: "1200px" }}>
          {/* Previous button */}
          <button className="nav-btn prev" onClick={prev} aria-label={t("carousel.prev")}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

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
                  onClick={() => goToSlide(i)}
                >
                  <div className="card">
                    <img src={slide.img} alt={t("carousel.imageAlt", { index: i + 1 })} loading="lazy" decoding="async" width="260" height="347" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next button */}
          <button className="nav-btn next" onClick={next} aria-label={t("carousel.next")}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div className="pagination">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`dot${i === active ? " is-active" : ""}`}
              onClick={() => goToSlide(i)}
              aria-label={t("carousel.goToSlide", { slide: i + 1 })}
            />
          ))}
        </div>

        {/* Navigation hint */}
        <p className="nav-hint">
          {t("carousel.navHint")}
        </p>
      </div>
    </>
  );
});

export default Carousel;