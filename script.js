fetch("tmpl.json")
.then( x => {
if (x.ok) return x.text();
else {
		throw new Error(x.status + " " + x.statusText);
}
}) 
.then(json => {
		$('script')
				.attr({'type':'text/x-jquery-tmpl', 'id':'BeatlesTmpl'})
				.html(json)
				.appendTo('body');            
})
.catch(e => console.log(e));



fetch("data.json")
.then(x => {
if (x.ok) return x.json();
else {
		throw new Error(x.status + " " + x.statusText);
}
})
.then(json => {      
		var td = $('td');
		for (let i = 0; i < td.length; i++)  {
		$('#BeatlesTmpl').tmpl(json[i]).appendTo(td[i]); 
		}     
})
.catch(e => console.log(e));
