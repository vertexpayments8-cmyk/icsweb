// Traced from the ICS letterhead (picture/1.jpeg): heavy condensed "ICS" with a
// stadium-ended I and softly rounded C and S, a thin dark-red rule, then
// "Integrated / Care / Solutions" stacked in a dark grotesque.
export const ICS_PATHS = {
  I: 'M0 13.5a13.5 13.5 0 0 1 27 0v73a13.5 13.5 0 0 1-27 0z',
  C:
    'M54 0h19a20 20 0 0 1 20 20v60a20 20 0 0 1-20 20H54a20 20 0 0 1-20-20V20A20 20 0 0 1 54 0z' +
    'M56.5 24a7.1 7.1 0 0 1 14.2 0V44H93v18H70.7v17a7.1 7.1 0 0 1-14.2 0z',
  S:
    'M115 0h18a18 18 0 0 1 18 18v64a18 18 0 0 1-18 18h-18a18 18 0 0 1-18-18V18A18 18 0 0 1 115 0z' +
    'M117 24.5a8.5 8.5 0 0 1 17 0V28h17v16l-34-8z' +
    'M97 46l37 9v21a8.5 8.5 0 0 1-17 0V62H97z',
};

export function IcsMark({ fill }) {
  return (
    <g fill={fill} fillRule="evenodd">
      <path d={ICS_PATHS.I} />
      <path d={ICS_PATHS.C} />
      <path d={ICS_PATHS.S} />
    </g>
  );
}

export default function Logo({ tone = 'dark', className = '', title = 'ICS – Integrated Care Solutions' }) {
  const light = tone === 'light';
  const words = light ? '#FFFFFF' : '#1E1F23';
  const mark = light ? '#FFFFFF' : 'var(--crimson, #A3162D)';
  const rule = light ? '#FFFFFF' : 'var(--crimson-dark, #84101F)';
  return (
    <svg
      className={`logo ${className}`}
      viewBox="0 0 310 106"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <IcsMark fill={mark} />
      <rect x="161" y="0" width="1.9" height="106" fill={rule} />
      <g
        fill={words}
        fontFamily="'Archivo Variable', Archivo, Arial, sans-serif"
        fontSize="30"
        fontWeight="620"
        style={{ fontStretch: '88%' }}
        lengthAdjust="spacingAndGlyphs"
      >
        <text x="171" y="31" textLength="137" lengthAdjust="spacingAndGlyphs">
          Integrated
        </text>
        <text x="171.5" y="66" textLength="61" lengthAdjust="spacingAndGlyphs">
          Care
        </text>
        <text x="172" y="101" textLength="127" lengthAdjust="spacingAndGlyphs">
          Solutions
        </text>
      </g>
    </svg>
  );
}
