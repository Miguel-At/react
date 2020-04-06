 
/*
 var elemento=document.createElement('h1')
  elemento.innerText="bievenido"


var contariner=document.getElementById('root')

contariner.appendChild(elemento)
*/
import React from 'react'
import ReactDom from 'react-dom'
 const name ='miguel';

var obj= {
	firtsName:' miguel',
	lastName : 'Angel',
	imagen:'https://techtalk.vn/wp-content/uploads/2018/10/1493235373large_react_apps_A-01-696x387.png'
}
function  nombre(user) {
return	user.firtsName +' '+ user.lastName}

function ifs(user){
	if(user){
		return <h1> bienvenido {nombre(obj)}</h1>
	}
      return  <h1> bienvenido Visitante</h1>

}


const elemento= (<div> 
	{ifs(obj)}
	<img  src={obj.imagen} />
<div tabIndex="0"></div>
	</div>)
 var contariner=document.getElementById('root')

ReactDom.render(elemento , contariner)




