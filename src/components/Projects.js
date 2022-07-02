import React from 'react'; 
import { FaGithub } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go'

const Projects = () => {
  return (
    <section className='project' id='projects'>
        <h1>Projects</h1>
        <div>
            <h3>Expense Tracker</h3>
            <p>An app which tracks your expense with your income/salary and updates 
            the balance with reducing the expenses and also stores the data in local storage.</p>
            <div><a href='https://github.com/urmil22/expense-tracker' rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://urmil-expense-tracker.netlify.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>

        <div>
            <h3>Chat app</h3>
            <p>An app which works like WhatsApp or Discord where you can chat and the authentication 
            used is from Google Firebase.</p>
            <div><a href='https://github.com/urmil22/react-chat-app'rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://urmil-chat-app.netlify.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>

        <div>
            <h3>Cooking with React</h3>
            <p>An recipe app is one of the app which I developed during my React learnings. Here you can edit an recipe and also 
            add recipe which stores on local storage of browser.</p>
            <div><a href='https://github.com/urmil22/cooking-with-react'rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://urmil-recipe-app.netlify.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>

        <div>
            <h3>Cash Register Manager</h3>
            <p>A web app which tells you minimum number of notes required to return as change to the customer after the payment at a billing counter.
             A web app which is built in Vanilla JavaScript.</p>
            <div><a href='https://github.com/urmil22/neog-markTen'rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://urmil-cash-register.netlify.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>

        <div>
            <h3>Cuisine Culture</h3>
            <p>A web app which tells you reviews of different continental food. It is made in React where I 
            have listed some of the famous dishes from the specific continents.</p>
            <div><a href='https://github.com/urmil22/neog-markNine'rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://zsdpl.csb.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>

        <div>
            <h3>Stock Calculator</h3>
            <p>A web app which calculates your profit/loss in stocks on adding basic inputs like quantity, 
            initial price and current price of stock. It is purely made in vanilla JavaScript.</p>
            <div><a href='https://github.com/urmil22/neog-markFourteen'rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://urmil-stock-calculator.netlify.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>

        <div>
            <h3>Know Your Emotions</h3>
            <p>A web app which tells you the meaning of emoji which is made using reactjs. 
            Using useState it updates the UI smoothly and in fast way.</p>
            <div><a href='https://github.com/urmil22/neog-markEight'rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://cwcr3.csb.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>

        <div>
            <h3>Ferb Latin Translator</h3>
            <p>A web app which translates English to Ferb-Latin language which is used and developed by Phineas and Ferb. 
            They are cartoon characters and their show streams on Disney channel.</p>
            <div><a href='https://github.com/urmil22/Ferb-Latin'rel="noreferrer" target='_blank'><FaGithub /></a> 
            <a href='https://latin-translator.netlify.app/' rel="noreferrer" target='_blank'><GoBrowser /></a></div>
        </div>
        <p style={{color:'var(--secondary-color)'}}>Many more projects on my GitHub</p>
    </section>
  )
}

export default Projects