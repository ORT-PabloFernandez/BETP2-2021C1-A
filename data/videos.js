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


let strList = str.split('li data-time="');

function getTotalTime(list){
  let total = 0;
  for (let index = 0; index < list.length; index++) {
    total += parseFloat(list[index])
    }
  return total
}

function getDurationOf(name){
  let filtrados = strList.filter(item => item.match(name)).map(duracion => {
    let p = duracion.split(':').map(e => parseFloat(e));
    return (p[0] * 60) + p[1]
  })
  return getTotalTime(filtrados);

}

console.log(getDurationOf("Redux"))

