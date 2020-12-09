var data = [
    {
        "title": "배움의 원칙",
        "content": "거꾸로캠퍼스가 실현하는 21세기"
    }]
for (var index in data){
    var box2 = document.createElement("div")
    box2.classList.add('titlehtml')
    box2.appendChild(box2)
}

document.write(data["title"])