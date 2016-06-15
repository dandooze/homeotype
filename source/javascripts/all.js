// This is where it all goes :)
$(document).ready(function () {
  heroCopies = {
    prestamos: {
      title:    '¿Necesitas un préstamo?',
      subtitle: 'Compara préstamos personales y encuentra la mejor oferta del mercado',
      heroClass: 'loans'
    },
    hipotecas: {
      title:    'Encuentra las mejores hipotecas',
      subtitle: 'Nuestro comparador de hipotecas te ayuda a encontrar las ofertas más baratas del mercado',
      heroClass: 'mortgages'
    },  
    cuentas: {
      title:    'Ahorra en tus cuentas bancarias',
      subtitle: 'Descubre qué cuentas bancarias cobran menos comisiones y te ofrecen más por tu dinero',
      heroClass: 'bank-account'
    },
    seguros: {
      title:    'Compara seguro de coche',
      subtitle: 'Elije tu seguro entre más de 25 compañías, contrata online y ahorra hasta un 75%',
      heroClass: 'car-insurance'
    },
    internet: {
      title:    'Compara tarifas de fibra óptica y ADSL',
      subtitle: 'Elije la mejor oferta de Internet y ahorra hasta 240 € al año en tu factura',
      heroClass: 'internet'
    },
    electricidad: {
      title:    'Encuentra las tarifas de electricidad más baratas',
      subtitle: 'Compara entre las mejores ofertas del mercado y ahorra 168 € en tu factura de la luz',
      heroClass: 'electricity'
    }
  }
  
  $(".hero-switch").on('click', function(e){
    $(".hero__text, .hero__cta" ).removeClass('video__cover');
    itemName = $(this).data('item');
    $(".hero__text h1").text(heroCopies[itemName]['title']);
    $(".hero__text h2").text(heroCopies[itemName]['subtitle']);
    $("#hero__background").removeClass().addClass(heroCopies[itemName]['heroClass']);
  });
});
