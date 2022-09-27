const darkMode = document.getElementById('dark-mode')
const lightMode = document.getElementById('light-mode')

darkMode.addEventListener('click', function () {
    document.body.classList.add('dark-mode')
    darkMode.classList.toggle('hide')
    lightMode.classList.remove('hide')
})

lightMode.addEventListener('click', function () {
    document.body.classList.remove('dark-mode')
    darkMode.classList.toggle('hide')
    lightMode.classList.add('hide')
})
