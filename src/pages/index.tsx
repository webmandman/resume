import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daniel Mejia&apos;s Resume</title>
        <meta name="description" content="Daniel Mejia&apos;s Resume. Experienced Web Developer with a demonstrated history of working in IT for the civil engineering industry, and personal care ecommerce industry. Advanced proficiency in Javascript, HTML, CSS, Coldfusion, and SQL - all of which are backed by at least 8+ years of experience. Expert in creating full stack applications for enterprises and consumers." />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className="flex min-h-screen flex-col items-center sm:p-16 zigzag3d font-monse text-gray-600">
        <div className="container flex flex-col shadow-xl shadow-[#b6b6b6] bg-white p-8 sm:p-16 pt-8">
          <div className=" text-3xl sm:text-7xl font-semibold uppercase text-center pb-10 "><span className="text-gray-900">Daniel</span> <span className="">Mejia</span></div>
          <div className=" text-xl font-bold text-center uppercase border-t-2 border-b-2 border-gray-200 p-4">Web Developer</div>
          <div className="pt-8 pb-8 border-b-2 border-gray-200 lg:flex lg:flex-row">
            <div className="pb-8 lg:flex-none w-80 lg:border-r-2 lg:border-gray-200 lg:pr-16 lg:mr-16">
              <div className=" font-bold text-xl uppercase text-gray-700 pb-4">Contact</div>
              <div className="flex items-center "><span className="material-symbols-outlined mr-2 print:hidden">alternate_email</span><a href="mailto:webmandman@gmail.com">webmandman@gmail.com</a></div>
              <div className="flex items-center "><span className="material-symbols-outlined mr-2 print:hidden">badge</span><a href="https://github.com/webmandman">github.com/webmandman</a></div>
              <div className="flex items-center "><span className="material-symbols-outlined mr-2 print:hidden">web</span><a href="https://resume-phi-henna.vercel.app/">resume-phi-henna.vercel.app</a></div>
            </div>
            <div className="lg:grow">
              <div className=" font-bold text-xl uppercase text-gray-700 pb-4">Profile</div>
              <div className="">Experienced Web Developer with a demonstrated history of working in IT for the civil engineering industry, and personal care ecommerce industry. Advanced proficiency in Javascript, HTML, CSS, Coldfusion, and SQL - all of which are backed by at least 8+ years of experience. Expert in creating full stack applications for enterprises and consumers.</div>
            </div>
          </div>
          <div className="pt-8 pb-8 border-b-2 border-gray-200 lg:flex lg:flex-row">
            <div className="pb-8 lg:flex-none md:w-80 lg:border-r-2 lg:border-gray-200 lg:pr-16 lg:mr-16">
              <div className="border-b-2 pb-8">
                <div className=" font-bold text-xl uppercase text-gray-700">Skills</div>
                
                <div className="pt-4 font-bold text-gray-800 underline">Programming Languages</div>
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Coldfusion/CFML</li>
                  <li>SQL</li>
                </ul>

                <div className="pt-4 font-bold text-gray-800 underline">Libraries and Frameworks</div>
                <ul>
                  <li>Coldbox MVC</li>
                  <li>Angular</li>
                  <li>Angular Material</li>
                  <li>Tailwind</li>
                  <li>React.js</li>
                  <li>NextJs</li>
                  <li>Telerik Kendo UI</li>
                  <li>Bootstrap</li>
                  <li>Microsoft Graph API</li>
                  <li>Google Maps API</li>
                  <li>Amazon S3 API</li>
                  <li>Expensify API</li>
                  <li>Smarty Streets API</li>
                  <li>Twilio SendGrid Email/SMS API</li>
                  <li>UKG Ultipro API/Soap</li>
                </ul>

              </div>
              <div className="border-b-2 pb-8 pt-8">
                <div className=" font-bold text-xl uppercase text-gray-700">Education</div>
                
                <div className="pt-4 font-bold text-gray-800 underline">Self-taught</div>
                <div>Web Design and Programming · (2002 - 2006)</div>
              </div>
            </div>
            <div className="lg:grow">
              <div className=" font-bold text-xl uppercase text-gray-700">Experience</div>

              <div className="pt-4 font-bold text-gray-800 underline">Psomas</div>
              <div>9 years 1 month</div>
              
              <div className="font-bold text-gray-800 pt-4">Web Team Manager</div>
              <div className="text-sm">January 2023 - Present (3 months)</div>
              <div className="text-sm">Santa Ana, California, United States</div>
              <div className="pt-2">Work closely with stakeholders of Psomas to improve accounting and business analysis. Create tools and reports to help leaders of the company manage their teams and finances. Manage a small team of web developers. </div>
              
              <div className="font-bold text-gray-800 pt-4">Senior Web Developer</div>
              <div className="text-sm">August 2021 - March 2023 (1 year 8 months)</div>
              <div className="text-sm">Santa Ana, California, United States</div>
              <div className="pt-2">Plan, Design, Build and deliver production ready applications.  Work closely with other senior developers and leaders of the company.</div>

              <div className="font-bold text-gray-800 pt-4">Web Developer</div>
              <div className="text-sm">March 2014 - January 2022 (7 years 11 months)</div>
              <div className="text-sm">Santa ana, california</div>
              <div className="pt-2">Designed, created, and maintained full-stack websites at the enterprise level. Skilled in  Coldfusion, SQL, Javascript, HTML, and CSS. In-depth knowledge of many third-party APIs. Worked closely with IT, Marketing, Accounting, and Operations. Established solutions-based team workflows. </div>
              
              <div className="pt-4 font-bold text-gray-800 underline">Nikken International, Inc.</div>
              <div>7 years 8 months</div>

              <div className="font-bold text-gray-800 pt-4">Web Developer</div>
              <div className="text-sm">August 2008 - March 2014 (5 years 8 months)</div>
              <div className="text-sm">Irvine, CA</div>
              <div className="pt-2">Designed, created, and maintained full-stack websites for consumers world-wide. Skilled in Coldfusion, SQL, Javascript, HTML, and CSS. In-depth knowledge of many third-party APIs. Worked closely with IT, Marketing, Accounting, and Operations. Established solutions-based team workflows.</div>
              <div className="font-bold text-gray-800 pt-4">Web Designer</div>
              <div className="text-sm">August 2006 - August 2008 (2 years 1 month)</div>
              <div className="text-sm">Irvine, CA</div>
              <div className="pt-2">Designed, created, and maintained enterprise media and websites. Designed, created, and maintained consumer-based websites. Worked closely with IT and Marketing department. Skilled in Flash, ActionScript, 3d modeling and design, Photoshop, HTML, Javascript, and CSS.</div>
            </div>
          </div>

          
        </div>
      </main>
    </>
  );
};

export default Home;
