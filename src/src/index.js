import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import './index.css'

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
        </p>
    </div>
);


ReactDOM.render(App, document.getElementById('root'));
