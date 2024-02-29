/**
 * This code was generated by Builder.io.
 */
import './OrgLandingPage.css';
import React from "react";
import { LoadAndRenderHTML, LoadAndRenderCSS } from "./util";
import Navbar from './Navbar';
import Footer from './Footer';
import fs from 'fs';

function OrgLandingPage() {
  var orgName = window.location.pathname.split('/').pop();

  LoadAndRenderHTML('org-landing-page', '/resources/OrgLandingPage/template/org-landing-page.html');
  LoadAndRenderCSS('/resources/OrgLandingPage/stylesheet/org-landing-page.css');

  return (
    <>
      <div className="div">
        <Navbar />
        <div id='org-landing-page'></div>
        <Footer />
      </div>
    </>
  );
}

export default OrgLandingPage;
