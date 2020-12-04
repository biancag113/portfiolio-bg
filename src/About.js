import React from 'react';
import './About.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig)


const About = () =>{
    return(
        <div id='about'>
            <p>I am a full-stack developer living in Los Angeles and San Francisco. Having worked in the technology industry for over 3 years, I can 
                build full-stack applications quickly to meet critical deadlines. Working together with end users, I am obsessed with design and function
                in order to make technology easy to use.</p>
            <p>
                I graduated from the University of Pennsylvania with a Bachelor's in Nursing and later pursued a PhD in neuroscience. Later, I moved the 
                San Francisco, where I worked for several tech companies building applications and programs for healthcare. 
            </p>
            <p>
                I have experience in JavaScript, Python, Go, Ruby on Rails, Swift, and Java programming languages to develop full-stack applications. I regularly
                use frameworks, packages, and libraries like React, TensorFlow, Express, and Node.js. I have also extensive experience in cloud services and resources
                like AWS, Google Cloud, Azure and databases like MongoDB and PostgreSQL. 
            </p>
        </div>
    )
    
}

export default About