import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Languages from './languages';
import Frameworks from './frameworks';
import './index.css'
import pyimage from './images/python.png'
import rustimage from './images/rust.png'
import csharpimage from './images/csharp.png'
import cppimage from './images/cpp.png'
import jsimage from './images/js.png'
import reactimage from './images/react.png'
import xamarinimage from './images/xamarin.png'
import aspnetimage from './images/aspnet.png'
import djangoimage from './images/django.png'
import nunitimage from './images/nunit.png'
import pyqtimage from './images/pyqt.png'

const App = 
(   <div>
        <Header />
        <p>&nbsp;__________<br />
&lt; Welcome! &gt;<br/> 
 &nbsp;----------<br/>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \ &nbsp;  ^__^<br/>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  \&nbsp;  (oo)\_______<br/>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     (__)\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)\/\<br/>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||----w |<br/>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||<br />
       <br />&gt;&gt; cat /usr/Toby/Home/Documents/Introduction.txt
       <br /><br />########   Hi there!   ########
       <br />My name is Tobias Hughes and I am a developer. Of course, that doesn't really tell you
             much about me. But it's probably a good starting point. If I had to give myself a quick summary,
             I would describe myself as somebody who likes to explore unconventional concepts. For example,
             not many undergraduates can say that they participate in the Operating System development community.
             I am also interested in partcipating in the software community as well. This can be seen by my
             involvement in the open source community, speaking engagements at developer events, and lending support
             on help forums such as Stack Overflow and reddit.
        <br /><br /> &gt;&gt; ./Languages <br/><br/>
        PRINTING LANGUAGES...      
        </p>
        <Languages name = "Python" tag= "Python" image= {pyimage}/>
        <Languages name = "Rust" tag= "Rust" image= {rustimage}/>
        <Languages name = "C#" tag= "CSharp" image= {csharpimage}/>
        <Languages name = "C/C++" tag= "CPP" image= {cppimage}/>
        <Languages name = "JavaScript" tag= "JavaScript" image= {jsimage}/>
        <p>
        Other Languages: Java, HTML/CSS, Xaml, MASM, GASM<br/><br/>
        &gt;&gt; ./Frameworks
        <br/><br/>
        PRINTING FRAMEWORKS...
        </p>
        <Frameworks name = "React" tag= "React" side= "Left" image= {reactimage} />
        <Frameworks name = "Xamarin" tag= "Xamarin" side= "Right" image= {xamarinimage} />
        <Frameworks name = "ASP.NET" tag= "ASPNET" side= "Left" image= {aspnetimage} />
        <Frameworks name = "Django" tag= "Django" side= "Right" image= {djangoimage} />
        <Frameworks name = "NUnit" tag= "NUnit" side= "Left" image= {nunitimage} />
        <Frameworks name = "PyQt" tag= "PyQt" side= "Right" image= {pyqtimage} />
        <p>
        Other Frameworks: Prism, Entity, Tkinter, Pygame<br/><br/>
        &gt;&gt; ./CurrentProjects <br/><br/>
        SCANNING GITHUB FOR OPEN SOURCE PROJECTS. PLEASE WAIT...<br/>
        FOUND (3) CURRENT OPEN SOURCE PROJECTS. PRINT PROJECT DETAILS? [Y]es or [N]o?<br/><br/>
        &gt;&gt; sure<br/><br/>
        INVALID INPUT. PLEASE ENTER [Y] OR [N].<br/><br/>
        &gt;&gt; y<br/><br/>
        PRINTING PROJECT DETAILS...
        </p>
    </div>
);


ReactDOM.render(App, document.getElementById('root'));
