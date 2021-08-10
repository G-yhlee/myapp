import {writable} from 'svelte/store'

export let S_onLogin =  writable("S1")
export let F_onLogin =  writable("_")



export let S_onRegister =  writable({id: "" ,  name: "" ,pass1: "" , pass2: "" })
export let F_onRegister =  writable("_")




// export let S_onRegisterFetch =  writable({id: "" ,  name: "" ,pass1: "" , pass2: "" })
// export let F_onRegisterFetch =  writable("_")
