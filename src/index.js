import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { ThemeProvider } from "styled-components";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import WithMaterialUI from "./Form.component";
import "./assets/styles/global.scss";

const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
    direction: "rtl",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <CacheProvider value={cacheRtl}>
            <WithMaterialUI />
        </CacheProvider>
    </ThemeProvider>
);
