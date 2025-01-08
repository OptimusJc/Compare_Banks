import React from 'react';

export default function About() {
  return (
    <main>
      <section className='container mx-auto'>
        <div className="bg-[url('../assets/AboutImg.png')] bg-no-repeat mt-42">
          <h1 className='text-3xl font-bold text-center'>
            About Us @ <span className='text-blue-500'>Compare</span>Banks
          </h1>
          <div className="text-center bg-[url('../assets/AboutImg.png')] mt-42">
            <div className='m-4'>
              <h2 className='font-bold text-base md:text-lg'>Our Mission</h2>
              <p>At CompareBanks, we believe that choosing the right bank shouldn't be a complicated process.
                Our mission is to empower individuals and businesses with the information they need to make 
                informed decisions about their financial services. We strive to provide a clear, unbiased, 
                and easy-to-use platform that compares banking options, thereby providing financial security, 
                saving you time and money.</p>
            </div>
            <div className='m-4'>
              <h2 className='font-bold text-base md:text-lg'>What We Do</h2>
              <p>We gather and analyze data on various banking products and services, including:</p>
              <ul className=''>
                <li>Checking and savings accounts</li>
                <li>Mortgages and loans</li>
                <li>Credit cards</li>
                <li>Investment options</li>
                <li>Fees and interest rates</li>
                <li>Customer service ratings</li>
              </ul>
              <p>Our comparison tools allow you to filter and sort banks based on your specific needs, such as interest rates, 
                fees, branch locations, and online banking features. We aim to provide a comprehensive overview of the banking 
                landscape in your country, helping you find the perfect fit for your financial goals.</p>
            </div>
            <div className='m-4'>
              <h2 className='font-bold text-base md:text-lg'>Our Data</h2>
              <p>We are committed to providing accurate and up-to-date information. We source our data from publicly available information, 
                bank websites, and official publications. We regularly update our database to ensure its reliability. However, it's important 
                to note that information can change, so we always recommend verifying details directly with the respective banks.</p>
            </div>
            <div className='m-4'>
              <h2 className='font-bold text-base md:text-lg'>Our Team</h2>
              <p>We are a team of passionate individuals with backgrounds in finance, technology, and data analysis. We are dedicated to 
                providing a valuable resource for the community and continuously improving our platform based on user feedback.</p>
            </div>
            <div className='m-4'>
              <h2 className='font-bold text-base md:text-lg'>Contact Us</h2>
              <p>We value your feedback! If you have any questions, suggestions, or encounter any inaccuracies, please don't hesitate to 
                contact us @<a className='text-purple-700' href="mailto:">comparebanks@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
