let imgList = Array.from(document.querySelectorAll('.item img')),
    lightBoxContainer = document.querySelector('#lightBoxContainer'),
    lightBoxItem = document.querySelector('#lightBoxItem'),
    closeBtn = document.querySelector(`#close`),
    prevBtn  = document.querySelector(`#prev`),
    nextBtn = document.querySelector(`#next`),
    currentIndex;

// ======== display lightBoxContainer and set clicked img src as a background img to lightBoxItem  ======== 
for(let i = 0 ; i < imgList.length ; i++ )
{
    imgList[i].addEventListener('click', function(e){
        lightBoxContainer.style.display ='flex';
        let imgSrc = e.target.getAttribute('src')
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`
        currentIndex = imgList.indexOf(e.target)
    })
}
/* function nextSlid() {
    currentIndex +=1    //  number of the next img turn
  
    let imgSrc = imgList[currentIndex].src 
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}
function prevSlide() {
    currentIndex -= 1 
    let imgSrc = imgList[currentIndex].src
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
} */

// ======== slide next and previous function ======== 
function slide(index) {
    currentIndex += index  // elsora elly 3leha el dor
    if(currentIndex == imgList.length){
        currentIndex = 0
    }
    if(currentIndex == -1){   
        currentIndex = imgList.length - 1
    }
    let imgSrc = imgList[currentIndex].src
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}

// ======= call next and previous and close functions with mouse events ======
nextBtn.addEventListener('click', function () {slide(1)})
prevBtn.addEventListener(`click`, function () {slide(-1)})
closeBtn.addEventListener('click',function(e){exitLightBox()})

// ======= exit functions ======
function exitLightBox() {
    lightBoxContainer.style.display ='none';
}
lightBoxContainer.addEventListener(`click`,function(e){
    if(e.target == lightBoxContainer)
    {
        exitLightBox()
    }
})

// ======= call next and previous and close events with keyboard events ======
document.addEventListener(`keydown` ,function(e) {
        if(e.code == `ArrowRight`)
        {
            slide(1)
        }
        else if(e.code == `ArrowLeft`)
        {
            slide(-1)
        }
        else if(e.code == `Escape`)
        {
            exitLightBox()
        }
})


