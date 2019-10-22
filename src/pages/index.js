import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// # GÜLBEN ŞAŞ

// ## ABOUT - PORTFOLIO - CONTACT

// Örnek: http://www.nazlioluz.com/

// (KÜÇÜK Bİ GÖRSEL ÜSTÜ - dur arıyorum)
// DIGITAL COMMUNICATIONS & CREATIVE WRITING

// ## who am i?

// my name is Gülben. following my love and award-winning talent for writing, i’ve studied English Translation and Interpretation in Ankara Hacettepe University to be able to achieve the same in English. currently I’m a freelance writer with 8 years of marketing communications experience in several global companies and startups. 

// # what i can do for you?

// English and Turkish Social Media Management ikon: https://fontawesome.com/icons/pencil-alt?style=solid
// English and Turkish Copywriting 
// https://fontawesome.com/icons/pen-alt?style=solid
// Digital Communications Strategy Planning
// ikon: https://fontawesome.com/icons/pen-fancy?style=solid

// what have i done so far? (Portfolio’yu tıklayınca buraya inecek)


// - THESOUL PUBLISHING
//   - Freelance English Author


// - BUCKETLIST 
//   - Digital Communication Strategist
//   - Freelance English and Turkish Copywriter

// - GLORY.BE.BOOM 
//   - Freelance Copywriter 

// - CAREEM
//   - Marketing Manager

// - BLABLACAR
//   - Social Media And MarCom Manager

// - TURKISH AIRLINES
//   - Social Media Manager


// - FOX INTERNATIONAL CHANNELS
//   - Social Media Manager


// how can you reach me? (contact tıklanınca buraya)

// you can e-mail me at gulbensas@gmail.com for inquiries. 

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1 id="g-lben-a-">GÜLBEN ŞAŞ</h1>
    <h2 id="about-portfolio-contact">ABOUT - PORTFOLIO - CONTACT</h2>
    <p>
      Örnek: <a href="http://www.nazlioluz.com/">http://www.nazlioluz.com/</a>
    </p>
    <p>
      (KÜÇÜK Bİ GÖRSEL ÜSTÜ - dur arıyorum) DIGITAL COMMUNICATIONS &amp;
      CREATIVE WRITING
    </p>
    <h2 id="who-am-i-">who am i?</h2>
    <p>
      my name is Gülben. following my love and award-winning talent for writing,
      i’ve studied English Translation and Interpretation in Ankara Hacettepe
      University to be able to achieve the same in English. currently I’m a
      freelance writer with 8 years of marketing communications experience in
      several global companies and startups.{" "}
    </p>
    <h1 id="what-i-can-do-for-you-">what i can do for you?</h1>
    <p>
      English and Turkish Social Media Management ikon:{" "}
      <a href="https://fontawesome.com/icons/pencil-alt?style=solid">
        https://fontawesome.com/icons/pencil-alt?style=solid
      </a>
      English and Turkish Copywriting
      <a href="https://fontawesome.com/icons/pen-alt?style=solid">
        https://fontawesome.com/icons/pen-alt?style=solid
      </a>
      Digital Communications Strategy Planning ikon:{" "}
      <a href="https://fontawesome.com/icons/pen-fancy?style=solid">
        https://fontawesome.com/icons/pen-fancy?style=solid
      </a>
    </p>
    <p>what have i done so far? (Portfolio’yu tıklayınca buraya inecek)</p>
    <ul>
      <li>
        THESOUL PUBLISHING
        <ul>
          <li>Freelance English Author</li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        <p>BUCKETLIST </p>
        <ul>
          <li>Digital Communication Strategist</li>
          <li>Freelance English and Turkish Copywriter</li>
        </ul>
      </li>
      <li>
        <p>GLORY.BE.BOOM </p>
        <ul>
          <li>Freelance Copywriter </li>
        </ul>
      </li>
      <li>
        <p>CAREEM</p>
        <ul>
          <li>Marketing Manager</li>
        </ul>
      </li>
      <li>
        <p>BLABLACAR</p>
        <ul>
          <li>Social Media And MarCom Manager</li>
        </ul>
      </li>
      <li>
        <p>TURKISH AIRLINES</p>
        <ul>
          <li>Social Media Manager</li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        FOX INTERNATIONAL CHANNELS
        <ul>
          <li>Social Media Manager</li>
        </ul>
      </li>
    </ul>
    <p>how can you reach me? (contact tıklanınca buraya)</p>
    <p>you can e-mail me at gulbensas@gmail.com for inquiries. </p>

    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
