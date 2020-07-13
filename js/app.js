//дожидаемся полной загрузки страницы
window.onload = function () {
  //ищем элемент по селектору
  var a = document.getElementById('show');
  var b = document.getElementById('showV');
  var x, y, bot, topp;
  
  //вешаем на него события
  b.onmouseout = function(e) {
	if (e.clientX < x) {
		document.getElementById('showV').style.display='none';
	}
	if (e.clientX > y) {
		document.getElementById('showV').style.display='none';
	}
	if (e.clientY < topp) {
		document.getElementById('showV').style.display='none';
	}
	if (e.clientY > bot) {
		document.getElementById('showV').style.display='none';
	}
  }

  a.onmouseout = function(e) {
	if (e.clientX < x) {
		document.getElementById('showV').style.display='none';
	}
	if (e.clientX > y) {
		document.getElementById('showV').style.display='none';
	}
  }

  a.onmouseover = function(e) {
    document.getElementById('showV').style.display='block';
	x = a.getBoundingClientRect().left+20;
	y = a.getBoundingClientRect().right-20;
	bot = b.getBoundingClientRect().bottom-20;
	topp = b.getBoundingClientRect().top+20;
  };
}