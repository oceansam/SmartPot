# 🧠 SmartPot 🌱
RUHacks 2021 Project
SmartPot is a modern approach to tracking plant life through everday applications. We make use of both webpages and discord to give users feedback on their plant status. 

## Inspiration ❤️
A friend of ours is an avid gardener and started to garden more since it was the beginning of Spring. However, there were too many plants to keep track of, and it grew more difficult to remember what plant needs what nutrients.

## What it does 🤔
SmartPot tracks soil moisture, temperature, and humidity for your home plants. It displays data in a user-friendly format on our website and discord bot.

##Stack📚
Vue.js
Express
Discord.js
Flask
C++
Typescript
Python


## How we built it and Problem Solving✍️
We split the work into three different tasks: gathering data, connecting with other services, and showing the data.
Gathering data was the hardware part of this project; we used an Arduino and sensor to gather the plant's data.
Connecting the services was the hardest part of the project which we get to in the next part of this post.
Connectivity dealt with mainly translating the data into a readable format for demonstration.
Displaying data was where Vue and Discord.js were used mainly to take the information from the Web Server.

## Challenges we ran into 🔥
Connectivity was the hardest thing in our project because we had different technologies and languages all working as one.  This is a simplistic model of how our pipeline works:
Hardware/Sensor =>Python => Web Server => Vue/Discord.js

## What we learned 📗
We learned how to build a hardware product and communicate data through our own API. We used a lot of languages so we learned and created a workflow that benefited each party during the project. 
Finally, we also learned how to effectively collaborate as a team remotely due to COVID, especially with a project that involved hardware. 

##MVP Minimum Viable Product 👍
We were able to complete the majority of the project. Though, We had little to no time to implement automatic watering, this was because we lacked the resources to ship the parts for the watering system in the available time frame. However, given these circumstances all functionality besides the self hydration feature were implemented. 

##Price 🤑
$35.00

##Uniqueness 🌟
Our idea is unique because we took a more accessible approach to our product. We currently provide two main platforms to track your plants which are through the webpage and discord. Given how we constructed our web server, this allows us to further expand to more platforms in the future. 

##Design 🎨
We used a minimalist Vue design to make it easy to look at and understand the plant information.
As for the discord bot, we provide a simple bar chart format to digest the data in a fast, and easy way. 

##Presentation 📽️
Linked in the description.

##Accessibility 👪
Eliminates the need to constantly check on plants' temperature and humidity. Multiple platforms means that it is easier to access with different applications. We also added easy to read visuals and alternative
text for non-text features. This makes the content very readable and understandable and leaves little to no room for misinterpretation. 

## What's next for SmartPot 💡
Planning of implementing Machine Learning concepts to predict the amount of water that the plants need. 
