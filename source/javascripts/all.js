// This is where it all goes :)
$(document).ready(function(){
  heroCopies = {
    seguros: {
      title:    'Compara seguro de coche',
      subtitle: 'Elije tu seguro entre más de 25 compañías, contrata online y ahorra hasta un 75%',
      heroClass: 'car-insurance'
    },
    internet: {
      title:    'Compara tarifas de fibra óptica y ADSL',
      subtitle: 'Elije la mejor oferta de Internet y ahorra hasta 240 € al año en tu factura',
      heroClass: 'adsl'
    },
    cuentas: {
      title:    'Ahorra en tus cuentas bancarias',
      subtitle: 'Descubre qué cuentas bancarias cobran menos comisiones y te ofrecen más por tu dinero',
      heroClass: 'bank-account'
    }
  }
  $(".hero-switch").on('click', function(e){
    itemName = $(this).data('item');
      $("#hero-text h1").text(heroCopies[itemName]['title']);
      $("#hero-text h2").text(heroCopies[itemName]['subtitle']);
      $("#hero-bg").removeClass().addClass(heroCopies[itemName]['heroClass']);
  });
});
