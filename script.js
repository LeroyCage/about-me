console.log('hi)')

const barEl = document.getElementById('BarTest');
let arrayOfHiddenImages = []

console.log(barEl)

function barDragFunction() {
    console.log('dragggg')
    const imageElements = document.getElementsByTagName('img');
    // look into html collection into an array
    // look into el.style 
    console.log({ imageElements })

}

const imgBackBtnEL = document.getElementById('img-back');

function imagesBack() {
    console.log('button was clicked!')
    arrayOfHiddenImages.map((imageID) => {
        document.getElementById(imageID).style.display = 'block'
    })
    imgBackBtnEL.style.display = "none"
    arrayOfHiddenImages = []
}

function buttonSwoop() {
    setTimeout(() => {

    }, 1000

    )
}

function hideObject(imageID) {
    arrayOfHiddenImages.push(imageID)
    const selectedImg = document.getElementById(imageID);
    selectedImg.style.display = 'none';
    console.log(imgBackBtnEL.style)

    if (imgBackBtnEL.style.display === 'none' || !imgBackBtnEL.style.display) {
        setTimeout(() => imgBackBtnEL.style.display = 'block', 1000)
    }
}