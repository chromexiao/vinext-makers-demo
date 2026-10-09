import { defineConfig } from "vite";
import vinext from "vinext";

export default defineConfig({
  plugins: [vinext()],
  // .mov is not a Vite asset type by default; include it so the build emits the file.
  assetsInclude: ["**/*.mov"],
});
