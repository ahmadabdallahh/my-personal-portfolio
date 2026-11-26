import { ImageResponse } from "next/og";

export const alt = "Ahmad Abdallah — Front-End Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 80,
                    background: "#09090b",
                    color: "#f4f4f5",
                }}
            >
                <div style={{ display: "flex", fontSize: 28, color: "#f59e0b", letterSpacing: 2 }}>
                    PORTFOLIO
                </div>
                <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 24 }}>
                    Ahmad Abdallah
                </div>
                <div style={{ display: "flex", fontSize: 40, color: "#b4b4bd", marginTop: 12 }}>
                    Front-End Developer
                </div>
                <div
                    style={{
                        display: "flex",
                        width: 96,
                        height: 6,
                        background: "#f59e0b",
                        marginTop: 40,
                    }}
                />
            </div>
        ),
        size,
    );
}
