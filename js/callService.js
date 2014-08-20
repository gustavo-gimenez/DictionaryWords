$(document).ready(function() {

	/*
	 locations=es_ar,pt_br,es_cl,es_co,es_ec,es_pe,es_uy,en_us,es_us,es_mx,en_ca,de_de,es_es,fr_fr,en_uk,en_ue,en_au,en_zn,es_un,en_un,en_us,es_pe,es_us
	 files.source.path=../app/dist/templates/precompiled
	 files.source.extensions=js
	 files.destination.path=../app/dist/templates/development
	 files.properties.path=source_js
	 files.contextDefault=checkin
	 patterns.initWord=%%
	 patterns.endWord=%%
	 service.url=
	 */

	$('#callService').on('click', function(e) {
		$.ajax({
			url : "http://apache.stag4.iso.lan.com:38180/ws/application/common/dictionary/1.2/soap/DisplayDictionaryWords.wsdl",
			context : document.body
		}).done(function() {
			alert("Éxito!");
		}).fail(function() {
			alert("Falló!");
		});

	});
	//End Click

});
