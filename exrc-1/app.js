const url = "test1.json "

let data = ''

const localData = localStorage.getItem('temp0')

if (!localData) {
    myJson();
    console.log('it is in local storage')
} else {

    data = JSON.parse(localData)
    console.log('local data:', data)
}

function myJson() {
    fetch(url)
        .then(res => res.text())
        .then(json => {
            data = JSON.parse(json)
            let strToSave = JSON.stringify(data)
            localStorage.setItem('temp1', strToSave)
        })
}