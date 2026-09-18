import React from 'react';
import { motion } from 'motion/react';

interface AccessMapProps {
  onShopClick: () => void;
}

export const AccessMap: React.FC<AccessMapProps> = ({ onShopClick }) => {
  return (
    <div className="relative bg-[#131313] w-full aspect-[800/855] overflow-hidden">
      <svg
        className="w-full h-full text-neutral-800 block"
        viewBox="0 114.725 800 855"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >

  
  <defs
     id="defs457">
    {/* Barber Pole Clip Path */}
    <clipPath
       id="barber-pole-tube">
      <rect
         x="401"
         y="614"
         width="28"
         height="60"
         rx="14"
         ry="14"
         id="rect438" />
    </clipPath>
    {/* Cylindrical lighting gradient */}
    <linearGradient
       id="glass-glare"
       x1="0%"
       y1="0%"
       x2="100%"
       y2="0%">
      <stop
         offset="0%"
         stopColor="#000"
         stopOpacity="0.3"
         id="stop441" />
      <stop
         offset="25%"
         stopColor="#fff"
         stopOpacity="0.4"
         id="stop443" />
      <stop
         offset="60%"
         stopColor="#fff"
         stopOpacity="0"
         id="stop445" />
      <stop
         offset="100%"
         stopColor="#000"
         stopOpacity="0.3"
         id="stop447" />
    </linearGradient>
    <linearGradient
       id="gold-metal"
       x1="0%"
       y1="0%"
       x2="100%"
       y2="0%">
      <stop
         offset="0%"
         stopColor="#8c6d2d"
         id="stop450" />
      <stop
         offset="50%"
         stopColor="#f5d77f"
         id="stop452" />
      <stop
         offset="100%"
         stopColor="#6e501a"
         id="stop454" />
    </linearGradient>
  </defs>
  {/* Base styling definitions */}
  <rect
     width="800"
     height="855"
     fill="#131313"
     id="rect459"
     x="0"
     y="114.72565"
     style={{ strokeWidth: 0.919472 }} />
  {/* Water bodies (Buzen Sea at the top) */}
  <rect
     x="0"
     y="114.72565"
     width="800"
     height="140.27435"
     fill="#101a26"
     opacity="0.6"
     id="rect461"
     style={{ fill: "#1a3191", fillOpacity: 1, strokeWidth: 1.76556 }} />
  <text
     x="463.05844"
     y="228.04977"
     fill="#2c3a4e"
     fontSize="11px"
     textAnchor="middle"
     fontFamily="sans-serif"
     letterSpacing="4"
     fontWeight="bold"
     id="text463"
     style={{ letterSpacing: "0px", fill: "#5275ff", fillOpacity: 1, fontWeight: "bold", fontSize: "11px", fontFamily: "sans-serif", textAnchor: "middle" }}><tspan
       id="tspan1216"
       x="463.05844"
       y="228.04977"
       style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}>周防灘 (Suo-nada sea)</tspan><tspan
       id="tspan1218"
       x="463.05844"
       y="242.58768"
       style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }} /></text>
  {/* Area Grids & Block Labels */}
  <text
     x="231.91791"
     y="390.06848"
     fill="#777777"
     fontSize="11px"
     fontFamily="sans-serif"
     fontWeight="bold"
     id="text465"
     style={{ fontWeight: "bold", fontSize: "11px", fontFamily: "sans-serif", fill: "#777777" }}><tspan
       id="tspan2884"
       x="231.91791"
       y="390.06848"
       style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", textAlign: "center", textAnchor: "middle" }}>八屋エリア</tspan><tspan
       id="tspan2886"
       x="231.91791"
       y="410.06848"
       style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", textAlign: "center", textAnchor: "middle" }}>(HACHIYA)</tspan></text>
  <text
     x="716.22778"
     y="389.9726"
     fill="#777777"
     fontSize="11px"
     fontFamily="sans-serif"
     fontWeight="bold"
     id="text467"
     style={{ fontWeight: "bold", fontSize: "11px", fontFamily: "sans-serif", fill: "#777777" }}><tspan
       id="tspan2880"
       x="716.22778"
       y="389.9726"
       style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", textAlign: "center", textAnchor: "middle" }}>赤熊エリア</tspan><tspan
       id="tspan2882"
       x="716.22778"
       y="409.9726"
       style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", textAlign: "center", textAnchor: "middle" }}>(AKAGUMA)</tspan></text>
  <g
     id="g473"
     transform="translate(-36.207741,24.002885)">
    <text
       x="71.246574"
       y="514.46576"
       fill="#777777"
       fontSize="11px"
       fontFamily="sans-serif"
       fontWeight="bold"
       id="text469"
       style={{ fontWeight: "bold", fontSize: "11px", fontFamily: "sans-serif", fill: "#777777" }}><tspan
         id="tspan3040"
         x="71.246574"
         y="514.46576"
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}>千束西エリア</tspan><tspan
         id="tspan3042"
         x="71.246574"
         y="534.46576"
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}>(CHIZUKA)</tspan></text>
    <text
       x="140"
       y="546"
       fill="#777777"
       fontSize="10px"
       fontFamily="sans-serif"
       fontWeight="bold"
       id="text471" />
  </g>
  <text
     x="666.23792"
     y="621.08612"
     fill="#777777"
     fontSize="11px"
     fontFamily="sans-serif"
     fontWeight="bold"
     id="text475"
     style={{ fontWeight: "bold", fontSize: "11px", fontFamily: "sans-serif", fill: "#777777" }}><tspan
       id="tspan3044"
       x="666.23792"
       y="621.08612"
       style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", textAlign: "center", textAnchor: "middle" }}>吉木エリア</tspan><tspan
       id="tspan3046"
       x="666.23792"
       y="641.08612"
       style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", textAlign: "center", textAnchor: "middle" }}>(YOSHIKI)</tspan></text>
  {/* JR Nippo Main Line railway track at the top */}
  <path
     d="M-50,310 L850,310"
     stroke="#1f1f1f"
     strokeWidth="12"
     id="path477" />
  <path
     d="M-50,310 L850,310"
     stroke="#333333"
     strokeWidth="6"
     id="path479" />
  <path
     d="M-50,310 L850,310"
     stroke="#ffffff"
     strokeWidth="2"
     strokeDasharray="10 10"
     id="path481" />
  <text
     x="504.08893"
     y="296.5127"
     fill="#888888"
     fontSize="10px"
     fontFamily="monospace"
     fontWeight="bold"
     id="text483"
     style={{ fontWeight: "bold", fontSize: "10px", fontFamily: "monospace", fill: "#888888" }}><tspan
       style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
       id="tspan3565">JR日豊本線 (JR NIPPO MAIN LINE)</tspan></text>
  {/* JR Unoshima Station (宇島駅) at the top center-left */}
  <g
     id="g495"
     style={{ display: "inline" }}>
    <rect
       x="278.7406"
       y="284.97348"
       width="161.2859"
       height="44.655766"
       rx="5.0932393"
       fill="#1a1a1a"
       stroke="#ef4444"
       strokeWidth="1.94698"
       id="rect485" />
    <rect
       x="278.69052"
       y="284.9234"
       width="161.38609"
       height="18"
       rx="3.3976018"
       fill="#dc2626"
       id="rect487"
       style={{ strokeWidth: 1.04503 }} />
    <text
       x="359.35751"
       y="298"
       fill="#ffffff"
       fontSize="9px"
       fontWeight="bold"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text489"
       style={{ fontWeight: "bold", fontSize: "9px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#ffffff" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan2866">Unoshima station</tspan></text>
    <text
       x="357.53201"
       y="322"
       fill="#ffffff"
       fontSize="12px"
       fontWeight="bold"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text491"
       style={{ fontWeight: "bold", fontSize: "12px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#ffffff" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "18.6667px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan2870">JR 宇島駅</tspan></text>
    <circle
       cx="430"
       cy="310"
       r="4"
       fill="#ef4444"
       id="circle493" />
  </g>
  {/* Route 113 near the station */}
  <text
     x="42.860542"
     y="373.18921"
     fill="#777777"
     fontSize="9"
     fontFamily="sans-serif"
     id="text501"
     style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fill: "#777777" }}>県道113号線</text>
  <text
     x="42"
     y="446"
     fill="#777777"
     fontSize="9"
     fontFamily="sans-serif"
     id="text507"
     style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fill: "#777777" }}>県道103号線</text>
  {/* Route 103 crossing in the middle */}
  <path
     d="M-50,345 L850,345"
     stroke="#181818"
     strokeWidth="16"
     id="path497" />
  <path
     d="M-50,460 L850,460"
     stroke="#181818"
     strokeWidth="16"
     id="path503" />
  {/* Main North-South road (Route 32 / 千束通り) */}
  <path
     d="M 470,316 V 966.96321"
     stroke="#1c1c1c"
     strokeWidth="30.7425"
     id="path509"
     style={{ fill: "#ff0000" }} />
  <path
     d="M-50,750 L850,820"
     stroke="#1c1c1c"
     strokeWidth="48"
     strokeLinecap="square"
     id="path521" />
  <path
     d="M 470,316 V 966.96321"
     stroke="#262626"
     strokeWidth="17.5672"
     id="path511"
     style={{ fill: "#ffffff", stroke: "#3c3c3c", strokeOpacity: 1 }} />
  <path
     d="M-50,345 L850,345"
     stroke="#222222"
     strokeWidth="6"
     id="path499"
     style={{ stroke: "#3c3c3c", strokeOpacity: 1 }} />
  <path
     d="M -50,460 H 850"
     stroke="#222222"
     strokeWidth="6"
     id="path505"
     style={{ display: "inline", stroke: "#3c3c3c", strokeOpacity: 1 }} />
  {/* Route 32 Shield/Badge */}
  <g
     id="g517"
     style={{ display: "inline" }}>
    <path
       d="m 470,395 12,5 v 12 l -12,8 -12,-8 v -12 z"
       fill="#1d3557"
       stroke="#457b9d"
       strokeWidth="1"
       id="path513" />
    <text
       x="470"
       y="410"
       fill="#ffffff"
       fontSize="9px"
       fontWeight="bold"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text515">32</text>
  </g>
  {/* Route 10 Diagonal Highway at the bottom */}
  <path
     d="M-50,750 L850,820"
     stroke="#2a2a2a"
     strokeWidth="32"
     strokeLinecap="square"
     id="path523"
     style={{ stroke: "#3c3c3c", strokeOpacity: 1 }} />
  <text
     x="445"
     y="410"
     fill="#888888"
     fontSize="9"
     textAnchor="end"
     fontFamily="sans-serif"
     id="text519"
     style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", textAnchor: "end", fill: "#888888" }}>県道32号線</text>
  <path
     d="M-50,750 L850,820"
     stroke="#c18e38"
     strokeWidth="2"
     strokeDasharray="12 12"
     id="path525" />
  <text
     x="89.405128"
     y="719.41431"
     fill="#c18e38"
     fontSize="12"
     fontFamily="monospace"
     fontWeight="bold"
     transform="rotate(4.5)"
     id="text527"
     style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fill: "#c18e38" }}>国道10号線 (ROUTE 10)</text>
  <text
     x="838.88843"
     y="719.52289"
     fill="#999999"
     fontSize="9"
     fontFamily="sans-serif"
     textAnchor="end"
     transform="rotate(4.5)"
     id="text531"
     style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", textAnchor: "end", fill: "#999999" }}>To Nakatsu 至 豊前・中津 →</text>
  <text
     x="298.68097"
     y="792.758"
     fill="#999999"
     fontSize="9"
     fontFamily="sans-serif"
     textAnchor="end"
     transform="rotate(4.5)"
     id="text531-4"
     style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", textAnchor: "end", fill: "#999999" }}>← 至 苅田・行橋 To Yukuhashi</text>
  {/* Landmark: Udon Restaurant 豊前屋 官べえ */}
  <g
     id="g539"
     transform="translate(-6,2)">
    <rect
       x="668.88208"
       y="844.96423"
       width="107.61029"
       height="50.071499"
       rx="5.1652942"
       fill="#1a1210"
       stroke="#c18e38"
       strokeWidth="0.928501"
       id="rect533" />
    <text
       x="723.02576"
       y="867"
       fill="#d5a86a"
       fontSize="11px"
       fontWeight="bold"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text535"
       style={{ fontWeight: "bold", fontSize: "11px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#d5a86a" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan3048">豊前屋 官べえ</tspan></text>
    <text
       x="722.06219"
       y="882"
       fill="#999999"
       fontSize="8px"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text537"
       style={{ fontSize: "8px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#999999" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "10.6667px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan3050">うどん店</tspan></text>
  </g>
  {/* Landmark: Family Mart */}
  <g
     id="g551">
    <rect
       x="494.97342"
       y="379.97342"
       width="125.4073"
       height="60.053131"
       rx="7.1661315"
       fill="#112214"
       stroke="#15803d"
       strokeWidth="0.946868"
       id="rect541" />
    <rect
       x="494.97342"
       y="379.97342"
       width="125.4073"
       height="18.01594"
       rx="3.5830657"
       fill="#15803d"
       id="rect543"
       style={{ strokeWidth: 0.946868 }} />
    <text
       x="557.20508"
       y="394"
       fill="#ffffff"
       fontSize="9px"
       fontWeight="bold"
       textAnchor="middle"
       letterSpacing="0.5"
       fontFamily="sans-serif"
       id="text545"
       style={{ fontWeight: "bold", fontSize: "9px", fontFamily: "sans-serif", letterSpacing: 0.5, textAnchor: "middle", fill: "#ffffff" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan2868">Family Mart</tspan></text>
    <text
       x="557.52081"
       y="416"
       fill="#ffffff"
       fontSize="10px"
       fontWeight="bold"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text547"
       style={{ fontWeight: "bold", fontSize: "10px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#ffffff" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan2876">ファミリーマート</tspan></text>
    <text
       x="557.84375"
       y="431"
       fill="#9fdfb0"
       fontSize="8px"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text549"
       style={{ fontSize: "8px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#9fdfb0" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "10.6667px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan2878">豊前市役所前店</tspan></text>
  </g>
  {/* Landmark: 豊前市役所 */}
  <g
     id="g561"
     transform="translate(28.767123,1.1506849)">
    <rect
       x="495"
       y="500"
       width="140"
       height="55"
       rx="8"
       fill="#181818"
       stroke="#525252"
       strokeWidth="1"
       id="rect553" />
    <rect
       x="495"
       y="500"
       width="140"
       height="18"
       rx="4"
       fill="#525252"
       id="rect555" />
    <text
       x="565"
       y="514"
       fill="#ffffff"
       fontSize="9px"
       fontWeight="bold"
       textAnchor="middle"
       letterSpacing="0.5"
       fontFamily="sans-serif"
       id="text557"
       style={{ fontWeight: "bold", fontSize: "9px", fontFamily: "sans-serif", letterSpacing: 0.5, textAnchor: "middle", fill: "#ffffff" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan2872">Buzen city hall</tspan></text>
    <text
       x="565"
       y="540"
       fill="#ffffff"
       fontSize="11px"
       fontWeight="bold"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text559"
       style={{ fontWeight: "bold", fontSize: "11px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#ffffff" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan2874">豊前市役所</tspan></text>
  </g>
  {/* Landmark: Lawson */}
  <g
     id="g573"
     transform="translate(-10.643835,7.9425208)">
    <rect
       x="509.9552"
       y="829.9552"
       width="123.5896"
       height="60.0896"
       rx="7.062263"
       fill="#121d30"
       stroke="#2563eb"
       strokeWidth="1.4104"
       id="rect563" />
    <rect
       x="509.9552"
       y="829.9552"
       width="123.5896"
       height="15.0224"
       rx="3.5311315"
       fill="#2563eb"
       id="rect565"
       style={{ strokeWidth: 0.940267 }} />
    <text
       x="571.65558"
       y="841"
       fill="#ffffff"
       fontSize="9px"
       fontWeight="bold"
       textAnchor="middle"
       letterSpacing="0.5"
       fontFamily="sans-serif"
       id="text567"
       style={{ fontWeight: "bold", fontSize: "9px", fontFamily: "sans-serif", letterSpacing: 0.5, textAnchor: "middle", fill: "#ffffff" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan3052">Lawson</tspan></text>
    <text
       x="572"
       y="862.2041"
       fill="#93c5fd"
       fontSize="10px"
       fontWeight="bold"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text569"
       style={{ fontWeight: "bold", fontSize: "10px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#93c5fd" }}><tspan
         id="tspan3057"
         x="572"
         y="862.2041"
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fill: "#ffffff" }}>ローソン</tspan><tspan
         id="tspan3059"
         x="572"
         y="883.35681"
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fill: "#ffffff" }}>豊前千束店</tspan></text>
  </g>
  {/* Landmark: Senzoku Post Office (千束郵便局) */}
  <g
     id="g585"
     transform="translate(-63.827289,-52.931506)">
    <rect
       x="243.78064"
       y="569.94849"
       width="112.43871"
       height="60.103054"
       rx="6.4250693"
       fill="#221515"
       stroke="#ef4444"
       strokeWidth="0.896947"
       id="rect575" />
    <rect
       x="243.78064"
       y="569.94849"
       width="112.43871"
       height="18.030916"
       rx="3.2125347"
       fill="#ef4444"
       id="rect577"
       style={{ strokeWidth: 0.896947 }} />
    <text
       x="300"
       y="584"
       fill="#ffffff"
       fontSize="9px"
       fontWeight="bold"
       textAnchor="middle"
       letterSpacing="0.5"
       fontFamily="sans-serif"
       id="text579"
       style={{ fontWeight: "bold", fontSize: "9px", fontFamily: "sans-serif", letterSpacing: 0.5, textAnchor: "middle", fill: "#ffffff" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan3223">〒Post office</tspan></text>
    <text
       x="300"
       y="608"
       fill="#f87171"
       fontSize="11px"
       fontWeight="bold"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text581"
       style={{ fontWeight: "bold", fontSize: "11px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#f87171" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fill: "#ffffff" }}
         id="tspan3225">千束郵便局</tspan></text>
    <text
       x="300"
       y="623"
       fill="#f87171"
       fontSize="9px"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text583"
       style={{ fontSize: "9px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#f87171" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "10.6667px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan3227">（当店のすぐ隣）</tspan></text>
  </g>
  {/* OUR SHOP: 岡村理容美容館 */}
  <g
     id="okamura-shop-card" className="cursor-pointer" onClick={onShopClick}>
    <rect
       x="208.83339"
       y="639.95667"
       width="186.20993"
       height="70.086647"
       rx="8.8671398"
       fill="#1e1a12"
       stroke="#c18e38"
       strokeWidth="1.41336"
       id="rect587"
       style={{ strokeWidth: 1.413, strokeDasharray: "none" }} />
    <rect
       x="208.83339"
       y="639.95667"
       width="186.20993"
       height="18.02228"
       rx="5.3202839"
       fill="#c18e38"
       id="rect589"
       style={{ strokeWidth: 0.942237 }} />
    <text
       x="301.82767"
       y="654"
       fill="#ffffff"
       fontSize="10px"
       fontWeight="bold"
       textAnchor="middle"
       letterSpacing="0.5"
       fontFamily="sans-serif"
       id="text591"
       style={{ fontWeight: "bold", fontSize: "10px", fontFamily: "sans-serif", letterSpacing: 0.5, textAnchor: "middle", fill: "#ffffff" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan3229">Okamura Barbers</tspan></text>
    <text
       x="301.42795"
       y="680"
       fill="#fbf7ee"
       fontSize="12px"
       fontWeight="bold"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text593"
       style={{ fontWeight: "bold", fontSize: "12px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#fbf7ee" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "18.6667px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan3231">岡村理容美容館</tspan></text>
    <text
       x="301.99045"
       y="700"
       fill="#d4af37"
       fontSize="10px"
       fontWeight="bold"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text595"
       style={{ fontWeight: "bold", fontSize: "10px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#d4af37" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan3233">★ 当店はここです ★</tspan></text>
  </g>
  <g
     id="okamura-shop-card-7"
     transform="translate(55.116889,-76.726527)"
     className="cursor-pointer"
     onClick={onShopClick}>
    <rect
       x="259.76004"
       y="635.91931"
       width="78.890869"
       height="55.435268"
       rx="3.7567084"
       fill="#1e1a12"
       stroke="#c18e38"
       strokeWidth="0.818167"
       id="rect587-3"
       style={{ strokeWidth: 1.413, strokeDasharray: "none" }} />
    <rect
       x="259.79407"
       y="636.00037"
       width="78.822815"
       height="18.164629"
       rx="2.2520804"
       fill="#c18e38"
       id="rect589-2"
       style={{ strokeWidth: 1.413, strokeDasharray: "none" }} />
    <text
       x="299.09479"
       y="650.26025"
       fill="#ffffff"
       fontSize="10px"
       fontWeight="bold"
       textAnchor="middle"
       letterSpacing="0.5"
       fontFamily="sans-serif"
       id="text591-5"
       style={{ fontWeight: "bold", fontSize: "10px", fontFamily: "sans-serif", letterSpacing: 0.5, textAnchor: "middle", fill: "#ffffff", strokeWidth: 1.413, strokeDasharray: "none" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", strokeWidth: 1.413, strokeDasharray: "none" }}
         id="tspan3229-4">K.Ko</tspan></text>
    <text
       x="298.69507"
       y="678.26025"
       fill="#fbf7ee"
       fontSize="12px"
       fontWeight="bold"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text593-1"
       style={{ fontWeight: "bold", fontSize: "12px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#fbf7ee", strokeWidth: 1.413, strokeDasharray: "none" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "18.6667px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", strokeWidth: 1.413, strokeDasharray: "none" }}
         id="tspan3231-7">美容室</tspan></text>
  </g>
  {/* HAIR SALON IWASAKI */}
  <g
     id="g602">
    <rect
       x="291.77176"
       y="719.50909"
       width="118.25101"
       height="25.513651"
       rx="3.6384928"
       fill="#151515"
       stroke="#444444"
       strokeWidth="0.879542"
       id="rect598" />
    <text
       x="350.83215"
       y="736.2373"
       fill="#999999"
       fontSize="9px"
       textAnchor="middle"
       fontFamily="sans-serif"
       id="text600"
       style={{ fontSize: "9px", fontFamily: "sans-serif", textAnchor: "middle", fill: "#999999" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "10.6667px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan2888">Hair Salon Iwasaki</tspan></text>
  </g>
  {/* Floating Address Header at the top */}
  <g
     id="map-header"
     transform="translate(-288.38362,-4.3594649)"
     className="cursor-pointer"
     onClick={onShopClick}>
    <rect
       x="329.97736"
       y="149.97736"
       width="280.61899"
       height="60.045311"
       rx="10.862672"
       fill="#181818"
       stroke="#c18e38"
       strokeWidth="0.919361"
       opacity="0.95"
       id="rect604"
       style={{ strokeWidth: 1.0369, strokeDasharray: "none", paintOrder: "markers fill stroke" }} />
    <circle
       cx="365"
       cy="180"
       r="16"
       fill="rgba(193,142,56,0.15)"
       stroke="#c18e38"
       strokeWidth="1"
       id="circle606"
       style={{ strokeWidth: 1.00157, strokeDasharray: "none", paintOrder: "markers fill stroke" }} />
    <path
       d="m 361,184 8,-8 m 0,0 h -5 m 5,0 v 5"
       stroke="#c18e38"
       strokeWidth="1.5"
       strokeLinecap="round"
       strokeLinejoin="round"
       id="path608"
       style={{ strokeWidth: 1.00157, strokeDasharray: "none", paintOrder: "markers fill stroke" }} />
    <text
       x="392.00009"
       y="180.06488"
       fill="#ffffff"
       fontSize="13px"
       fontWeight="bold"
       fontFamily="sans-serif"
       id="text610"
       style={{ fontWeight: "bold", fontSize: "23.1912px", fontFamily: "sans-serif", fill: "#ffffff", strokeWidth: 1.78674, strokeDasharray: "none", paintOrder: "markers fill stroke" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "28.543px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", strokeWidth: 1.78674 }}
         id="tspan2862">岡村理容美容館</tspan></text>
    <text
       x="393.44693"
       y="200.29123"
       fill="#aaaaaa"
       fontSize="10px"
       fontFamily="sans-serif"
       id="text612"
       style={{ fontSize: "9.16991px", fontFamily: "sans-serif", fill: "#aaaaaa", strokeWidth: 0.918431, strokeDasharray: "none", paintOrder: "markers fill stroke" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "12.2265px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal", strokeWidth: 0.918431 }}
         id="tspan2864">〒828-0053 福岡県豊前市千束256</tspan></text>
  </g>
  {/* Compass Indicator */}
  <g
     id="compass"
     transform="translate(-6.9160854,-122.45539)"
     style={{ strokeWidth: 1.0015748, strokeDasharray: "none" }}>
    <circle
       cx="740"
       cy="290"
       r="22"
       fill="#161616"
       stroke="#2c2c2c"
       strokeWidth="1.5"
       id="circle615"
       style={{ strokeWidth: 1.0015748, strokeDasharray: "none", stroke: "#c18e38", strokeOpacity: 1 }} />
    <path
       d="m 740,274 5,16 -5,-4 -5,4 z"
       fill="#c18e38"
       id="path617"
       style={{ strokeWidth: 1.0015748, strokeDasharray: "none" }} />
    <path
       d="m 740,306 5,-16 -5,-4 -5,4 z"
       fill="#444444"
       id="path619"
       style={{ strokeWidth: 1.0015748, strokeDasharray: "none" }} />
    <text
       x="739.89832"
       y="265.88123"
       fill="#c18e38"
       fontSize="10px"
       textAnchor="middle"
       fontWeight="bold"
       fontFamily="sans-serif"
       id="text621"
       style={{ strokeWidth: 1.00157, strokeDasharray: "none" }}>N</text>
  </g>
  
  {/* Okamura Barbers Location Highlight Pin - Animated Retro Barber Pole on Map */}
  <g id="okamura-barber-pole-pin" className="cursor-pointer" onClick={onShopClick}>
    {/* Ring aura pulse */}
    <circle cx={415} cy={675} r={22} fill="rgba(193,142,56,0.25)" className="animate-pulse" />
    <circle cx={415} cy={675} r={6} fill="#c18e38" />

    {/* Foreign Object containing the Miniature Animated Barber Pole */}
    <foreignObject x="395" y="605" width="40" height="95" className="overflow-visible">
      <div 
        className="relative w-7 h-20 mx-auto bg-amber-50 border-2 border-gold-800 rounded-full overflow-hidden shadow-xl flex flex-col justify-between cursor-pointer group hover:scale-110 transition-transform duration-300"
        title="岡村理容美容館"
      >
        {/* Spinning barber pole stripes */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div 
            className="w-full h-full will-change-transform"
            style={{
              animation: 'barberpole-spin 1.8s infinite linear'
            }}
          >
            <svg
              viewBox="0 0 28 80"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              {/* Repeating diagonal stripes slanting down to the left: slope -1, c steps by 8 */}
              {[-32, 0, 32, 64, 96, 128, 160].map((baseC) => (
                <g key={baseC}>
                  {/* Red band */}
                  <polygon
                    points={`28,${baseC - 28} 0,${baseC} 0,${baseC + 8} 28,${baseC - 20}`}
                    fill="#d32f2f"
                  />
                  {/* White band */}
                  <polygon
                    points={`28,${baseC - 20} 0,${baseC + 8} 0,${baseC + 16} 28,${baseC - 12}`}
                    fill="#fdfbf7"
                  />
                  {/* Blue band */}
                  <polygon
                    points={`28,${baseC - 12} 0,${baseC + 16} 0,${baseC + 24} 28,${baseC - 4}`}
                    fill="#1976d2"
                  />
                  {/* White band */}
                  <polygon
                    points={`28,${baseC - 4} 0,${baseC + 24} 0,${baseC + 32} 28,${baseC + 4}`}
                    fill="#fdfbf7"
                  />
                </g>
              ))}
            </svg>
          </div>
          {/* 3D Glass tube cylindrical highlights and shadows */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25 pointer-events-none rounded-full" />
          <div className="absolute inset-y-0 left-0.5 w-1.5 bg-gradient-to-r from-white/40 to-transparent pointer-events-none rounded-l-full" />
        </div>
        {/* Antique brass/gold collars */}
        <div className="h-2 w-full bg-gradient-to-r from-gold-800 via-gold-400 to-gold-900 z-10 border-b border-gold-950 shrink-0" />
        <div className="h-2 w-full bg-gradient-to-r from-gold-800 via-gold-400 to-gold-900 z-10 border-t border-gold-950 shrink-0" />
        {/* Chrome/gold dome caps */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-b from-gold-300 to-gold-700 border border-gold-900 shadow-md z-20" />
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-t from-gold-300 to-gold-700 border border-gold-900 shadow-md z-20" />
      </div>
    </foreignObject>
  </g>

  {/* Animated pulsing dot moving from Station to Okamura along Route 32, turning off to Okamura Barbers */}
  <motion.circle
    cx={430}
    cy={310}
    r={5}
    fill="#d4af37"
    stroke="#fff"
    strokeWidth={1.5}
    animate={{
      cx: [430, 430, 470, 470, 415, 415],
      cy: [310, 310, 310, 675, 675, 675],
      opacity: [0, 1, 1, 1, 1, 0]
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.08, 0.25, 0.75, 0.88, 1.0]
    }}
  />

  {/* Access Info Overlay Card */}
  <g
     id="access-info-card">
    <rect
       x="79.953598"
       y="829.95361"
       width="274.39722"
       height="113.37363"
       rx="11.75988"
       fill="#111111"
       stroke="#333333"
       strokeWidth="0.907194"
       opacity="0.9"
       id="rect679"
       style={{ stroke: "#ffffff", strokeOpacity: 1 }} />
    <text
       x="99"
       y="860"
       fill="#ffffff"
       fontSize="13px"
       fontWeight="bold"
       fontFamily="sans-serif"
       id="text681"
       style={{ fontWeight: "bold", fontSize: "13px", fontFamily: "sans-serif", fill: "#ffffff" }}><tspan
         style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontStretch: "normal", fontSize: "16px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}
         id="tspan3848">📍 周辺からのアクセス：</tspan></text>
    <text
       x="105"
       y="883"
       fill="#aaaaaa"
       fontSize="11"
       fontFamily="sans-serif"
       id="text683"
       style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}>• JR宇島駅から徒歩約30分</text>
    <text
       x="105"
       y="902"
       fill="#aaaaaa"
       fontSize="11"
       fontFamily="sans-serif"
       id="text685"
       style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}>• 豊前市役所から北に車で1分</text>
    <text
       x="105"
       y="921"
       fill="#aaaaaa"
       fontSize="11"
       fontFamily="sans-serif"
       id="text687"
       style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontStretch: "normal", fontSize: "13.3333px", fontFamily: "sans-serif", fontVariantLigatures: "normal", fontVariantCaps: "normal", fontVariantNumeric: "normal", fontVariantEastAsian: "normal" }}>• 東九州自動車道 豊前ICから車で8分</text>
  </g>

      </svg>
    </div>
  );
};
