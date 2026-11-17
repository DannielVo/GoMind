const indices = Array.from({ length: 9 }, (_, index) => index);
const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "J"];

const starPoints = [
  [2, 2],
  [6, 2],
  [4, 4],
  [2, 6],
  [6, 6],
] as const;

type PreviewStone = {
  column: number;
  row: number;
  color: "black" | "white";
  lastMove?: boolean;
};

const stones: readonly PreviewStone[] = [
  { column: 2, row: 2, color: "black" },
  { column: 6, row: 2, color: "white" },
  { column: 4, row: 3, color: "black" },
  { column: 3, row: 4, color: "white" },
  { column: 5, row: 4, color: "black" },
  { column: 4, row: 5, color: "white" },
  { column: 2, row: 6, color: "black" },
  { column: 6, row: 6, color: "white", lastMove: true },
];

function position(index: number) {
  return 20 + index * 35;
}

export default function BoardPreview() {
  return (
    <figure className="relative isolate mx-auto w-full max-w-[430px] pb-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 aspect-square scale-110 rounded-full border border-dashed border-border"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 aspect-square scale-95 rounded-full border border-border/60"
      />

      <div className="relative aspect-square rounded-2xl bg-board p-3 shadow-2xl sm:p-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-tr from-black/10 via-transparent to-white/20"
        />

        <svg
          viewBox="-20 -20 360 360"
          role="img"
          aria-label="Static 9 by 9 Go board preview with eight stones, a last-move marker, and a suggested move at the center."
          className="relative block h-full w-full select-none"
        >
          <defs>
            <radialGradient
              id="home-preview-black-stone"
              cx="30%"
              cy="25%"
              r="80%"
            >
              <stop offset="0%" stopColor="#34353b" />
              <stop offset="55%" stopColor="var(--color-stone-black)" />
              <stop offset="100%" stopColor="#0a0a0c" />
            </radialGradient>

            <radialGradient
              id="home-preview-white-stone"
              cx="30%"
              cy="25%"
              r="80%"
            >
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="var(--color-stone-white)" />
              <stop offset="100%" stopColor="#e4e3df" />
            </radialGradient>

            <filter
              id="home-preview-stone-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              colorInterpolationFilters="sRGB"
            >
              <feDropShadow
                dx="0"
                dy="3"
                stdDeviation="2"
                floodColor="#000000"
                floodOpacity="0.3"
              />
            </filter>
          </defs>

          <g
            fill="var(--color-board-line)"
            fontSize="10"
            fontWeight="600"
            textAnchor="middle"
          >
            {columns.map((column, index) => (
              <text key={column} x={position(index)} y="0">
                {column}
              </text>
            ))}

            {indices.map((index) => (
              <text key={index} x={position(index)} y="322">
                {index + 1}
              </text>
            ))}
          </g>

          <g
            stroke="var(--color-board-line)"
            strokeWidth="1.25"
            strokeLinecap="square"
          >
            {indices.map((index) => (
              <g key={index}>
                <line
                  x1={position(index)}
                  y1="20"
                  x2={position(index)}
                  y2="300"
                />
                <line
                  x1="20"
                  y1={position(index)}
                  x2="300"
                  y2={position(index)}
                />
              </g>
            ))}
          </g>

          <g fill="var(--color-board-line)">
            {starPoints.map(([column, row]) => (
              <circle
                key={`${column}-${row}`}
                cx={position(column)}
                cy={position(row)}
                r={column === 4 && row === 4 ? 3.5 : 3}
              />
            ))}
          </g>

          {stones.map((stone) => (
            <g
              key={`${stone.column}-${stone.row}`}
              transform={`translate(${position(stone.column)} ${position(stone.row)})`}
            >
              <circle
                r="15.36"
                fill={`url(#home-preview-${stone.color}-stone)`}
                filter="url(#home-preview-stone-shadow)"
              />

              {stone.lastMove ? (
                <>
                  <circle
                    r="6"
                    fill="none"
                    stroke="var(--color-last-move)"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  <circle r="3.5" fill="var(--color-last-move)" />
                </>
              ) : (
                <circle
                  cx="-4"
                  cy="-5"
                  r="2.2"
                  fill="#ffffff"
                  opacity={stone.color === "black" ? 0.2 : 0.6}
                />
              )}
            </g>
          ))}

          <g transform={`translate(${position(4)} ${position(4)})`}>
            <circle
              r="15.36"
              fill="var(--color-stone-black)"
              fillOpacity="0.3"
              stroke="var(--color-stone-black)"
              strokeOpacity="0.4"
            />
            <circle r="3" fill="#ffffff" fillOpacity="0.4" />
          </g>
        </svg>

        <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-surface px-3 py-2 text-xs font-semibold shadow-md sm:gap-2.5 sm:px-4">
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 shrink-0 rounded-full bg-stone-black"
          />
          <span>Your Move (Black)</span>
          <span aria-hidden="true" className="text-text-secondary">
            •
          </span>
          <span className="text-success">Turn 8</span>
        </div>
      </div>

      <figcaption className="sr-only">
        Decorative preview only. This is not an interactive game.
      </figcaption>
    </figure>
  );
}
