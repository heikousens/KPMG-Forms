const thisForm = document.getElementById('formulario');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    const response = await fetch('http://localhost:3000/clientes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000/clientes' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
});
