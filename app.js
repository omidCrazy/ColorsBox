let colorCol = document.querySelector('.color-col')
let themeBtn = document.querySelector('.sun-icon')
let sunIcon = document.querySelector('.sun-icon i')

themeBtn.addEventListener('click' , function() {
    document.body.classList.toggle("light")
    if (document.body.classList.contains("light"))
    {
        sunIcon.className = "ri-moon-line"
    }
    else {
        sunIcon.className = "ri-sun-line"
    }
})

let roseColors = [
    {color:"#ffe4e6" , tint: 100},
    {color:"#fecdd3" , tint: 200},
    {color:"#fda4af" , tint: 300},
    {color:"#fb7185" , tint: 400},
    {color:"#f43f5e" , tint: 500},
    {color:"#e11d48" , tint: 600},
    {color:"#be123c" , tint: 700},
    {color:"#9f1239" , tint: 800},
    {color:"#881337" , tint: 900}
]

let blueColors = [
    {color:"#dbeafe" , tint: 100},
    {color:"#bfdbfe" , tint: 200},
    {color:"#93c5fd" , tint: 300},
    {color:"#60a5fa" , tint: 400},
    {color:"#3b82f6" , tint: 500},
    {color:"#2563eb" , tint: 600},
    {color:"#1d4ed8" , tint: 700},
    {color:"#1e40af" , tint: 800},
    {color:"#1e3a8a" , tint: 900}
]


let roseRow = document.createElement('div')
roseRow.classList = "color-row rose"
let roseTitle = document.createElement('h1')
roseTitle.classList = "sm-text"
roseTitle.innerHTML = "Rose"
roseRow.append(roseTitle)

let blueRow = document.createElement('div')
blueRow.classList = "color-row blue"
let blueTitle = document.createElement('h1')
blueTitle.classList = "sm-text"
blueTitle.innerHTML = "Blue"
blueRow.append(blueTitle)

colorCol.append(roseRow, blueRow)

roseColors.forEach(function(color) {
    let colorItem = document.createElement('div')
    colorItem.innerHTML = color.tint
    colorItem.setAttribute('data-color' , color.color)
    colorItem.classList = "color-item"
    colorItem.style.backgroundColor = color.color

    colorItem.addEventListener('mouseover' , function() {
        colorItem.innerHTML = color.color
    })

    colorItem.addEventListener('mouseleave' , function() {
        colorItem.innerHTML = color.tint
    })

    colorItem.addEventListener('click' , function(e) {
        let clickedItem = e.target
        clickedItem.classList.add('active')
        
        navigator.clipboard.writeText(color.color)
        setTimeout(() => {
        clickedItem.classList.remove('active')

        },2000)
    })
    roseRow.append(colorItem)
})

blueColors.forEach(function(color) {
    let colorItem = document.createElement('div')
    colorItem.innerHTML = color.tint
    colorItem.setAttribute('data-color' , color.color)
    colorItem.classList = "color-item"
    colorItem.style.backgroundColor = color.color

    colorItem.addEventListener('mouseover' , function() {
        colorItem.innerHTML = color.color
    })

    colorItem.addEventListener('mouseleave' , function() {
        colorItem.innerHTML = color.tint
    })

    colorItem.addEventListener('click' , function(e) {
        let clickedItem = e.target
        clickedItem.classList.add('active')
        
        navigator.clipboard.writeText(color.color)
        setTimeout(() => {
        clickedItem.classList.remove('active')

        },2000)
    })
    blueRow.append(colorItem)
})



