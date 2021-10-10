const progress = document.querySelector('.progress')
const loading = document.querySelector('.loading')

let i = 0
const fakeUploadPercentage = [0, 10, 25, 50, 75, 100,]

const interval = setInterval(() => {
    progress.style.width = `${fakeUploadPercentage[i]}%`
    
    i++
}, 1000)