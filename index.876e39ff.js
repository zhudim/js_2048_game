!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=new(function(){var t;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,r),this.cells=t,this.restart()}return t=[{key:"moveLeft",value:function(){var t=this;if("playing"===this.status){for(var e=!1,r=0;r<4;r++)!function(r){for(var n=t.board[r].filter(function(t){return 0!==t}),a=[],s=0;s<n.length;s++)n[s]===n[s+1]?(a.push(2*n[s]),t.score+=2*n[s],s++,e=!0):a.push(n[s]);for(;a.length<4;)a.push(0);t.board[r].toString()!==a.toString()&&(t.board[r]=a,e=!0)}(r);e&&this.addRandomTile(),this.checkGameOver()}}},{key:"moveRight",value:function(){var t=this;if("playing"===this.status){for(var e=!1,r=0;r<4;r++)!function(r){for(var n=t.board[r].filter(function(t){return 0!==t}).reverse(),a=[],s=0;s<n.length;)n[s]===n[s+1]?(a.push(2*n[s]),t.score+=2*n[s],s+=2,e=!0):(a.push(n[s]),s++);for(;a.length<4;)a.push(0);a.reverse(),t.board[r].toString()!==a.toString()&&(t.board[r]=a,e=!0)}(r);e&&this.addRandomTile(),this.checkGameOver()}}},{key:"moveUp",value:function(){if("playing"===this.status){for(var t=!1,e=0;e<4;e++){for(var r=[],n=0;n<4;n++)0!==this.board[n][e]&&r.push(this.board[n][e]);for(var a=[],s=0;s<r.length;)r[s]===r[s+1]?(a.push(2*r[s]),this.score+=2*r[s],s+=2):(a.push(r[s]),s++);for(;a.length<4;)a.push(0);for(var o=0;o<4;o++)this.board[o][e]!==a[o]&&(t=!0),this.board[o][e]=a[o]}t&&this.addRandomTile(),this.checkGameOver()}}},{key:"moveDown",value:function(){if("playing"===this.status){for(var t=!1,e=0;e<4;e++){for(var r=[],n=0;n<4;n++)0!==this.board[n][e]&&r.push(this.board[n][e]);for(var a=[],s=r.length-1;s>=0;)r[s]===r[s-1]?(a.unshift(2*r[s]),this.score+=2*r[s],s-=2,t=!0):(a.unshift(r[s]),s--);for(;a.length<4;)a.unshift(0);for(var o=0;o<4;o++)this.board[o][e]!==a[o]&&(t=!0),this.board[o][e]=a[o]}t&&this.addRandomTile(),this.checkGameOver()}}},{key:"checkGameOver",value:function(){this.board.some(function(t){return t.includes(2048)})?this.status="win":this.canMove()||(this.status="lose")}},{key:"canMove",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++)if(0===this.board[t][e]||e<3&&this.board[t][e]===this.board[t][e+1]||t<3&&this.board[t][e]===this.board[t+1][e])return!0;return!1}},{key:"displayGameStatus",value:function(t){var e=document.querySelector(".message-win"),r=document.querySelector(".message-lose");e.classList.add("hidden"),r.classList.add("hidden"),"win"===t?e.classList.remove("hidden"):"lose"===t?r.classList.remove("hidden"):"playing"===t&&(e.classList.add("hidden"),r.classList.add("hidden"))}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.board.map(function(t){return e(t)})}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status="playing",this.addRandomTile(),this.addRandomTile()}},{key:"restart",value:function(){this.board=this.cells.map(function(t){return e(t)}),this.score=0,this.status="idle"}},{key:"addRandomTile",value:function(){var t=[];if(this.board.forEach(function(e,r){e.forEach(function(e,n){0===e&&t.push({rowIndex:r,colIndex:n})})}),t.length>0){var e=Math.floor(Math.random()*t.length),r=t[e],n=r.rowIndex,a=r.colIndex;this.board[n][a]=.9>Math.random()?2:4;var s=document.querySelector('[data-position="'.concat(n,"-").concat(a,'"]'));requestAnimationFrame(function(){s.classList.add("field-cell--new"),setTimeout(function(){s.classList.remove("field-cell--new")},300)})}}}],function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(r.prototype,t),r}()),n=document.querySelector(".game-score"),a=document.getElementById("startButton"),s=document.querySelector(".message-start"),o=document.querySelector(".message-win"),i=document.querySelector(".message-lose");function c(){r.getState().forEach(function(t,e){t.forEach(function(t,r){var n=document.querySelector('[data-position="'.concat(e,"-").concat(r,'"]'));n.textContent=0!==t?t:"",n.className="field-cell",0!==t&&n.classList.add("field-cell--".concat(t))})})}function d(){n.textContent=r.getScore()}function u(){var t=r.getStatus();"win"===t?(o.classList.remove("hidden"),i.classList.add("hidden"),s.classList.add("hidden")):"lose"===t?(i.classList.remove("hidden"),o.classList.add("hidden"),s.classList.add("hidden")):("idle"===t?s.classList.remove("hidden"):s.classList.add("hidden"),o.classList.add("hidden"),i.classList.add("hidden"))}a.addEventListener("click",function(){a.classList.contains("start")?(r.start(),c(),u(),a.classList.remove("start"),a.classList.add("restart"),a.textContent="Restart"):(r.restart(),c(),d(),u(),a.classList.remove("restart"),a.classList.add("start"),a.textContent="Start")}),window.addEventListener("keydown",function(t){switch(t.key){case"ArrowLeft":r.moveLeft();break;case"ArrowRight":r.moveRight();break;case"ArrowUp":r.moveUp();break;case"ArrowDown":r.moveDown();break;default:return}c(),d(),u()})}();
//# sourceMappingURL=index.876e39ff.js.map
