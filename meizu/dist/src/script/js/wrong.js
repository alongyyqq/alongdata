"use strict";var $btn=$("#btn"),$content=$("#wrongcontent"),$where=$("#wrongwhere"),$idea=$("#idea"),$table=$("#table1"),$tablebody=$("#table1 tbody");$btn.on("click",function(){$.ajax({url:"http://10.31.165.15/js1803/jingdong/php/add.php",data:{content:$content.val(),where:$where.val(),idea:$idea.val()}}).done(function(){location.reload()})}),$.ajax({url:"http://10.31.165.15/js1803/jingdong/php/getdata.php",dataType:"json"}).done(function(t){var a="";$.each(t,function(t,n){a+='<tr index="'+n.sid+'">',$.each(n,function(t,n){a+="<td>"+n+"</td>"}),a+='<td><button class="btn btn-danger btn-xs">删除</button></td>',a+="</tr>"}),$tablebody.html(a)}),$table.on("click","button",function(){$.ajax({url:"http://10.31.165.15/js1803/jingdong/php/del.php",data:{id:$(this).parents("tr").attr("index")}}),confirm("你确定要删除吗?")&&$(this).parents("tr").remove()});