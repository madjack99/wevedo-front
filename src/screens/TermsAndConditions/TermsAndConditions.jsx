import React from 'react';
import { withTranslation } from 'react-i18next';

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import backgroundImage from '../../assets/images/common-header.png';

import ScreensLayoutsMain from '../Layouts/Main';

const TermsAndConditions = ({ t }) => (
  <ScreensLayoutsMain
    title={t('terms.jumbotron')}
    backgroundImage={backgroundImage}
  >
    <Container className="document mt-2 mb-2 mt-md-5 mb-md-5">
      <div className="document__block">
        <h2 className="document__name">Wevedo’s Terms & Conditions</h2>
        <hr />
      </div>
      <div className="document__block">
        <h3 className="document__title">Introduction</h3>
        <p className="document__text">
          These are the terms and conditions for the use of wevedo.com
          (Website). The Website is operated by Wevedo Limited (Wevedo, we, us
          and our). We are a private limited company registered in England. Our
          registered company number is 11380790 and our registered office is
          at,The Counting House, 9, High Street, Tring, Herts, England, HP23
          5TE.
        </p>
        <p className="document__text">
          These terms govern your access to and use of the services. In order to
          use our website or other services as operated and made available by us
          from time to time you have to agree to these terms and you acknowledge
          that these terms form a legally-binding contract between us and you.
          If you do not want to adhere to these terms, then you should not use
          the website or the Services.
        </p>
        <p className="document__text">
          Your use of the Website and the Services will be subject to these
          terms and conditions and by using the Website you agree to be bound by
          them. The services we offer through the Website are provided subject
          to these terms and conditions.
        </p>
        <p className="document__text">
          We reserve the right to change these terms and conditions from time to
          time by changing them on the Website. These terms and conditions were
          last updated on 29th August 2019.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">Our service</h3>
        <p className="document__text">
          We provide a comprehensive online wedding planning resource service
          which helps users to find inspiration, plan and co-ordinate their
          wedding (“Services“) more easily. It is currently free for you to
          register with us, set up a general profile and use our Website and
          Services to help you with the planning of your wedding day. The
          Service is available to both individuals who are planning their
          wedding day and also to venues and other suppliers (“Suppliers“) who
          wish to be listed in the Supplier directories as part of the Service
          (together “users“). We may in the future charge fees for certain
          premium features of our Service and you will have the opportunity to
          review and accept such fees prior to incurring any costs before opting
          in.
        </p>
        <p className="document__text">
          Please note, we do not control the material submitted to the Website
          by users and, in particular, we do not control the ratings and reviews
          that our users give of Suppliers.
        </p>
        <p className="document__text">
          We do not vet any Supplier in advance, this completely down to you and
          you acknowledge and agree that you, and not we, are solely and
          completely responsible for any conclusions you may draw from any
          Supplier profile, rating or review of any Supplier appearing on our
          Website.
        </p>
        <p className="document__text">
          We warrant that we will provide the Service with reasonable skill. You
          acknowledge and agree that you are completely responsible for all use
          you make of any Service.
        </p>
        <p className="document__text">
          Except as set out herein, to the fullest extent permitted by law, all
          implied warranties, practices, conditions, assumptions of fitness for
          a particular purpose or other terms of any kind are hereby excluded.
          To the fullest extent permitted by law, we accept no liability for any
          loss or damage of any kind incurred as a result of you or anyone else
          using or relying on this Service.
        </p>
        <p className="document__text">
          We will always comply with all applicable laws in the European Union
          (and the United Kingdom) (the “Jurisdiction”), If you are accessing
          the Website from outside the Jurisdiction, please be aware that Wevedo
          has not taken affirmative action to comply with local laws which may
          be applicable to you as a consumer. To the fullest extent permitted by
          law, we exclude our liability for any loss or damage incurred as a
          result of your reliance on consumer laws outside the UK.
        </p>
        <p className="document__text">
          We do not accept any responsibility or liability for issues arising
          with your wedding , whether directly or indirectly caused by the
          Suppliers, tools or other functionality made available to you via our
          Website.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">Registration</h3>
        <p className="document__text">
          In order to access and use certain Services and functions offered
          throughout the Website, you must register with and set up a general
          profile with us. In doing so, please make sure that all of the details
          that you give to us are accurate and complete, and are kept current
          and up-to-date whilst you continue to use the Website and the
          Services. You must contact us promptly to inform us of any changes to
          this information.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">Usernames and passwords</h3>
        <p className="document__text">
          Upon you signing up for an account with us, you will be asked to
          create a username and password. You must keep your username and
          password confidential at all times and use it only to access and use
          your account and not for any other purpose. You are the only
          authorised user of your account, unless you have expressly specified
          otherwise, and accordingly you must not disclose your username and/or
          password to anyone else. You need to contact us immediately upon
          discovering any unauthorised use of your account or error in the
          operation of your username and/or password. If there is a breach of
          these terms and conditions and/or any use of your account by anyone to
          whom you disclose your username and/or password, it will be treated as
          if the breach or use had been carried out by you personally, and will
          not relieve you of your obligations to us in any way. Any such use
          will be attributed to you in accordance with these terms and
          conditions.
        </p>
        <p className="document__text">
          Usernames and passwords are our property and we reserve the right to
          alter or replace them at any time at our sole discretion.
        </p>
        <p className="document__text">
          You must stop using and delete the password from any of your records
          upon expiry or termination of your account with us for whatever
          reason.
        </p>
        <p className="document__text">
          Please notify us immediately via our Website if anyone else has become
          aware of your ID in circumstances in which there is a risk of misuse
          or if you have any reason to believe that there is any other risk of
          any unauthorised use of your account.
        </p>
        <p className="document__text">
          You agree that we may, in our sole discretion, suspend or terminate
          your account (or any part thereof) or use of the Service and remove
          and discard any content within the Service, for any reason, including,
          without limitation:
        </p>
        <ul>
          <li className="document__text">
            for lack of use or if we have reason to believe that you have
            violated or acted inconsistently with these terms and conditions;
          </li>
          <li className="document__text">
            if any details you provide for the purposes of registering as a user
            are or may be false; or
          </li>
          <li className="document__text">
            if there is found to be any other risk to the security or integrity
            of our Website or the Services.
          </li>
        </ul>
      </div>
      <div className="document__block">
        <h3 className="document__title">Supplier responsibilities</h3>
        <p className="document__text">
          If you are a Supplier using the Website and the Services, the
          following terms set out in this paragraph shall also apply to you in
          addition to the rest of these terms and conditions. You should only
          register as a Supplier in your capacity as acting wholly or mainly in
          the course of a business, trade or profession. As part of our
          agreement with you, you confirm that this is the case and warrant that
          you are the genuine owner of the good and/or services which you
          supply, or are authorised on behalf of the Supplier concerned (for
          example if you are an employee of or consultant engaged by the
          Supplier concerned), to register on the Website or to claim the
          relevant listing and profile on the Website. We reserve the right to
          delete your user account at our discretion if we reasonably determine
          and find that you are not the authentic owner of a Supplier business.
        </p>
        <p className="document__text">
          You will need to complete your profile in order to be listed on the
          Website during the registration process, and complete all necessary
          information relevant to your business. You are solely responsible for
          all information listed in your profile page and any other information
          you provide to us in connection with your profile and listing. We may,
          in the future, choose to charge fees for certain premium features of
          our Service and you will have the opportunity to review and accept
          such fees prior to incurring any costs before opting in.
        </p>
        <p className="document__text">
          We may impose limits on certain features of the Website or restrict
          your access to parts or all of it without notice or liability.
        </p>
        <p className="document__text">
          If you are a photographer (or any other Supplier) sending images or
          other content to us for use either in Supplier listings (whether for
          your own listing or that of another Supplier) you must comply with the
          following:
        </p>
        <p className="document__text">
          You warrant that you have full permission and are entitled to submit
          the photographs or other content to us for use on the Website, in
          respect of all rights in the work concerned, including ownership,
          copyright, moral rights, the rights of people, names, trademarks,
          designs or works of art depicted in the photographs or other content,
          and that no further authorization or conditions are required in order
          for us to use the photographs or other content including, for example,
          from the bride and groom or any other individual identified in such
          photographs.
        </p>
        <p className="document__text">
          You warrant that you have full permission to enter and reproduce an
          image of the person(s) featured in the photograph (if applicable). If
          a photograph or other content submitted to us contains an image of a
          minor (person under the age of 18) then you hereby confirm that you
          have obtained the consent of the minors’ parent or legal guardian.
        </p>
        <p className="document__text">
          You agree that your photograph or other content which is submitted to
          us shall be subject to the terms of the grant of licence to us in the
          User Content paragraph below.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">What you are allowed to do</h3>
        <p className="document__text">
          Unless you are a Supplier, you may only use the Website for
          non-commercial use and only in accordance with these terms and
          conditions. You may retrieve and display content from the Website on a
          computer screen, print and copy individual pages and, subject to the
          next section, store such pages in electronic form. Additional terms
          may also apply to certain features, parts or content of the Website
          and, where they apply, will be displayed on-screen or accessible via a
          link.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">What you are not allowed to do</h3>
        <p className="document__text">
          Except to the extent expressly set out in these terms and conditions,
          this is what you are not allowed to:
        </p>
        <ul>
          <li className="document__text">
            store pages of or datasets from the Website on a server or other
            storage device connected to a network or create an electronic
            database by systematically or otherwise downloading and storing any
            or all of the pages of the Website;
          </li>
          <li className="document__text">
            remove or change any content of the Website at any time or attempt
            to circumvent security or interfere with the proper working of the
            Website or the servers on which it is hosted;
          </li>
          <li className="document__text">
            create links to the Website from any other website, without our
            prior written consent;
          </li>
          <li className="document__text">
            link to any photographs from the Website without our permission;
          </li>
          <li className="document__text">
            inject or subject the Website to any adware, malware or viruses;
          </li>
          <li className="document__text">
            create a copy of the Website or a standalone website which
            impersonates the Website;
          </li>
          <li className="document__text">
            attempt to access the Service database, user information, passwords
            or other records relating to the Website except in the normal course
            of using the Service;
          </li>
          <li className="document__text">
            attempt to modify, translate, adapt, edit, decompile, disassemble,
            or reverse engineer any software programs used by Wevedo in
            connection with the Website or the Services; and
          </li>
          <li className="document__text">
            reproduce, duplicate or copy content, look and feel, pictures, or
            any of our other copyright works and Intellectual property.
          </li>
        </ul>
        <p className="document__text">
          You must only use the Website and anything available from the Website
          for lawful purposes (complying with all applicable laws and
          regulations), in a responsible manner, and not in a way that might
          damage our name or reputation or that of any of our affiliates.
        </p>
        <p className="document__text">
          All rights granted to you under these terms and conditions will be
          terminated immediately in the event that you are found to be in breach
          of any of them.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">Access to the Website</h3>
        <p className="document__text">
          It is your sole responsibility to ensure your equipment (computer,
          laptop, netbook, tablet or other mobile device) meets all the
          necessary technical specifications to enable you to access and use the
          Website and is compatible with the Website.
        </p>
        <p className="document__text">
          We may, from time to time, restrict access to certain features, parts
          or content of the Website, or the entire Website, to users who have
          registered with us.
        </p>
        <p className="document__text">
          We do not guarantee the continuous, uninterrupted or error-free
          operability of the Website. There may be times when certain features,
          parts or content of the Website, or the entire Website, become
          unavailable (whether on a scheduled or unscheduled basis) or are
          modified, suspended or withdrawn by us, in our sole discretion,
          without notice to you. You agree that we will not be liable to you or
          to any third party for any unavailability, modification, suspension or
          withdrawal of the Website, or any features, parts or content of the
          Website at any time.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">Intellectual property rights</h3>
        <p className="document__text">
          All intellectual property rights in any content of the Website
          (including text, graphics, software, photographs and other images,
          videos, sound, trademarks and logos) are owned by us or our licensors
          (for example photographers who have granted us a license to show their
          photographs). Except for when expressly set out here, nothing in these
          terms and conditions gives you any rights in respect of any
          intellectual property owned by us or our licensors and you acknowledge
          that you do not acquire any ownership rights by downloading content
          from the Website. In the event you print off, copy or store pages from
          the Website (only as permitted by these terms and conditions), you
          must ensure that any copyright, trade mark or other intellectual
          property right notices contained in the original content are
          reproduced.
        </p>
        <p className="document__text">
          We take the misappropriation of our intellectual property rights by
          any user or other third party seriously and will take steps to enforce
          our legal rights, to the highest degree, in the event we reasonably
          deem any such misappropriation has occurred through our use of the
          Service or otherwise on the Website.
        </p>
        <p className="document__text">
          By submitting any User Submissions (as defined below) you agree to the
          following:
        </p>
        <ul>
          <li className="document__text">
            if and to the extent that any content provided by you contains any
            material that is subject to a third party’s intellectual property
            rights or other proprietary rights, you are fully authorized to
            upload all such permissions to upload all such material (including
            any required permissions from photographers and any individuals
            identified in any material submitted to us) and to grant us, our
            affiliates and licensors all of the licence rights set out in these
            terms; and
          </li>
          <li className="document__text">
            you will have to indemnify us, our affiliates and licensees, from
            all claims, liabilities and losses that arise from:
          </li>
          <li className="document__text">
            any claim that any content provided by you infringes the
            intellectual property rights of a third party or is otherwise
            illegal or unlawful;
          </li>
          <li className="document__text">
            any breach by you of these terms; and
          </li>
          <li className="document__text">
            any breach of these terms by any person accessing the Website under
            your log-in details.
          </li>
        </ul>
      </div>
      <div className="document__block">
        <h3 className="document__title">User Content</h3>
        <p className="document__text">
          The Website may, from time to time, allow you to upload user-generated
          content (User Content) and may also allow you to communicate that
          content, either to selected recipients or in public areas, such as
          comments pages and/or message boards (collectively User Content
          Areas). We do not have any control over the material submitted to User
          Content Areas (collectively User Submissions), nor are User Content
          Areas actively moderated by us in any way. You are solely responsible
          for the content of your User Submissions as submitted by you and
          acknowledge that all User Submissions express the views of their
          respective authors, and not our views.
        </p>
        <p className="document__text">
          If you participate in any User Content Areas, you must:
        </p>
        <ul>
          <li className="document__text">
            keep all User Submissions relevant to the purpose of the User
            Content Area and the nature of any topic;
          </li>
          <li className="document__text">
            not submit any User Submission that is unlawful, threatening,
            abusive, libellous, pornographic, obscene, vulgar, indecent,
            offensive or which infringes on the intellectual property rights or
            other rights of any third party in any way;
          </li>
          <li className="document__text">
            not submit any User Submission that contains any viruses and/or
            other code that has contaminating or destructive elements at any
            time;
          </li>
          <li className="document__text">
            not submit any User Submission containing any form of advertising;
            and
          </li>
          <li className="document__text">
            not impersonate, or misrepresent an affiliation with, any person or
            entity.
          </li>
        </ul>
        <p className="document__text">
          You agree that, by submitting any User Submission, you grant us and
          our affiliates a perpetual, irrevocable, worldwide, non-exclusive,
          royalty-free and fully sub-licensable right and licence to use,
          reproduce, modify, adapt, publish, translate, create derivative works
          from, distribute, perform and display such User Submission (in whole
          or part) and/or to incorporate it in other works in any form, media or
          technology, and you waive any moral rights you may have in, or to be
          identified as the author, of such User Submission. Whilst we do not
          pre-screen User Submissions, we reserve the right, in our sole
          discretion, to delete, edit or modify any User Submission submitted by
          you and/or to close any topic, at any time without prior notice to
          you.
        </p>
        <p className="document__text">
          You may not use our Service solely for storage purposes and in the
          event that your user account is deactivated (either by us or you),
          deleted or blocked in accordance with these terms and conditions, your
          User Submissions or other content which has been uploaded to the
          Website will no longer be available and we will not take steps to
          retrieve such content for you.
        </p>
        <p className="document__text">
          Complaints about the content of any User Submission must be sent to{' '}
          <a href="mailto:info@wevedo.com">info@wevedo.com</a> and must contain
          details of the specific User Submission giving rise to the complaint
          or grievance.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">Acceptable Use</h3>
        <p className="document__text">
          You agree that you will not, nor allow anyone else to use your account
          or any Service:
        </p>
        <ul>
          <li className="document__text">
            to access or attempt to access any Service which you are not
            authorized to access (whether by purchase, subscription or
            otherwise);
          </li>
          <li className="document__text">
            to interfere with or disrupt the provision of any Service or use any
            Service in a way that interferes with anyone else’s use of any
            Service;
          </li>
          <li className="document__text">
            to further any criminal or fraudulent activity or to impersonate
            another person;
          </li>
          <li className="document__text">
            to breach the rights of any person (including, but not limited to
            rights of privacy and intellectual property rights);
          </li>
          <li className="document__text">
            otherwise in breach of any acceptable use guidelines that we may
            issue from time to time;
          </li>
          <li className="document__text">
            to attempt to modify, translate, adapt, edit, decompile,
            disassemble, or reverse engineer any software used by Wevedo in
            connection with the Website or the Services; and
          </li>
          <li className="document__text">
            to assist or allow reproduction, duplication or copying of content,
            look and feel, pictures, or other copyright works and Intellectual
            property of Bridebook.
          </li>
        </ul>
        <p className="document__text">
          We will determine, in our discretion, whether there has been a breach
          of acceptable use through your use of our Website. When a breach of
          these terms and conditions is found, we may take such legal action as
          we deem appropriate.
        </p>
        <p className="document__text">
          Failure to comply with acceptable use constitutes as a material breach
          of these Terms and Conditions upon which you are permitted to use our
          Website, and may result in our taking all or any of the following
          actions:
        </p>
        <p className="document__text">
          Immediate, temporary or permanent withdrawal of your right to use our
          Website;
        </p>
        <p className="document__text">
          Immediate, temporary or permanent removal of any posting or material
          uploaded by you to our Website;
        </p>
        <p className="document__text">Issue a warning to you.</p>
        <p className="document__text">
          Bring legal proceedings against you for reimbursement of all costs on
          an indemnity basis (including, but not limited to, reasonable
          administrative and legal costs) resulting from the breach or take
          further legal action against you; and
        </p>
        <p className="document__text">
          Disclose such information to law enforcement authorities as we deem
          reasonably necessary.
        </p>
        <p className="document__text">
          We exclude liability for actions taken in response to breaches of
          acceptable use. The responses described in these terms and conditions
          are not limited, and we may take any other action we reasonably deem
          appropriate.
        </p>
        <p className="document__text">
          Companies, partnerships, and other entities or businesses providing or
          intending to provide a Similar Offering to Wevedo, as well as their
          employees, agents, directors, or contractors, whether based in the UK
          or anywhere in the world, do not have permission to use or access the
          Website or Services for the purposes of establishing, offering,
          providing, improving or comparing the Similar Offering. Any breach of
          this condition, without our prior written permission, will be a breach
          of Acceptable Use and Wevedo reserves all rights in relation to such a
          breach, including to remove or refuse access and/or to suspend or
          disable profiles or accounts or further action.
        </p>
        <p className="document__text">
          A Similar Offering means the provision of online wedding planning
          tools, wedding supplier directories, or confusingly similar services
          to Bridebook, internationally or in the UK.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">Your personal information</h3>
        <p className="document__text">
          Use of your personal information submitted to or via the Website is
          governed by our <Link to="privacy-policy">Privacy Policy</Link>, which
          is updated from time to time.
        </p>
        <p className="document__text">
          We are extremely committed to protecting your privacy. We will always
          comply with the requirements of the data protection legislation in
          force from time to time and the current data protection principles in
          relation to personal data and will maintain internal records in order
          to be able to demonstrate this. We have in place appropriate technical
          and organisational measures to ensure the security of all data
          submitted to us. As a user of our Services, you acknowledge the
          processing by us of your personal data to enable us to carry out the
          Services. We may ask you to sign further documents permitting us to
          process personal data for the purposes of providing you with the
          Services and we may not be able to provide those services until we
          have received these particular signed documents or certain data from
          you.
        </p>
        <p className="document__text">
          We will only collect “sensitive” personal data if you choose to
          provide it to us. We take particular care of this information.
          Sensitive personal data includes information about race or ethnicity,
          religious or philosophical beliefs, sex life, sexual orientation,
          political opinions or information about an individual’s health. Where
          you choose to provide us with “sensitive” personal data, we will take
          this as a clear affirmative action signifying your agreement to the
          processing of “sensitive” personal data for the provision of our
          Services. Please note, you can ask us to stop processing this type of
          data at any time.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">
          Data/information belonging to others
        </h3>
        <p className="document__text">
          Where you provide us with information or data (including sensitive
          personal data) that relates to another individual, you have in affect
          agreed that you have all necessary authority or consent of that
          individual to enable us to process their personal data (including
          their “sensitive” personal data to the extent that it is provided) in
          the provision of the Services. Unless you ask us to do so sooner, when
          your user account is deleted, we will delete all reference to data
          held about these individuals unless the law requires us to keep such
          data within our records. Please note, you can also choose to delete
          this data yourself at any time.
        </p>
        <p className="document__text">
          We will only process this personal data belonging to others, on your
          written instructions, unless the law requires us to do otherwise and
          we will only transfer personal data outside the European Economic Area
          and the party receiving that personal data will treat it to the same
          standard as the laws dictate in the UK. For more information about the
          basis on which we transfer personal data outside the EEA, please see
          our Privacy Policy
        </p>
        <p className="document__text">
          We will do our utmost to inform you as soon as we can if we become
          aware of any breach of personal data that might affect you or anyone
          who’s data you have inputted on our system.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">External links</h3>
        <p className="document__text">
          The Website may, from time to time, include links to external sites,
          which may include links to third party offers and promotions. We
          include these to provide you with access to information, products or
          services that you may find useful or interesting. We are not
          responsible for the content of these sites or for anything provided by
          them and do not guarantee that they will be continuously available.
          The fact that we include links to such external sites does not imply
          any endorsement of, or association with, their operators or promoters
          in any way.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">General</h3>
        <p className="document__text">
          Nothing in these terms and conditions shall limit or exclude our
          liability to you for death or personal injury caused by our negligence
          or for fraudulent misrepresentation or any other liability that may
          not, under English law, be limited or excluded.
        </p>
        <p className="document__text">
          These terms and conditions are governed by English law, and you agree
          that any dispute between you and us regarding them or the Website will
          only be dealt with by the English courts, provided that, if you are a
          consumer and not a business user and live in a part of the United
          Kingdom other than England, the applicable law of that part of the
          United Kingdom will govern and any dispute will only be dealt with by
          the courts there. Nothing shall prevent us from bringing proceedings
          to protect our intellectual property rights before any competent court
          at any time.
        </p>
        <p className="document__text">
          If any provision or part-provision of this agreement is or becomes
          invalid, illegal or unenforceable, it shall be deemed modified to the
          minimum extent necessary to make it valid, legal and enforceable. If
          such modification is not possible, the relevant provision or
          part-provision shall be deemed deleted. Any modification to or
          deletion of a provision or part-provision under this <b>clause</b>{' '}
          shall not affect the validity and enforceability of the rest of this
          agreement.
        </p>
        <p className="document__text">
          If one party gives notice to the other of the possibility that any
          provision or part-provision of this agreement is invalid, illegal or
          unenforceable, the parties shall negotiate in good faith to amend such
          provision so that, as amended, it is legal, valid and enforceable,
          and, to the greatest extent possible, achieves the intended commercial
          result of the original provision.
        </p>
      </div>
      <div className="document__block">
        <h3 className="document__title">Contacting us</h3>
        <p className="document__text">
          Please submit any questions you have about these terms and conditions
          or any problems concerning the Website by any of the following means:
        </p>
        <ul>
          <li className="document__text">
            by email to <a href="mailto:info@wevedo.com">info@wevedo.com</a> or
          </li>
          <li className="document__text">
            via the <Link to="contact">Contact</Link> button on the Website;
          </li>
        </ul>
      </div>
    </Container>
  </ScreensLayoutsMain>
);

export default withTranslation('common')(TermsAndConditions);
