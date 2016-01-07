$().ready(function () {
for (var i = 0; i < 10; i++) {
	var st =setTimeout(function () {
		creatuserlist ();
	},200*i);
}

})



function onbuyClick (event) {
//	$("[id='"+event.data.id+"']").css('pointer-events','none');
	
	
					_my_shark.shark($("[id='"+event.data.id+"']"),function () {
					
					var selled=$("[id='"+event.data.id+"']").clone();
					selled.attr('id','');
					selled.css('pointer-events','none');
					selled.css('position','fixed');
					selled.offset($("[id='"+event.data.id+"']").offset());
					selled.css('width',$("[id='"+event.data.id+"']").width());
					selled.css('height',$("[id='"+event.data.id+"']").height());
					
					
					
					var mleft=$("#tab_mofish").offset().left;
					var mtop=$("#tab_mofish").offset().top;

					selled.appendTo($('body'));
					
					var fixleft=selled.width()*0.9*0.5;
					var fixtop=selled.height()*0.9*0.5;
					
					setTimeout(function () {
						selled.css('transform','scale(0.1)');
						setTimeout(function () {
							selled.css('z-index','9999');
							selled.css('top',mtop-fixtop);
							selled.css('left',mleft-fixleft);
							
							setTimeout(function () {
							selled.remove();
						},500);
							
							
						},500);


						
					},1);
	
					
					console.log();
				});
}


function creatuserlist () {
	
	var tempid=Math.random();
	
	var tempitem=$('templat #card').clone();
	tempitem.css('background-image','url(img/1.jpg)');
	tempitem.css('background-size','contain');
	tempitem.css('background-position','0% 100%');
	tempitem.css('background-repeat','no-repeat');
	tempitem.attr("id",tempid);
	tempitem.find("button[name=buy]").on("click",{id:tempid},onbuyClick);
	$("#fixed-tab-shop > div").append(tempitem);

	
	
	
	var st =setTimeout(function () {
		tempitem.addClass("userlistitemafter");
	},10);

	
}




