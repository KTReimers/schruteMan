// var world=[
//     [2,2,2,2,2,2,2,2,2,2],
//     [2,0,1,1,2,1,1,1,1,2],
//     [2,1,1,1,2,1,2,1,1,2],
//     [2,1,1,1,2,2,2,1,1,2],
//     [2,1,1,1,1,1,1,1,1,2],
//     [2,1,1,1,1,1,1,1,1,2],
//     [2,1,1,1,1,1,1,1,1,2],
//     [2,1,1,1,1,1,1,1,1,2],
//     [2,1,1,1,1,1,1,1,1,2],
//     [2,2,2,2,2,2,2,2,2,2]
// ]
var world=[]


for(var i =0; i < 20; i++){
    world[i]= []
    for(var j= 0; j<20; j++){
        if(i == 0){
            world[i]=[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
        }else if(i ==19){
            world[i]=[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
        }else if(i==1 && j == 1){
            world[i][j]=0
        }else{
            if(j==0){
                world[i][j]= 2
            }else if(j==19){
                world[i][j]= 2
            }else{
                var test = Math.floor(Math.random()*3)
                world[i][j] = test
                console.log(test)
            }
        }
    }
}
var dwight = {
    x: 1,
    y: 1
}
var score = document.getElementById('score')

function displayWorld(){
    var output = ""
    for(var i=0; i<world.length; i++){
        output +='\n<div class="row">\n'
        for(var j=0; j<world[i].length; j++){
            if(world[i][j]==2)
                output+='<div class="battlestar"></div>'
            else if(world[i][j]==1)
                output+='<div class="beets"><img src="./img/beets.png" alt="beets" class="beetImg"></div>'
            if(world[i][j]==0)
                output+= '<div class="empty"></div>'
            // output = output + world[i][j]
        }
        output+= '\n</div>'
    }
    // console.log(output)
    document.getElementById('world').innerHTML=output
}
displayWorld()
function schruteMan(){
    document.getElementById('schrute').style.top = dwight.x*50 +'px'
    document.getElementById('schrute').style.left = dwight.y*50 +'px'
}

function newGame(){
    location.reload()
}

document.onkeydown = function(e){
    console.log(e.code)
    if(e.code == "ArrowDown"){
        dwight.x ++
        if(world[dwight.x][dwight.y]==2){
            dwight.x--
        }

    }
    if(e.code == "ArrowUp"){
        dwight.x --
        if(world[dwight.x][dwight.y]==2){
            dwight.x++
        }
    }
    if(e.code == "ArrowLeft"){
        dwight.y --
        if(world[dwight.x][dwight.y]==2){
            dwight.y++
        }
    }
    if(e.code == "ArrowRight"){
        dwight.y ++
        if(world[dwight.x][dwight.y]==2){
            dwight.y--
        }
    }
    if(world[dwight.x][dwight.y] == 1){
        world[dwight.x][dwight.y] = 0
        score.innerText ++
        displayWorld()
    }

    schruteMan()
}

// var officeMusic = new Audio("")

// var music = new Video({
//     loop:true,
//     volume:0.5,
//     src:"https://www.youtube.com/embed/uyIVAm9PVrI?autoplay=1"
// })

// function setVolume(){
//     music.volume=0.2
// }
// music.setVolume(0.2)

// arrow up = keycode 38
// key down = keycode 40
// arrow right = keycode 39
// arrow left = keycode 37



// if(dwight.x < 400){
//     dwight.x += 50
// }
// if(dwight.x > 50){
//     dwight.x -= 50
// }
// if(e.code == "ArrowLeft"){
//     if(dwight.y > 50){
//         dwight.y -= 50
//     }
//     document.getElementById('schrute').style.left = dwight.y +'px'
// }
// if(e.code == "ArrowRight"){
//     if(dwight.y < 400){
//         dwight.y += 50
//     }
//     document.getElementById('schrute').style.left = dwight.y +'px'
// }
