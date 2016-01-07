
$().ready(function () {
	$("body").append('<div class="modal fade" id="my_progress_modal" data-backdrop = "static"><div style="position:absolute;width:100%;height:100%;display: flex;justify-content: center;align-items: center;"><div style="width:4em;height:4em" class="my_mdl_progressring mdl-spinner mdl-js-spinner is-active"></div></div></div>');

//	$("#my_alert").modal();


})


var My_Progress = function(){
    function hi(){//私有函数，外部无法访问  
        alert(name + " : Hi!");//私有变量，内部可以直接访问  
    }  
    this.hiGlobal = function(){  
        alert(globalName + " : Hello!");//全局变量，内部可以直接访问  
    }  
    this.sayHello = function(){//public函数，外部可访问  
        hi();//私有函数，内部可以直接访问  
        this.hiGlobal();//公有函数，内部访问也要加上 this.  
    }  
    
	this.fakeProgressALittleTime =function(){  
//  		$("#my_progress_modal").show();
    		$("#my_progress_modal").modal('show');
    		setTimeout(function () {
    			$("#my_progress_modal").modal('hide');
//  			$("#my_progress_modal").hide();
    			
    		},2000);
    }  
    
    this.progress =function(){  
    	$("#my_progress_modal").modal('show');
//  		$("#my_progress_modal").show();
    }  
    this.finish =function(){  
$("#my_progress_modal").modal('hide');
//  		$("#my_progress_modal").hide();
    }  
    
};  
  
var _my_progress=new My_Progress();