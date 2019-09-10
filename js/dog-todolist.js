

 //指定Dom
 var list = document.querySelector('.my-list');
 var send = document.querySelector('.send');
 var data = JSON.parse(localStorage.getItem('listData')) || [];
	console.log('list ='+list); 

  send.addEventListener('click',addData , false);
  list.addEventListener('click', toggleDelete);


updataList(data);
function updataList(data)
{
  str ='';
  console.log('data.length ='+ data.length);
  for(var i =0; i<data.length; i++)
  {
    //str += '<li> <a href="#" data-index=' + i + ' />刪除</a>'+data[i].content + '</span></li>';
    str += '<li class ="list-group-item" > <a href="#" data-index=' + i + ' />刪除</a>'+data[i].content+'</li>';

    /// str += '<li class ="list-group-item" data-index = '+i+'>'+data[i].content+
				// 	'<button type="button" class="delete-btn delete-bg clearfix">'+
			 //          	'<img src="image/icons8-cat-footprint-24.png" class="img-left"><p>Delete!</p>'
			 //        +'</button>'
				// 	+'</li>;'
  }
  list.innerHTML = str; //UpdataContent
  console.log('Data_array ='+data+ 'data type ='+typeof(data));
  console.log('Data_string ='+JSON.stringify(data)+'data_string type ='+typeof(JSON.stringify(data)));
  
}



  function addData(e)
  {
    e.preventDefault();
    console.log('e.target.nodeName ='+e.target.nodeName)
    if(e.target.nodeName !== 'P'){return}//防止點錯
      
    var txt = document.querySelector('.text').value;
    console.log('txt ='+txt);
    var todo = {content:txt};
    data.push(todo);//新增資料到物件
    localStorage.setItem('listData', JSON.stringify(data));
    
    updataList(data);

    
  }


 function toggleDelete(e)
 {
  e.preventDefault();
  console.log("delete :e.target.nodeName ="+e.target.nodeName);
  if(e.target.nodeName !== 'A'){return}
    var index = e.target.dataset.index;
    console.log('e.target.dataset.index ='+index);
    data.splice(index,1);
    localStorage.setItem('listData', JSON.stringify(data));//存資料時只能存string所以需要轉檔
    updataList(data);
 }
