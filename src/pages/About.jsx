import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Hello, I'm Curtis</h1>
      <p className="text-base leading-relaxed">
        I am currently a Frontend web developer specializing in JavaScript, React.js, Next.js, HTML5, and CSS. I have a passion for animation, web design, and game development.
      </p>
      <p className="text-base leading-relaxed">
        Before the COVID-19 pandemic, I worked at Johnson Brothers Mutual Distribution in Raleigh, NC, as a beer and wine delivery driver/merchandiser for over 5 or 6 years. I also have experience as an over-the-road truck driver across 48 states for over 8 years.
      </p>
      <p className="text-base leading-relaxed">
        My ultimate goal is to work on a game in the future or create a game website.
      </p>
      <div className="mt-4">
        <span className="block text-sm text-gray-600">Phone: 984-308-3436</span>
        <span className="block text-sm text-gray-600">Email: curt122181@gmail.com</span>
        <span className="block text-sm text-gray-600">Location: Raleigh, NC</span>
      </div>
    </div>
  );
};

export default About;
