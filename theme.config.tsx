import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    // Apply the suffix to all pages except the homepage
    if (asPath !== "/") {
      return {
        // titleTemplate: "%s – Osmanity Docs",
        titleTemplate: "Osmanity Docs | %s",
      };
    }
    // For the homepage, just return the base title or customize as needed
    return {
      title: "Osmanity Docs",
    };
  },
  head: function useHead() {
    return (
      <>
        <meta name="apple-mobile-web-app-title" content="Osmanity Docs" />
        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        /> */}
      </>
    );
  },
  logo: (
    <h1
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        letterSpacing: "1px",
        margin: "10px 0", // Reduced vertical margin
      }}
    >
      <span
        style={{
          fontFamily: "sans-serif",
          fontSize: "1.8rem", // Reduced font size for a more compact look
          fontWeight: "bold",
          letterSpacing: "7px",
          // color: "#3100A3", // Keeping the blue color for a consistent theme
          textTransform: "uppercase",
          marginBottom: "-16px", // Reduced space between 'Osmanity' and 'DOCS'
        }}
      >
        Osmanity
      </span>
      <span
        style={{
          fontFamily: "sans-serif",
          fontSize: "1.4rem", // Same font size to keep it uniform
          fontWeight: "bold",
          letterSpacing: "1px",
          color: "#424242", // A darker color for contrast
        }}
      >
        DOCS
      </span>
    </h1>
  ),
  project: {
    link: "https://github.com/osmanity",
  },
  chat: {
    link: "https://discord.com/osmanity",
  },
  docsRepositoryBase: "https://github.com/osmanity",
  footer: {
    text: "Osmanity - Docs",
  },
  primaryHue: { dark: 265, light: 258 },
  primarySaturation: 100,
};

export default config;
