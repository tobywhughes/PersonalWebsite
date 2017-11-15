import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Languages from './languages';
import './index.css'
import pyimage from './images/python.png'
import rustimage from './images/rust.png'
import csharpimage from './images/csharp.png'
import cppimage from './images/cpp.png'
import jsimage from './images/js.png'

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
        <br /><br /> &gt;&gt; ./Languages       
        </p>
        <Languages name = "Python" tag= "Python" image= {pyimage}/>
        <Languages name = "Rust" tag= "Rust" image= {rustimage}/>
        <Languages name = "C#" tag= "CSharp" image= {csharpimage}/>
        <Languages name = "C/C++" tag= "CPP" image= {cppimage}/>
        <Languages name = "JavaScript" tag= "JavaScript" image= {jsimage}/>
        <p>
        Other Used Languages: Java, HTML/CSS, Xaml, MASM, GASM<br/><br/>
        &gt;&gt; ./Frameworks
        <br/>
        </p>
    </div>
);


ReactDOM.render(App, document.getElementById('root'));
