import Footer from "../../Components/Footer/Footer";
import "./Project.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import data from "./project_data.json";

function Project() {
    return(
        <div className="Project">
            <ProjectHeader />
            {/* <ProjectCard card={card} /> */}
            {data.map(card => {
                return (<ProjectCard card={card} />);
            })}
            <Footer />
        </div>
    );
}

function ProjectCard({card}){
    return(
        <div className="project-Card">
            <div className="card-cover">
                <img src={card.img_url} alt="project-cover" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <span class="card-name" style={{color: `${card.color}`}}>{card.title}</span>
                    <span>/</span><span>{card.category}</span>    
                </div>
                <div className="sub">{card.subtitle}</div>
                <p>{card.short_desc}</p>
                <div className="card-button">
                    <span>Learn More
                        <FontAwesomeIcon className="faicon" icon={faArrowRight} />
                    </span>
                </div>               
            </div>
        </div>
    );
}

function ProjectHeader(){
    return(
        <div className="project-Header">
            <p>My work says 👋 </p>
            <section className="project-animation">
                <div className="project-first"><div>user-centric</div></div>
                <div className="project-second"><div>empathetic</div></div>
                <div className="project-third"><div>data-driven</div></div>
                <div className="project-fourth"><div>accessible</div></div>
            </section>
        </div>
    );
}

export default Project;