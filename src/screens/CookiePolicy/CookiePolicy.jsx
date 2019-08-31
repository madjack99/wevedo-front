import React from 'react';
import { withTranslation } from 'react-i18next';

import { Container } from 'react-bootstrap';

import backgroundImage from '../../assets/images/common-header.png';

import ScreensLayoutMain from '../Layouts/Main';

const CookiePolicy = ({ t }) => (
  <ScreensLayoutMain
    title={t('privacy.jumbotron')}
    backgroundImage={backgroundImage}
  >
    <Container className="document mt-2 mb-2 mt-md-5 mb-md-5">
      <div className="document__block">
        <h2 className="document__name">Wevedo’s Cookie Policy</h2>
        <hr />
      </div>
      <div className="document__block">
        <h3 className="document__title">
          Information about our use of cookies
        </h3>
        <p className="document__text">
          Our website uses cookies to distinguish you from other users of our
          website. This helps us to provide you with an excellent experience
          when you browse our website and also allows us to improve our site. By
          continuing to browse the site, you are agreeing to our use of cookies.
        </p>
        <p className="document__text">
          A cookie is a small file of letters and numbers that we store on your
          browser or your computer’s hard drive, if you agree. Cookies contain
          information that is transferred to your computer’s hard drive.
        </p>
        <p className="document__text">We use the following cookies:</p>
        <ul>
          <li className="document__text">
            <b>Strictly necessary cookies</b>. These are cookies that are
            required for the operation of our website. They include, for
            example, cookies that enable you to log into the secure areas of our
            website.
          </li>
          <li className="document__text">
            <b>Analytical/performance cookies</b>. They allow us to recognise
            and count the number of visitors and to see how visitors move around
            our website when they are using it. This helps us to improve the way
            our website works, for example, it ensures that users are finding
            what they are looking for easily.
          </li>
          <li className="document__text">
            <b>Functionality cookies</b>. These are used to recognise you when
            you return to our website. This enables us to personalise our
            content for you, greet you by name and remember your preferences
            (for example, your choice of language or region).
          </li>
          <li className="document__text">
            <b>Targeting cookies</b>. These cookies record your visit to our
            website, the pages you have visited and the links you have followed.
            We will use this information to make our website and the advertising
            that we display on it, more relevant to your interests. We may also
            share this information with third parties for this purpose.
          </li>
        </ul>
        <p className="document__text">
          We use the following Analytical/performance and Targeting cookies that
          you are able to opt-out off if you wish to do so:
        </p>
        <table className="document__table">
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Why we use it</th>
              <th>Opt Out Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Analytics </td>
              <td>
                The cookie allows us to gather statistical information about how
                our visitors use our website so that we can improve the website
                and learn which parts are most popular to visitors and otherwise
                analyse user behaviour and retargeting.
              </td>
              <td>
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </td>
            </tr>
            <tr>
              <td>Facebook Pixel</td>
              <td>For targeting.</td>
              <td>
                <a
                  href="https://www.facebook.com/help/568137493302217"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://www.facebook.com/help/568137493302217
                </a>
              </td>
            </tr>
            <tr>
              <td>VWO</td>
              <td>
                To test two versions of a web page or app to test their
                performance, in order to check design tweaks and improve
                conversion rates.{' '}
              </td>
              <td>
                <a
                  href="https://vwo.com/opt-out/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://vwo.com/opt-out/
                </a>
              </td>
            </tr>
            <tr>
              <td>Mixpanel</td>
              <td>To analyse user behaviour.</td>
              <td>
                <a
                  href="https://mixpanel.com/optout/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://mixpanel.com/optout/
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="document__text">
          Third parties (including, for example, Facebook and Google) may also
          use cookies, we have no control over this. The cookies they use are
          likely to be analytical/performance cookies or targeting cookies.
        </p>
        <p className="document__text">
          You can block cookies by activating the setting on your browser, this
          allows you to refuse the setting of all or some cookies. However,
          please note, if you use your browser settings to block all cookies
          (including essential cookies) you may not be able to access all or
          parts of our site.
        </p>
      </div>
    </Container>
  </ScreensLayoutMain>
);

export default withTranslation('common')(CookiePolicy);
