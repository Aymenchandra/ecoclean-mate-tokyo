import { useState } from "react";
import cleaning from "/assets/history-works/20200806_212925.jpg";
import img_concept01 from "/assets/history-works/img_concept01.jpg";
import img_concept02 from "/assets/history-works/img_concept02.jpg";
import img_menu01 from "/assets/history-works/img_menu01.jpg";
import img_menu02 from "/assets/history-works/img_menu02.jpg";
import img_menu03 from "/assets/history-works/img_menu03.jpg";
import img_menu04 from "/assets/history-works/img_menu04.jpg";
import img_menu05 from "/assets/history-works/img_menu05.jpg";
import img_menu06 from "/assets/history-works/img_menu06.jpg";
import img_menu09 from "/assets/history-works/img_menu09.jpg";
import img_menu10 from "/assets/history-works/img_menu10.jpg";
import img_menu11 from "/assets/history-works/img_menu11.jpg";
import top_0sp from "/assets/history-works/top_01sp.jpg";
import topsec02_01 from "/assets/history-works/topsec02_01.jpg";
import topsec02_02 from "/assets/history-works/topsec02_02.jpg";
import topsec02_03 from "/assets/history-works/topsec02_03.jpg";

const SLIDES = [
  {
    img: cleaning,
  },
  {
    img: img_concept01,
  },
  {
    img: img_concept02,
  },
  {
    img: img_menu01,
  },
  {
    img: img_menu02,
  },
  {
    img: img_menu03,
  },
  {
    img: img_menu04,
  },
  {
    img: img_menu05,
  },
  {
    img: img_menu06,
  },
  {
    img: img_menu09,
  },
  {
    img: img_menu10,
  },
  {
    img: img_menu11,
  },
  {
    img: top_0sp,
  },
  {
    img: topsec02_01,
  },
  {
    img: topsec02_02,
  },
  {
    img: topsec02_03,
  },
  // {
  //   img: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450",
  //   title: "消毒",
  //   role: "商業サービス",
  //   desc: "企業やオフィス向けのプロ仕様の消毒サービス。",
  // },
  // {
  //   img: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450",
  //   title: "不用品回収",
  //   role: "フルサービス",
  //   desc: "不要品の迅速かつ環境に優しい回収。",
  // },
  // {
  //   img: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450",
  //   title: "整理整頓",
  //   role: "専門サービス",
  //   desc: "散らかりのない空間のためのプロによる整理ソリューション。",
  // },
  // {
  //   img: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450",
  //   title: "遺品整理",
  //   role: "プレミアムサービス",
  //   desc: "思いやりのある徹底的な遺品整理サービス。",
  // },
];

// 5つのポジション: 左端、左、中央、右、右端
const POSITIONS = [
  { translateX: -440, translateZ: -350, rotateY: 35, scale: 0.55, opacity: 0.4, zIndex: 1 },
  { translateX: -220, translateZ: -180, rotateY: 18, scale: 0.75, opacity: 0.7, zIndex: 2 },
  { translateX: 0, translateZ: 0, rotateY: 0, scale: 1.05, opacity: 1.0, zIndex: 5 },
  { translateX: 220, translateZ: -180, rotateY: -18, scale: 0.75, opacity: 0.7, zIndex: 2 },
  { translateX: 440, translateZ: -350, rotateY: -35, scale: 0.55, opacity: 0.4, zIndex: 1 },
];

function getPosition(index, active, total) {
  const diff = ((index - active) % total + total) % total;
  const centered = diff > Math.floor(total / 2) ? diff - total : diff;
  const posIdx = centered + 2; // -2,-1,0,1,2 → 0,1,2,3,4にマッピング
  if (posIdx < 0 || posIdx >= POSITIONS.length) return null;
  return POSITIONS[posIdx];
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500;600&display=swap');

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
    background: radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%);
    top: -250px;
    left: -200px;
    pointer-events: none;
  }

  .carousel-root::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(234,88,12,0.10) 0%, transparent 70%);
    bottom: -150px;
    right: -150px;
    pointer-events: none;
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
  }

  .card {
    width: 260px;
    border-radius: 20px;
    overflow: hidden;
    background: #1c1530;
    border: 1px solid rgba(249,115,22,0.18);
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    transition: border-color 0.4s, box-shadow 0.4s;
    position: relative;
  }

  .card-wrapper.is-active .card {
    border-color: rgba(249,115,22,0.5);
    box-shadow: 0 30px 80px rgba(249,115,22,0.3);
  }

  .card img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    display: block;
  }

  /* アクティブカードのコンテンツオーバーレイ */
  .card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 24px 20px;
    background: linear-gradient(to top, 
      rgba(0,0,0,0.95) 0%, 
      rgba(0,0,0,0.6) 50%, 
      transparent 100%);
  }

  .card-content h4 {
    color: #f97316;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 6px;
  }

  .card-content h3 {
    color: white;
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
    line-height: 1.2;
  }

  .card-content p {
    color: rgba(255,255,255,0.7);
    font-size: 13px;
    line-height: 1.6;
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255,255,255,0.06);
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
    backdrop-filter: blur(10px);
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
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(249,115,22,0.25);
    border: 1px solid rgba(249,115,22,0.15);
    cursor: pointer;
    padding: 0;
    transition: all 0.3s;
  }

  .dot:hover {
    background: rgba(249,115,22,0.5);
  }

  .dot.is-active {
    width: 28px;
    border-radius: 4px;
    background: linear-gradient(90deg, #f97316, #ea580c);
    border-color: transparent;
    box-shadow: 0 0 12px rgba(249,115,22,0.5);
  }

  /* ナビゲーションヒント */
  .nav-hint {
    color: rgba(255,255,255,0.3);
    font-size: 12px;
    margin-top: 32px;
    letter-spacing: 0.05em;
  }

  .nav-hint span {
    color: rgba(249,115,22,0.6);
  }

  /* レスポンシブ */
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
    
    .POSITIONS[0] { translateX: -380px; }
    .POSITIONS[1] { translateX: -190px; }
    .POSITIONS[3] { translateX: 190px; }
    .POSITIONS[4] { translateX: 380px; }
    
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
    
    .POSITIONS[0] { translateX: -300px; }
    .POSITIONS[1] { translateX: -150px; }
    .POSITIONS[3] { translateX: 150px; }
    .POSITIONS[4] { translateX: 300px; }
    
    .card-content {
      padding: 16px;
    }
    
    .card-content h3 {
      font-size: 18px;
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
`;

export default function Carousel() {
  const [active, setActive] = useState(0);
  const total = SLIDES.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <>
      <style>{css}</style>
      <div className="carousel-root">
        {/* セクションヘッダー */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs rounded-full px-4 py-1.5 mb-4">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-orange-500"></span>
            </span>
            サービス一覧
          </span>
        </div>

        <h2 className="carousel-title">
          <span className="carousel-title-gradient">サービス</span>
        </h2>
        <p className="carousel-subtitle">あらゆる空間にプロフェッショナルなケアを</p>

        <div style={{ position: "relative", display: "flex", alignItems: "center", width: "100%", maxWidth: "1200px" }}>
          {/* 前へボタン */}
          <button className="nav-btn prev" onClick={prev} aria-label="前へ">
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
                  onClick={() => setActive(i)}
                >
                  <div className="card">
                    <img src={slide.img} alt={slide.img} />
                    {/* {isActive && (
                      <div className="card-content">
                        <h4>{slide.role}</h4>
                        <h3>{slide.title}</h3>
                        <p>{slide.desc}</p>
                      </div>
                    )} */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 次へボタン */}
          <button className="nav-btn next" onClick={next} aria-label="次へ">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* ページネーションドット */}
        <div className="pagination">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`dot${i === active ? " is-active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`スライド ${i + 1} に移動`}
            />
          ))}
        </div>

        {/* ナビゲーションヒント */}
        <p className="nav-hint">
          <span>矢印</span>または<span>ドット</span>で操作 • カードをクリックして選択
        </p>
      </div>
    </>
  );
}