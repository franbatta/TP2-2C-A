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

var turnTimeIntoSeconds = time => {

  const minutesAndSeconds = time.split(":");

  return parseInt(minutesAndSeconds[0] * 60) + parseInt(minutesAndSeconds[1])
}
var extractTime = str => {
  var result = ''
  var i = 0

  while(!isNaN(parseInt(str[i],10)) || str[i] === ':') {
      result = result.concat(str[i])
      i++;
  }
  return [result, i];
}
var getTimeInSeconds = elem => {

  const list = [];

  for (var i = 0; i < elem.length; i++) {
      if(elem[i] === '"' && !isNaN(parseInt(elem[i + 1], 10))) {
          const result = extractTime(elem.substring(i + 1));
          const time = result[0];
          const video = elem.substring(result[1] + i + 3, result[1] + i + 4); 

          if (video === 'R')
              list.push(turnTimeIntoSeconds(time));
      }
  }

  return list.reduce((a, b) => a + b, 0)
}


console.log(getTimeInSeconds(str));
// obtener el total de segundos de todos los videos del tipo 'Redux Video'

// Fecha de solucio: Miercoles 2 de SEP

// Modalidad de entrega. Pull Request.