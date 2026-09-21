import { useEffect } from "react";

const TawkWidget = () => {
  useEffect(() => {
    const propertyId = import.meta.env.VITE_TAWK_PROPERTY_ID;
    const widgetId = import.meta.env.VITE_TAWK_WIDGET_ID;
    if (!propertyId || !widgetId) return;
    const tawkUrl = `https://embed.tawk.to/${propertyId}/${widgetId}`;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = tawkUrl;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    const s0 = document.getElementsByTagName("script")[0];
    s0.parentNode.insertBefore(s1, s0);
  }, []);

  return null;
};

export default TawkWidget;