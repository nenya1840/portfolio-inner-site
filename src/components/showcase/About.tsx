import React from 'react';
import meNow from '../../assets/pictures/meandfamily.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps { }

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Hongyi Ren</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer currently working at Maribank, Singapore!
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:hongyi.ren.job@gmail.com">
                        hongyi.ren.job@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    I was born in Ningbo, China, a seaside city where the sea isn't very beautiful.
                    There isn't much in the way of delicious food, and my mother's cooking isn't very tasty,
                    which has led me to have low standards for food. I don't miss home much and am suited for traveling around.
                </p>
                <br />
                <p>
                    In 2014, I graduated from George Washington University in US.
                    I got a chance to work for Apple, CA, primarily focusing
                    on frontend work. I continued to work in China after 3 years in US.
                    Experience in Sensetime, DJI and Alibaba, I decide to move to Singapore.
                    I am currently live with my wife and my sons in Singapore.
                </p>
                <br />
                <br />
                <div style={styles.verticalImage}>
                    <img src={meNow} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure:</b> Me and Faimily in Japan, Jan 2024
                        </sub>
                    </p>
                </div>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time (not much left after my sons born).
                            I used to like watching movie and leaving mean comments. Now I like making money.
                            Some other hobbies I enjoy (unsurprisingly) playing video games.
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer.
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:hongyi.ren.job@gmail.com">
                        hongyi.ren.job@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
