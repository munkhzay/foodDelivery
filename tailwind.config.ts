// import type { Config } from "tailwindcss";
// type plugins = { plugins: any[] };

// const config: Config = {
//   // content: [
//   //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//   //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//   //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   // ],
//   // theme: {
//   //   extend: {
//   //     colors: {
//   //       background: "var(--background)",
//   //       foreground: "var(--foreground)",
//   //     },
//   //   },
//   // },
//   plugins: [require("daisyui")],
// };
// export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       background: "var(--background)",
  //       foreground: "var(--foreground)",
  //     },
  //   },
  // },
  plugins: [require("daisyui")],
};

export default config;
