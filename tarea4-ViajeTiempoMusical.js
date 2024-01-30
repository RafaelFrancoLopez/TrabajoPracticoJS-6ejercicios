var musica = {
    1960 : ['The Beatles - Revolution', ' The Rollings Stones - Gimme Shelter', ' Jimi Hendrix - Purple Haze', ' The Doors - Light my Fire', ' The Who - My Generation'],
    1970 : ['Led Zeppelin - Stairway to Heaven', ' Pink Floyd - Comfortably Numb', ' David Bowie - Life on Mars ', ' AC/DC - Let There Be Rock', ' Queen - Bohemian Rhapsody'],
    1980 : ['The Police - Every Breath you Take',' Metallica - Master of Puppets', ' U2 - With or Whitout you', ' Guns N Roses - Sweet child o Mine'],
    1990 : ['Nirvana - Smells Like Teen Spirit', 'Pearl Jam - Even Flow', ' Radiohead - Polaroid Android', ' Soundgarden - Black Hole Sun', ' Rage Against The Machine - Killing in the Name'],
    2000 : ['The White Stripes - Seven Nation Army', ' Linkin Park - In the End', ' System of a Down - Chop Suey!', ' Arcade Fire - Wake Up', ' The Strokes - Reptilia']
}

function viajeEnElTiempo(decada){
    if(musica.hasOwnProperty(decada)){
        var recomendaciones =  musica[decada];
        return `Estas canciones son las que te recomiendo en base al año ${decada}: ${recomendaciones}`;
    } else {
        return 'Por favor, escribe bien la decada que te interese';
    }
}

console.log(viajeEnElTiempo(1990));