type Point = readonly [number, number];

type Stone = {
  column: number;
  row: number;
  color: "black" | "white";
};

type DiagramVariant =
  | "board"
  | "placement"
  | "center-liberties"
  | "corner-liberties"
  | "connected-liberties"
  | "atari"
  | "capture"
  | "ko-capture"
  | "ko-recapture"
  | "suicide"
  | "legal-capture"
  | "territory";

type DiagramConfig = {
  size: number;
  label: string;
  stones: readonly Stone[];
  liberties?: readonly Point[];
  lastMove?: Point;
  forbidden?: Point;
  correct?: Point;
};

type GuideBoardDiagramProps = {
  variant: DiagramVariant;
  idPrefix: string;
};

const black = (column: number, row: number): Stone => ({
  column,
  row,
  color: "black",
});

const white = (column: number, row: number): Stone => ({
  column,
  row,
  color: "white",
});

const koStones: readonly Stone[] = [
  white(1, 2),
  white(2, 1),
  white(2, 3),
  black(2, 2),
  black(3, 1),
  black(3, 3),
  black(4, 2),
];

const diagrams: Record<DiagramVariant, DiagramConfig> = {
  board: {
    size: 9,
    label:
      "9 by 9 Go board with coordinates A to J, skipping I, and five star points.",
    stones: [],
  },
  placement: {
    size: 5,
    label:
      "A black stone correctly placed on an intersection and a crossed-out white stone incorrectly placed inside a square.",
    stones: [black(1, 1)],
    correct: [1, 1],
  },
  "center-liberties": {
    size: 5,
    label:
      "A center black stone with four liberties directly above, below, left, and right. Diagonals are not liberties.",
    stones: [black(2, 2)],
    liberties: [
      [2, 1],
      [1, 2],
      [3, 2],
      [2, 3],
    ],
  },
  "corner-liberties": {
    size: 5,
    label: "A white stone at the top-left corner has two liberties.",
    stones: [white(0, 0)],
    liberties: [
      [1, 0],
      [0, 1],
    ],
  },
  "connected-liberties": {
    size: 5,
    label:
      "Two horizontally connected black stones share six distinct liberties.",
    stones: [black(2, 2), black(3, 2)],
    liberties: [
      [2, 1],
      [3, 1],
      [1, 2],
      [4, 2],
      [2, 3],
      [3, 3],
    ],
  },
  atari: {
    size: 5,
    label:
      "A white stone has one remaining liberty on its right. Black can play there to capture.",
    stones: [white(2, 2), black(2, 1), black(1, 2), black(2, 3)],
    liberties: [[3, 2]],
  },
  capture: {
    size: 5,
    label:
      "Black has occupied White's final liberty and the captured white stone has been removed.",
    stones: [black(2, 1), black(1, 2), black(2, 3), black(3, 2)],
    lastMove: [3, 2],
  },
  "ko-capture": {
    size: 5,
    label:
      "After Black's ko capture, the new black stone has exactly one liberty at the point where White was captured.",
    stones: koStones,
    lastMove: [2, 2],
    liberties: [[3, 2]],
  },
  "ko-recapture": {
    size: 5,
    label:
      "White cannot immediately play at the captured point to recapture the isolated black stone and repeat the previous board position.",
    stones: koStones,
    forbidden: [3, 2],
  },
  suicide: {
    size: 5,
    label:
      "White cannot play in the surrounded center because the resulting white group would have no liberties and would capture nothing.",
    stones: [black(2, 1), black(1, 2), black(3, 2), black(2, 3)],
    forbidden: [2, 2],
  },
  "legal-capture": {
    size: 5,
    label:
      "White has legally played at A5, capturing the black stone at B5 and gaining a liberty there.",
    stones: [white(0, 0), white(2, 0), white(1, 1), black(0, 1)],
    correct: [0, 0],
    liberties: [[1, 0]],
  },
  territory: {
    size: 7,
    label:
      "Illustrative territory sketch with black markers in the top-left region and white markers in the bottom-right region. Boundary stones are assumed alive.",
    stones: [
      black(3, 0),
      black(3, 1),
      black(3, 2),
      black(3, 3),
      black(2, 3),
      black(1, 3),
      black(0, 3),
      white(3, 4),
      white(3, 5),
      white(3, 6),
      white(4, 3),
      white(5, 3),
      white(6, 3),
    ],
  },
};

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "J"];

export default function GuideBoardDiagram({
  variant,
  idPrefix,
}: GuideBoardDiagramProps) {
  const config = diagrams[variant];

  const indices = Array.from({ length: config.size }, (_, index) => index);

  const step = 300 / (config.size - 1);
  const position = (index: number) => 50 + index * step;
  const radius = Math.min(step * 0.4, 24);

  const blackGradient = `${idPrefix}-black`;
  const whiteGradient = `${idPrefix}-white`;
  const boardGradient = `${idPrefix}-wood`;

  const stars: readonly Point[] =
    config.size === 9
      ? [
          [2, 2],
          [6, 2],
          [4, 4],
          [2, 6],
          [6, 6],
        ]
      : [];

  const blackTerritory: readonly Point[] = [
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2],
  ];

  const whiteTerritory: readonly Point[] = [
    [4, 4],
    [5, 4],
    [4, 5],
    [5, 5],
  ];

  function cross(point: Point, color: string) {
    const x = position(point[0]);
    const y = position(point[1]);
    const extent = radius * 0.6;

    return (
      <g stroke={color} strokeWidth="4" strokeLinecap="round">
        <line x1={x - extent} y1={y - extent} x2={x + extent} y2={y + extent} />
        <line x1={x + extent} y1={y - extent} x2={x - extent} y2={y + extent} />
      </g>
    );
  }

  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label={config.label}
      focusable="false"
      className="block h-auto w-full rounded-lg shadow-sm"
    >
      <defs>
        <radialGradient id={boardGradient} cx="50%" cy="45%" r="75%">
          <stop offset="0%" stopColor="#e5be84" />
          <stop offset="65%" stopColor="var(--color-board)" />
          <stop offset="100%" stopColor="#c79857" />
        </radialGradient>

        <radialGradient id={blackGradient} cx="32%" cy="28%" r="75%">
          <stop offset="0%" stopColor="#404247" />
          <stop offset="70%" stopColor="var(--color-stone-black)" />
          <stop offset="100%" stopColor="#0f1012" />
        </radialGradient>

        <radialGradient id={whiteGradient} cx="30%" cy="25%" r="80%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="65%" stopColor="var(--color-stone-white)" />
          <stop offset="100%" stopColor="#c7c4be" />
        </radialGradient>
      </defs>

      <rect width="400" height="400" rx="10" fill={`url(#${boardGradient})`} />

      {variant === "territory" && (
        <>
          <rect
            x="40"
            y="40"
            width="135"
            height="135"
            rx="4"
            fill="var(--color-stone-black)"
            fillOpacity="0.12"
          />
          <rect
            x="225"
            y="225"
            width="135"
            height="135"
            rx="4"
            fill="var(--color-stone-white)"
            fillOpacity="0.35"
          />
        </>
      )}

      <g
        stroke="var(--color-board-line)"
        strokeWidth="1.5"
        strokeLinecap="square"
      >
        {indices.map((index) => (
          <g key={index}>
            <line x1="50" y1={position(index)} x2="350" y2={position(index)} />
            <line x1={position(index)} y1="50" x2={position(index)} y2="350" />
          </g>
        ))}
      </g>

      {variant === "board" && (
        <>
          <g
            fill="var(--color-board-line)"
            fontSize="11"
            fontWeight="600"
            textAnchor="middle"
          >
            {indices.map((index) => (
              <g key={index}>
                <text x={position(index)} y="27">
                  {letters[index]}
                </text>
                <text x={position(index)} y="381">
                  {letters[index]}
                </text>
                <text x="25" y={position(index) + 4}>
                  {9 - index}
                </text>
                <text x="377" y={position(index) + 4}>
                  {9 - index}
                </text>
              </g>
            ))}
          </g>

          <g fill="var(--color-board-line)">
            {stars.map(([column, row]) => (
              <circle
                key={`${column}-${row}`}
                cx={position(column)}
                cy={position(row)}
                r="3.5"
              />
            ))}
          </g>

          <g>
            <line
              x1="205"
              y1="200"
              x2="220"
              y2="191"
              stroke="var(--color-text-primary)"
              strokeWidth="1.5"
            />
            <rect
              x="220"
              y="176"
              width="112"
              height="25"
              rx="5"
              fill="var(--color-text-primary)"
            />
            <text
              x="276"
              y="193"
              textAnchor="middle"
              fontSize="11"
              fontWeight="600"
              fill="var(--color-text-inverse)"
            >
              Tengen (Center)
            </text>
          </g>
        </>
      )}

      {config.stones.map((stone) => (
        <g key={`${stone.column}-${stone.row}`}>
          <circle
            cx={position(stone.column) + 1}
            cy={position(stone.row) + 3}
            r={radius}
            fill="#000000"
            fillOpacity="0.18"
          />
          <circle
            cx={position(stone.column)}
            cy={position(stone.row)}
            r={radius}
            fill={`url(#${
              stone.color === "black" ? blackGradient : whiteGradient
            })`}
          />
        </g>
      ))}

      {config.liberties?.map(([column, row]) => (
        <circle
          key={`${column}-${row}`}
          cx={position(column)}
          cy={position(row)}
          r={Math.min(radius * 0.55, 13)}
          fill="var(--color-warning-bg)"
          stroke="var(--color-primary-hover)"
          strokeWidth="2.5"
          strokeDasharray="4 3"
        />
      ))}

      {config.lastMove && (
        <circle
          cx={position(config.lastMove[0])}
          cy={position(config.lastMove[1])}
          r={radius * 0.35}
          fill="none"
          stroke="var(--color-last-move)"
          strokeWidth="3"
        />
      )}

      {config.correct && (
        <circle
          cx={position(config.correct[0])}
          cy={position(config.correct[1])}
          r={radius + 7}
          fill="none"
          stroke="var(--color-success)"
          strokeWidth="3"
          strokeDasharray="5 3"
        />
      )}

      {config.forbidden && (
        <>
          <circle
            cx={position(config.forbidden[0])}
            cy={position(config.forbidden[1])}
            r={radius}
            fill="var(--color-stone-white)"
            fillOpacity="0.45"
            stroke="var(--color-error)"
            strokeWidth="2"
          />
          {cross(config.forbidden, "var(--color-error)")}
        </>
      )}

      {variant === "placement" && (
        <g>
          <circle
            cx={position(2.5)}
            cy={position(2.5)}
            r={radius}
            fill={`url(#${whiteGradient})`}
            opacity="0.65"
          />

          {cross([2.5, 2.5], "var(--color-error)")}

          <rect
            x="58"
            y="164"
            width="137"
            height="27"
            rx="6"
            fill="var(--color-success)"
          />
          <text
            x="126.5"
            y="182"
            fill="var(--color-text-inverse)"
            fontSize="12"
            fontWeight="700"
            textAnchor="middle"
          >
            Correct: intersection
          </text>

          <rect
            x="179"
            y="282"
            width="144"
            height="27"
            rx="6"
            fill="var(--color-error)"
          />
          <text
            x="251"
            y="300"
            fill="var(--color-text-inverse)"
            fontSize="12"
            fontWeight="700"
            textAnchor="middle"
          >
            Wrong: inside square
          </text>
        </g>
      )}

      {variant === "center-liberties" && (
        <>
          {cross([1, 1], "var(--color-error)")}
          {cross([3, 1], "var(--color-error)")}
        </>
      )}

      {variant === "capture" && (
        <text
          x={position(2)}
          y={position(2) + 5}
          textAnchor="middle"
          fontSize="15"
          fontWeight="700"
          fill="var(--color-text-primary)"
        >
          Removed
        </text>
      )}

      {variant === "territory" && (
        <>
          {blackTerritory.map(([column, row]) => (
            <rect
              key={`black-${column}-${row}`}
              x={position(column) - 6}
              y={position(row) - 6}
              width="12"
              height="12"
              fill="var(--color-stone-black)"
            />
          ))}

          {whiteTerritory.map(([column, row]) => (
            <rect
              key={`white-${column}-${row}`}
              x={position(column) - 6}
              y={position(row) - 6}
              width="12"
              height="12"
              fill="var(--color-stone-white)"
              stroke="var(--color-board-line)"
              strokeWidth="1.5"
            />
          ))}
        </>
      )}
    </svg>
  );
}
