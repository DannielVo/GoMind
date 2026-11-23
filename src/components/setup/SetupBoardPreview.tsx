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
};

const stones: readonly PreviewStone[] = [
  { column: 3, row: 3, color: "black" },
  { column: 5, row: 4, color: "black" },
  { column: 2, row: 4, color: "black" },
  { column: 4, row: 3, color: "white" },
  { column: 3, row: 5, color: "white" },
  { column: 4, row: 5, color: "white" },
];

function position(index: number) {
  return 14 + index * 9;
}

export default function SetupBoardPreview() {
  return (
    <section
      aria-labelledby="setup-board-preview"
      className="flex h-full min-w-0 flex-col"
    >
      <h2
        id="setup-board-preview"
        className="mb-2.5 text-base leading-tight font-semibold text-text-primary"
      >
        Board Preview
      </h2>

      <figure className="flex flex-1 flex-col items-center justify-center rounded-xl border border-border bg-bg-primary p-4">
        <div className="aspect-square w-full max-w-[280px] overflow-hidden rounded-xl border border-board-line/30 bg-board shadow-md">
          <svg
            viewBox="0 0 100 100"
            role="img"
            aria-label="Static 9 by 9 Classic Wood Go board preview, with coordinates, five star points, three black stones and three white stones."
            focusable="false"
            className="block h-full w-full select-none"
          >
            <defs>
              <linearGradient
                id="setup-preview-wood-light"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="var(--color-board-line)" />
                <stop
                  offset="50%"
                  stopColor="var(--color-board)"
                  stopOpacity="0"
                />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>

              <radialGradient
                id="setup-preview-black-stone"
                cx="35%"
                cy="30%"
                r="65%"
              >
                <stop offset="0%" stopColor="#4a4e54" />
                <stop offset="60%" stopColor="var(--color-stone-black)" />
                <stop offset="100%" stopColor="#0b0c0e" />
              </radialGradient>

              <radialGradient
                id="setup-preview-white-stone"
                cx="35%"
                cy="25%"
                r="70%"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="var(--color-stone-white)" />
                <stop offset="100%" stopColor="#d9d4cc" />
              </radialGradient>

              <filter
                id="setup-preview-black-shadow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
                colorInterpolationFilters="sRGB"
              >
                <feDropShadow
                  dx="0.5"
                  dy="1.5"
                  stdDeviation="1"
                  floodColor="#000000"
                  floodOpacity="0.55"
                />
              </filter>

              <filter
                id="setup-preview-white-shadow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
                colorInterpolationFilters="sRGB"
              >
                <feDropShadow
                  dx="0.5"
                  dy="1.5"
                  stdDeviation="1"
                  floodColor="var(--color-text-primary)"
                  floodOpacity="0.4"
                />
              </filter>
            </defs>

            <rect width="100" height="100" fill="var(--color-board)" />

            <rect
              width="100"
              height="100"
              fill="url(#setup-preview-wood-light)"
              opacity="0.2"
            />

            <g
              fill="var(--color-board-line)"
              fontSize="3.4"
              fontWeight="600"
              textAnchor="middle"
            >
              {columns.map((column, index) => (
                <text key={column} x={position(index)} y="7">
                  {column}
                </text>
              ))}

              {indices.map((index) => (
                <text
                  key={index}
                  x="6"
                  y={position(index)}
                  dominantBaseline="middle"
                >
                  {9 - index}
                </text>
              ))}
            </g>

            <g
              fill="none"
              stroke="var(--color-board-line)"
              strokeWidth="0.7"
              strokeLinecap="round"
            >
              {indices.map((index) => (
                <g key={index}>
                  <line
                    x1={position(index)}
                    y1="14"
                    x2={position(index)}
                    y2="86"
                  />

                  <line
                    x1="14"
                    y1={position(index)}
                    x2="86"
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
                  r={column === 4 && row === 4 ? 1.8 : 1.4}
                />
              ))}
            </g>

            {stones.map((stone) => (
              <circle
                key={`${stone.column}-${stone.row}`}
                cx={position(stone.column)}
                cy={position(stone.row)}
                r="4.3"
                fill={`url(#setup-preview-${stone.color}-stone)`}
                filter={`url(#setup-preview-${stone.color}-shadow)`}
              />
            ))}
          </svg>
        </div>

        <figcaption className="mt-3 text-center text-xs font-medium text-text-secondary">
          9×9 · Classic Wood · Player vs AI
        </figcaption>
      </figure>
    </section>
  );
}
