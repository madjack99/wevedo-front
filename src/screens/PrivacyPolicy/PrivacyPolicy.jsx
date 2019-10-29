import React from 'react';
import { withTranslation } from 'react-i18next';

import { Container } from 'react-bootstrap';

import backgroundImage from '../../assets/images/common-header.png';

import ScreensLayoutMain from '../Layouts/Main';

const PrivacyPolicy = ({ t }) => (
  <ScreensLayoutMain
    title={t('privacy.jumbotron')}
    backgroundImage={backgroundImage}
  >
    <Container className="document mt-2 mb-2 mt-md-5 mb-md-5">
      <div className="document__block">
        <h2 className="document__name">{t('privacy.wevedosPrivacyPolicy')}</h2>
        <hr />
        <p className="document__text">
          At Wevedo, your privacy is of the utmost importance to us and we are
          very committed to protecting your personal data. This privacy notice
          tells you about how we look after your personal data when you visit
          our website, use our app or otherwise communicate with us and it also
          tells you about your privacy rights and how the law protects you.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">
          1. Important information and who we are
        </h3>
        <h4 className="document__subtitle">Purpose of this privacy notice</h4>
        <p className="document__text">
          This privacy notice aims to give you information on how Wevedo
          collects and processes your personal data through your use of our
          website, app or any other way you choose to communicate or interact
          with us.
        </p>
        <p className="document__text">
          This website is not intended for children and we do not knowingly
          collect data relating to children.
        </p>
      </div>
      <div className="document__block">
        <h4 className="document__subtitle">Controller</h4>
        <p className="document__text">
          Wevedo Limited is the data controller of your personal data. We are
          responsible for its security and for ensuring that we use it only for
          the sole purposes outlined in this Privacy Notice.
        </p>
        <p className="document__text">
          If you have any questions about this privacy notice, including any
          requests to exercise your legal rights, please contact us using the
          details set out below.
        </p>
      </div>
      <div className="document__block">
        <h4 className="document__subtitle">Contact Details</h4>
        <p className="document__text">
          If you need to get in contact with us for any reason in regards to
          your personal data, please email us at{' '}
          <a href="mailto:info@wevedo.com">info@wevedo.com</a>.
        </p>
        <p className="document__text">
          We are: Wevedo Limited of The Counting House, 9 High Street,
          Herts,HP23 5TE.
        </p>
        <p className="document__text">
          We are registered with Companies House and our company number is:
          11380790.
        </p>
        <p className="document__text">
          If you are ever unhappy with the way we have handled your personal
          data, you have the right to complain to the Information
          Commissioner&apos;s Office (ICO), the UK supervisory authority for
          data protection issues (
          <a
            href="https://www.ico.org.uk"
            target="_blank"
            rel="noreferrer noopener"
          >
            www.ico.org.uk
          </a>
          ). We would, however, appreciate the chance to deal with your concerns
          about data protection before you approach the ICO so please contact us
          in the first instance.
        </p>
      </div>
      <div className="document__block">
        <h4 className="document__subtitle">
          Changes to the privacy notice and your duty to inform us of changes
        </h4>
        <p className="document__text">
          This version was last updated on 28th August 2019.
        </p>
        <p className="document__text">
          It is important that the personal data we hold about you is accurate
          and up to date. Please let us know if your personal data changes
          during your relationship with us.
        </p>
      </div>
      <div className="document__block">
        <h4 className="document__subtitle">Third-party links</h4>
        <p className="document__text">
          Our website may include links to third-party websites, plug-ins and
          applications. Clicking on those links or enabling those connections
          may allow third parties to collect or share data about you. We do not
          control these third-party websites and are not responsible for their
          privacy statements. When you leave our website, we encourage you to
          read the privacy notice of every website you visit.
        </p>
      </div>

      <div className="document__block">
        <h3 className="document__title">2. The data we collect about you</h3>
        <p className="document__text">
          Personal data, or personal information means any information about an
          individual from which that person can be identified. It does not
          include data where the identity has been removed (anonymous data). We
          may collect, use, store and transfer different kinds of personal data
          about you, which we have grouped together as follows:
        </p>
      </div>
      <div className="document__block">
        <h4 className="document__subtitle">For Wevedo Users:</h4>
        <p className="document__text">
          <b>Identity Data</b>, this includes name, email, phone number, and if
          you choose to log in through this method it will also include Facebook
          and/or Google profile data.
        </p>
        <p className="document__text">
          <b>Profile Data</b>, this includes photos, usernames and passwords,
          feedback and survey responses, reviews of suppliers and Instagram
          profile data.
        </p>
        <p className="document__text">
          <b>Wedding Data</b>, this includes wedding dates, engagement dates,
          wedding budgets, spouse’s name, wedding roles, wedding locations and
          supplier bookings.
        </p>
        <p className="document__text">
          <b>Guest List Data</b>, this includes (in respect of your wedding
          guests) names, residential addresses, phone numbers, email addresses
          and gender.
        </p>
        <p className="document__text">
          <b>Correspondence Data</b>, this includes email correspondence, and
          Identity Data.
        </p>
        <p className="document__text">
          <b>Usage Data</b>, this includes information about how you use our
          website and app.
        </p>
        <p className="document__text">
          <b>Technical Data</b>, this includes internet protocol (IP) addresses,
          your login data, browser types and versions, time zone settings and
          locations, browser plug-in types and versions, operating systems and
          platforms and other technology on the devices you use to access our
          website.
        </p>
        <p className="document__text">
          <b>Marketing Data</b>, this includes your preferences in how you
          receive marketing from us.
        </p>
        <p className="document__text">
          <b>Sensitive Data</b>, this includes details about race or ethnicity,
          religious or philosophical beliefs, sex life, sexual orientation,
          information about your health and genetic and biometric data. We will
          only collect this information if you choose to give it to us because
          you think it helps you to arrange and organise your wedding and take
          into account different guests particular needs.
        </p>
        <p className="document__text">
          Please note, where you provide us with personal data belonging to
          another person (including sensitive data), we do not control that
          personal data and will act only as processor of that personal data
          inline with our obligations which you can find in our terms and
          conditions.
        </p>
        <p className="document__text">
          We also collect, use and share <b>Aggregated Data</b> such as
          statistical or demographic data for any purpose. Aggregated Data may
          be derived from your personal data but is not considered personal data
          under the law as this data does <b>not</b> directly or indirectly
          reveal your identity. For example, we may aggregate your Usage Data to
          calculate the percentage of users accessing a specific website
          feature. However, if we combine or connect Aggregated Data with your
          personal data so that it can directly or indirectly identify you, we
          treat the combined data as personal data which will be used in
          accordance with this privacy notice.
        </p>
      </div>
      <div className="document__block">
        <h4 className="document__subtitle">For Wevedo Suppliers:</h4>
        <p className="document__text">
          <b>Contact Data</b>, this includes supplier names, business websites,
          business email addresses, business phone numbers and business
          addresses.
        </p>
        <p className="document__text">
          <b>Profile Data</b>, this includes your username and password,
          feedback and survey responses.
        </p>
        <p className="document__text">
          <b>Usage Data</b>, this includes information about how you use our
          website.
        </p>
        <p className="document__text">
          <b>Technical Data</b>, this includes your internet protocol (IP)
          address, your login data, browser type and version, time zone setting
          and location, browser plug-in types and versions, operating systems
          and platforms and other technology on the devices you use to access
          this website.
        </p>
        <p className="document__text">
          <b>Marketing Data</b>, this includes your preferences in how you
          receive marketing from us.
        </p>
        <p className="document__text">
          <b>Correspondence Data</b>, this includes email correspondence and
          Contact Data.
        </p>
        <p className="document__text">
          <b>Financial Data</b>, this includes any information about your bank
          account and any payments made to or from us.
        </p>
        <p className="document__text">
          We also collect, use and share <b>Aggregated Data</b> such as
          statistical or demographic data for any purpose. Aggregated Data may
          be derived from your personal data but is not considered personal data
          in law as this data does <b>not</b> directly or indirectly reveal your
          identity. For example, we may aggregate your Usage Data to calculate
          the percentage of users accessing a specific website feature. However,
          if we combine or connect Aggregated Data with your personal data so
          that it can directly or indirectly identify you, we treat the combined
          data as personal data which will be used in accordance with this
          privacy notice.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">
          3. How is your personal data collected?
        </h3>
        <p className="document__text">
          We use many different methods to collect data from and about you,
          including through:
        </p>
        <p className="document__text">
          <b>Direct interactions</b>. We collect the majority of your data when
          you opt to give this to us on our app or on our website, by email or
          otherwise. The data that you choose to provide to us helps you to
          organise your wedding if you are a customer or helps customers to
          understand your services if you are a supplier.
        </p>
        <p className="document__text">
          <b>Automated technologies or interactions</b>. As you interact with
          our website, we may automatically collect Technical Data about your
          equipment, browsing actions and patterns. We collect this personal
          data by using cookies, server logs and other similar technologies. We
          may also receive Technical Data about you if you visit other websites
          (like Facebook and Google) that employ our cookies. You can set your
          browser to refuse all or some browser cookies, or to alert you when
          websites set or access cookies. If you disable or refuse cookies,
          please note that some parts of our website or app may become
          inaccessible or not function properly. For more information about the
          cookies we use, and how to disable them, please refer to our cookie
          policy.
        </p>
        <p className="document__text">
          <b>Third parties or publicly available sources.</b>
        </p>
        <p className="document__text">We may receive:</p>
        <p className="document__text">
          Technical Data about you from various third parties (as governed by
          our cookie policy) and as set out below:
        </p>
        <ul>
          <li className="document__text">
            analytics providers such as Google with servers based outside the
            EU;
          </li>
          <li className="document__text">
            advertising networks such as Facebook pixel with servers based
            outside the EU; and
          </li>
          <li className="document__text">
            search information providers such as Google, based outside the EU.
          </li>
        </ul>
        <p className="document__text">
          Contact Data from publicly available sources if you are a supplier.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">4. How we use your personal data</h3>
        <p className="document__text">
          We will only use your personal data when the law allows us to. Most
          commonly, we will use your personal data in the following
          circumstances:
        </p>
        <p className="document__text">
          To provide the services to you in line with our website terms and
          conditions; or
        </p>
        <p className="document__text">
          Where it is deemed necessary for our legitimate interests (or those of
          a third party) and we have made a careful assessment that your
          interests and fundamental rights do not override those interests.
        </p>
        <p className="document__text">
          Where we need to comply with a legal or regulatory obligation.
        </p>
        <p className="document__text">
          Please contact us in the first instance, if you need details about the
          specific legal ground we are relying on, to process your personal
          data.
        </p>
        <p className="document__text">
          In terms of your Sensitive Data, we will only collect this from you
          where you provide this information voluntarily because you think that
          it helps you to organise and arrange your wedding more thoroughly.
          Where you do so, we will take this as a clear indication signifying
          your agreement to the processing of your Sensitive Data. Please note,
          you may withdraw our right to process your Sensitive Data on your
          behalf at any time.{' '}
        </p>
        <p className="document__text">
          Where you provide us with personal data belonging to another person
          (including any Sensitive Data such as health needs), we do not control
          that personal data and will act only as processor of that personal
          data in accordance with our obligations set out in our terms and
          conditions.
        </p>
      </div>
      <div className="document__block">
        <h4 className="document__subtitle">Emails – Opting out</h4>
        <p className="docuement__text">
          We strive to do our utmost to provide you with choices regarding
          certain personal data uses, particularly in regards to the emails you
          receive from us.
        </p>
        <p className="docuement__text">
          If you are a customer, we may use your Identity, Profile or Contact
          Data to send you reminder emails as part of our service to help with
          the administration of your account and to assist with managing your
          wedding. We automatically sign you up to this when you become a user
          of Wevedo, as we think it is in our legitimate interests to offer you
          this complete service. You are free to opt-out from receiving these
          emails at any time.
        </p>
        <p className="docuement__text">
          As a user of Wevedo, you will also receive marketing communications
          from us, if you have requested information from us or created an
          account with us and you have not opted out of receiving that
          marketing.
        </p>
        <p className="docuement__text">
          We will make sure we have your express opt-in consent before we share
          your personal data with any other company for marketing purposes.
        </p>
        <p className="docuement__text">
          You can ask us or third parties to stop sending you marketing messages
          or reminder emails at any time by following the opt-out links on any
          marketing message or reminder emails sent to you or by contacting us
          at any time.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">
          5. Disclosures of your personal data
        </h3>
        <p className="document__text">
          From time to time, we may need to share your personal data with the
          parties set out below for the purposes set out in paragraph 4 above.
        </p>
        <p className="document__text">
          Service providers acting as processors, based in the UK who provide IT
          support, IT backup, data storage, email management and system
          administration services.
        </p>
        <p className="document__text">
          Analytics and advertising service providers who have servers based in
          the UK for the purpose of analysing user behaviour & retargeting.
        </p>
        <p className="document__text">
          Third parties to whom we may choose to sell, transfer, or merge parts
          of our business or our assets. Alternatively, we may seek to acquire
          other businesses or merge with them. If a change happens to our
          business, then the new owners may use your personal data in the same
          way as set out in this privacy notice.
        </p>
        <p className="document__text">
          We require all third parties to respect the security of your personal
          data and to treat it in accordance with the law.
        </p>
        <p className="document__text">
          At no time, do not allow our third-party service providers to use your
          personal data for their own purposes and only permit them to process
          your personal data for specified purposes and in accordance with our
          instructions.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">6. International Transfers</h3>
        <p className="document__text">
          Please note, that a number of our service providers processing your
          personal data on our behalf have servers based outside the European
          Economic Area (<b>EEA</b>) so their processing of your personal data
          will involve a transfer of data outside the EEA.
        </p>
        <p className="document__text">
          Whenever we transfer your personal data out of the EEA, we always
          ensure a similar degree of protection is afforded to it by ensuring
          that either:
        </p>
        <ul>
          <li className="document__text">
            we have a specific contract with that processor in a form approved
            by the European Commission which ensures that particular service
            provider gives your personal data the same protection it has in
            Europe; or
          </li>
          <li className="document__text">
            if the provider is based outside the UK, it is a member of a data
            protection body, which requires them to provide similar protection
            to personal data shared between Europe and that country.
          </li>
        </ul>
        <p className="document__text">
          Please feel free to contact us if you want further information on the
          specific mechanism used by us when transferring your personal data out
          of the EEA.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">7. Data Security</h3>
        <p className="document__text">
          We have in place the appropriate security measures to prevent your
          personal data from being accidentally lost, used or accessed in an
          unauthorised way, altered or disclosed. In addition to this, we limit
          access to your personal data to those employees, agents, contractors
          and other third parties who have a business need to know. They will
          only process your personal data on our instructions and they are
          subject to a duty of confidentiality.
        </p>
        <p className="document__text">
          We have in place very rigid procedures, to deal with any suspected
          personal data breach and will notify you and any applicable regulator
          of a breach where we are legally required to do so.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">8. Data Security</h3>
        <h4 className="document__subtitle">
          How long will you use my personal data for?
        </h4>
        <p className="document__text">
          We will only keep your personal data for as long as necessary to
          fulfil the purposes we collected it for, including for the purposes of
          satisfying any legal, accounting, or reporting requirements.
        </p>
        <p className="document__text">
          For us to determine the appropriate retention period for personal
          data, we consider the amount, nature, and sensitivity of the personal
          data, the potential risk of harm from unauthorised use or disclosure
          of your personal data, the purposes for which we process your personal
          data and whether we can first achieve those purposes through other
          means, and the applicable legal requirements.
        </p>
        <p className="document__text">
          In some circumstances you can ask us to delete your data: see Request
          erasure below for further information.
        </p>
        <p className="document__text">
          In some circumstances we may anonymise your personal data (so that it
          can no longer be associated with you) for research or statistical
          purposes in which case we may use this information indefinitely
          without further notice to you.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">9. Your Legal Rights</h3>
        <h4 className="document__subtitle">
          You have the right in certain circumstances to:
        </h4>
        <table className="document__table">
          <tbody>
            <tr>
              <td>
                <b>
                  Request access to your personal data (commonly known as a
                  “data subject access request”).
                </b>
              </td>
              <td>
                This will enable you to receive a copy of the personal data we
                hold about you and to check that we are lawfully processing it.
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Request correction of the personal data that we hold about
                  you.
                </b>
              </td>
              <td>
                This will enable you to have any incomplete or inaccurate data
                we hold about you corrected, though we may need you to verify
                the accuracy of the new data you provide to us.
              </td>
            </tr>
            <tr>
              <td>
                <b>Request erasure of your personal data.</b>
              </td>
              <td>
                This will enable you to ask us to delete or remove personal data
                where there is no good reason for us continuing to process it.
                It’s your right to ask us to delete or remove your personal data
                where you have successfully exercised your right to object to
                processing (see below), where we may have processed your
                information unlawfully or where we are required to erase your
                personal data to comply with local law. Please note however,
                that we may not always be able to comply with your request of
                erasure for legal reasons, which will be notified to you, where
                applicable, at the time of your request.
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Object to the processing of your personal data where we are
                  relying on a legitimate interest (or those of a third party)
                  and there is something about your particular situation which
                  makes you want to object to processing on this ground as you
                  feel it impacts on your fundamental rights and freedoms.
                </b>
              </td>
              <td>
                You also have the right to object where we are processing your
                personal data for direct marketing purposes. In some cases, we
                may demonstrate that we have strong legitimate grounds to
                process your information and these will override your rights and
                freedoms.
              </td>
            </tr>
            <tr>
              <td>
                <b>Request restriction of processing of your personal data.</b>
              </td>
              <td>
                This will enable you to ask us to suspend the processing of your
                personal data in the following scenarios: (a) if you want us to
                establish the data’s accuracy; (b) where our use of the data is
                found to be unlawful but you do not want us to erase it; (c)
                where you need us to hold the data even if we no longer require
                it as you need it for legal purposes; or (d) you have objected
                to our use of your data but we need to verify whether we have
                overriding legitimate grounds to use it.
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Request the transfer of your personal data to you or to a
                  third party.
                </b>
              </td>
              <td>
                We will always, when asked, provide to you, or a third party you
                have chosen, your personal data in a structured, commonly used,
                machine-readable format. Please note that this right only
                applies to automated information which you initially gave
                consent for us to use or where we used the information to
                perform a contract with you.
              </td>
            </tr>
          </tbody>
        </table>
        <h4 className="document__subtitle">No fee usually required</h4>
        <p className="document__text">
          You will not have to pay a fee to access your personal data (or to
          exercise any of the other rights).
        </p>
        <h4 className="document__subtitle">What we may ask of you</h4>
        <p className="document__text">
          We may need to request specific information from you to help us
          confirm your identity and ensure your right to access your personal
          data (or to exercise any of your other rights). This is purely a
          security measure to ensure that personal data is not disclosed to any
          person who has no right to receive it. We may also contact you to ask
          you for further information in regards to your request to help speed
          up our response.
        </p>
        <h4 className="document__subtitle">Time limit to respond</h4>
        <p className="document__text">
          We always make every effort to respond to all legitimate requests
          within one month. Occasionally it may take us longer than a month if
          your request is particularly complex or you have made a number of
          requests or you have contacted us during a busy period. In this case,
          we will notify you and keep you updated.
        </p>
      </div>
    </Container>
  </ScreensLayoutMain>
);

export default withTranslation('common')(PrivacyPolicy);
