var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

var flkty = new Flickity( '.main-carousel', {
  hash: true,
  groupCells: true,
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelector('.button');

buttonGroup.addEventListener( 'click', function( event ) {

  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = 0;
  flkty.selectCell( index );
});