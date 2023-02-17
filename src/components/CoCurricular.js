import React from 'react';
import { AiOutlineBank } from 'react-icons/ai'

const CoCurricular = () => {
  return (
    <section id='cocurricular'>
        <h1>CoCurricular</h1>
        <div className='cocurricular-grid'>
            <div>
                <h3>Delegate of The Republic Of Ghana</h3>
                
                    <p><AiOutlineBank size={18} color="white"/> Model United Nations(MUN) is a popular program for those who are interested in learning how United Nations work. Hundreds of thousands of students worldwide participate every year in MUN at all educational levels from primary school to university. I represented as the Delegate of The Republic Of Ghana</p>

            </div>

            <div>
                <h3>Vadodara Smart Hackathon</h3>
                <p>This hackathon was themed for based on police FIR(First Information Report) where the problem statement was based on filing FIR and validating it for genuineness about Information provided</p>
            </div>

            <div>
                <h3>Tech Expo</h3>
                <p>Tech Expo is a college level competition of projects for final year students from every department. We as a team represented our project Medical Datacare.</p>
            </div>

            <div>
                <h2>Other Activities</h2>
                <h3>Road to Web3 Hackathon</h3>
                <p>Road to Web3 is a purpose built event for you to create your first application on the Blockchain. There were speakers, mentors and developers from all around the world</p>
            </div>

            <div>
                <h3>HacktoberFest 2022</h3>
                <p>Hacktoberfest: a month-long celebration of open-source projects, their maintainers, and the entire community of contributors. I contributed to many projects and got intro to many cool projects</p>
            </div>
        </div>
    </section>
  )
}

export default CoCurricular