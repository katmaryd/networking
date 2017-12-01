var quotes = [
"\"If the conference has an exhibit hall, warm there. It is an entire room of people who are paid to talk to you, and more or less expect you to walk away after a minute. Have a line prepared - I usually start with, \"Just checking out your swag for my kids!\" Ask them about their product, take a card, and move on.\"",
// Marissa Polsky Goldsmith
"\"Try asking open ended questions to get the other person to talk more than you. Yes or no answers end the conversation quickly.\"",
// Yemaya Storm
"\"I will always talk to the people beside me and behind me (that is three people) and will change my seat at least once during a conference!\"",
"\"I try and connect with attendeees before the event - a lot of conferences have apps like Whova which let you network before the event.\"",
// Suvasanamayee Viswanatha
"\"Have questions in your mental back pocket: e.g., what brings you here, what are you passionate about... Be sure to ask AND answer them for yourself as practice.\"",
// Alex Fujiyama
"\"I think what helps me most was practice and taking a deep breath. I know that sounds like pretty useless advice but I have the tendency to speak fast in those situations and get pretty sweaty. So I just try to focus on my breathing and slow down and focus on what I am saying.\"",
// Justine Viola
"\"I remind myself that other people feel the same way I do... I also remind myself that an awkward conversation is not that big a deal. If I flop with one attempt, I'll probably never see that person again, and there are plenty of others.\"",
// Stephanie Marsh
"\"There are a few tactical conversation starters that work well: compliment, weather or traffic. Also, if I know there are people I would like to meet attending I try to ask questions about their company.\"",
// Katie Ewers
"\"Try asking, \"Is this your first time at this conference?\" If so, commiserate about being overwhelmed, share first-timer concerns and discoveries, how'd you hear about this, etc. If not, ask what they've learned over their past attendance, and what they recommend for you.\"",
// Ari Rapkin Blenkhorn
"\"I\'ve found that speaking actually helps with this... As a speaker, you usually get to network with the other speakers before the conference begin, so automatically you already know some people off the bat, andwhen you’re done speaking, people come up to you and start the conversation.\"",
// Kim Arnett
"\"Remember it\'s quality over quantity. Try to talk to 5 people and create a real connection with them. If you start the conversation chances are the other person will be receptive because they are there for the same thing.\"",
// Melinda McPherson Golden
"\"Everyone is awkward, you just keep doing it and it gets better and better. Give yourself some grace. The only tricks I have are 1) be genuinely interested in other people, then the convos flow naturally 2) don't just talk about what you or other people do, I try to make that the last question I ask 3) have some default Qs you always can ask. I always go with kids, pets, and the city. Those are always winners!\"",
// Esther Iman
"\"Grab a wing woman! I'm not an introvert and I recently went to an event with a friend. She stood there while I met people and provided introductions! She actually made several connections and later, had coffee with a few of them.\"",
// Traca Savadgago
"\"Find another person standing alone, and go be honest with them - \"I always feel so awkward at networking events, mind if I stand with you?\" Almost always, they are super relieved to have someone with them. 2nd, I give myself a goal of talking to 3 or 4 or 5 people before I can leave.\"",
// Jess Strong
"\"Stretch those legs in other ways...things like Toastmasters, chairing meetings, volunteering, etc.\"",
// Beth Eady
"\"I find that smiling and making eye contact makes a big difference.\"",
// Shireen Kahn
"\"It depends on why you're there. If you just want to see speakers and learn, you're under no obligation to have meaningless conversations with strangers. If you have networking-related goals, you'll need to schmooze, but you won't enjoy or be very good at it if you don't take care of you. Take breaks, minimize time in the press of the big main room, and explore smaller quieter and outdoor areas.\"",
// Christine Bower



]
 
 
function newQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
	document.getElementById("myImg").src = "lightbulbglow.png";
	

}

	
	

 
 