document.getElementById("submit").addEventListener("click", function (e) {
$.ajax({
    url: '/gaming-industry/5',         /* Куда пойдет запрос */
	method: 'get',             /* Метод передачи (post или get) */
	dataType: 'html',          /* Тип данных в ответе (xml, json, script, html). */
	data: {text: id},     /* Параметры передаваемые в запросе. */
})
})