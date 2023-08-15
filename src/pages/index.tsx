import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daniel Mejia&apos;s Resume</title>
        <meta name="description" content="Daniel Mejia&apos;s Resume. Experienced Web Developer with a demonstrated history of working in IT for the civil engineering industry, and personal care ecommerce industry. Advanced proficiency in Javascript, HTML, CSS, Coldfusion, and SQL - all of which are backed by at least 8+ years of experience. Expert in creating full stack applications for enterprises and consumers." />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className="flex w-min min-[375px]:w-auto flex-col items-center sm:p-16 zigzag3d font-monse text-gray-600">
        <div className="container flex flex-col shadow-xl shadow-[#b6b6b6] bg-white p-8 sm:p-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-center place-items-center gap-2 md:gap-7  text-4xl sm:text-5xl md:text-7xl font-semibold uppercase text-center pb-10">
            
            <Image className="rounded-full w-24 h-24 md:w-40 md:h-40 lg:w-56 lg:h-56" src="https://www.github.com/webmandman.png" alt="Daniel Mejia's profile picture" width={150} height={150}/>
            
            <div className=""><span className="text-gray-900">Daniel</span> <span className="">Mejia</span></div>
          </div>
          <div className=" text-xl font-bold text-center uppercase border-t-2 border-b-2 border-gray-200 p-4">Web Applications Development Manager</div>
          <div className="pt-8 pb-8 border-b-2 border-gray-200 lg:flex lg:flex-row">
            <div className="pb-8 lg:flex-none w-96 lg:border-r-2 lg:border-gray-200 lg:pr-16 lg:mr-16">
              <div className=" font-bold text-xl uppercase text-gray-700 pb-4">Contact</div>
              <div className="flex items-center "><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" className='mr-2 print:hidden'><path d="M480 939.999q-75.258 0-141.876-28.51-66.619-28.509-115.861-77.752-49.243-49.242-77.752-115.861-28.51-66.618-28.51-141.876 0-76.218 28.51-142.356 28.509-66.139 77.752-115.381 49.242-49.243 115.861-77.752 66.618-28.51 141.876-28.51 76.218 0 142.356 28.51 66.139 28.509 115.381 77.752 49.243 49.242 77.752 115.381 28.51 66.138 28.51 142.356v50.769q0 50.614-35.616 85.922-35.615 35.308-86.657 35.308-35.65 0-62.419-18.731t-43.692-50.193q-25.692 31.308-58.923 50.116-33.23 18.808-76.956 18.808-71.493 0-121.614-50.265-50.121-50.264-50.121-121.96t50.265-121.735q50.264-50.038 121.96-50.038t121.735 50.198Q651.999 504.398 651.999 576v50.769q0 27.692 20.192 48.462Q692.384 696 721.999 696q29.616 0 49.808-20.769Q792 654.461 792 626.769V576q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91h192v51.999H480ZM480 696q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg><a href="mailto:webmandman@gmail.com">webmandman@gmail.com</a></div>
              <div className="flex items-center "><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" className='mr-2 print:hidden'><path d="M180.309 939.999q-27.008 0-45.658-18.65-18.65-18.65-18.65-45.658V468.309q0-27.008 18.65-45.658 18.65-18.65 45.658-18.65h223.692V264q0-21.622 15.188-36.811 15.189-15.188 36.811-15.188h48q21.622 0 36.811 15.188 15.188 15.189 15.188 36.811v140.001h223.692q27.008 0 45.658 18.65 18.65 18.65 18.65 45.658v407.382q0 27.008-18.65 45.658-18.65 18.65-45.658 18.65H180.309Zm0-51.999h599.382q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847V468.309q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H555.999q0 24.23-15.958 38.114-15.957 13.885-39.887 13.885h-40.308q-23.93 0-39.887-14.035Q404.001 479.93 404.001 456H180.309q-5.385 0-8.847 3.462-3.462 3.462-3.462 8.847v407.382q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462Zm65.845-83.539h227.692v-16.846q0-16.091-8.539-29.59-8.538-13.498-23.615-21.025-19.615-7.615-39.731-11.923-20.115-4.308-41.961-4.308t-41.961 4.308q-20.116 4.308-39.731 12.394-15.077 6.76-23.615 20.352-8.539 13.591-8.539 29.792v16.846ZM576 755.691h144V696H576v59.691ZM360 696q22.307 0 38.077-15.769 15.769-15.769 15.769-38.077 0-22.307-15.769-38.076-15.77-15.769-38.077-15.769t-38.077 15.769q-15.769 15.769-15.769 38.076 0 22.308 15.769 38.077Q337.693 696 360 696Zm216-48h144v-59.691H576V648ZM456 456h48V264h-48v192Zm24 216Z"/></svg><a href="https://github.com/webmandman">github.com/webmandman</a></div>
              <div className="flex items-center "><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" className='mr-2 print:hidden'><path d="M180.309 843.999q-27.008 0-45.658-18.662-18.65-18.662-18.65-45.686V372.025q0-27.024 18.65-45.524t45.658-18.5h599.382q27.008 0 45.658 18.662 18.65 18.662 18.65 45.686v407.626q0 27.024-18.65 45.524t-45.658 18.5H180.309Zm0-51.999h405.692V664.307H168v115.384q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Zm457.69 0h141.692q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V484.616H637.999V792ZM168 612.309h418.001V484.616H168v127.693Z"/></svg><a href="https://www.danielmejia.dev/">danielmejia.dev</a></div>
            </div>
            <div className="lg:grow">
              <div className=" font-bold text-xl uppercase text-gray-700 pb-4">Profile</div>
              <div className="">Experienced Web Developer with a demonstrated history of working in IT for the civil engineering industry, and personal care ecommerce industry. Advanced proficiency in Javascript, HTML, CSS, Coldfusion, and SQL - all of which are backed by at least 8+ years of experience. Expert in creating full stack applications for enterprises and consumers.</div>
            </div>
          </div>
          <div className="pt-8 pb-8 border-b-2 border-gray-200 lg:flex lg:flex-row">
            <div className="pb-8 lg:flex-none md:w-96 lg:border-r-2 lg:border-gray-200 lg:pr-16 lg:mr-16">
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
              
              <div className="font-bold text-gray-800 pt-4">Web Applications Development Manager</div>
              <div className="text-sm">January 2023 - Present (8 months)</div>
              <div className="text-sm">Santa Ana, California, United States</div>
              <div className="pt-2">Work closely with stakeholders of Psomas to improve accounting and business analysis. Create tools and reports to help leaders of the company manage their teams and finances. Manage a team(1 Web Developer and 1 Jr Web Developer) of web developers. </div>
              
              <div className="font-bold text-gray-800 pt-4">Senior Web Developer</div>
              <div className="text-sm">August 2021 - December 2022 (1 year 8 months)</div>
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
