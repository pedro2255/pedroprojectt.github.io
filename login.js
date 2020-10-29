function entrar() {
    var u = window.document.getElementById('user')
    var s = window.document.getElementById('senha')
    var user = String(u.value)
    var senha = String(s.value)
    var dados = window.document.getElementById('dados')
    var img = window.document.getElementById('img')
    
    if(user == 'code.py' && senha == 'code12345') {        
        dados.innerText = 'Acesso Liberado!'
        dados.style.background = 'darkgreen'
        dados.style.color = 'white'
        dados.style.padding = '15px'
        dados.style.borderRadius = '15px'
        dados.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.815)'
        img.src = 'aberto.png'
        

    } else {
        dados.innerText = 'User e Senha Incorretos!'
        dados.style.background = 'red'
        dados.style.color = 'white'
        dados.style.padding = '15px'
        dados.style.borderRadius = '15px'
        dados.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.815)'

    }
}