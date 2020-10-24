const newLocal = 'DOMContentLoaded';
document.addEventListener(newLocal, () => {
    const grid = document.querySelector('.grid');
    const doodler = document.createElement('div')
    let doolerLeftSpace = 50
    let doodlerBottomSpace = 150
    let platformCount;
    let isGameOver = false;

    class Platform {
        constructor(newPlatBottom) {
            this.bottom = newPlatBottom
            this.left = Math.random() * 315
            const visual = this.visual
            this.visual = document.createElement('div')
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
            console.log(visual)            
            
        }

    }
    //create doodler

    //creation du doodler
    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doolerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }

    function start() {
        if (!isGameOver) {
            createPlateform()
            createDoodler()


        }
    }


    function createPlateform() {
        for (let i = 0; i < platformCount; platformCount++) {
            let platformGAP = 600 / platformCount;
            let platformBottom = 100 + i * platformGAP
            let newPlatForm = new Platform(newPlatForm)
       
        }

    }


    start()


})





