import React, { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/918082057558?text=Hi%20I%20want%20the%20diet%20plan";
const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeD-C3HeRLUMXvZlxt2ji1Lux5KlZVxF1dPjlC_hJA_rE4drw/viewform?usp=dialog";

export default function App() {
  const [code, setCode] = useState("");
  const [activePlan, setActivePlan] = useState(null);
  const [factIndex, setFactIndex] = useState(0);

  const facts = [
    "Protein helps reduce hunger and cravings.",
    "Walking after meals improves digestion and fat loss.",
    "Most belly fat comes from poor diet consistency, not lack of exercise.",
    "Liquid calories like sodas and juices increase fat gain quickly.",
    "Sleeping less than 6 hours can slow down fat loss significantly."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prevIndex) => {
        if (prevIndex >= facts.length - 1) return 0;
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [facts.length]);

  const generateCode = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    setCode("FIT" + random);
  };

  const shareLink = `https://wa.me/?text=Hey! I found this fat loss plan 🔥%0AUse my referral code: ${code}%0ACheck it out: ${FORM_LINK}`;

  const plans = [
    { name: "Fat Loss Starter", desc: "Simple plan to start losing belly fat", price: "₹999" },
    { name: "Lean Transformation", desc: "Most Popular • Faster visible results", price: "₹1499" },
    { name: "Elite Body Upgrade", desc: "Maximum fat loss + physique improvement", price: "₹2499" }
  ];

  return (
    <div style={{
      backgroundImage: "linear-gradient(rgba(11,18,32,0.9), rgba(11,18,32,0.95)), url('https://images.unsplash.com/photo-1554284126-aa88f22d8b74')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      minHeight: "100vh",
      fontFamily: "Arial",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px"
    }}>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        marginTop: "80px",
        maxWidth: "700px"
      }}>
        <h1 style={{
          fontSize: "48px",
          lineHeight: "1.3",
          fontWeight: "800",
          background: "linear-gradient(90deg, #ffffff, #00c6ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Burn Belly Fat Without Disrupting Your Routine
        </h1>

        <p style={{ marginTop: "20px", fontSize: "18px", color: "#cbd5f5" }}>
          A structured diet system for busy professionals who want real results without extreme dieting.
        </p>

        <div style={{
          marginTop: "30px",
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <a href={FORM_LINK} target="_blank" rel="noreferrer">
            <button style={{
              padding: "14px 28px",
              background: "linear-gradient(135deg, #00c6ff, #0072ff)",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              color: "white",
              boxShadow: "0 0 20px rgba(0,198,255,0.5)",
              transition: "0.3s"
            }}>
              Apply for Free Plan
            </button>
          </a>

          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <button style={{
              padding: "14px 28px",
              background: "#25D366",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              color: "white",
              boxShadow: "0 0 15px rgba(37,211,102,0.6)"
            }}>
              Chat on WhatsApp
            </button>
          </a>
        </div>

        <p style={{ marginTop: "15px", fontSize: "14px", color: "#9ca3af" }}>
          Refer a friend & get ₹200 off when they join
        </p>
      </div>

      {/* PRICING */}
      <div style={{ marginTop: "60px", textAlign: "center" }}>

        <div style={{
          display: "inline-block",
          padding: "6px 14px",
          borderRadius: "10px",
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(6px)"
        }}>
          <h2 style={{
            fontSize: "34px",
            fontWeight: "700",
            color: "#ffffff",
            margin: 0
          }}>
            Choose Your Plan
          </h2>
        </div>

        <div style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => setActivePlan(index)}
              style={{
                backdropFilter: "blur(12px)",
                background: activePlan === index
                  ? "rgba(0,198,255,0.2)"
                  : "rgba(255,255,255,0.05)",
                padding: "25px",
                borderRadius: "20px",
                width: "240px",
                cursor: "pointer",
                transition: "0.3s",
                transform: activePlan === index ? "scale(1.05)" : "scale(1)"
              }}
            >
              <h3>{plan.name}</h3>
              <p style={{ marginTop: "10px", color: "#cbd5f5" }}>
                {plan.desc}
              </p>

              <p style={{
                fontSize: "26px",
                marginTop: "15px",
                fontWeight: "bold"
              }}>
                {plan.price}
              </p>

              {activePlan === index && (
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  <button style={{
                    marginTop: "15px",
                    padding: "10px",
                    width: "100%",
                    background: "#25D366",
                    border: "none",
                    borderRadius: "10px",
                    color: "white",
                    cursor: "pointer"
                  }}>
                    Get Started
                  </button>
                </a>
              )}
            </div>
          ))}
        </div>

        <p style={{
          marginTop: "20px",
          color: "#9ca3af",
          fontSize: "14px"
        }}>
          Limited slots available this month
        </p>
      </div>

      {/* FACT BOX */}
      <div style={{
        width: "100%",
        maxWidth: "1000px",
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "40px"
      }}>
        <div style={{
          background: "rgba(255,255,255,0.05)",
          padding: "12px",
          borderRadius: "12px",
          maxWidth: "260px",
          fontSize: "13px",
          backdropFilter: "blur(10px)"
        }}>
          <strong>Did you know?</strong>
          <p style={{ marginTop: "5px", color: "#cbd5f5" }}>
            {facts[factIndex]}
          </p>
        </div>
      </div>

      {/* REFERRAL */}
      <div style={{
        marginTop: "40px",
        textAlign: "center",
        maxWidth: "500px"
      }}>
        <h3>Referral Program</h3>

        <button onClick={generateCode} style={{
          marginTop: "15px",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          background: "#0072ff",
          color: "white",
          cursor: "pointer"
        }}>
          Generate My Referral Code
        </button>

        {code && (
          <>
            <p style={{ marginTop: "15px", fontSize: "18px" }}>
              Your Code: <strong>{code}</strong>
            </p>

            <a href={shareLink} target="_blank" rel="noreferrer">
              <button style={{
                marginTop: "10px",
                padding: "10px 20px",
                background: "#25D366",
                border: "none",
                borderRadius: "8px",
                color: "white",
                cursor: "pointer"
              }}>
                Share on WhatsApp
              </button>
            </a>
          </>
        )}

        <div style={{
          marginTop: "30px",
          background: "rgba(255,255,255,0.05)",
          padding: "20px",
          borderRadius: "12px",
          backdropFilter: "blur(10px)",
          textAlign: "left"
        }}>
          <h4>How it works:</h4>
          <ul style={{
            marginTop: "10px",
            color: "#cbd5f5",
            fontSize: "14px"
          }}>
            <li>1. Generate your referral code</li>
            <li>2. Share it with friends</li>
            <li>3. They use your code when joining</li>
            <li>4. You get ₹200 OFF after they join</li>
          </ul>
        </div>
      </div>

    </div>
  );
}