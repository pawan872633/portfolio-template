// src/components/Adsense.jsx
import { useEffect } from "react";

const Adsense = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.setAttribute("data-ad-client", "ca-pub-1793035914862180");
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, []);

  return null;
};

export default Adsense;
