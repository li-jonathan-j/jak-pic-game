(this["webpackJsonpjak-pic-game"]=this["webpackJsonpjak-pic-game"]||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(17),i=a.n(r),c=(a(25),a(6)),o=a(7),l=a(9),u=a(8),m=(a(26),a(27),a(18)),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={gameActive:!1,isLoading:!1,images:[]},s}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){e.gameActive!==this.props.gameActive&&(console.log("image active changed",this.props.gameActive),this.setState({gameActive:this.props.gameActive}),this.props.gameActive?this.getImages():this.setState({images:[]}))}},{key:"getImages",value:function(){var e=this;console.log("getImages"),this.setState({isLoading:!0}),setTimeout((function(){e.setState({images:["https://i.redd.it/q39n7oc0yd051.jpg","https://i.redd.it/1ywl9y2jfs511.jpg","https://i.redd.it/sahgcxo1eiez.jpg"],isLoading:!1})}),1e3)}},{key:"render",value:function(){return this.state.isLoading?n.a.createElement(m.a,{animation:"border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")):n.a.createElement("div",null,n.a.createElement("div",{className:"Image-Gallery"},this.state.images.map((function(e,t){return n.a.createElement("img",{className:"Grid-image",key:t,src:e,alt:""})}))))}}]),a}(n.a.Component),h=a(5),d=a(11),p=a(10),v=a(12),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).handleGuessChange=s.handleGuessChange.bind(Object(h.a)(s)),s.submitGuess=s.submitGuess.bind(Object(h.a)(s)),s.handleSurrender=s.handleSurrender.bind(Object(h.a)(s)),s.isGuessCorrect=s.isGuessCorrect.bind(Object(h.a)(s)),s.correctGuess=s.correctGuess.bind(Object(h.a)(s)),s.state={guess:"",answer:"corgi",guessAgain:!1,success:!1},s}return Object(o.a)(a,[{key:"handleGuessChange",value:function(e){this.setState({guess:e.target.value})}},{key:"submitGuess",value:function(){console.log("submitGuess",this.state.guess),this.isGuessCorrect()?this.correctGuess():this.setState({guessAgain:!0})}},{key:"handleSurrender",value:function(){console.log("surrender"),this.props.endGame(!1),this.setState({surrender:!0})}},{key:"isGuessCorrect",value:function(){return this.state.guess.toLowerCase()===this.state.answer.toLowerCase()}},{key:"correctGuess",value:function(){console.log("correct guess"),this.setState({success:!0,guessAgain:!1})}},{key:"render",value:function(){return this.props.gameState.gameActive?n.a.createElement("div",null,n.a.createElement(d.a,null,n.a.createElement(d.a.Group,null,n.a.createElement(d.a.Row,null,n.a.createElement(d.a.Control,{as:"input",type:"text",placeholder:"What subreddit is this from?",value:this.state.guess,onChange:this.handleGuessChange}),n.a.createElement(v.a,{variant:"primary",onClick:this.submitGuess},"Guess!")," ",this.state.guessAgain&&n.a.createElement(p.a,null,n.a.createElement("span",null,"Incorrect, try again!")),this.state.success?n.a.createElement(p.a,null,n.a.createElement("span",null,"Correct!"),n.a.createElement("br",null),n.a.createElement(v.a,{variant:"primary",onClick:this.props.startGame},"Play again?")):n.a.createElement(p.a,null,n.a.createElement(v.a,{variant:"danger",onClick:this.handleSurrender},"I give up!")," ")))),n.a.createElement("span",null)):n.a.createElement("div",null,n.a.createElement(v.a,{variant:"outline-primary",onClick:this.props.startGame},"Start Game!"))}}]),a}(n.a.Component),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).startGame=function(){console.log("startgame"),e.setState({guess:"",answer:"corgi",gameActive:!0,success:!1})},e.endGame=function(t){console.log("end game",t),e.setState({gameActive:!1,success:t})},e.state={guess:"",answer:"",success:!0,gameActive:!1},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},"Welcome to the pic game!"),n.a.createElement(g,{gameActive:this.state.gameActive}),n.a.createElement(b,{startGame:this.startGame,endGame:this.endGame,gameState:this.state}),n.a.createElement("footer",{className:"footer"},"Developed by J.A.K. studios"))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.b506511c.chunk.js.map