const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

// Desarrollar una funcion que me devuelva el total de segundos de los videos de tipo Redux
// Transformar la cadena en objetos que pueda trabajar con los metodos vistos hasta ahora.

let videos = str.replace('<ul>', ' ').replace('</ul>', ' ').split('="').join(',').split(':').join(',').split('">').join(',').split('</');


let videosModified = videos.map(video => (
    {
        duracion : {
            minutos : video.split(',')[1],
            segundos : video.split(',')[2]
        },
        tipo : video.split(',')[3]
    }
));


videosModified = videosModified.filter( video => video.tipo === 'Redux Video');


function sum(arrVideos){
    let total = 0;
    for (const video of arrVideos) {
        total = total + ((parseInt(video.duracion.minutos)*60) + parseInt(video.duracion.segundos));
    }
   return total;
}
let sumaTotal = sum(videosModified);

console.log(sumaTotal);



