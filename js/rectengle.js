function calculateRectangleArea(){
    const rectangleHeightInput = document.getElementById('rectangle_height')
    const rectangleWidthInput  = document.getElementById('rectangle_width')
    const rectangleHeightInputString = rectangleHeightInput.value
    const rectangleWidthInputString  = rectangleWidthInput.value
    const rectangleHeightValue = parseFloat(rectangleHeightInputString)
    const rectangleWidthValue  = parseFloat(rectangleWidthInputString)

    const rectangleArea = rectangleHeightValue * rectangleWidthValue

    const rectangleText = document.getElementById('valueOfRectangleArea')
    rectangleText.innerText = rectangleArea   
}