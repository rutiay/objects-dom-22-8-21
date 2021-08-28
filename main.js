var taskArray = [
    { name: "clean room", isCompleted: true, id: Math.floor(Math.random() * 2000 + 1) },
    { name: "homework", isCompleted: false, id: Math.floor(Math.random() * 2000 + 1) },
    { name: "buy", isCompleted: true, id: Math.floor(Math.random() * 2000 + 1) },
    { name: "sell", isCompleted: true, id: Math.floor(Math.random() * 2000 + 1) },
    { name: "sleep", isCompleted: false, id: Math.floor(Math.random() * 2000 + 1) }
]

var taskDiv = document.getElementById("taskDiv");
for(var i = 0; i< taskArray.length; i++){
    taskDiv.innerHTML += `<p class="taskPara">${taskArray[i].name}: ${taskArray[i].isCompleted}.</p>`;
}

var button = document.getElementById("taskBtn");
var newTaskName = document.getElementById("userTaskName");
var taskCompleted = document.getElementsByClassName("taskPara");

for (var i = 0; i < taskCompleted.length; i++) {
    if(taskArray[i].isCompleted == true){
        taskCompleted[i].style.background = "red";
    }    
}

button.onclick = function(){
    var task = {};
    task.name = newTaskName.value;
    task.isCompleted = taskCompleted.value;
    task.id = Math.floor(Math.random() * 2000 + 1);
    taskArray.push(task);
    taskDiv.innerHTML += `${task.name}: ${task.isCompleted}<br>`
}


//! 2

var moviesArray = [
    {
        title: "Black Panther",
        img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
        cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Gurira", "Martin Freeman"]
    },
    {
        title: "Room",
        img: "https://resizing.flixster.com/F9JO256pVYPlYSktIeHZV-uw6G8=/206x305/v2/https://flxt.tmsimg.com/assets/p12008673_p_v10_ad.jpg",
        cast: ["Brie Larson", "Jacob Tremblay", "Joan Allen"]
    },
    {
        title: "Get Out",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
        cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford", "Caleb Landry Jones", "Stephen Root"]
    },
    {
        title: "The Lion King",
        img: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXN2MP9/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg",
        cast: ["Donald Glover", "James Earl Jones", " Billy Eichner", "Seth Rogen", "Beyoncé Knowles-Carter"]
    }
]

var moviesDiv = document.getElementById("movies");

for (var i = 0; i < moviesArray.length; i++) {
    moviesDiv.innerHTML += `<h1>${moviesArray[i].title}</h1>`;
    moviesDiv.innerHTML += `<img src="${moviesArray[i].img}">`;
    moviesDiv.innerHTML += `<h2>Cast</h2>`
    for (var j = 0; j < moviesArray[i].cast.length; j++) {
        moviesDiv.innerHTML += `${moviesArray[i].cast[j]}<br>`;
    }
}

//! -----------------------------------------------------------------------
//! 3

document.getElementById("myButton").onclick = function () {
    document.getElementById("myDiv").innerHTML += `${document.getElementById("myInput").value}<br>`;
}

//! -----------------------------------------------------------------------
//! 4

document.getElementById("addObject").onclick = function () {
    var myObject = {};
    myObject.first = document.getElementById("firstInput").value;
    myObject.second = document.getElementById("secondInput").value;
}

//! -----------------------------------------------------------------------
//! 5

var clientsArray = [];
var firstName = document.getElementById("nameOfUser");
var emailAddress = document.getElementById("email");
var Userage = document.getElementById("ageOfUser");


document.getElementById("sentBtn").onclick = function () {
    var client = {};
    client.name = firstName.value;
    client.email = emailAddress.value;
    client.age = Userage.value;
    clientsArray.push(client);
    document.getElementById("clients").innerHTML += `Name: ${client.name}<br> 
    Email: ${client.email}<br> Age: ${client.age}<br>`;
}

//! -----------------------------------------------------------------------
//! 6

document.getElementById("addPerson").onclick = function () {
    var person = {};
    person.firstName = document.getElementById("firstName").value;
    person.lastName = document.getElementById("lastName").value;
}

//! -----------------------------------------------------------------------
//! 7

for (var i = 0; i < 10; i++) {
    document.getElementById("numbers").innerHTML += `<p>${i}</p>`;
}

//! -----------------------------------------------------------------------
//! 8

var emailArray = ["ruti@gmail.com", "shahar@gmail.com", "noam@walla.com", "ariel@icloud.com"];
var myMessage = document.getElementById("message");
var userEmail = document.getElementById("newEmail");

document.getElementById("searchButton").onclick = function () {
    for (var i = 0; i < emailArray.length; i++) {
        if (userEmail.value == emailArray[i]) {
            myMessage.innerText = `The email address: ${emailArray[i]} appears in the array.`
            return;
        }
    }
    myMessage.innerText = `The email address: ${userEmail.value} does not appear in the array.`
}

//! -----------------------------------------------------------------------
//! 9

var userString = document.getElementById("userInput");
document.getElementById("Btn").onclick = function () {
    document.getElementById("myPara").innerHTML = `The length of: ${userString.value} is ${userInput.value.length}`;
}

//! -----------------------------------------------------------------------
//! 10

var userFullName = document.getElementById("userName");
var userCountry = document.getElementById("userCountry");
var userFlag = document.getElementById("userFlag");
var userAge = document.getElementById("userAge");

document.getElementById("createButton").onclick = function () {
    var people = {};
    people.name = userFullName.value;
    people.country = userCountry.value;
    people.flag = userFlag.value;
    people.age = userAge.value;
    document.getElementById("people").innerHTML += `<h1>Name: ${people.name}</h1> <h3>Country: ${people.country}</h3>
    <img src="${people.flag}"> <br> <p>Age: ${people.age}</p>`;
}
