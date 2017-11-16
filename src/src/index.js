import React from 'react';
import ReactDOM from 'react-dom';
import Header from './scripts/header';
import Languages from './scripts/languages';
import Frameworks from './scripts/frameworks';
import Projects from './scripts/projects';
import SocialMedia from './scripts/socialmedia';
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
        <p>&gt;&gt; cat /usr/Toby/Home/Documents/Introduction.txt
       <br /><br />########   Hi there!   ########
       <br />My name is Tobias Hughes and I am a Software Engineer. I like to use that label to describe myself because
       I see programming as much more than just stringing lines of code together. It is about architecting software that not only runs, but runs well.
       I care about how readability, scalability, and if I'm taking advantage of current technologies.<br/><br/>
       In my own projects, I enjoy working with the blockchain. 
       I believe that the blockchain is an exciting new technology that has large implications in cryptography and decentralization.
       I also enjoy creating emulators and finding exciting new languages and frameworks. In fact, I'm currently combining those two
       interests by writing a Game Boy emulator in Rust! 
       
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
        <Projects name="SmartPrizePool" tag="SmartPrizePool" link="https://github.com/tobywhughes/SmartPrizePool" description="Using Ethereum to make prize pools how they should be - decentralized and secure. Technologies used include Solidity, Truffle, and TestRPC."/>
        <Projects name="RustBoy" tag="RustBoy" link="https://github.com/tobywhughes/RustBoy" description="Game Boy emulator written entirely in Rust. Uses Piston Graphics framework for 2D Graphics. Written using Test-Driven Development,"/>
        <Projects name="PieCoin" tag="PieCoin" link="https://github.com/tobywhughes/PieCoin" description="Blockchain mining system intended to be turned into full cryptocurrency. Intended to teach students about blockchain technology and cryptography. Written entirely in Rust."/>
        <p>
        More projects can be found at: <a className="console-link" href="https://github.com/tobywhughes">github.com/tobywhughes/</a><br/><br/>
        &gt;&gt; ./SocialMedia <br/><br/>
        PRINTING SOCIAL MEDIA...
        </p>
        <SocialMedia name="GitHub" tag="GitHub" link="https://github.com/tobywhughes"/>
        <SocialMedia name="LinkedIn" tag="LinkedIn" link="https://www.linkedin.com/in/tobiaswhughes/"/>
        <SocialMedia name="Medium" tag="Medium" link="https://medium.com/@tobywhughes"/>
        <SocialMedia name="Twitter" tag="Twitter" link="https://twitter.com/tobywhughes"/>
        <SocialMedia name="Gitter" tag="Gitter" link="https://gitter.im/tobywhughes"/>
        <SocialMedia name="Stack Overflow" tag="StackOverflow" link="https://stackoverflow.com/users/4335496/toby-hughes?tab=profile"/>
        <p><br/>
        &gt;&gt; ./AboutThisSite <br/><br/>
        This is the first version of my personal website. I plan on expanding it a bit more in the future. The end goal is
        for it to actually emulate a basic console, but in the short term, I just want to add animations as you scroll down the site.
        If you have any suggestions, send them over to the github repo at <a className="console-link" href="https://github.com/tobywhughes/PersonalWebsite">github.com/tobywhughes/PersonalWebsite</a>. If you need to reach me, the quickest way would be LinkedIn. 
        If that doesn't work for you, twitter is your second best bet. If you prefer email, I can be reached at: tobywhughes@gmail.com.
        </p>
    </div>
);


ReactDOM.render(App, document.getElementById('root'));
