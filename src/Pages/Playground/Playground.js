import Footer from "../../Components/Footer/Footer";
import "./Playground.css";
import "./Mobile-Playground.css";

const gallerys = [
    {   "url":"./images/1.jpg",
        "caption": "Procreate"
    },{ "url":"./images/2.jpg",
        "caption": "Procreate"
    },{ "url":"./images/3.jpg",
        "caption": "Procreate"
    },{ "url":"./images/4.jpg",
        "caption": "Procreate"
    },{   "url":"./images/1.jpg",
        "caption": "Procreate"
    },{ "url":"./images/2.jpg",
        "caption": "Procreate"
    },{ "url":"./images/3.jpg",
        "caption": "Procreate"
    },{ "url":"./images/4.jpg",
        "caption": "Procreate"
    },
]

function Playground() {
    return (
        <div className="playground">
            <Playground_header />
            <Gallery />
            <Footer />
        </div>
    );
}

function Playground_header(){
    return (
        <div className="Playground_header">
            <div className="intro">
                <span>
                This is the collection of work I created as I learn new tools
                 and software to explore different styles, colors, and paint
                  brushes. I also enjoy travelling and capturing beautiful moments
                   with my Nikon and Fujifilm.
                </span>
            </div>
            <div className="play">
                <span><p>Playground</p></span>
            </div>
        </div>
    );
}

function Gallery(){
    return (
       <div className="gallery">
            <ul class="grid">
            {gallerys.map((image) => (
                <li>
                    <figure class="grid_figure">
                        <img src={image.url} alt={image.caption} />
                        <figcaption>{image.caption}</figcaption>
                    </figure>
                </li>
            ))}
            </ul>
       </div> 
    );
}

export default Playground;