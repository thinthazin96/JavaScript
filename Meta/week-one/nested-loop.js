
for(var i = 0; i < 2; i++) {
    for(var j = 0; j < 10; j++) {
        console.log(i, " * ", j, " = ", i*j)
    }
}

for(var i = 100; i > 10; i = i - 10) {
    for(var j = 10; j > 4; j= j- 5) {
        console.log(i, " / ", j , " = ", i/j)
    }
}

for (var i = 1; i <= 10; i++) {
    if(i == 1) {
        console.log("Gold medal")
    } else if (i == 2) {
        console.log("Silver medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    } else {
        console.log(i)
    }
}

for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            console.log(i)
    }
}
