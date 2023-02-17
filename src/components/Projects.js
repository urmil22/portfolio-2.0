import React from 'react'; 
import { FaGithub } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go'

const Projects = () => {
  return (
    <section className='project' id='projects'>
        <h1>Projects</h1>
            <div className='project-grid'>
                <div>
            <h3>Creative Minds</h3>
            <p>Creative Minds is an app where you can post your creative thoughts and people can also comment on that. Creative Minds is built using NEXTJS, Next.js is a React framework that gives you building blocks to create web applications with server-side rendering and generating static websites</p>
                    <div className='project-icons'>
                        <a href='https://github.com/urmil22/creative-writes'rel="noreferrer" target='_blank'><FaGithub /></a> 
                        <a href='https://creative-writes-two.vercel.app/' rel="noreferrer" target='_blank'><GoBrowser /></a>
                    </div>
                 </div>
            

        <div>
            <h3>Interactive card details form</h3>
            <p>A web app where it focuses on validation of form while inputting card details and it is strictly checked.
The main aim was building UI and form validation.</p>
            <div className='project-icons'><a href='https://github.com/urmil22/Chainwhiz-intern-task'rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://interactive-details-card-form.netlify.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>

        <div>
            <h3>Expense Tracker</h3>
            <p>An app which tracks your expense with your income/salary and updates 
            the balance with reducing the expenses and also stores the data in local storage.</p>
            <div className='project-icons'><a href='https://github.com/urmil22/expense-tracker' rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://urmil-expense-tracker.netlify.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>

        <div>
            <h3>Chat app</h3>
            <p>An app which works like WhatsApp or Discord where you can chat and the authentication 
            used is from Google Firebase.</p>
            <div className='project-icons'><a href='https://github.com/urmil22/react-chat-app'rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://urmil-chat-app.netlify.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>

        <div>
            <h3>Cooking with React</h3>
            <p>An recipe app is one of the app which I developed during my React learnings. Here you can edit an recipe and also 
            add recipe which stores on local storage of browser.</p>
            <div className='project-icons'><a href='https://github.com/urmil22/cooking-with-react'rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://urmil-recipe-app.netlify.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>

       

        <div>
            <h3>Stock Calculator</h3>
            <p>A web app which calculates your profit/loss in stocks on adding basic inputs like quantity, 
            initial price and current price of stock. It is purely made in vanilla JavaScript.</p>
            <div className='project-icons'><a href='https://github.com/urmil22/neog-markFourteen'rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://urmil-stock-calculator.netlify.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>

        <div>
            <h3>Soundli</h3>
            <p>A app which is similar to Spotify which uses API from RapidAPI provider and Tailwind CSS is used for styling. I have used React for building Soundli.</p>
            <div className='project-icons'><a href='https://github.com/urmil22/soundli-music-app'rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://soundli-music-app.netlify.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>

        </div>
        <p style={{color:'var(--secondary-color)'}}>More projects on my <a style={{fontSize: '16px'}} href='https://github.com/urmil22'>GitHub</a></p>
    </section>
  )
}

export default Projects