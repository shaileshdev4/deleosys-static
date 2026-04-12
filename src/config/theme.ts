const configThemes = {
  home: {
    // --- BRAND IDENTITY (Orange Primary, Deep Navy Secondary) ---
    brandMainColor: "#F37021",          // [Shipcave Orange] - Primary brand color from the logo icon and "cave" text
    pageGradientLight: "#FFF7F2",       // [Warm White] - Very subtle orange/warm tint for backgrounds
    footerGradientTo: "#1A2B42",        // [Navy Accent] - Lighter navy for gradient transitions
    footerGradientFrom: "#0B1626",      // [Shipcave Deep Navy] - Solid deep navy for footers

    headingTextColor: "#11253E",        // [Shipcave Navy] - Matches the dark "Ship" text
    paragraphTextColor: "#4B5563",      // [Slate Gray] - Standard readable body text

    // --- BUTTON SYSTEM (Primary Action Buttons) ---
    button: {
      bg: "#11253E",                    // [Shipcave Orange] - Primary button color
      text: "#FFFFFF",                  // [White] - Keeps text readable on the orange
      hover:"#F37021" ,                 // [Shipcave Navy] - Hovers to dark navy (matching logo text) for bold contrast
    },

    // --- NAVIGATION & TOP BANNER ---
    brandAccent: "#FFA666",             // [Shipcave Light Orange] - Extracted from the lighter face of the 3D cube
    bannerBg: "#11253E",                // [Shipcave Navy] - Top announcement banner (Navy balances the bright orange well)
    bannerText: "#FFFFFF",              // [White] - Text on the banner
    dropdownHoverBg: "#FFF0E5",         // [Pale Orange] - Background for menu items on hover

    // --- SECTION STYLING (Cards and Background Elements) ---
    sectionAccent: "#11253E",           // [Shipcave Navy] - Used for strong sections to ground the design
    heroBlob: "rgba(243, 112, 33, 0.15)", // [Transparent Orange] - Subtle decorative element
    accentLight: "#FFFFFF",             // [White] - Card backgrounds
    accentBorder: "#FFDDC4",            // [Orange Tint Border] - Light warm borders for cards/inputs
    sectionLightBackground: "rgba(255, 255, 255, 0.9)",

    // --- HOME PAGE FORM (Tracking Form Overlays) ---
    // Creates a sleek, professional dark gradient for the form overlay
    formOverlayStart: "rgba(17, 37, 62, 0.95)",   // [Shipcave Navy] - Top of the gradient
    formOverlayMid: "rgba(13, 28, 48, 0.9)",      // [Dark Navy Blend] - Transition
    formOverlayEnd: "#08101C",                    // [Deep Navy] - Bottom solid color
  },
};

export default configThemes;