$(".mb-container").append('<div class="mb-icon"><div class="mb-double-right"> >> </div> <div class="mb-right"> > </div> <div class="mb-left"> < </div> <div class="mb-double-left"> << </div></div>\n' +
        '    <div class="mb-selected">\n' +
        '        <span class="mb-title">SELECTED</span>\n' +
        '        <ul></ul>\n' +
        '    </div>');
    
	$.each($(".mb-alloptions li"),function(k,v){
        $("#mb-form-select").append('<option value='+$(v).data('id')+'>'+$(v).text()+'</option>');
    })
	
    function mbAdd(){
        $.each($("#mb-form-select option"),function(k,v){
            $(v).removeAttr("selected");
        })
        $.each($(".mb-selected li"),function(k,v){
            $.each($("#mb-form-select option"),function(kk,vv){
                if($(v).data("id")==$(vv).val()){
                    $(vv).attr("selected","selected");
                }
            })
        })
    }
	
    $(".mb-double-right").click(function(){
        $(".mb-selected ul").append($(".mb-alloptions ul").html());
        $(".mb-alloptions ul").text("");
        mbAdd();
    })
    $(".mb-double-left").click(function(){
        $(".mb-alloptions ul").append($(".mb-selected ul").html());
        $(".mb-selected ul").text("");
        mbAdd();
    })
	
    $(document).on("click",".mb-right",function(){
        $.each($(".mb-alloptions li.selected"),function(k,v){
            $(v).removeAttr("class");
            $(".mb-selected ul").append($(v));
        })
        mbAdd();
    })
	
    $(document).on("click",".mb-left",function(){
        $.each($(".mb-selected li.selected"),function(k,v){
            $(v).removeAttr("class");
            $(v).removeAttr("selected");
            $(".mb-alloptions ul").append($(v));
        });
        mbAdd();
    })

    $(".mb-alloptions").on("click","li",function(){
        var li=$(this).addClass("selected");
        $.each($(".mb-alloptions li"),function(k,v){
            $(v).removeClass("selected");
            $(v).removeAttr("class");
        })
        $(li).addClass("selected");
    })

    $(".mb-selected").on("click","li",function(){
        var li=$(this).addClass("selected");
        $.each($(".mb-selected li"),function(k,v){
            $(v).removeClass("selected");
            $(v).removeAttr("class");
        })
        $(li).addClass("selected");
    })

    $(".mb-alloptions").on("dblclick","li",function(){
        $(this).removeAttr("class");
        $(".mb-selected ul").append($(this));
        mbAdd();
    })
    $(".mb-selected").on("dblclick","li",function(){
        $(this).removeAttr("class");
        $(".mb-alloptions ul").append($(this));
        mbAdd();
    })