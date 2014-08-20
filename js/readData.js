$(document).ready(function() {

	$('#textLoading').hide();
	
	$('#readFile').on('click', function(e) {
		
		$('#textLoading').show();
		$('#containerHead .languages').remove();
		$('#containerBody').empty();
		
		$.getJSON('data/data.json', function(data) {
						
			var words = data.words;
			var languages = data.languages;

			$.each(languages, function(key, val) {
				$('#containerHead tr').append('<th class="languages">' + val + '</th>');
			});

			var id = 1;
			$.each(words, function(keyWords, valWords) {
				$('<tr id="' + id + '"><td>' + id + '</td><td>' + valWords.label + '</td></tr>').appendTo('#containerBody');

				_.each(languages, function(elementLang, indexLang, listLang) {
					if(valWords.wordLanguage[elementLang]){
						$('#' + id).append('<td class="bg-success">' + valWords.wordLanguage[elementLang] + '</td>');	
					}
					else{
						$('#' + id).append('<td class="bg-danger">-</td>');
					}	
				});

				id++;
			});
		});//End Get JSON

		$('#textLoading').hide();

	});

});
