function Rnd()
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById('random').style.backgroundColor=color
    document.getElementById('random2').style.backgroundColor=color
}

var  name="Akiko";
document.getElementById('nekoname').innerHTML= name;
function rename(){
    var input = document.getElementById('txt').value;
    document.getElementById('nekoname').innerHTML=input;
}