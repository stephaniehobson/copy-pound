var symbols = ['°C','°F','°'];
var inputsDiv = document.querySelector('#popup-inputs');
var buttonsDiv = document.querySelector('#popup-buttons');

// loop over symbols and create inputs and buttons
symbols.forEach(function(item, index, array) {
    var inputId = 'input-' + index;

    // input
    var newInput = document.createElement('input');
    newInput.id = inputId;
    newInput.value = item;
    newInput.className = 'hidden';
    inputsDiv.appendChild(newInput);

    // button
    var newButton = document.createElement('button');
    newButton.textContent = item;
    buttonsDiv.appendChild(newButton);

    // listener
    newButton.addEventListener("click", function() {
        copy(inputId);
    });
});

function copy(inputId) {
    console.log(inputId);
    var copyText = document.querySelector('#' + inputId);
    copyText.select();
    document.execCommand("copy");
    document.querySelector('body').className = 'copied';
    window.setTimeout(function(){
        window.close();
    }, 1000);
    // window.close();
}
