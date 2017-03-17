
function showAll(data) {
  console.log(data);
}

showAll(simplifiedJSON);
/*
Create a function named showAll
Pass one parameter (data)

Inside our function
Iterate through data
  for each object create elements
  create parent div
   with class of 'allpost' + object.id
  create a h2
    append/add object.title to h2
  Repeat for every value
  append all elements + values to the parent div

*/

var simplifiedJSON = [
 {
  "journalEntry" : "1",
  "date" : " August 15, 2016", 
  "title" : "Purpose",
  "content" : "Why I took this class and what I want to get out of it",
  "article" : "I wanted to take this class because I thought it was interseting to find out how to code. I had an interseting in coding when I did code.org and scratch. I thought it was cool to keep trying. I want to be able to able to code for FRC in Robotics because we use JavaScript. I think it will also help me create my own website the harder way compared to taking the easy way out and go on a website already created and make a new website.", 
  "img" : undefined
 }, 
 {
  "journalEntry" : "2",
  "date" : "August 24, 2016",
  "title" : "Different Between UX and UI",
  "content" : "Difference between UX and UI",
  "article" : "UX stands for User Experience. This is the experience people get when they entire a website. UI stands for User Interface. User Interface is suppose to be eye appealing for the user."
 },
  {
    "journalEntry" : "3",
    "date" : "September 2, 2016",
    "title" : "HTTP and CSS",
    "content" :  "HTTP and CSS",
    "article" : "HTTP is the language that describes the structure of Web pages like the headings, tables, photos, etc. CSS is the style sheet which includes colors, layouts and fonts."
  },
  {
    "journalEntry" : "4", 
    "date" : "September 26, 2016",
    "title" : "Responsive Design", 
    "content" : "What is a Responsive Web Design",
    "article" : "A Responsive Web Design is sites that can fit to all types of sizes. If I am making the screen smaller or bigger it's able to adjust to the screen size so I can see all the content. For example Facebook allows you see all the content if you have the screen at a regular size or if you make it smaller."
  }, 
  {
    "journalEntry"  : "5", 
    "date" : "September 28, 2016", 
    "title" : "Digimon Go",
    "content" : "Reflection on DigimonGo",
    "article" : "Doing a clone on Digimon Go was very interesting. It was surprising when I was able to create a website that was replicated to another one. It was difficult at first trying to figure out what I wanted to start on. I wanted to go from top to bottom making sure I had my layout right, but I decided to put everything on the screen and work from there. It was hard to do the background image and add the div block right next to it, but it got easier when I had some help with it. I was very proud with myself how I was able to finish everything on time. This was a great assignment I was able to do"
  },
  {
  "journalEntry" : "6", 
  "date" : "October 7, 2016", 
  "title" : "CSS Media Queries",
  "content" : "Reflection on Media Queries",
  "article" : "CSS Media Queries are used to make the website fit to your screen. If you're using a computer it will fit to your screen, if you're using a phone you'll be able to see the website just like on the computer. I think it's very useful to use so that you'll be able to see your website from many devices. When doing the Block family it was very fun being able to minimize and maximize my screen and change the colors for the screen. It was difficult at first to start doing this because you need really specific commands you want for the website to do and if you do it wrong it can mess up your whole entire design."
  },
  {
    "journalEntry" : "7",
    "date" : "October 31, 2016",
    "title" : "Basic JavaScript",
    "content" : "Reflection on Basic JavaScript",
    "article" : "At first during the break I started to learn JavaScript and it looked so confusing. It seemed a little easier than html because you just placed var in front to name a variable type which was kind of an easier concept, but you had to name the different data types that you had to remember which is confusing to do. During the school day, when we came back, I was getting it. I now know the different data types-Boolean, String, Array, Object, Number, etc. I'm still getting the hang of it, but I think it's more efficient than html."
  },
  {
    "journalEntry" : "8",
    "date" : "November 2, 2016", 
    "title" : "Conditionals",
    "content" : "Reflections on Aliens",
    "article" : "I really liked doing Aliens. It helped me kind of understand a little more how JavaScript works. We had to test it in jsbin and it didn't work at first, but then me and my partner realized it was because one statement wasn't true so it wouldn't have worked. It was kind of difficult with my partner. I don't know my partner as well so it was weird to interact with him. It was like he was doing most of the work which was kind of hard to understand what I should be doing. I know how to work with people now, but it was really good to do."
  },
  {
    "journalEntry" : "9",
    "date" : "November 21, 2016",
    "title" : "Verizon app challenge review",
    "content" : "Reflection's on VAC",
    "article" : "Our problem was that the sporting event at Waipahu High School wasn't updated on social media as often as we want. If someone can't make the game or wants to see it, they would have to wait till the next morning to find out how the teams did. Our app is focusing on Waipahu High School sporting events being updated frequently during the game so that people know what's happening. It would be like an instagram where you can scroll through different events that's happening so you get those live updates. I would improve our video by starting a little earlier with a specific plan on how we want to get the video done. At the last minute it was hard to plan how we wanted the video to look like and it messed us up a lot. A feature that I would like to add is you get to subscribe which sport you would like to follow with the updates so everytime someone updates that one event you get notifications explaining what in that play had happen. I don't know my teammates as much and didn't have their contact information so it was hard to figure out how to film with everybody's schedule. Next time the thing I would do differently is do it earlier so when time comes to publish the video we don't have to rush and not make it on time because it delays everyone."
  },
  {
    "journalEntry" : "10",
    "date" : ""
  }
]