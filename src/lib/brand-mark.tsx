export function BrandMark({ fontSize }: { fontSize: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#020817",
        color: "#a78bfa",
        fontSize,
        fontWeight: 700,
      }}
    >
      T
    </div>
  );
}
