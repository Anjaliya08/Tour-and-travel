import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({
  children,
  title,
  description,
  keywords,
  author,
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={description}
        />
        <meta
          name="keywords"
          content={keywords}
        />
        <meta
          name="author"
          content={author}
        />
        <title>{title}</title>
      </Helmet>

      {/* Main Wrapper to Prevent Horizontal Scroll */}
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main
          style={{
            width: "100%",
            maxWidth: "100%",
            overflowX: "hidden",
            margin: 0,
            padding: 0,
          }}
        >
          <Toaster position="top-right" />
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: "Brother's Tour & Travel | Best Tour Packages in India",
  description:
    "Brother's Tour & Travel offers hotel booking, car rental, bus booking, Char Dham Yatra, and customized India tour packages.",
  keywords:
    "tour and travel, char dham yatra, hotel booking, car booking, bus booking, holiday packages, Brother's Tour & Travel",
  author: "Brother's Tour & Travel",
};

export default Layout;