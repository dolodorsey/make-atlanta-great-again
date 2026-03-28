"use client";
import { useState, useEffect } from "react";

const SB = "https://dzlmtvodpyhetvektfuo.supabase.co";
const SK = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6bG10dm9kcHloZXR2ZWt0ZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1ODQ4NjQsImV4cCI6MjA4NTE2MDg2NH0.qmnWB4aWdb7U8Iod9Hv8PQAOJO3AG0vYEGnPS--kfAo";

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showCapture, setShowCapture] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && localStorage.getItem("maga_access") === "true") {
      setUnlocked(true);
    }
  }, []);

  const handlePassword = (e) => {
    e.preventDefault();
    if (password.trim().toUpperCase() === "FAMILY") {
      setError("");
      setShowCapture(true);
    } else {
      setError("WRONG CODE");
      setTimeout(() => setError(""), 2000);
    }
  };

  const handleCapture = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    try {
      await fetch(`${SB}/rest/v1/maga_early_access`, {
        method: "POST",
        headers: { apikey: SK, Authorization: `Bearer ${SK}`, "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), phone: phone.trim() || null, first_name: name.trim() || null }),
      });
    } catch (err) { console.error(err); }
    localStorage.setItem("maga_access", "true");
    setUnlocked(true);
    setSubmitting(false);
  };

  const skipCapture = () => {
    localStorage.setItem("maga_access", "true");
    setUnlocked(true);
  };

  if (!mounted) return null;
  if (unlocked) return children;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#0A0A0A",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Playfair Display', Georgia, serif",
    }}>
      {/* Grain texture */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {!showCapture ? (
        /* PASSWORD ENTRY */
        <div style={{ textAlign: "center", padding: 40, maxWidth: 420, width: "100%", position: "relative", zIndex: 2 }}>
          {/* Logo area */}
          <div style={{ fontSize: 11, letterSpacing: 8, color: "#C9A84C", fontWeight: 600, marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>
            MAKE ATLANTA GREAT AGAIN
          </div>
          <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", margin: "0 auto 32px" }} />
          
          <div style={{ fontSize: 36, fontWeight: 700, color: "#F0EDE6", marginBottom: 8, lineHeight: 1.1 }}>
            EARLY ACCESS
          </div>
          <div style={{ fontSize: 14, color: "#888", marginBottom: 40, fontFamily: "system-ui, sans-serif", letterSpacing: 0.3 }}>
            This site is currently invite-only. Enter your access code.
          </div>

          <form onSubmit={handlePassword}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="ENTER ACCESS CODE"
              autoFocus
              style={{
                width: "100%", padding: "18px 20px", background: "rgba(255,255,255,0.04)",
                border: error ? "2px solid #E74C3C" : "1px solid rgba(201,168,76,0.3)",
                borderRadius: 12, color: "#F0EDE6", fontSize: 16, fontFamily: "system-ui, sans-serif",
                textAlign: "center", letterSpacing: 6, textTransform: "uppercase",
                outline: "none", boxSizing: "border-box",
              }}
            />
            {error && <div style={{ color: "#E74C3C", fontSize: 12, marginTop: 8, fontFamily: "system-ui, sans-serif", letterSpacing: 2 }}>{error}</div>}
            <button type="submit" style={{
              width: "100%", padding: "16px", marginTop: 16,
              background: "linear-gradient(135deg, #C9A84C, #A8872E)",
              border: "none", borderRadius: 12, color: "#0A0A0A",
              fontSize: 14, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase",
              cursor: "pointer", fontFamily: "system-ui, sans-serif",
            }}>
              UNLOCK
            </button>
          </form>

          <div style={{ fontSize: 11, color: "#444", marginTop: 32, fontFamily: "system-ui, sans-serif", letterSpacing: 1 }}>
            DON'T HAVE A CODE? FOLLOW <a href="https://instagram.com/dolodorsey" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C", textDecoration: "none" }}>@DOLODORSEY</a>
          </div>
        </div>
      ) : (
        /* EMAIL/PHONE CAPTURE POPUP */
        <div style={{ textAlign: "center", padding: 40, maxWidth: 420, width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔓</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#F0EDE6", marginBottom: 8 }}>
            YOU'RE IN
          </div>
          <div style={{ fontSize: 14, color: "#C9A84C", marginBottom: 4, fontFamily: "system-ui, sans-serif", fontWeight: 700, letterSpacing: 2 }}>
            EARLY ACCESS — WELCOME TO THE MOVEMENT
          </div>
          <div style={{ fontSize: 13, color: "#888", marginBottom: 32, fontFamily: "system-ui, sans-serif" }}>
            You got access.
            <br />Drop your info below to get exclusive drops & restocks first.
          </div>

          <form onSubmit={handleCapture}>
            <input
              type="text" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="FIRST NAME"
              style={{
                width: "100%", padding: "14px 16px", background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#F0EDE6",
                fontSize: 14, fontFamily: "system-ui, sans-serif", outline: "none",
                marginBottom: 10, boxSizing: "border-box", letterSpacing: 1,
              }}
            />
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL *"
              required
              style={{
                width: "100%", padding: "14px 16px", background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,168,76,0.3)", borderRadius: 10, color: "#F0EDE6",
                fontSize: 14, fontFamily: "system-ui, sans-serif", outline: "none",
                marginBottom: 10, boxSizing: "border-box", letterSpacing: 1,
              }}
            />
            <input
              type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
              placeholder="PHONE NUMBER"
              style={{
                width: "100%", padding: "14px 16px", background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#F0EDE6",
                fontSize: 14, fontFamily: "system-ui, sans-serif", outline: "none",
                marginBottom: 16, boxSizing: "border-box", letterSpacing: 1,
              }}
            />
            <button type="submit" disabled={submitting} style={{
              width: "100%", padding: "16px",
              background: "linear-gradient(135deg, #C9A84C, #A8872E)",
              border: "none", borderRadius: 12, color: "#0A0A0A",
              fontSize: 14, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase",
              cursor: "pointer", fontFamily: "system-ui, sans-serif",
              opacity: submitting ? 0.6 : 1,
            }}>
              {submitting ? "LOADING..." : "ENTER THE SITE"}
            </button>
          </form>

          <button onClick={skipCapture} style={{
            background: "none", border: "none", color: "#555", fontSize: 11,
            marginTop: 16, cursor: "pointer", fontFamily: "system-ui, sans-serif",
            letterSpacing: 1, textDecoration: "underline",
          }}>
            Skip for now
          </button>
        </div>
      )}
    </div>
  );
}
