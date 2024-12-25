
    $(function (){
        let $sca = '';
        $(".tab ul li").each(function (){
            if ($(this).hasClass('on')) {
                $sca = $(this).data('case');
            }
        });
        //get_memeber_list($sca,'','','','');
        get_memeber_list('','','','','');
        $(".tab ul li").click(function () {
            $(".tab ul li").removeClass("on");
            $sca = $(this).data('case');
            $(this).addClass("on");
            get_memeber_list($sca,'','','','');
        });

       /* setInterval(function() {
            type = $("input[name='cate']").val();
            get_memeber_list($sca,'','','','');
        }, 100000);*/
    });


    function get_memeber_list(type,page,ext,tab,search){
        //console.log(type+"|"+page+"|"+ext);

        $.ajax({
            type:"POST",
            url     : "/ajax/get_member_list.php",
            data    : "sca="+type+"&page="+page+"&ext_id="+ext+"&tab="+tab+"&search="+search,
            cache   : false,
            async: false,
            success : function(data) {

                var list_data = JSON.parse(data);

                $(this).find('.review-cont').slideUp();
                if(list_data.msg ==""){
                    $("#view_member_1").empty();
                    //$("#view_member_1").html(list_data.data);
                    //$("#view_member_1").remove();

                    $("#view_member_1").html(list_data.data);
                    //$("input[name='page']").val(list_data.page+1);
                    //console.log(list_data.ext_id);
                    /*if(ext_id !="")
                        $("input[name='ext_id']").val(ext_id +","+list_data.ext_id);
                    else{
                        $("input[name='ext_id']").val(list_data.ext_id);
                    }*/

                    //get_stat();
                }else{
                    alert(list_data.msg);
                }

                //alert(data);
                //location.reload();
            },
            error:function(request,status,error){
                //alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
            }
        });
    }
