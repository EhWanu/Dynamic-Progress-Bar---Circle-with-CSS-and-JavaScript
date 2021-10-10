// const progress = document.querySelector('.progress')
// const loading = document.querySelector('.loading')

// let i = 0
// const fakeUploadPercentage = [ 10, 25, 50, 75, 100,]

// const interval = setInterval(() => {
//     progress.style.width = fakeUploadPercentage[i] + '%'
//     loading.innerHTML = fakeUploadPercentage[i] + '%'
//     i++
//     if(i== fakeUploadPercentage.length){
//         clearInterval(interval)
//         loading.innerHTML = 'Complete!'
//     }
// }, 1000)

const circle = document
.querySelector('.progress-circle')
const loading = document.querySelector('.loading')

let i = 0
const fakeUploadPercentage = [ 10, 25, 50, 75, 100,]

const circumference = circle.getTotalLength();

const interval = setInterval(()=>{
    circle.style.strokeDashoffset = 
    circumference - (fakeUploadPercentage[i] / 100) * circumference
    loading.innerHTML = fakeUploadPercentage[i] + '%'
    i++
    if( i == fakeUploadPercentage.length){
        clearInterval(interval)
        loading.innerHTML = 'OK :)'
    }
},1000)