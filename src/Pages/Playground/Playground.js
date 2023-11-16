import "./Playground.css";
import "./Mobile-Playground.css";

const gallerys = [
    {   "url":"./images/1.jpg",
        "caption": ""
    },{ "url":"./images/2.jpg",
        "caption": ""
    },{ "url":"./images/3.jpg",
        "caption": ""
    },{ "url":"./images/4.jpeg",
        "caption": ""
    },{   "url":"./images/5.jpeg",
        "caption": ""
    },{ "url":"./images/6.jpeg",
        "caption": ""
    },{ "url":"./images/7.jpeg",
        "caption": ""
    },{ "url":"./images/8.jpeg",
        "caption": ""
    },
]

function Playground() {
    return (
        <div className="playground">
            <Playground_header />
            <Gallery />
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