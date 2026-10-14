import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #8a6bff, #4a24d6)",
          color: "#ffffff",
          borderRadius: 14,
          fontSize: 30,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        DL
      </div>
    ),
    size,
  );
}
