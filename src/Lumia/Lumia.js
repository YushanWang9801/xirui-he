import "./lumia.css";
import "./Mobile-lumia.css";

function Lumia () {
    return (
        <div className="Lumia">
            <LumiaOverview />
            <LumiaSecondPart />
            <Design />
        </div>
    );
};

function LumiaOverview () {
    return (
        <div className="LumiaOverview">
            <h1 className="title" id="lumia">Lumia</h1>
            <div className="IntroPhoto"></div>

            <h1 className="title" id="overview"> Overview</h1>
            <p id="overview-paragraph">
                Lumia, a luminescent organism, has discovered an abandoned 
                planet once home to a ruined civilization. Travelling through 
                the ruins, Lumia leaves a part of its body inside each magical 
                plant it encounters to bring back light - and with it, life.</p>
            <div className="distribution">
                <div className="column">
                    <span>The game: </span>
                    <p>A mobile application for IOS</p>
                    <p>A puzzle platformer game</p>
                </div>
                
                <div className="column">
                    <span>My role as UI developer: </span>
                    <p>Create user flow for the game</p>
                    <p>Design game tutorial for new users</p>
                    <p>Design all UI screens</p>
                </div>

                <div className="column" id="column3">
                    <span>Collaborators:</span>
                    <p>1 other designer</p>
                    <p>2 character designers</p>
                    <p>4 developers</p>
                </div>
            </div>
        </div>
    );
}


function LumiaSecondPart(){
    return (
        <div className="SecondPart">    
            <u><h1>Developing the Game Project</h1></u>
            <div className="sectionTitle">
                <span>01</span>
                <h2>Brainstorming the storyline and gameplay</h2>
            </div>  
            <p>
            We anchored the game to be a <b>strategic puzzle platformer</b> game after 
            many rounds of brainstorming the game concept and story line. We drew 
            inspiration from existing games in the market, such as Ordia, but we 
            also focused on creating our unique artistic style that may interest 
            our target audience. Before we go into the details about game mechanics 
            and controls, we want to have a solid game concept to narrow down the 
            scope. Because of time constraints, we only focused on the IOS platform.
            </p>
            <img id="concept_1" src="./Lumia/images/concept1_1.jpg"
                alt="This is initial concept for the game" />
            <img id="concept_2" src="./Lumia/images/concept2_1.png"
                alt="This is initial concept for the game" />

            <div className="sectionTitle">
                <span>02</span>
                <h2>Competitive Analysis</h2>
            </div>  
            <p>
            We chose 3 games as our competitors - <b>Ordia, Locoroco,</b> and <b>Night Sky</b>.
             All 3 games are platformer games, but with different artistic styles.
              In Lumia, we want to create a fresh gameplay experience compared to
               traditional platformer games by <b>focusing mainly on puzzle solving 
               in a darker and somber atmosphere.</b>
            </p>

            <CompetitiveAnalysis />

            <img id="competitive_1" src="./Lumia/images/competitive4.jpg"
                alt="This is is a demo of competitive analysis" />

            

            <div className="sectionTitle">
                <span>03</span>
                <h2>Nondigital prototype: testing the game concept</h2>
            </div>  
            
            <p>
            To test out our game idea, we created a nondigital prototype of the 
            game on Figma. We included all the basic gameplay elements on the 
            Figma frame, such as Lumia, energy items, and enemies, so that we 
            can mock the gameplay experience by moving the items around or 
            taking items out of the frame
            </p>
            
            <img id="nondigital" src="./Lumia/images/nondigital.png"
                alt="This is is a demo of competitive analysis" />
        </div>
    );
}


function CompetitiveAnalysis(){
    return (
        <div className="competitive">
            <div className="column"> 
                <h3>Ordia</h3>
                <img id="Game1" src="./Lumia/images/ordia.jpg" 
                        alt="This is an icon of one competitive game" />
                <p> One-finger action platformer game</p>
                <p> Mobile game </p>
                <p> drag-and-release mechanic </p>
            </div>

            <div className="column"> 
                <h3>LocoRoco</h3>
                <img id="Game1" src="./Lumia/images/locoroco.jpg" 
                        alt="This is an icon of one competitive game" />
                <p>Puzzle platformer game</p>
                <p>PSP game</p>
                <p>Splitting & recombining mechanic</p>
                <p>Launch itself to any direction</p>
            </div>

            <div className="column" > 
                <h3>Night Sky</h3>
                <img id="Game1" src="./Lumia/images/nightsky.png"  
                        alt="This is an icon of one competitive game" />
                <p>2D physics-based puzzle platformer game</p>
                <p>Nintendo 3DS and PC</p>
                <p>More detailed artwork</p>
                <p>Interactable characters</p>
            </div>
        </div>

    );
}


function Design() {
    return (
        <div className="DesignPart">
            <u><h1>The Design Process</h1></u>
            <div className="sectionTitle">
                <span>01</span>
                <h2>Design Philosophy</h2>
            </div>  

            <p>
            Players will be challenged by a mixture of puzzle and platforming 
            challenges that <b>evoke players’ satisfaction upon beating the level 
            and lighting up all the magical plants</b>. There should be a <b>strong 
            sense of visual progress throughout the game</b> as the environment 
            gets gradually lit up with Lumia as the source of light. To solve all
             the puzzle and platforming challenges, players will also have to 
             make extensive use of all of Lumia’s toolkit (splitting, rejoining, 
             and switching bodies), and no part of Lumia’s toolkit should be 
             neglected in our level designs.
            </p>

            <h2>What are our goals toward the design?</h2>
            <span className="goals">1. create strategic and intuitive gameplay for casual mobile players</span> 
            <span className="goals">2. have an art style that brings players a sense of wonder and discovery</span> 
            <span className="goals">3. create levels that are replayable with many possible solutions</span> 


            <h2 id="Keyword">Leads to 2 sets of visual design keywords</h2>

            <div className="distribution">
                <div className="env">
                    <span id="env-title">Environmental :</span>
                    <span>adventurous</span>
                    <span>mystical</span>
                    <span>otherworldly</span>
                    <span>deserted</span>
                </div>
                <div className="env"> 
                    <span id="env-title" >Characters:</span>
                    <span>ethereal</span>
                    <span>magical</span>
                    <span>captivated</span>
                </div>
            </div>

            <div className="Colordiv">
                <div className="colordiv-content ">                
                    <p id="color" > 
                    The overall color palette emphasizes the mystical and deserted sentiments of the game. The environments will mostly be dark blue and dark brown. Characters like Lumia will have bright accent colors, such as gold and magenta, in order to contrast with gloomy backgrounds.
                    </p>

                    <img id="palette" src="./Lumia/images/palette.png"
                        alt="This is palette" />

                    <p>
                    <b>Lines</b> in this game are used more as a constructive element than outlines of objects. Characters like Lumia will be created from a set of vector lines and rules using 3D modeling software Rhino and its algorithm editor Grasshopper. The boundary circle and the core circle of Lumia are connected with hairlines ranging from 0 to 0.8mm. 
                    </p>

                    <p>
                    Since the characters are gaseous, the animation of characters should convey a sense of elegance. Animations will be smooth but not very fast as we aim to <b>imitate the weightless feeling in the outer space.</b>
                    </p>

                    <img id="line" src="./Lumia/images/line.png"
                        alt="This is the line platte" />

                    <p>
                    To distinguish tiles from intricate backgrounds, our <b>tile design 
                    has been aiming for a simplistic, clean look,</b> but we also chose 
                    a bright color to let it stand out from the background. 
                    Below, there is a complete set of art asset we use in the game.
                    </p>

                    <img id="palette" src="./Lumia/images/asset.png"
                        alt="This is the asset graph" />

                    
                    <img id="palette" src="./Lumia/images/styleguide.png"
                        alt="This is the style guide" />

                    <div className="sectionTitle">
                        <span>02</span>
                        <h2>UI design iterations</h2>
                    </div>  

                    <h3>1st Iteration on layout:</h3>
                    <h3>Ensuring effective information architecture by designing a smooth and flexible user flow.</h3>

                    <img id="sketch" src="./Lumia/images/sketch.png"
                        alt="This is the style guide" />

                    <h3>2nd Iteration towards informativeness:</h3>
                    <h3>Inform users of their status and design a seamless experience by adding transition screens and progress indicators.</h3>

                    <img id="BA" src="./Lumia/images/BA.png"
                                            alt="This is the style guide" />

                    <u><h1>Finalized High-Fi Screens</h1></u>

                    <p>
                    When the user opens the game they are greeted with a welcoming text introducing who Lumia is and the setting of the game when the game is loading. After the game is loaded, the player will see the main screen with simply the play button on the bottom. Tapping into the game, they will see the level select screen where they can tap and enter the first level.
                    </p>

                    <img id="main" src="./Lumia/images/main.png"
                                            alt="This is the main demo" />

                    <p>
                    In the gameplay screen, players can pause, or go into the panning mode which allows them to find splitted Lumia bodies that are off the current screen. When players successfully completes a level, they will see their score in 3-star rating after a short transition screen. They will also see how many lights Lumia has remaining after lighting up all the lights. From this screen, they can go back to level select, replay the game, or continue to the next level.
                    </p>

                    <img id="other" src="./Lumia/images/other.png"
                                            alt="This is the other demo" />
                                            
                    <p>
                    We also created a tutorial level as level 1 to help guide players through the level and help them recognize all gameplay elements.
                    </p>

                    <img id="tutorial" src="./Lumia/images/tutorial.png"
                                            alt="This is the tutorial demo" />

                    <p>
                    Based on the game testing feedback, we also made other important changes to the game in addition to UI design. We kept tuning the game physics to give players the perfect game mechanics, and created more reasonable and replayable level design. As the UI designer for the game, I will keep the other components short and focus mainly on the design :)
                    </p>

                </div>
            </div>
            
            <u><h1>Next Steps</h1></u>

            <div className="Next Step">
                <h2>Design</h2>
                <p>One of the biggest next steps is to improve interactivity of the game by creating more animations.</p>

                <h2>Programming</h2>
                <p>The most important next step on the programming side is to continue bug fixing to reduce app crashes as much as possible. We can also work on putting the game on Android in addition to IOS platform, so that we can reach more mobile players.</p>
                
                <h2>Product Promotion</h2>
                <p>Our team created an app store proposal to release the game on IOS apple store. Currently players can download Lumia on Testflight, the next step would be releasing it on app store, so that we can improve the game by collecting more data from ratings and reviews.</p>
            </div>
        </div>
    );
}

export default Lumia;