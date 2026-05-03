export default function Loading() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "4rem 2rem",
      }}
    >
      {/* Pulsing gold cross / logo placeholder */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "var(--gold-pale)",
          border: "2px solid var(--gold-light)",
          animation: "pulse 1.4s ease-in-out infinite",
        }}
      />

      {/* Skeleton lines */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          width: "100%",
          maxWidth: 480,
          alignItems: "center",
        }}
      >
        {[80, 60, 70].map((w, i) => (
          <div
            key={i}
            style={{
              height: 12,
              width: `${w}%`,
              borderRadius: 4,
              background: "var(--cream)",
              animation: `pulse 1.4s ease-in-out ${i * 0.15}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
      `}</style>
    </div>
  );
}
