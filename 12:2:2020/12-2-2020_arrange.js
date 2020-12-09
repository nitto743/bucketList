window.onload = function () {

    var colors = ["red", "green", "blue"]

    for (var index in colors) {
        var paragraph = document.createElement('div')
        paragraph.innerText = (colors[index])
        paragraph.classList.add('paragraph')
        paragraph.classList.add(colors[index])
                document.getElementById("container").appendChild(paragraph)
        
    }
}

