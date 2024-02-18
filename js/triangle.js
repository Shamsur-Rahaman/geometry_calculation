function calculateTriangleArea(){
    const a = .5
    const triangleHeightInput = document.getElementById('triangle_height')
    const triangleBaseInput  = document.getElementById('triangle_base')
    const triangleHeightInputString = triangleHeightInput.value
    const triangleBaseInputString  = triangleBaseInput.value
    const triangleHeightValue = parseFloat(triangleHeightInputString)
    const triangleBaseValue  = parseFloat(triangleBaseInputString)

    const triangleArea = a * triangleHeightValue * triangleBaseValue

    const triangleText = document.getElementById('valueOfTriangleArea')
    triangleText.innerText = triangleArea   
}