function calculateParallelogramArea(){
    const areaType = document.getElementById('shape').innerText
    const parallelogramHeightInput = document.getElementById('parallelogram_height')
    const parallelogramBaseInput  = document.getElementById('parallelogram_base')
    const parallelogramHeightInputString = parallelogramHeightInput.value
    const parallelogramBaseInputString  = parallelogramBaseInput.value
    const parallelogramHeightValue = parseFloat(parallelogramHeightInputString)
    const parallelogramBaseValue  = parseFloat(parallelogramBaseInputString)

    const parallelogramArea = parallelogramHeightValue * parallelogramBaseValue

    const parallelogramText = document.getElementById('valueOfParallelogramArea')
    parallelogramText.innerText = parallelogramArea  
    
    addToCalculationEntry(areaType, parallelogramArea)
}

function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation_entry')
    const p = document.createElement('p')
    const count = calculationEntry.childElementCount
    p.classList.add('my-4')

    p.innerHTML = `
                     ${count+1}.${areaType} ${area}cm<sup>2</sup>
                     <button class="btn btn-sm btn-success">Convert</button>  
    `
    calculationEntry.appendChild(p)
}