function talk()
{
    var know={
        "Who are you" : "Hello, Suvarna here :)",
        "How are you" :"great ^.^",
        "what can i do for you":"I am Learning Web Development",
        "Your education": "I'm Post graduate student of Computer Science at Pune University",
        "Your skills":"I have Knowledge in Web Development-HTML, CSS, JavaScript & software Testing-Core Java, Selenium Webdriver, Manual Testing, JIRA and Agile Methodology",
        ok:"Thank You So Much!",
        Bye:"Okay! will see you again...",

    };

var user= document.getElementById("userBox").value;
document.getElementById("chatLog").innerHTML= user + "<br>";
if(user in know)
{
    document.getElementById("chatLog").innerHTML =know[user] + "<br>";
}
else{
    document.getElementById("chatLog").innerHTML = "Sorry,I didn't understand <br>";

}
}
