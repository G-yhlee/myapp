<script>
  import {onLogin} from '../../lib/store/onLogin.js'
  import {href} from '../../lib/helper/helper'
</script>
	<div class="login-page">
		<div class="form">
		  <form class="login-form">
			<input id="id" type="text" placeholder="아이디"/>
			<input id="psword" type="password" placeholder="비밀번호"/>
			<p id="button" >login</p >
			<div class="message" on:click={onLogin} data-x="S1" >Not registered? Create an account</div>
		  </form>
		</div>
	  </div>
<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form #button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4c77af;
  width: 80%;
  border: 0;
  margin: 0 auto;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form #button:hover,.form #button:active,.form #button:focus {
  background: #425785;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #2d2b83;
  text-decoration: none;
}


</style>