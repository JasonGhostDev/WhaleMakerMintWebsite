import React from "react";
import Head from "next/head";
import styles from "../styles/Privacypolicy.module.css";
import Header from "../patterns/header";

const PrivacyPolicy = () => {
  const renderPrivacyPolicy = (
    <div className="mb-15" style={{ marginTop: "3em" }}>
      <p className="text_pri_14 mb-15">Privacy Policy</p>
      <p className="text_sec_14">
        Whalemakernft.com is committed to protecting the privacy of all
        information we collect from our clients and from research participants.
        This policy applies to all client and personal information that we
        collect or use in the course of conducting our business. This policy
        covers all client information and research participant data housed at
        any whalemakernft.com facility or stored on the whalemakernft.com
        network. Anyone who has access to such information or data must follow
        this policy.
      </p>
    </div>
  );

  const renderClientInfo = (
    <div className="mb-15">
      <p className="text_pri_14 mb-15 ">Client Information</p>
      <p className="text_sec_14">
        We treat all information we receive from clients as confidential and do
        not use the information for any purpose other than to fulfill our
        obligations to them. We keep client information secure at all times, and
        prevent the misuse and unauthorized disclosure of it by our employees or
        any third parties.
      </p>
    </div>
  );

  const renderReasearchInfo = (
    <div className="mb-15">
      <p className="text_pri_14 mb-15">Research Participant Information</p>
      <p className="text_sec_14 mb-10">
        All responses to our research are completely confidential. We collect
        data in our studies for research purposes only, and our use of that
        information will be limited to that purpose. Research participant
        answers will not be used by any entity as an aid for sales.
      </p>
      <p className="text_sec_14 mb-10">
        Research participation is voluntary and sample members always have the
        opportunity to decline involvement or to “opt out” of the research after
        agreeing to participate. We do not collect personal information without
        research participant consent.
      </p>
      <p className="text_sec_14 mb-10">
        We do not rent, sell or give personal information to any third party for
        the purpose of directly marketing any products or services. In some
        cases we may need to share personal information with third parties that
        provide research services in support of the research project. Any third
        party that receives personal information is obligated to follow all of
        the same privacy protection regulations as followed by
        whalemakernft.com.
      </p>
      <p className="text_sec_14 mb-10">
        At their request, we give research participants access to the personal
        information we have collected about them. We correct any information
        that is inaccurate or incomplete, change their consent status, or have
        their personal information deleted.
      </p>
    </div>
  );

  const renderChildren = (
    <div className="mb-15">
      <p className="text_pri_14 mb-15">Children</p>
      <p className="text_sec_14">
        We do not contact children under the age of 18 without consent from a
        parent, guardian, or an accredited Institutional Review Board.
      </p>
    </div>
  );

  const renderOptOutSecurity = (
    <div className="mb-15">
      <p className="text_pri_14 mb-15">Opt Out Policy</p>
      <p className="text_sec_14">
        If you wish to be removed from whalemakernft.com’s email or phone
        contact lists, please complete our Contact form.
      </p>
    </div>
  );

  const renderInformationSecurity = (
    <div className="mb-15">
      <p className="text_pri_14 mb-15">Information Security</p>
      <p className="text_sec_14">
        We maintain all necessary physical, electronic and procedural security
        measures to help safeguard client data and personal information. Third
        parties that provide us with support or services may also receive client
        data or personal information, and we require them to maintain security
        measures similar to ours with respect to such information.
      </p>
    </div>
  );

  const renderDataIntegrity = (
    <div className="mb-15">
      <p className="text_pri_14 mb-15"></p>
      <p className="text_sec_14">
        whalemakernft.com will take reasonable steps to ensure the personal data
        is accurate, complete, current and relevant, being used only to fulfill
        our obligations to our clients.
      </p>
    </div>
  );

  const renderSafeHarbor = (
    <div className="mb-15">
      <p className="text_pri_14 mb-15">Safe Harbor</p>
      <p className="text_sec_14">
        Consistent with our commitment to protect personal privacy,
        whalemakernft.com complies with the U.S.-EU Safe Harbor Framework as set
        forth by the U.S. Department of Commerce regarding the collection, use,
        and retention of personal information from European Union member
        countries. Whalemakernft.com has certified that it adheres to the Safe
        Harbor Privacy Principles.
      </p>
    </div>
  );

  const renderCookies = (
    <div className="mb-15">
      <p className="text_pri_14 mb-15">Cookie Policy</p>
      <p className="text_sec_14">What are cookies?</p>
      <p className="text_sec_14 mb-10">
        Cookies are small text files that are stored on your PC, phone or other
        web enabled device when you visit the RCBryan.com website. They are not
        harmful and do not contain any confidential information such as your
        home address, date of birth or credit card details.
      </p>
      <p className="text_sec_14 mb-10">
        Cookies are an essential part of how our site works. Some of these
        cookies are required by our site to enable you to transact whilst other
        cookies enable us to give you an enhanced, personalized web experience.
      </p>
      <p className="text_sec_14 mb-10">
        By using our site, you also consent to the use of these cookies.
      </p>
      <p className="text_sec_14">Are cookies safe?</p>
      <p className="text_sec_14 mb-10">
        Yes. The information stored in cookies is safe and anonymous. They do
        not contain any information which could personally identify you and your
        account security is never compromised. You can find more information
        about cookies at www.allaboutcookies.org and www.youronlinechoices.eu.
      </p>
      <p className="text_sec_14">Can I turn off cookies?</p>
      <p className="text_sec_14 mb-10">
        Whalemakernft.com uses cookies to ensure that we provide the best
        possible online experience. However, as part of our privacy and cookie
        policy, we require your consent to use them. To withdraw your consent,
        or if you want to be notified each time a cookie is about to be used,
        you should amend the settings provided in your web browser to prevent us
        from storing cookies on your computer’s hard drive.
      </p>
      <p className="text_sec_14">Online Tracking</p>
      <p className="text_sec_14 mb-10">
        Whalemakernft.com respects the voluntary nature of research
        participation, and protects our survey respondents’ identities when
        collecting market research responses online. Personal information is
        only collected when the research participant deliberately and
        voluntarily provides it. The only use of their web browsing activity is
        to ensure a stable, error-free survey experience.
      </p>
      <p className="text_sec_14 mb-10">
        The only information we collect from visitors to our corporate website
        whalemakernft.com is the information they voluntarily provide on the
        Contact Us form. Otherwise, the only use of their web browsing activity
        is to generate aggregate traffic reporting statistics for the website.
      </p>
      <p className="text_sec_14">
        Whether or not we receive Do Not Track request signals from a web
        browser, we will never use browsing activity information from our
        website visitors or survey respondents to provide or offer third party
        advertising content.
      </p>
    </div>
  );

  const renderCompliance = (
    <div className="mb-15">
      <p className="text_pri_14 mb-15">Compliance</p>
      <p className="text_sec_14">
        As members of the Council of American Survey Research Organizations
        (CASRO) and European Society of Opinion and Marketing Research (ESOMAR),
        we strive to model our policies according to those guidelines.
      </p>
    </div>
  );

  const renderChangesInPrivacyStatement = (
    <div className="mb-15">
      <p className="text_pri_14 mb-15">Changes in the Privacy Statement</p>
      <p className="text_sec_14">
        We may update this Privacy Statement from time to time by posting an
        amended version of the statement on the whalemakernft.com Website.
        Please refer to this policy regularly. If at any time we decide to use
        personally identifiable information in a different manner then was
        stated at the time it was collected, we will notify you directly via
        email for your consent.
      </p>
    </div>
  );

  const renderLegalObligations = (
    <div className="mb-15">
      <p className="text_pri_14 mb-15">Legal Obligations</p>
      <p className="text_sec_14">
        Under certain circumstances permitted or required by law (for example,
        in connection with law enforcement investigations), we may be required
        to disclose client data or personal information without giving notice.
      </p>
    </div>
  );

  return (
    <div className={styles.privacyPolicy}>
      <Head>
        <title>Privacy Policy | The Whale Maker Nft</title>
        <meta
          name="description"
          content="Privacy Policy | The Whale Maker Nft"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {renderPrivacyPolicy}
      {renderClientInfo}
      {renderReasearchInfo}
      {renderChildren}
      {renderOptOutSecurity}
      {renderInformationSecurity}
      {renderDataIntegrity}
      {renderSafeHarbor}
      {renderCookies}
      {renderCompliance}
      {renderChangesInPrivacyStatement}
      {renderLegalObligations}
    </div>
  );
};

export default PrivacyPolicy;
