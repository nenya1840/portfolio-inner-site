import React, { useState } from 'react';
// @ts-ignore
import house from '../../../assets/audio/house_master.mp3';
// @ts-ignore
import edge from '../../../assets/audio/edge_unmastered.mp3';
// @ts-ignore
import dnb from '../../../assets/audio/dnb_snip.mp3';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import { MusicPlayer } from '../../general';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Music & Sound</h1>
            <h3>Ventures</h3>
            <br />
            <div className="text-block">
                <p>
                    Music has been a passion of mine for my whole life. When I
                    was 15 years old, I downloaded FL Studio and started to
                    produce my own music. I found a wonderful community on
                    reddit called r/edmproduction and in 2016 created the now
                    popular discord server EDM Production with over 14k members.
                </p>
            </div>
            <h2>Exploring house</h2>
            <br />
            <p>
                In 2020 I went through a phase of really enjoying house. Some of
                my favorite artists at the time were Malaa, Chirs Lake, Kyle
                Walker and many more. Inspired, I decided to take a stab at
                making some house tracks.
            </p>
            <br />
            <p>
                I failed a few times as I wasn't really able to nail the style
                and groove I was going for but ultimately ended up creating the
                piece below.
            </p>
            <br />

            <MusicPlayer
                src={house}
                title="Timeless"
                subtitle="Henry Heffernan - 2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />
            <br />
            <div className="captioned-image">
                <img src={houseProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 1:</b> A screenshot of the project file of the
                        above track. 64 tracks in total.
                    </sub>
                </p>
            </div>
            <p>
                I love so much about this track. I'm particularly very proud of
                the composition and the trichotomy of the happy upbeat energy in
                the intro and first drop into the rich and euphoric bridge
                before delving into the darkness of the final build and drop. I
                had an absolute blast making this back in the fall of 2020.
            </p>
            <br />
            <p>
                After making this track I lost a lot of my interest in house,
                and ended up getting sucked into the world of drum & bass/mid
                tempo.
            </p>
            <br />
            <h2>Drum & Bass</h2>
            <br />
            <p>
                I've always loved drum & bass, and I've made a lot of it over
                the years that really reflects my specific taste at the time.
            </p>
            <br />
            <MusicPlayer
                src={edge}
                title="Edge [WIP]"
                subtitle="Henry Heffernan - 2021"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <MusicPlayer
                src={dnb}
                title="Break [Demo]"
                subtitle="Henry Heffernan - 2021"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            {/* 
            <h3>2 more songs? + sound fx stuff</h3>

            <h3>Maybe overkill ^</h3>
            <br />
            <h3>Add in SFX</h3> */}
        </div>
    );
};

const styles: StyleSheetCSS = {};

export default MusicProjects;