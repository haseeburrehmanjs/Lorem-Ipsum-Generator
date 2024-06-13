let input = document.querySelector('#search')
let btn = document.querySelector('#btn')
let copyBtn = document.querySelector('#copy')
let content = document.querySelector('.content')

btn.addEventListener('click', loremGen)

copyBtn.addEventListener('click',  ()=> {
    navigator.clipboard.writeText(content.textContent).then(()=> {
        alert('Copy text succesfully')
    })
})

async function loremGen() {
    try {
        if (input.value == '') {
            alert('Requird')
        } else {
            input.value = ''
            let responce = await fetch(`http://hipsum.co/api/?type=hipster-centric&paragraf=${input.value}`)
            content.style.display = 'block'
            let data = await responce.json()
            console.log(data);
            content.textContent = data
        }
    }
    catch (e) {
        console.log(e);
    }
}


