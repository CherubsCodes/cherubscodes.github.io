var roles = [
    "ИТ-Директор",
    "HR-Директор",
    "Коммерческий директор",
    "Генеральный директор",
    "ИТ-Специалист",
    "HR-Специалист",
    "Бизнес-аналитик",
    "Губернатор",
    "Исполнительный директор",
    "Экономист"
]
 
var temper = [
    "Прогрессор",
    "Консерватор"
]

var number = Math.floor(Math.random()*10);
const num = number;

var roleText = document.getElementById("role");
var roleName = document.createTextNode(`${roles[num]}`);
roleText.appendChild(roleName);

var roleImgContainer = document.getElementById("roleImg");
var roleImg = document.createElement("img");
roleImg.src = `/images/role${num}.png`

roleImgContainer.appendChild(roleImg)

var number2 = Math.floor(Math.random()*2);
const num2 = number2;

var temperText = document.getElementById("temper");
var temperName = document.createTextNode(`${temper[num2]}`);

if(num2==1)
    temperText.style.color = "red";
else temperText.style.color = "green";

temperText.appendChild(temperName);

var playButton = document.getElementById("playButton");
var startDiv = document.getElementById("start");

function startGame()
{
    location.reload();
}