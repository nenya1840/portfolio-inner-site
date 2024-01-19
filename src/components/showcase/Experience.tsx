import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps { }

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Maribank</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://maribank.sg/'}
                        >
                            <h4>www.maribank.sg</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Expert Engineer</h3>
                        <b>
                            <p>Summer 2022 - Now</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Key architect to the development of Shopee's financial app, recognized as the top financial application in the Singapore market.
                </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Alibaba</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.aliexpress.com'}
                        >
                            <h4>www.aliexpress.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Expert Engineer</h3>
                        <b>
                            <p>Summer 2019 - Summer 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Played a pivotal role in the architectural redesign of flagship mobile apps, focusing on performance and scalability.
                </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>DJI</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.skypixel.com/'}
                        >
                            <h4>www.skypixel.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Senior Developer</h3>
                        <b>
                            <p>Fall 2017, Summer 2019</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Contributed to the architecture and development of the largest drone community website.
                </p>
                <br />
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Sensetime</h1>
                        <h4>Bejing, China</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Senior Developer</h3>
                        <b>
                            <p>Fall 2016, Summer 2017</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Contributed to the development of a facial recognition product using Vue.js and Node.js
                </p>
                <br />
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Apple</h1>
                        <h4>CA, US</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Senior Developer</h3>
                        <b>
                            <p>Summer 2014, Fall 2016</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Contributed to the development of a Business-to-Business Education Website for Apple Education.
                </p>
                <br />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
