
var row=10;
$(document).ready( function() {
	/*$(".derecho").sortable({
					accept:'.herramienta',
					helper:'clone',
					receive: function(event, ui){
						$(newItem).empty();
						$(newItem).removeAttr( 'style' );
						$(newItem).addClass("nueva_row");
						$(newItem).css("background-color",ui.helper.css("background-color"));
						$(newItem).attr("id","row_"+row);
						// var controles=nuevosControles();
						// $(newItem).append(controles);
						row++;
					},
					beforeStop: function (event, ui) {
						newItem = ui.item;
					}
				});*/
	
	$('.herramienta , .herramienta_int').each(function(index){
		$(this).draggable({
			helper:"clone",
			activeClass: "ui-state-default",
			hoverClass: "ui-state-hover",
			connectToSortable: '.derecho',
			start:function(event, ui){
				$('.derecho').sortable();
			}
		});

	});

	$('.derecho').droppable({
		// helper:'clone',
		accept:'.herramienta',
		hoverClass:"borde",
		drop:function(event, ui) {
			// ui.draggable.appendTo($(this));
			// var $ar=$('<div>').attr("id","pestana");
			var $ar=$('<div>');
			$ar.addClass('pestana');

			// var $h=$('<div>').html(ui.draggable.html());
			var $h=$( "<div>Dynamic Droppable Div</div>" ).droppable({
						accept:'.herramienta_int',
						hoverClass:"borde_int",
						drop:function(event, ui) {

							var $h=$('<div>').html(ui.draggable.html());
							$h.addClass('item_int');
							if(!ui.helper.hasClass('item')){
								$(this).append($h);
							}
						}
					});
			$h.addClass('item');
			$h.append($ar);
			
			//console.log(ui.helper);
			//console.log(ui.helper.hasClass('item'));
			if(!ui.helper.hasClass('item')){
				$(this).append($h);
				$('.derecho').sortable();
				$(".derecho").sortable("disable");
			}
			// ordenar();
		},
		over: function( event, ui ) {
			//console.log("sortable activado por over");
			$('.derecho').sortable();
		}
	});
	/*Añadir evento a nodos creados de forma dinámica
	Por ejemplo, el siguiente bloque de código es unejemplo
	de como usar el evento 'on' del selector en el que indicamos
	que registre el evento click en el nodo de la clase 'item'
	(podemos seleccionar por id, etc..). y dentro de la funcion
	de tercer parametro le indicamos las instrucciones, esta funcion
	puede recibir parámetros*/
	$('.derecho').on("click",".item",function(){
		console.log("hola");
	});
	
	/*Para  mi problema, voy a hacer uso de los eventos mousedown/mouseup
	para activar/desactivar el eventos de draggable y droppable en 
	los nodos creados de forma dinámica usar Jquery 1.9.1 minimo y UI 1.9.2 minimo*/

	// activa sortable en los divs añadido al contenedor para permitri ordenarlos
	// Parar que sea lanzado por primera vez, hay que registrar sortable en la creación
	$('.derecho').on('mousedown','.pestana',function(){
				console.log("sorteble true");
				$('.derecho').sortable('enable');
	});
	//desactiva sortable para que funcione solo con la pestaña
	$('.derecho').on('mouseup','.pestana',function(){
				console.log("sorteble false");
				$(".derecho").sortable("disable");
	});

	//Registramos droppable para los nodos (div) creados de forma dinámica
	/*$('.derecho').on("mouseover",".item",function(){
		$(this).droppable({
				accept:'.herramienta_int',
				hoverClass:"borde_int",
				drop:function(event, ui) {
					// ui.draggable.appendTo($(this));
					// var $ar=$('<div>').attr("id","pestana");
					
					// var $ar=$('<div>');
					// $ar.addClass('pestana');

					var $h=$('<div>').html(ui.draggable.html());
					$h.addClass('item_int');
					// $h.append($ar);
					
					console.log(ui.helper);
					//console.log(ui.helper.hasClass('item'));
					if(!ui.helper.hasClass('item')){
						$(this).append($h);
						// $('.derecho').sortable();
						// $('.derecho').sortable('enable');
						// $(".derecho").sortable("disable");
						//ordenar();
					}
					// ordenar();
				}
			});
	});*/

});
/*function ordenar(){
	$('.pestana').mousedown(function(){
		// console.log("movendo");
		$('.derecho').sortable();
		$('.derecho').sortable('enable');
	});
	$('.pestana').mouseup(function(){
		$(".derecho").sortable("disable");
	});
}*/