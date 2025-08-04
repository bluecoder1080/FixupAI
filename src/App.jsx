import Home from "./Pages/Home";
import Layout from "./Pages/Layout";

import React from "react";
import { Route, Routes } from "react-router-dom";
import WriteArticle from "./Pages/WriteArticle";
import BlogTitle from "./Pages/BlogTitle";
import Community from "./Pages/Community";
import RemoveBaground from "./Pages/RemoveBaground";
import RemoveObject from "./Pages/RemoveObject";
import ReviewResume from "./Pages/ReviewResume";
import Dashboard from "./Pages/Dashboard";
import GenerateImages from "./Pages/GenerateImages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog-titles" element={<BlogTitle />} />
          <Route path="community" element={<Community />} />
          <Route path="remove-background" element={<RemoveBaground />} />
          <Route path="remove-object" element={<RemoveObject />} />
          <Route path="review-resume" element={<ReviewResume />} />
          <Route path="generate-images" element={<GenerateImages />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
