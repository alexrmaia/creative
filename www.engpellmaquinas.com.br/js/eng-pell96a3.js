function MostraProduto(id,idioma,tipo){
	$.ajax({ 
		url: "produtos.php",
		data:"id="+id+"&idioma="+idioma,
		dataType: "html",
		beforeSend: function(){
			var imagem = '<img src=http://www.kzulo.com.br/administracao/images/loading.gif>&nbsp;Aguarde...'
			$("#conteudo_produto").html(imagem)
		},
		success: function(r){
			//$("#conteudo_produto").hide().stop().FadeIn('slow');
			$("#conteudo_produto").html(r);
		},
		complete:function(){
			if(tipo!='1'){
				$('html, body').animate({
						scrollTop: $("#produtos").offset().top-0
					}, {
						queue: false,
						duration: 1000
					});	
			}
			
		},
		error: function(r){
			alert("erro carregar produto");
		}
	});		
}