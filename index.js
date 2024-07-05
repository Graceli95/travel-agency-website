let menuIcon = document.querySelector('.menuIcon')
let closeMenuIcon = document.querySelector('.close-menu-icon')
let sideMenuContent = document.querySelector('.sideMenuContent')
let overlay = document.querySelector('.overlay')
    // window scroll event
window.addEventListener('scroll', function() {
        let scrollTop = document.documentElement.scrollTop
        if (scrollTop > 0) {
            sideMenuContent.style.position = 'fixed'
        }
    })
    // menuIcon click event
    // sideMenuContent 从左边滑出的效果 slide out from the left side
menuIcon.addEventListener('click', function() {
    sideMenuContent.style.display = 'block'
    sideMenuContent.style.zIndex = '1001'
    setTimeout(function() {
        sideMenuContent.style.marginLeft = '0px'
    }, 100)
})

// closeMenuIcon click event 
// // sideMenuContent 从左边滑回右边的效果 slide back to left and hide sideMenuContent
closeMenuIcon.addEventListener('click', function() {
    setTimeout(function() {
        sideMenuContent.style.marginLeft = '-448px'
        overlay.style.display = ''
    }, 100)

})

menuIcon.addEventListener('click', function() {
    overlay.style.display = 'block'
})
overlay.addEventListener('click', function() {
    setTimeout(function() {
        sideMenuContent.style.marginLeft = '-448px'
    }, 100)

    overlay.style.display = ''
})

// give each li their backgroundImage
// // when you click each li, url changes after click
var africa = document.getElementById('africa');
africa.addEventListener('mouseover', function() {
    africa.style.backgroundImage = "url('pics/africa.jpeg')"
});
africa.addEventListener('click', function() {
    window.location.href = 'https://webflow-path-three.webflow.io/continents/africa'
});

var asia = document.getElementById('asia');
asia.addEventListener('mouseover', function() {
    asia.style.backgroundImage = "url('pics/asia.jpeg')"
});
asia.addEventListener('click', function() {
    window.location.href = 'https://webflow-path-three.webflow.io/continents/asia'
});

var europe = document.getElementById('europe')
europe.addEventListener('mouseover', function() {
    europe.style.backgroundImage = "url('pics/europe.jpeg')"
});
europe.addEventListener('click', function() {
    window.location.href = 'https://webflow-path-three.webflow.io/continents/europe'
});

var france = document.getElementById('france')
france.addEventListener('mouseover', function() {
    france.style.backgroundImage = "url('pics/france.jpeg')"
});
france.addEventListener('click', function() {
    window.location.href = 'https://webflow-path-three.webflow.io/location/france'
});

var indonesia = document.getElementById('indonesia')
indonesia.addEventListener('mouseover', function() {
    indonesia.style.backgroundImage = "url('pics/indonesia.jpeg')"
});
indonesia.addEventListener('click', function() {
    window.location.href = 'https://webflow-path-three.webflow.io/location/indonesia'
});

var greece = document.getElementById('greece')
greece.addEventListener('mouseover', function() {
    greece.style.backgroundImage = "url('pics/greece.jpeg')"
})
greece.addEventListener('click', function() {
    window.location.href = 'https://webflow-path-three.webflow.io/location/greece'
});


var egypt = document.getElementById('egypt')
egypt.addEventListener('mouseover', function() {
    egypt.style.backgroundImage = "url('pics/egypt.jpeg')"
})
egypt.addEventListener('click', function() {
    window.location.href = 'https://webflow-path-three.webflow.io/location/egypt'
});

// side content from France to egypt
var franceLi = document.getElementById('france-li')
franceLi.addEventListener('mouseover', function() {
    franceLi.style.backgroundImage = "url('pics/france.jpeg')"
});
franceLi.addEventListener('click', function() {
    window.location.href = 'https://webflow-path-three.webflow.io/location/france'
});

var indonesiaLi = document.getElementById('indonesia-li')
indonesiaLi.addEventListener('mouseover', function() {
    indonesiaLi.style.backgroundImage = "url('pics/indonesia.jpeg')"
});
indonesiaLi.addEventListener('click', function() {
    window.location.href = 'https://webflow-path-three.webflow.io/location/indonesia'
});

var greeceLi = document.getElementById('greece-li')
greeceLi.addEventListener('mouseover', function() {
    greeceLi.style.backgroundImage = "url('pics/greece.jpeg')"
})
greeceLi.addEventListener('click', function() {
    window.location.href = 'https://webflow-path-three.webflow.io/location/greece'
});


var egyptLi = document.getElementById('egypt-li')
egyptLi.addEventListener('mouseover', function() {
    egyptLi.style.backgroundImage = "url('pics/egypt.jpeg')"
})
egyptLi.addEventListener('click', function() {
    window.location.href = 'https://webflow-path-three.webflow.io/location/egypt'
});

// give all the li same class name called country,give mouseover event, show their color change black and white when mouseover
let country = document.querySelectorAll('.country')
let i = 0
for (i = 0; i < country.length; i++) {
    let a = country[i]
    a.addEventListener('mouseover', function() {
        console.log(i);
        a.style.color = 'white'
        a.style.backgroundSize = 'cover'
    })
    a.addEventListener('mouseout', function() {
        a.style.color = 'black'
        a.style.backgroundImage = ''
    })
}

// choose-a-location (Click outside div to hide div in pure JavaScript)
let destinations = document.querySelector('.destinations')
let chooseaLocation = document.querySelector('.choose-a-location')
let downArrow = document.querySelector('.down-arrow')
let downArrowDestination = document.querySelector('.down-arrow-destination')
let chooseDestinations = document.querySelector('.chooseDestinations')
let idChooseDestinations = document.getElementById('idChooseDestinations')
let subtitleChange = document.querySelector('.subtitle')

document.addEventListener('click', function(e) {
    if (destinations.contains(e.target) &&
        chooseaLocation.style.display == 'none') {
        chooseaLocation.style.display = 'block'

        chooseaLocation.style.position = 'fixed'
        chooseaLocation.style.top = '80px'
        chooseaLocation.style.left = 'auto'
        chooseaLocation.style.right = '88px'

        subtitleChange.innerHTML = 'Choose a Location'
        downArrow.style.transform = 'rotateZ(180deg)';
    } else if (chooseDestinations.contains(e.target) &&
        chooseaLocation.style.display == 'none') {

        chooseaLocation.style.position = 'absolute'
        console.log(chooseDestinations.getBoundingClientRect())
        chooseaLocation.style.top = window.scrollY + chooseDestinations.getBoundingClientRect().bottom + 10 + "px"
        chooseaLocation.style.left = chooseDestinations.getBoundingClientRect().left + "px"
        chooseaLocation.style.right = 'auto'

        chooseaLocation.style.display = 'block'
        subtitleChange.innerHTML = 'Destinations'
        downArrowDestination.style.transform = 'rotateZ(180deg)';
    } else if (!chooseaLocation.contains(e.target)) {
        chooseaLocation.style.display = 'none'
        downArrow.style.transform = 'rotateZ(0deg)';
        downArrowDestination.style.transform = 'rotateZ(0deg)';
    }
});

// video-circle
let circleOnePlay = document.querySelector('.circleOnePlay')
let circleTwoBlue = document.querySelector('.circleTwoBlue')
let circleThree = document.querySelector('.circleThree')
let circleFour = document.querySelector('.circleFour')

circleOnePlay.addEventListener('mouseover', function() {
    circleOnePlay.style.backgroundColor = 'darkblue'
    circleTwoBlue.style.backgroundColor = 'white'
    circleThree.style.display = 'block'
    circleThree.style.animation = 'move 2s infinite'
    circleFour.style.display = 'block'
    circleFour.style.animation = 'moves 2s infinite'
})
circleOnePlay.addEventListener('mouseout', function() {
    // circleOnePlay.style.backgroundColor = ''
    circleOnePlay.style.display = ''
    circleTwoBlue.style.display = ''
    circleThree.style.display = ''
    circleFour.style.display = ''

})

circleTwoBlue.addEventListener('mouseover', function() {
    circleOnePlay.style.backgroundColor = 'darkblue'
    circleTwoBlue.style.backgroundColor = 'white'
    circleThree.style.display = 'block'
    circleThree.style.animation = 'move 2s infinite'
    circleFour.style.display = 'block'
    circleFour.style.animation = 'moves 2s infinite'

})

circleTwoBlue.addEventListener('mouseout', function() {
    circleOnePlay.style.backgroundColor = ''
    circleTwoBlue.style.backgroundColor = ''
    circleThree.style.display = ''
    circleFour.style.display = ''
})

// let anim1 = function() {
//     circleTwoBlue.style.backgroundColor = 'white'
// }
// circleTwoBlue.addEventListener('mousemove', anim1)

// slider bottom 

let rightButton = document.querySelector('.rightButton')
let leftButton = document.querySelector('.leftButton')
let rightButtonBig = document.getElementById('rightButtonBig')

let image = ['pics/greece.jpeg', 'pics/egypt.jpeg', 'pics/indonesia.jpeg']
let contentSubtitleOne = ["Thessolanaika, Greece", "Baharaiya Oasis, Egypt", "Densapaspar, Indonesia"]
let contentSubtitleTwo = ["Starting at $6700", "Starting at $6400", "Starting at $1900"]

let pageImage = document.getElementById('id-index')
let subtitleOne = document.getElementById('id-subtitle-1')
let subtitleTwo = document.getElementById('id-subtitle-2')

let index = 0
let rightButtonBigurls = ['https://webflow-path-three.webflow.io/vacations/thessaloniki',
    'https://webflow-path-three.webflow.io/vacations/bahariya-oasis',
    'https://webflow-path-three.webflow.io/vacations/denpasar'
]
let subtitle = document.getElementById('subtitle-box')
subtitle.addEventListener('click', function() {
    window.location.href = rightButtonBigurls[index]
})
rightButtonBig.addEventListener('click', function() {
    window.location.href = rightButtonBigurls[index]
})
rightButton.addEventListener('click', function() {
    index++
    if (index >= image.length) {
        index = 0
    }
    // pageImage.style.backgroundImage = `url(${image[index]})`
    pageImage.style.backgroundImage = `linear-gradient( rgba(15, 19, 38, 0.55), rgba(15, 19, 38, 0.55)), url(${image[index]})`
        // pageImage.style.backgroundColor = 'rgba(15, 19, 38, 0.55), rgba(15, 19, 38, 0.55)'
    subtitleOne.innerHTML = `${contentSubtitleOne[index]}`
    subtitleTwo.innerHTML = `${contentSubtitleTwo[index]}`
    subtitle.style.animation = 'display 2s'
})

leftButton.addEventListener('click', function() {
    index--
    if (index <= -1) {
        index = image.length - 1
    }
    pageImage.style.backgroundImage = `linear-gradient( rgba(15, 19, 38, 0.55), rgba(15, 19, 38, 0.55)), url(${image[index]})`
        // pageImage.style.backgroundColor = 'rgba(15, 19, 38, 0.55), rgba(15, 19, 38, 0.55)'
    subtitleOne.innerHTML = `${contentSubtitleOne[index]}`
    subtitleTwo.innerHTML = `${contentSubtitleTwo[index]}`
    subtitle.style.animation = 'display 2s'



})

// 另一种方法 another solution
//openup-overlay and opendown-overlay, openup in the middle 第一页从中间打开或撑开的效果
// let openUpOverlay = document.querySelector('.openup-overlay')
// let openDownOverlay = document.querySelector('.opendown-overlay')
// window.addEventListener('load', function() {
//     openUpOverlay.style.animation = 'openup 2s forwards'
// })
// window.addEventListener('load', function() {
//     openDownOverlay.style.animation = 'opendown 2s forwards'
// })

// about journal support 
window.addEventListener('scroll', function() {
    let aboutContainer = document.querySelector('.aboutContainer')
    let scrollTop = document.documentElement.scrollTop
    let covillaShow = document.querySelector('.covillaShow')
    let destinationName = this.document.querySelector('.destinationName')
    if (scrollTop < 79) {
        console.log(scrollTop);
        aboutContainer.style.marginTop = scrollTop - 79 + 'px'
        aboutContainer.style.opacity = (scrollTop + 21) * 0.01
        covillaShow.style.color = 'white'
        destinationName.style.color = 'white'
    } else if (scrollTop == 79) {
        aboutContainer.style.marginTop = '0' + 'px'
        aboutContainer.style.opacity = '1'
        covillaShow.style.color = 'black'
        destinationName.style.color = 'black'
    } else if (scrollTop > 79) {
        covillaShow.style.color = 'black'
        destinationName.style.color = 'black'
    }
})

// session-2 / acrossTheWorld
// swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.05,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// session-3
let benefitCard = document.querySelectorAll('.benefit-card')
let c = 0
for (c = 0; c < benefitCard.length; c++) {
    console.log(benefitCard[c])
    let d = benefitCard[c]
    d.addEventListener('mouseover', function() {
        d.style.borderRadius = '12px'
        d.style.transform = 'scale(1.05)'
        d.style.zIndex = '2'
    })
    d.addEventListener('mouseout', function() {
        d.style.borderRadius = '0px'
        d.style.transform = 'scale(1)'
        d.style.zIndex = '1'
    })
}

// session-4
// testimonialArrow mouseover & mouseout event
let testimonialClientName = document.querySelector('.testimonial-client')
let testimonialArrowLeft = document.querySelector('.testimonial-arrow-left')
let testimonialArrowRight = document.querySelector('.testimonial-arrow-right')

testimonialArrowLeft.addEventListener('mouseover', function() {
    testimonialArrowLeft.style.transform = 'scale(1.05)'
})
testimonialArrowLeft.addEventListener('mouseout', function() {
    testimonialArrowLeft.style.transform = 'scale(1)'
})

testimonialArrowRight.addEventListener('mouseover', function() {
    testimonialArrowRight.style.transform = 'scale(1.05)'
})
testimonialArrowRight.addEventListener('mouseout', function() {
    testimonialArrowRight.style.transform = 'scale(1)'
})

// testimonialArrow click event
let testimonialDescription = document.querySelector('.testimonial-description')
let testimonialClientList = ['Samantha Vohnhale', 'Wilson Tomales', 'Tammy Georgeon', 'Emily Camphon', 'Cassie Shamath']
let e = 0

testimonialArrowRight.addEventListener('click', function() {
    e++
    if (e >= testimonialClientList.length) {
        e = 0
            // console.log(testimonialClient[0])
    }
    testimonialClientName.innerHTML = `${testimonialClientList[e]}`
})

testimonialArrowLeft.addEventListener('click', function() {
    e--
    if (e <= -1) {
        e = testimonialClientList.length - 1
    }
    testimonialClientName.innerHTML = `${testimonialClientList[e]}`
})

// session-5
// 获取dom元素,top中的li
let topOne = document.querySelector('.topOne')
let topTwo = document.querySelector('.topTwo')
let topThree = document.querySelector('.topThree')
let topFour = document.querySelector('.topFour')
    // vacationTab的circle
let topOneC1 = document.querySelector('.topOneC1')
let topOneC2 = document.querySelector('.topOneC2')
let topTwoC1 = document.querySelector('.topTwoC1')
let topTwoC2 = document.querySelector('.topTwoC2')
let topThreeC1 = document.querySelector('.topThreeC1')
let topThreeC2 = document.querySelector('.topThreeC2')
let topFourC1 = document.querySelector('.topFourC1')
let topFourC2 = document.querySelector('.topFourC2')
    // vacationContent
let bottomOne = document.querySelector('.bottomOne')
let bottomTwo = document.querySelector('.bottomTwo')
let bottomThree = document.querySelector('.bottomThree')
let bottomFour = document.querySelector('.bottomFour')


topOneC1.style.display = 'block'
topTwoC2.style.backgroundColor = '#e6e6f3'
topTwoC1.style.display = 'none'
topThreeC2.style.backgroundColor = '#e6e6f3'
topThreeC1.style.display = 'none'
topFourC2.style.backgroundColor = '#e6e6f3'
topFourC1.style.display = 'none'
topTwo.style.borderBottom = '2px solid #e6e6f3'
topThree.style.borderBottom = '2px solid #e6e6f3'
topFour.style.borderBottom = '2px solid #e6e6f3'
bottomOne.style.display = 'block'
bottomTwo.style.display = 'none'
bottomThree.style.display = 'none'
bottomFour.style.display = 'none'


// topOne
topOne.addEventListener('click', function() {
        topOneC1.style.display = 'block'
        topTwoC2.style.backgroundColor = '#e6e6f3'
        topTwoC1.style.display = 'none'
        topThreeC2.style.backgroundColor = '#e6e6f3'
        topThreeC1.style.display = 'none'
        topFourC2.style.backgroundColor = '#e6e6f3'
        topFourC1.style.display = 'none'
        topTwo.style.borderBottom = '2px solid #e6e6f3'
        topThree.style.borderBottom = '2px solid #e6e6f3'
        topFour.style.borderBottom = '2px solid #e6e6f3'
        bottomOne.style.display = 'block'
        bottomTwo.style.display = 'none'
        bottomThree.style.display = 'none'
        bottomFour.style.display = 'none'
    })
    // topTwo
topTwo.addEventListener('click', function() {
        topOneC1.style.display = 'none'
        topOne.style.borderBottom = '2px solid black'
        topTwoC2.style.backgroundColor = 'black'
        topTwoC1.style.display = 'block'
        topTwo.style.borderBottom = '2px solid black'
        bottomOne.style.display = 'none'
        bottomTwo.style.display = 'block'
        topFourC1.style.display = 'none'
        topFourC2.style.backgroundColor = '#e6e6f3'
        topFour.style.borderBottom = '2px solid #e6e6f3'
        topThreeC1.style.display = 'none'
        topThreeC2.style.backgroundColor = '#e6e6f3'
        topThree.style.borderBottom = '2px solid #e6e6f3'
        bottomThree.style.display = 'none'
        bottomFour.style.display = 'none'
    })
    // topThree
topThree.addEventListener('click', function() {
        topOneC1.style.display = 'none'
        topOne.style.borderBottom = '2px solid black'
        topTwoC2.style.backgroundColor = 'black'
        topTwoC1.style.display = 'none'
        topTwo.style.borderBottom = '2px solid black'
        topThree.style.borderBottom = '2px solid black'
        bottomOne.style.display = 'none'
        bottomTwo.style.display = 'none'
        bottomThree.style.display = 'block'
        topFourC1.style.display = 'none'
        topFourC2.style.backgroundColor = '#e6e6f3'
        topFour.style.borderBottom = '2px solid #e6e6f3'
        topThreeC1.style.display = 'block'
        topThreeC2.style.backgroundColor = 'black'
        bottomFour.style.display = 'none'
    })
    // topFour
topFour.addEventListener('click', function() {
    topOneC1.style.display = 'none'
    topOne.style.borderBottom = '2px solid black'
    topTwoC2.style.backgroundColor = 'black'
    topTwoC1.style.display = 'none'
    topTwo.style.borderBottom = '2px solid black'
    topThree.style.borderBottom = '2px solid black'
    bottomOne.style.display = 'none'
    bottomTwo.style.display = 'none'
    bottomThree.style.display = 'none'
    topFourC1.style.display = 'block'
    topFourC2.style.backgroundColor = 'black'
    topFour.style.borderBottom = '2px solid black'
    topThreeC1.style.display = 'none'
    topThreeC2.style.backgroundColor = 'black'
    bottomFour.style.display = 'block'
})

// contentContainer
// let contentContainerList = document.querySelectorAll('.contentContainer')
// let f = 0
// for (f = 0; f < contentContainerList.length; f++) {
//     console.log("set mouseover listener: " + f)
//     contentContainerList[f]
//     console.log(contentContainerList[f])
//     contentContainerList[f].addEventListener('mouseover', function() {
//         console.log("mouseover")
//         console.log(contentContainerList[f])
//         contentContainerList[f].style.transform = 'scale(1.2)'
//     })
// }

let contentContainerOne = document.querySelector('#contentContainerOne')
let contentContainerTwo = document.querySelector('#contentContainerTwo')
let contentContainerThree = document.querySelector('#contentContainerThree')
let contentContainerFour = document.querySelector('#contentContainerFour')
let contentContainerFive = document.querySelector('#contentContainerFive')
let contentContainerSix = document.querySelector('#contentContainerSix')
let contentContainerSeven = document.querySelector('#contentContainerSeven')
let contentContainerEight = document.querySelector('#contentContainerEight')
let contentContainerNine = document.querySelector('#contentContainerNine')
let contentContainerTen = document.querySelector('#contentContainerTen')
let contentContainerEleven = document.querySelector('#contentContainerEleven')
let contentContainerTwelve = document.querySelector('#contentContainerTwelve')




contentContainerOne.addEventListener('mouseover', function() {
    contentContainerOne.style.transform = 'scale(1.05)'
    contentContainerOne.style.transition = 'all 1s'
})
contentContainerOne.addEventListener('mouseout', function() {
    contentContainerOne.style.transform = 'scale(1)'
})
contentContainerTwo.addEventListener('mouseover', function() {
    contentContainerTwo.style.transform = 'scale(1.05)'
    contentContainerTwo.style.transition = 'all 1s'
})
contentContainerTwo.addEventListener('mouseout', function() {
    contentContainerTwo.style.transform = 'scale(1)'
})
contentContainerThree.addEventListener('mouseover', function() {
    contentContainerThree.style.transform = 'scale(1.05)'
    contentContainerThree.style.transition = 'all 1s'
})
contentContainerThree.addEventListener('mouseout', function() {
    contentContainerThree.style.transform = 'scale(1)'
})
contentContainerFour.addEventListener('mouseover', function() {
    contentContainerFour.style.transform = 'scale(1.05)'
    contentContainerFour.style.transition = 'all 1s'
})
contentContainerFour.addEventListener('mouseout', function() {
    contentContainerFour.style.transform = 'scale(1)'
})
contentContainerFive.addEventListener('mouseover', function() {
    contentContainerFive.style.transform = 'scale(1.05)'
    contentContainerFive.style.transition = 'all 1s'
})
contentContainerFive.addEventListener('mouseout', function() {
    contentContainerFive.style.transform = 'scale(1)'
})
contentContainerSix.addEventListener('mouseover', function() {
    contentContainerSix.style.transform = 'scale(1.05)'
    contentContainerSix.style.transition = 'all 1s'
})
contentContainerSix.addEventListener('mouseout', function() {
    contentContainerSix.style.transform = 'scale(1)'
})
contentContainerSeven.addEventListener('mouseover', function() {
    contentContainerSeven.style.transform = 'scale(1.05)'
    contentContainerSeven.style.transition = 'all 1s'
})
contentContainerSeven.addEventListener('mouseout', function() {
    contentContainerSeven.style.transform = 'scale(1)'
})
contentContainerEight.addEventListener('mouseover', function() {
    contentContainerEight.style.transform = 'scale(1.05)'
    contentContainerEight.style.transition = 'all 1s'
})
contentContainerEight.addEventListener('mouseout', function() {
    contentContainerEight.style.transform = 'scale(1)'
})
contentContainerNine.addEventListener('mouseover', function() {
    contentContainerNine.style.transform = 'scale(1.05)'
    contentContainerNine.style.transition = 'all 1s'
})
contentContainerNine.addEventListener('mouseout', function() {
    contentContainerNine.style.transform = 'scale(1)'
})
contentContainerTen.addEventListener('mouseover', function() {
    contentContainerTen.style.transform = 'scale(1.05)'
    contentContainerTen.style.transition = 'all 1s'
})
contentContainerTen.addEventListener('mouseout', function() {
    contentContainerTen.style.transform = 'scale(1)'
})
contentContainerEleven.addEventListener('mouseover', function() {
    contentContainerEleven.style.transform = 'scale(1.05)'
    contentContainerEleven.style.transition = 'all 1s'
})
contentContainerEleven.addEventListener('mouseout', function() {
    contentContainerEleven.style.transform = 'scale(1)'
})
contentContainerTwelve.addEventListener('mouseover', function() {
    contentContainerTwelve.style.transform = 'scale(1.05)'
    contentContainerTwelve.style.transition = 'all 1s'
})
contentContainerTwelve.addEventListener('mouseout', function() {
    contentContainerTwelve.style.transform = 'scale(1)'
})

// session-7
let meetAgentLink = document.querySelector('.meetAgentLink')
meetAgentLink.addEventListener('mouseover', function() {
    meetAgentLink.style.backgroundColor = '#081c3a'
    meetAgentLink.style.transform = 'scale(1.05)'
    meetAgentLink.style.transition = 'all 1s'
})
meetAgentLink.addEventListener('mouseout', function() {
    meetAgentLink.style.backgroundColor = '#3572ff'
    meetAgentLink.style.transform = 'scale(1)'
})