var world=[
    [2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,2,1,1,1,1,2],
    [2,1,1,1,2,1,2,1,1,2],
    [2,1,1,1,2,2,2,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
]

var dwight = {
    x: 1,
    y: 1
}

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
    console.log(output)
    document.getElementById('world').innerHTML=output
}
displayWorld()
function schruteMan(){
    document.getElementById('schrute').style.top = dwight.x*50 +'px'
    document.getElementById('schrute').style.left = dwight.y*50 +'px'
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
        displayWorld()
    }

    schruteMan()
}
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
