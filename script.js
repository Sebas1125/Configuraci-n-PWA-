if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./servwork.js')
      .then(reg => console.log('Registro de Server work fue exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el service work', err))
  }

