import { ImageResponse } from "next/og";

// Set the runtime for edge function
export const runtime = "edge";

// Define the OpenGraphImage component
const OpenGraphImage = async () => {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-xwznF4g0P6uwaCDebyMaFwFU5DnSup.png"
          alt="Orbyte Hosting Logo"
          width={200}
          height={200}
          style={{ marginBottom: 40 }}
        />
        <div
          style={{
            fontSize: 60,
            fontWeight: "bold",
            background: "linear-gradient(to right, #60a5fa, #3b82f6)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 20,
          }}
        >
          Orbyte Hosting
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#93c5fd",
            marginBottom: 40,
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          Premium non-shared server hosting with 99.9% uptime
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "white",
              background: "#1e40af",
              padding: "10px 20px",
              borderRadius: 9999,
            }}
          >
            Starting at £4/month
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
};

// If this is used for metadata or dynamic route handling, you don’t need the GET here directly.
// Instead, Next.js handles the server-side rendering automatically for ImageResponse.

export default OpenGraphImage;
