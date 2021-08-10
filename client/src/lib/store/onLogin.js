import {S_onLogin,F_onLogin} from './store'

export function onLogin(e) {

	let {x,y}= e.target.dataset
	F_onLogin.update( s => {
		//f
		s = x == "S1"  ? "F_12" 
			: x == "S2"  ? "F_21" 
      : "_"
    //s
		;(
			{
			F_12: ({x,y})=> S_onLogin.update(s => "S2" ),
			F_21: ({x,y})=> S_onLogin.update(s => "S1"),
			_: ({x,y})=> { console.log('onLogin : 예외 상황 발생 ')},
			}[ s ]({x,y})
		);
  return s
	})
}

