$().ready(function () {
$('#nowFishCount').html(fishCount);
$('#fish').on('click',function (e) {
	
//	$('#fish').css('transform','translate(5px,5px)');
	_my_shark.shortshark($('#fish'));
	setNewCount(1);
});
$('#tab_shop').on('click',function () {
	if($('#fixed-tab-shop').hasClass('is-active'))
	{
		
	}
	else
	{
		$("#fixed-tab-shop > div").html("");
		
		var i=0;
		for (var key in cards) {
			(function () {
					var kk=key;
			var st =setTimeout(function () {
				creatuserlist (cards[kk],1);
			},200*i);
			})()
			i++;
		}
	}
	
	
	
	
});
$('#tab_menu').on('click',function () {
	if($('#fixed-tab-menu').hasClass('is-active'))
	{
		
	}
	else
	{
		$("#fixed-tab-menu > div").html("");
		
		var i=0;
		for (var key in fishCards) {
			(function () {
					var kk=key;
			var st =setTimeout(function () {
				creatFishCardlist (fishCards[kk],1);
			},200*i);
			})()
			i++;
		}
	}
	
	
	
	
});


	setInterval(function () {
		if (fishAddSpeed>0) {
			setNewCount(fishAddSpeed);
		}
		
		
		
		
	},2000);
	

})

var fishCount=0;
var fishAddSpeed=0;
var fishCards=[];

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
					var ttleft=$("#tab_mofish").width()/2;
					selled.appendTo($('body'));
					
					var ssleft=-(selled.width()/0.9*0.1*0.5);
					
					
					var fixleft=selled.width()*1*0.5;
					var fixtop=selled.height()*0.9*0.5;
					
					setTimeout(function () {
						selled.css('transform','scale(0.1)');
						setTimeout(function () {
							selled.css('z-index','9999');
							selled.css('top',mtop-fixtop);
							selled.css('left',mleft-fixleft+ttleft+ssleft);
							
							setTimeout(function () {
							selled.remove();
						},500);
							
							
						},500);


						
					},1);
	
				});
	var cardid=event.data.id.replace('card','');
	if(fishCards[cardid])
	{
		fishCards[cardid].num+=1;
	}
	else
	{
		fishCards[cardid]=$.extend(true, {}, cards[cardid]);;
		fishCards[cardid].num=1;
	}
				
				
	fishAddSpeed+=cards[cardid].count;
	
}
function setNewCount (count) {
	fishCount+=count;
	var to=new Object();
	to.left=$('#nowFishCount').parent().offset().left+20;
	to.top=$('#nowFishCount').parent().offset().top-20;
	var $clone=$('#flyText').clone();
	$clone.children('[name=nowFishCount]').html('+'+count);
//	$clone.css('width',$targ.width());
//	$clone.css('height',$targ.height());
	flyFunction($clone,to,$('#nowFishCount').parent().offset())
	$('#nowFishCount').html(fishCount);
}


function flyFunction ($$targ,to,from) {
//					var $$targ=$targ.clone();
					$$targ.attr('id','');
					$$targ.css('pointer-events','none');
					$$targ.css('position','fixed');

					$$targ.offset(from);

					

					

					$$targ.appendTo($('body'));
					
					
					
//					var fixleft=selled.width()*0.5;
//					var fixtop=selled.height()*0.5;
					
					setTimeout(function () {
//						selled.css('transform','scale(0.1)');
						setTimeout(function () {
							$$targ.css('z-index','9999');
							$$targ.css('top',to.top);
							$$targ.css('left',to.left);
							
							setTimeout(function () {
							$$targ.remove();
						},500);
							
							
						},1);


						
					},1);
	
					
}


function creatuserlist (card,img) {
	
	var tempid="card"+card.id;
	
	var tempitem=$('templat #card').clone();
	tempitem.css('background-image','url(img/'+img+'.jpg)');

	tempitem.attr("id",tempid);
	tempitem.find("[name=title]").html(card.name);
	tempitem.find("[name=desc]").html(card.desc);
	tempitem.find("[name=cost]").html(card.cost);
	tempitem.find("[name=count]").html(card.count);
	tempitem.find("button[name=buy]").on("click",{id:tempid},onbuyClick);
	$("#fixed-tab-shop > div").append(tempitem);

	
	
	
	var st =setTimeout(function () {
		tempitem.addClass("userlistitemafter");
	},10);

	
}
function creatFishCardlist (card,img) {
	
	var tempid="fishcard"+card.id;
	
	var tempitem=$('templat #my_card').clone();
	tempitem.css('background-image','url(img/'+img+'.jpg)');

	tempitem.attr("id",tempid);
	tempitem.find("[name=title]").html(card.name+'x'+card.num);
	$("#fixed-tab-menu > div").append(tempitem);

	
	
	
	var st =setTimeout(function () {
		tempitem.addClass("userlistitemafter");
	},10);

	
}



