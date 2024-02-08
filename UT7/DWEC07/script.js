
document.addEventListener('DOMContentLoaded', () => {
    let crearRSS = document.getElementById('crearRSS');
    let borrarRSS = document.getElementById('borrarRSS');
    let campoSelect = document.getElementById('campoSelect');
    let check_length = 0;
    for ( let clave in localStorage ) {
        if ( localStorage.length <= check_length ) { 
            break; 
        } else {
            campoSelect.innerHTML += `<option value="${clave}">${clave}</option>`;
            check_length += 1;
        }
    }
    crearRSS.addEventListener('click', crear);
    borrarRSS.addEventListener('click', borrar);
    campoSelect.addEventListener('change', renderizar);
    renderizar();

    function crear() {
        let new_option_name = prompt('Por favor, introduzca el nombre:');
        if ( localStorage.getItem(new_option_name) === null ) {
            let new_option_url = prompt('Por favor, introduzca la url:');
            localStorage.setItem(new_option_name, new_option_url);
            campoSelect.innerHTML += `<option value="${new_option_name}">${new_option_name}</option>`;
            campoSelect.value = new_option_name;
            renderizar();
        } else {
            alert('Ya hay un RSS con ese nombre');
        }
    }
    
    function borrar() {
        try {
            localStorage.removeItem(campoSelect.options[campoSelect.selectedIndex].value);
            campoSelect.options[campoSelect.selectedIndex].remove();
            renderizar();
        } catch {
            alert('No existe el elemento a eliminar.');
        }
    }
    
    function renderizar() {
        if (localStorage.length != 0) {
            let url = localStorage.getItem(campoSelect.options[campoSelect.selectedIndex].value);
            fetch(`server.php?url=${url}`)
            .then(response => response.json())
            .then(data => {
                gvar = data;
                contents =`<h1>${data.channel.title}</h1>
                        <h3>${data.channel.description}</h3>`;
                for ( let i = 0; i < data.channel.item.length; i++ ) {
                        contents += `<br/><h2>${data.channel.item[i].title}</h2>
                                    <h3>${data.channel.item[i].description}</h3>
                                    <a href="${data.channel.item[i].link}">${data.channel.item[i].link}</a>`       
                    }
                document.getElementById('noticias').innerHTML = contents;
                }
            )
            .catch(error => alert(error));
        } else { 
            document.getElementById('noticias').innerHTML = '';
        }
    }
});
