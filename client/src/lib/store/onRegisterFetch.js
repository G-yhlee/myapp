import {S_onRegister,F_onRegister} from './store'
import {api,fetchApi} from '../api_function/api_function'

export function onRegisterFetch(e) {
	let fetchData;
	S_onRegister.update(s => {fetchData = s; return s})

	console.log(fetchData); 
   
	console.log(
		fetchApi(api.urls.home)
	)

}

