const fourierTracer = require('../../dist/index.js')


let paths = {
    heart: 'M140 20C73 20 20 74 20 140c0 135 136 170 228 303 88-132 229-173 229-303 0-66-54-120-120-120-48 0-90 28-109 69-19-41-60-69-108-69z'
}


let canvas = document.getElementById('test-fourier-canvas')
let ctx = canvas.getContext('2d')