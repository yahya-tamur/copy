document.getElementById('addrow').onclick = () => {
    console.log('AA')
    var d = document.createElement('div');
    var textbox = document.createElement('input');
    var button = document.createElement('button')
    button.textContent = 'copy'
    button.id = 'copy'
    textbox.id = 'textbox'
    d.id = 'row'
    button.onclick = () => {
        navigator.clipboard.writeText(textbox.value);
    }

    document.getElementById('head').appendChild(d);
    d.appendChild(textbox)
    d.appendChild(button)
}
