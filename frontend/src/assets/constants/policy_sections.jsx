// Define the content as reusable data
export const sections = [
  {
    title: "1. Who We Are",
    content: (
      <div>
        <p>
          [Your Company Name] is a creative design agency based in [City,
          Nigeria], specializing in graphics and packaging design for clients
          locally and internationally.
        </p>
        <p className="mt-2">
          <strong>Contact Details:</strong> <br />
          [Company Address] <br />
          Email:{" "}
          <a href="mailto:email@example.com" className="text-blue-600">
            email@example.com
          </a>
          <br />
          Phone: [Phone Number] <br />
          Website:{" "}
          <a
            href="https://www.yourcompanywebsite.com"
            className="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.yourcompanywebsite.com
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "2. Personal Data We Collect",
    content: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Identity Information: Name, company name, job title</li>
        <li>Contact Information: Email, phone number, address</li>
        <li>Project Data: Creative input, brand assets, and briefs</li>
        <li>Transactional Data: Billing and payment info</li>
        <li>Website & Technical Data: IP address, browser type, cookies</li>
      </ul>
    ),
  },
  {
    title: "3. Legal Basis for Processing",
    content: (
      <>
        <p>
          We process your personal data under the Nigeria Data Protection Act
          (NDPA) 2023 based on:
        </p>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Your consent</li>
          <li>The performance of a contract</li>
          <li>Our legal obligations</li>
          <li>
            Legitimate interests (e.g., business communication, improvement)
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. How We Use Your Data",
    content: (
      <ul className="list-disc pl-6 space-y-1">
        <li>To deliver graphic and packaging design services</li>
        <li>To communicate with you about ongoing or new projects</li>
        <li>To process payments and manage invoices</li>
        <li>To improve our website experience</li>
        <li>To meet regulatory and legal obligations</li>
      </ul>
    ),
  },
  {
    title: "5. Sharing and Disclosure",
    content: (
      <p>
        We do not sell your personal data. We may share it with trusted service
        providers or authorities if legally required, ensuring all third parties
        comply with NDPA (and GDPR where applicable).
      </p>
    ),
  },
  {
    title: "6. Data Transfers Outside Nigeria",
    content: (
      <p>
        Where personal data is transferred outside Nigeria, we ensure it is
        protected through adequate safeguards and standard contractual clauses
        in line with the NDPA.
      </p>
    ),
  },
  {
    title: "7. Data Security",
    content: (
      <p>
        We use technical and organizational measures, including encryption and
        secure servers, to protect your data against unauthorized access and
        loss.
      </p>
    ),
  },
  {
    title: "8. Data Retention",
    content: (
      <p>
        We keep your data only as long as necessary. Project data may be kept
        for 3–5 years; billing and legal records may be retained for 5–7 years.
      </p>
    ),
  },
  {
    title: "9. Your Rights",
    content: (
      <>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Access and correct your data</li>
          <li>Withdraw consent at any time</li>
          <li>Request deletion ("right to be forgotten")</li>
          <li>Object to or restrict processing</li>
          <li>Complain to the Nigeria Data Protection Commission (NDPC)</li>
        </ul>
        <p className="mt-2">
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:email@example.com" className="text-blue-600">
            email@example.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "10. Cookies and Website Tracking",
    content: (
      <p>
        We use cookies to analyze traffic and enhance user experience. You can
        disable cookies via your browser settings. By continuing to browse our
        site, you consent to our use of cookies.
      </p>
    ),
  },
  {
    title: "11. Children’s Privacy",
    content: (
      <p>
        We do not knowingly collect data from children under 16. If we become
        aware of such data, we will delete it immediately.
      </p>
    ),
  },
  {
    title: "12. Changes to This Policy",
    content: (
      <p>
        We may update this policy from time to time. Updates will be reflected
        on this page with a new "Last Updated" date.
      </p>
    ),
  },
  {
    title: "13. Contact Us",
    content: (
      <p>
        If you have any questions about this Privacy Policy or our data
        practices, please contact us:
        <br />
        <strong>[Your Company Name]</strong>
        <br />
        Email:{" "}
        <a href="mailto:email@example.com" className="text-blue-600">
          email@example.com
        </a>
        <br />
        Phone: [Phone Number]
        <br />
        Website:{" "}
        <a
          href="https://www.yourcompanywebsite.com"
          className="text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.yourcompanywebsite.com
        </a>
      </p>
    ),
  },
];
