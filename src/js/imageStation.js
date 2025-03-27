const params = new URLSearchParams(window.location.search)
const idPhoto = params.get('id');
const urlPhoto = params.get('photoUrl')

const imgStation = document.getElementById('imgStation')
imgStation.src = urlPhoto
