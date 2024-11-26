import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { TransacAILogo } from "./components/transacai-logo";
import { Footer } from "./components/footer";

const config: DocsThemeConfig = {
  logo: <TransacAILogo />,
  logoLink: "/",
  project: {
    link: "https://github.com/transac-ai/transacai-docs",
  },
  docsRepositoryBase: "https://github.com/transac-ai/transacai-docs/tree/main",
  footer: {
    text: "Transac AI © 2024",
    component: <Footer />,
  },
  primaryHue: 153,
  primarySaturation: 50,
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s - Transac AI",
    };
  },
  gitTimestamp: null,
  head: (
    <>
      <meta name="description" content="Transac AI - A project by Oconva" />
      <meta name="twitter:card" content="" />
      <meta name="twitter:site" content="" />
      <meta name="og:title" content="Transac AI" />
      <meta name="og:description" content="Transac AI - A project by Oconva" />
      <meta
        name="apple-mobile-web-app-title"
        content="Transac AI - A project by Oconva"
      />
      <link rel="icon" href="images/transac-logo.svg" />
      <link rel="mask-icon" href="images/transac-logo.svg" color="#000000" />
      <link
        rel="apple-touch-icon"
        type="image/svg+xml"
        href="images/transac-logo.svg"
      />
    </>
  ),
  editLink: {
    component: null,
  },
};

export default config;
