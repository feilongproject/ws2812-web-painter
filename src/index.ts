
console.log("hello world")

var nowId = -1
start(11, 11)
function start(x: number, y: number): void {
    var btns = ""
    var id = x * y
    for (var i = x - 1; i >= 0; i--) {
        btns += `<div class="line">`
        for (var j = y - 1; j >= 0; j--) {

            btns += `<button class="single" id="btn-${--id}">${id}</button>`
        }
        btns += `</div>`

    }
    $("#more").append(btns)
    //document.getElementById("more")?.innerHTML
}

$(".single").on("click", function () {
    var color = $(this).css("background-color")
    var c = color.split(/\(|\)/g)[1].split(/,/g)
    c.push($(this)[0].outerText)
    var d = new Array()
    c.forEach(e => {
        d.push(parseInt(e))
    });
    console.log(d,)
    nowId = d[3]

    $("#color-r").val(d[0])
    $("#color-g").val(d[1])
    $("#color-b").val(d[2])

})

$("#sub-color").on("click", function () {
    var rgb = new Array()
    rgb.push($("#color-r").val())
    rgb.push($("#color-g").val())
    rgb.push($("#color-b").val())
    rgb.push(nowId)
    setSingleColor(rgb)
    console.log(rgb)
})

$(".color-set").on("click", function () {
    var color = $(this).css("background-color")
    var c = color.split(/\(|\)/g)[1].split(/,/g)
    c.push($(this)[0].outerText)
    var d = new Array()
    c.forEach(e => {
        d.push(parseInt(e))
    });
    console.log(d,)

    $("#color-r").val(d[0])
    $("#color-g").val(d[1])
    $("#color-b").val(d[2])
    setSingleColor(d)

})

function setSingleColor(rgb: number[]) {
    $(`#btn-${nowId}`).css("background-color", `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`)
}

$("#tojson").on("click", function () {
    var colorss = new Array()
    for (var i = 0; i < 11 * 11; i++) {
        var color = $(`#btn-${i}`).css("background-color")
        var c = color.split(/\(|\)/g)[1].split(/,/g)
        var d = new Array()
        c.forEach(e => {
            d.push(parseInt(e))
        });
        colorss.push(d)

    }
    var t = {
        "seg": {
            "i": colorss
        }
    }
    console.log(JSON.stringify(t))
})

$("#sendjson").on("click", async function () {
    var colorss = new Array()
    for (var i = 0; i < 11 * 11; i++) {
        var color = $(`#btn-${i}`).css("background-color")
        var c = color.split(/\(|\)/g)[1].split(/,/g)
        var d = new Array()
        c.forEach(e => {
            d.push(parseInt(e))
        });
        colorss.push(d)

    }
    var t = {
        "seg": {
            "i": colorss
        }
    }
    await fetch("http://192.168.10.103/json/state", {
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(t)
    })
    //console.log(JSON.stringify(t))
})


/**
 ni
{"seg":{"i":[[0,0,0],[0,0,0],[0,0,0],[255,255,255],[255,255,255],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[255,255,255],[0,0,0],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0]]}}
hao
{"seg":{"i":[[0,0,0],[0,0,0],[255,255,255],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[255,255,255],[0,0,0],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[0,0,0],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0]]}}
shi
{"seg":{"i":[[0,0,0],[0,0,0],[0,0,0],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]}}
jie
{"seg":{"i":[[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[0,0,0],[0,0,0],[0,0,0],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[0,0,0],[0,0,0]]}}


*/