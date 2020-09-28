import React from "react";


import Bootstrap from "./img/resume/bootstrap.jpg";
import Css from "./img/resume/css.jpg";
import Html from "./img/resume/html.jpg";
import Jquery from "./img/resume/jq.jpg";
import Javascript from "./img/resume/js.png";
import Next from "./img/resume/next.png";
import ReactImage from "./img/resume/react.png";
import Sass from "./img/resume/sass.png";
import Typescript from "./img/resume/typescript.jpg";

const App = () => {
    const SkillScroll = React.useRef();
    const AboutScroll = React.useRef();
    const clicker = (useScroll) => {
        window.scrollTo(0, useScroll.current.offsetTop);
    };
    return <React.Fragment>
        <header>
            <nav>
                <i className="fa fa-bars"></i>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="https://t.me/nima18v">Contact</a></li>
                    <li onClick={() => clicker(AboutScroll)}><a>About</a></li>
                    <li onClick={() => clicker(SkillScroll)}><a>Skills</a></li>
                    <li id="about" className="active"><a href="#">Resume</a></li>
                </ul>
                <h1>Nima Ladmakhi</h1>
            </nav>
        </header>

        <div className="container">
            <div className="card">
                <img src={Html} alt="" />
                <div>
                    <h1>HTML</h1>
                    <p>Hypertext Markup Language is the standard markup language for documents designed to be displayed in a
                    web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting
                    languages such as JavaScrip
                </p>
                </div>
            </div>


            <div className="card">
                <img src={Css} alt="" />
                <div>
                    <h1>CSS</h1>
                    <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document
                    written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web,
                    alongside HTML and JavaScript
                </p>
                </div>
            </div>


            <div className="card">
                <img src={Bootstrap} alt="" />
                <div>
                    <h1>BOOTSTRAP</h1>
                    <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web
                    development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons,
                    navigation, and other interface components.
                </p>
                </div>
            </div>


            <div className="card">
                <img src={Sass} alt="" />
                <div>
                    <h1>SASS</h1>
                    <p>Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style
                    Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original
                    syntax, called "the indented syntax," uses
                    a syntax similar to Haml.
                </p>
                </div>
            </div>


            <div className="card">
                <img src={Javascript} alt="" />
                <div>
                    <h1>JAVASCRIPT</h1>
                    <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript
                    specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has
                    curly-bracket syntax, dynamic typing, prototype-based
                    object-orientation, and first-className functions
                </p>
                </div>
            </div>


            <div className="card">
                <img src={Jquery} alt="" />
                <div>
                    <h1>JQUERY</h1>
                    <p>
                        jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as
                        well as event handling, CSS animation, and Ajax. It is free, open-source software using the
                        permissive MIT License. As of May 2019, jQuery is used by 73%
                        of the 10 million most popular website
                </p>
                </div>
            </div>

            <div className="card">
                <img src={Typescript} alt="" />
                <div>
                    <h1>TYPESCRIPT</h1>
                    <p>
                        TypeScript is an open-source programming language developed and maintained by Microsoft. It is a
                        strict syntactical superset of JavaScript and adds optional static typing to the language.
                        TypeScript is designed for development of large applications and
                        transcompiles to JavaScript
                </p>
                </div>
            </div>


            <div className="card">
                <img src={ReactImage} alt="" />
                <div>
                    <h1>REACTJS</h1>
                    <p>
                        React is an open-source JavaScript library for building user interfaces or UI components. It is
                        maintained by Facebook and a community of individual developers and companies. React can be used as
                        a base in the development of single-page or mobile applications
                </p>
                </div>
            </div>

            <div className="card">
                <img src={Next} alt="" />
                <div>
                    <h1>NEXTJS</h1>
                    <p>
                        Next.js by Vercel - The React Frameworknextjs.org Production grade React applications that scale.
                        The world's leading companies use Next.js by Vercel to build static and dynamic websites and web
                        applications.
                </p>
                </div>
            </div>
        </div>

        <div className="bg-landing">
            <h1>Frontend Developer</h1>
        </div>

        <div className="container">
            <div className="details" id="whoAmI" ref={SkillScroll}>
                <span>Who am I</span>
                <p>I'm Hossein Ladmakhi Frontend Developer of IRAN. When I Was 15 Years old Start Programming but in 18
                Years old I start Seriosly. I'm <span id="age"></span> years old and Live in Rasht. I Love Programmng ,
                Learning , Sharing The Expreince
                and Knowledge With Another Friends i work wit reactjs and try to create tools for making easy to use. my
                gools is one day come to facebook and be frontend developer of facebook but something important about
                myself that i have some weakness part in myself that can't speak and i am dumb</p>
                <ul>
                    <li><a href="#">Email : cody18v@gmail.com</a></li>
                    <li><a href="#">Telegram : @Nima18v</a></li>
                </ul>
            </div>

            <div className="details" ref={AboutScroll}>
                <span>About Your Resume</span>
                <p>I Have More Expreince in ReactJS and Tools Like Redux and ContextAPI for Statemanagement or NEXT For
                Server Side Rendering</p>
                <p>About My Work . I Have internship For Safarzon and Fanavary Etelaat IRAN And Have Expreince of Frontend
                Developer for Two years in Negin Novin</p>
                <ul>
                    <li><a href="https://tourgram.ir/">Tourgram.ir</a></li>
                </ul>
            </div>
        </div>
    </React.Fragment>;
};


export default App;