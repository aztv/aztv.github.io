let params = (new URL(window.location.href)).searchParams,
	title = params.get('title'),
	streams = params.get('streams'),
	secondLoad = params.get('secondLoad'),
	// если страницу уже перезагружали, то качество ставится на последнее выбранное, если нет, то ставится то, на которое перешли
	quality = !secondLoad ? params.get('quality') : null;

// ставим флаг перезагружали ли эту страницу
let refresh = (new URL(window.location.href));
refresh.searchParams.set('secondLoad', 1);
window.history.pushState({ path: refresh.href }, '', refresh.href);

document.title = title;
$('#title').text(title);
$('#links').html(qualityRender(streams))

var player = new Playerjs({
				id: "player", 
				file: streams,
				default_quality: quality
			});

function qualityRender(urls) {
    let html = 'Прямые ссылки:<ul>';
    let lines = urls.split('[');

    for (i of lines) {
        let label = i.match(/(^\d+p[^\]]*)/);
        let url = i.match(/https:\/\/.*\.m3u8 or ([^,]+)(,|$)/)
            if (label == null || url == null) {
                continue;
            }
            
            html += '<li><a class="film_a" href="'+url[1]+'" target="_blank">' + label[0] + '</a></li>';
    }
    html += '</ul>';
    return html;
}