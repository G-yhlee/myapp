import {S_onRegister,F_onRegister} from './store'

export function onRegister(e) {

	let {x,y}= e.target.dataset
	F_onRegister.update( s => {
		//f
		s = x == "id"  ? "F_id" 
			: x == "name"  ? "F_name" 
			: x == "pass1"  ? "F_pass1" 
			: x == "pass2"  ? "F_pass2" 
      : "_"
    //s
		;(
			{
			F_id: ({x,y})=> S_onRegister.update(s => { console.log(s); s[x] =  e.target.value ; return s} ),
			F_name: ({x,y})=> S_onRegister.update(s => {s[x] =  e.target.value ; return s}),
			F_pass1: ({x,y})=> S_onRegister.update(s => {s[x] =  e.target.value ; return s}),
			F_pass2: ({x,y})=> S_onRegister.update(s => {s[x] =  e.target.value ; return s}),
			_: ({x,y})=> { console.log('onLogin : 예외 상황 발생 ')},
			}[ s ]({x,y})
		);
  return s
	})
}

