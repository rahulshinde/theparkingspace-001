window.addEventListener("load", setup);

function setup(){
	GreenAudioPlayer.init({
      selector: '.player',
      stopOthersOnPlay: true
  });

  document.querySelectorAll('.audio_button').forEach((e)=>{
  	e.addEventListener('click', openAudioPlayer);
  })

  setTimeout(function(){
    document.body.classList.add('loaded');
  }, 800)
}

function openAudioPlayer(e){
	document.querySelectorAll('.audio_button').forEach((e)=>{
  	e.classList.remove('selected');
  })
	document.querySelectorAll('.playlist_player').forEach((e)=>{
  	e.classList.add('hidden');
  })
  var players = document.querySelectorAll('.green-audio-player audio');

  for (var i = 0; i < players.length; i++) {
    GreenAudioPlayer.pausePlayer(players[i]);
  }

	e.target.classList.add('selected');
	document.querySelector('.' + e.target.dataset.audio).classList.remove('hidden')
}