interface AudioPlayer {
	audioVolume: number;
	songDuration: number;
	song: string;
	details: Details
}

interface Details {
	author: string;
	year: number;
}

const audioPlayer: AudioPlayer = {
	audioVolume: 90,
	songDuration: 36,
	song: 'song.mp3',
	details: {
		author: 'Author',
		year: 2022
	}
}

// Desestructuracion de objetos
const { 
	audioVolume: volume,
	songDuration: duration,
	song: cancion,
	details
} = audioPlayer;

const { author } = details

console.log('Song:', cancion)
console.log('Duration:', duration)
console.log('Volume:', volume)
console.log('Author:', author)

// Desestructuracion de arrays

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']

const [p1, p2, p3] = dbz;

console.log(p1)

// Desestructuracion de argumentos


export { };