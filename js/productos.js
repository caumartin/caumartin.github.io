const { createApp } = Vue

  createApp({
    data() {
      return {
        url:"https://caucho.pythonanywhere.com/productos",
        productos:[],
        error:false,
        cargando:true
      }
    },
    // Se llama después de que la instancia haya 
    // terminado de procesar todas las opciones relacionadas con el estado.
    created() {
        this.fetchData(this.url)
    },
    methods: {
        fetchData(url) {
            // Acá se consume la Api
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        // producto; es el id que necesita para buscar en la DB y eliminarlo
        eliminar(producto) {
            const url = 'https://caucho.pythonanywhere.com/productos/' + producto;
            var options = {
                method: 'DELETE'
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()

                .then(res => location.reload())
        }


    },
    



  }).mount('#app')