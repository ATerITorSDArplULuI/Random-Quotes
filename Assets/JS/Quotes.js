/* Button Element */
const New = document.getElementById('#New');

/* Body Text Element */
const Quote = document.querySelector('#Quote');

/* Bold Text Element */
const Author = document.querySelector('#Author');

/* Generate a New Quote From The Quates List */
function Generate() {
    let random = Math.floor(Math.random() * Quotes.length);

    Quote.innerHTML = Quotes[random].Quote;
    Author.innerHTML = Quotes[random].Author;
}

/* Quotes */
const Quotes = [
    {
        Quote: "“I went to prison for my hacking. Now people hire me to do the same things I went to prison for, but in a legal and beneficial way.”",
        Author: "Kevin Mitnick"
    },
    {
        Quote: "“But have you ever felt that something was so good it couldn't possibly last?”",
        Author: "Kevin Mitnick"
    },
    {
        Quote: "“One noted software libertarian, Richard Stallman, even refused to protect his account with a password.”",
        Author: "Kevin Mitnick"
    },
    {
        Quote: "“Anyone who thinks that security products alone offer true security is settling for the illusion of security.”",
        Author: "Kevin Mitnick"
    },
    {
        Quote: "“Every hacker is to some extent a rebel who lives by different standards and enjoys beating the system.”",
        Author: "Kevin Mitnick"
    },
    {
        Quote: "“If you can't make it good, at least make it look good.”",
        Author: "Bill Gates"
    },
    {
        Quote: "“It's fine to celebrate success but it is more important to heed the lessons of failure.”",
        Author: "Bill Gates"
    },
    {
        Quote: "“Your most unhappy customers are your greatest source of learning.”",
        Author: "Bill Gates"
    },
    {
        Quote: "“The Internet is becoming the town square for the global village of tomorrow.”",
        Author: "Bill Gates"
    },
    {
        Quote: "“We all need people who will give us feedback. That's how we improve.”",
        Author: "Bill Gates"
    },
    {
        Quote: "“There's fears in everyone's job. Ours are in the limelight, and people think we're incredibly privileged or nuts to do what we do for a living.”",
        Author: "Rami Malek"
    },
    {
        Quote: "“Every guy should be the owner of a really nice pen. When you put your thoughts down, or whenever you're going to share something with someone, it means something if it bleeds out in a nice ink.”",
        Author: "Rami Malek"
    },
    {
        Quote: "“I'm drawn to projects where I play these really complicated characters, but also where I can have some type of influence on affecting what we see as societal norms.”",
        Author: "Rami Malek"
    },
    {
        Quote: "“I get to delve into some of the most creative experience I've had as an actor on 'Mr. Robot.' I think there's a wide opportunity for actors to do that now more so than ever on television.”",
        Author: "Rami Malek"
    },
    {
        Quote: "“I always loved Hanks in 'Philadelphia' and 'Forrest Gump' and watching how versatile he was. That shaped my impression of what someone was able to do. Of course, everything De Niro came up with was always something I was taken by.”",
        Author: "Rami Malek"
    }
]
