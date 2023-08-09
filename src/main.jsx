import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Intro from "./Intro";
import PDFUpload from "./PDFUpload";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/chat" element={<App />} />
        <Route path="/pdf" element={<PDFUpload />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
