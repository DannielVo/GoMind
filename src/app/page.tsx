export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg-primary p-10">
      <h1 className="text-4xl font-bold text-text-primary">GoMind AI</h1>

      <p className="mt-4 text-text-secondary">Challenge your mind with Go.</p>

      <button
        className="
          mt-6
          rounded-lg
          bg-primary
          px-6 py-3
          font-semibold
          text-text-inverse
          transition-colors
          hover:bg-primary-hover
        "
      >
        Play Now
      </button>
    </main>
  );
}
