import React from 'react';
import { View } from 'react-native';
import artruism from '../project_images/artruism.png';
import collegesuccess from '../project_images/collegesuccess.png';
import collegesuccess2 from '../project_images/collegesuccess2.png';
import congrads1 from '../project_images/congrads1.jpg';
import congrads2 from '../project_images/congrads2.jpg';
import genglab from '../project_images/genglab.png';
import scraping from '../project_images/scraping.png';
import waterlevels1 from '../project_images/waterlevels1.png';
import { Link } from "react-router-dom";

function Projects() {
    return (
        <>
            <div className="project-body">
                <div className="projectcard">
                    <h2 className="project-title">Predicting Student Academic Success</h2>
                    <img className="project-img" src={collegesuccess} alt=""></img>
                    <img className="project-img" src={collegesuccess2} alt=""></img>
                    <p className="tools">Tools/Technologies Used: Python (Matplotlib, Numpy, Scikit-learn, Flask), JupyterNotebooks, Git</p>
                    <div className="description">
                        <p>College education is an important part of many people’s lives. To many people it is one of the biggest opportunities that can jumpstart someone’s career and livelihood. However, everyone that goes to college comes from different backgrounds and live in different ways while at college. This can have an enormous impact on the success of the student with respect to their college career and their graduation. It could be beneficial to analyze these different factors and somehow relate them to the anticipated success of the students. </p>
                        <p>This project was worked on with a group of four people. We used the dataset from Kaggle, ‘Predicting Student Dropout and Academic Success’, which contained 4424 student records and 35 features before data preprocessing and one-hot encoding. We built six different models (Polynomial Regression with Sigmoid, Logistic Regression, Neural Network, SVM, Decision Tree, and Naive Bayes) and were able to construct a model with 91% accuracy using Logistic Regression with K-Fold Cross Validation.
                        </p>
                        <p>Our software implementation was done with HTML, CSS, and Flask, providing a simple frontend interface for users to input data and explore predictions. The interface displays a form that asks users questions to obtain the features and sends the data collected through a POST request. Since our logistic regression model had the best accuracy, it was the model used to make predictions in the frontend.
                        </p>
                        <p ClassName="Links">
                            <Link to='https://github.com/ranapp/ECS171Project'>Repo</Link>
                            <br />
                            <Link to="https://www.youtube.com/watch?v=4D0Ux4UtuYw">Demo</Link>
                        </p>
                    </div>

                </div>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginLeft: 5,
                        marginRight: 5
                    }}
                />
                <div ClassName="projectcard">
                    <h2 className="project-title">ConGRADS Degree Check Website</h2>
                    <img className="project-img" src={congrads1}></img>
                    <img className="project-img" src={congrads2}></img>
                    <p className="tools">Tools/Technologies Used: Python, React, Node.js, Express.js, MongoDB, Google OAuth 2.0, HTML/CSS, Git</p>
                    <div className="description">
                        <p>ConGrads is a degree check web application. The user can input their college, major, minor, and upload a copy of their transcript which will then display a UI with a progress bar letting the user know how much of the graduation requirement percentage they have met. ConGrads also lets users know which classes they need to take after cross checking their classes on transcript with our database class requirements. My team and I received this source information from the UC Davis degree requirements webpage. Our goal was to implement this web application with Human-Computer Interaction concepts. Some principles we followed were that we took the heuristic evaluation ruleset (recognition rather than recall) into consideration because our solution allows the user to not have to recall which choices they made (school, major, minor) by providing a review page which shows the options users picked, and be able to edit and make changes on that same review page instead of restarting the entire process. We also tap into the emotional aspect of the user by providing/welcoming with customized messages rather than having standard robotic messages/prompts.
                        </p>
                        <p>The main goal that we achieved was to provide users with a more comprehensive and user-friendly version of MyDegree. From user testing, we found out that our decisions and design choices positively impacted the usability and user experience of the website. Using the research from user testing, we used Figma to create our low fidelity prototype specifically clickable wireframes.
                        </p>
                        <p>The coded version of our hi-fi prototype was created using the MERN tech stack which consists of using MongoDB as the database, Express.js as the REST API framework, React.js as the Frontend library, and Node.js as the backend runtime environment. Any requests the client made would be directed to the backend server first, which in turn would communicate with the database to service the user’s requests.
                        </p>
                        <p>Users needed to quickly login with Google before using the application, which we used Google OAuth 2.0 to implement. The user’s credentials and preferences such as their college, their major, their minor, and their transcript (stored using the Multer middleware) were stored in the MongoDB database and pulled down to their browser whenever they signed in. To extract the information from user transcripts, we wrote a Python script to parse transcripts and passed the script’s output JSON to our Node.js backend, which then passed it to the React.js frontend where the data could be used to populate our various visual components.
                        </p>

                        <p ClassName="Links">
                            <Link to='https://github.com/ranapp/ECS164FinalProject'>Repo</Link>
                            <br />
                            <Link to="https://www.figma.com/proto/KOIiilhYfTf1CgOuRQTkdU/ECS164?page-id=316%3A161&node-id=328-2059&viewport=835%2C-361%2C0.06&scaling=scale-down&starting-point-node-id=328%3A2059&show-proto-sidebar=1">Figma</Link>
                        </p>
                    </div>

                </div>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginLeft: 5,
                        marginRight: 5
                    }}
                />
                <div ClassName="projectcard">
                    <h2 className="project-title">Effect of Informational Value on Attentional Guidance </h2>
                    <p ClassName="subtitle">UC Davis Center for Mind and Brain - Geng Lab</p>
                    <img className="project-img" src={genglab}></img>
                    <p className="tools">Tools/Technologies Used: Python (Numpy, Scipy, Seaborn, Scikit-learn), JupyterNotebooks</p>
                    <div className="description">
                        <p>Our environment is complex and dynamic, making it critical for observers to determine what information in the environment is important for achieving their goals. In this study that I worked on under the mentorship of Philip Witkowski Dr. Joy Geng, we tested whether attention is moderated by the perceived reliability of information used to predict upcoming stimuli. Trials were coded with Python and published on SONA.
                        </p>
                        <p>During trials, participants were presented with a cue and then searched for the object most similar to the cue, called the target. The cue had a specific orientation, which indicated the most likely orientation of the target, and color, which indicated the reliability of the orientation information. The reliability was manipulated by using a Gaussian distribution with low, medium, or high variance. After each block, participants rated how informative the cue was during search.
                        </p>
                        <p>Data analysis was performed using Python and related libraries. The data replicated previous results showing that as the reliability of the cue increased, the effect of target orientation on search increased (t(59)=3.23, p &lt; .01). Additionally, we show that individuals that perceive a greater difference in cue reliability also showed a greater difference in the effect of cue to target orientation difference for different cues (pearson r = .254, p  &lt; .05). These results suggest that participants’ individual perception of information reliability moderates attention for predicted upcoming stimuli.
                        </p>

                        <p ClassName="Links">
                            <Link to='https://youtu.be/TO69kfGzlps'>URC 2021 Presentation</Link>
                        </p>
                    </div>
                </div>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginLeft: 5,
                        marginRight: 5
                    }}
                />
                <div ClassName="projectcard">
                    <h2 className="project-title">Water Levels Web App</h2>
                    <img className="project-img" src={waterlevels1}></img>
                    <p className="tools">Tools/Technologies Used: Javascript, React, Node.js, Express</p>
                    <div className="description">
                        <p>The Water Levels Web Application is a simple application that displays information about the water levels in California’s seven largest reservoirs. This project was completed successfully with a group of three people. The frontend was coded using React and displays a simple description and a button that displays a chart using Chart.js. The frontend sends an AJAX POST request to the backend to get the data given a month and the backend handles an API call to get reservoir data from the California Data Exchange Center, which is a government provided data service. Each time the month and the year change by selecting on the calendar display, a new AJAX request for data is sent. </p>
                        <p ClassName="Links">
                            <Link to='https://github.com/ranapp/WaterLevel'>Frontend</Link>
                            <Link to='https://github.com/ranapp/waterlevelsbackend'>Backend</Link>

                        </p>
                    </div>

                </div>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginLeft: 5,
                        marginRight: 5
                    }}
                />
                <div ClassName="projectcard">
                    <h2 className="project-title">Web Scraping Indeed.com</h2>
                    <img className="project-img" src={scraping}></img>
                    <p className="tools">Tools/Technologies Used: R, Git</p>
                    <div className="description">
                        <p>With hundreds of job postings each day, there is so much variety and data associated with each posting. I wanted to analyze this data and compile it into a database that users can use when needing help looking for jobs. </p>
                        <p>This project was coded in R, using the XML library and Regex for web scraping. The website was scraped by first looking at the job search (Data Scientist) and then going through each individual posting in that category and getting the data needed (Company, Date Posted, Salary, Work Type, etc). These components were compiled into a single dataframe for each job search. </p>
                        <p ClassName="Links">

                        </p>
                    </div>

                </div>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginLeft: 5,
                        marginRight: 5
                    }}
                />
                <div ClassName="projectcard">
                    <h2 className="project-title"></h2>
                    <img className="project-img"></img>
                    <p className="tools"></p>
                    <div className="description">

                        <p ClassName="Links">
                            <Link to='https://github.com/ranapp/Web-Scraping'>Repo</Link>

                        </p>
                    </div>

                </div>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginLeft: 5,
                        marginRight: 5
                    }}
                />
                <div ClassName="projectcard">
                    <h2 className="project-title">Artruism Web App</h2>
                    <p className='subtitle'>#include</p>
                    <img className="project-img" src={artruism}></img>
                    <p className="tools">Tools/Technologies Used: Javascript, Next.js, CSS</p>
                    <div className="description">
                        <p>I worked on a project with #include, a local Davis-run organization that builds web application for businesses in the Davis/Sacramento area, for a local non-profit called Artruism. Artruism is an organization that creates a platform for student artists to help serve their community in different ways. I worked with a team of people as a frontend developer to construct a page of the web application. </p>
                        <p ClassName="Links">
                            <Link to='https://github.com/include-davis/artruism'>Repo</Link>
                            <Link to='https://artruism-initiative.square.site/'>Website</Link>

                        </p>
                    </div>

                </div>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginLeft: 5,
                        marginRight: 5
                    }}
                />
                <div ClassName="projectcard">
                    <h2 className="project-title">Network Flow Tutors</h2>
                    <p className="tools">Tools/Technologies Used: C++</p>
                    <div className="description">
                        <p>The goal of this project was to find a way to assign tutors willing to tutor for the CS department to the courses that they preferred to teach. The tutors filled out the preferences of the classes that they wanted to tutor and the algorithm uses that data to assign each tutor to a class. </p>
                        <p>The algorithm was constructed using the Ford-Fulkerson Algorithm and Bipartite matching. Each tutor and course have a corresponding node. </p>
                        <p ClassName="Links">
                            <Link to='https://github.com/ranapp/netflowtutorassignments'>Repo</Link>

                        </p>
                    </div>

                </div>

            </div>

        </>

    );
}

export default Projects;