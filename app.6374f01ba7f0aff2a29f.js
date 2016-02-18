webpackJsonp([0,2],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n(1);var o=n(5),u=r(o),a=n(157),i=r(a),c=n(158),l=r(c),f=n(346),s=r(f),d=n(357),p=r(d),E="redux_kanban",y=(0,s["default"])({});y.subscribe(function(){p["default"].get("debug")||p["default"].set(E,y.getState())}),i["default"].render(u["default"].createElement(l["default"],{store:y}),document.getElementById("app"))},1:function(e,t){},158:function(e,t,n){"use strict";e.exports=n(159)},159:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),u=r(o),a=n(160),i=n(178),c=r(i);t["default"]=function(e){var t=e.store;return u["default"].createElement(a.Provider,{store:t},u["default"].createElement(c["default"],null))}},178:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i,c,l,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(5),d=r(s),p=n(160),E=n(179),y=n(284),_=r(y),v=n(314),m=r(v),O=n(320),T=(i=(0,E.DragDropContext)(_["default"]),c=(0,p.connect)(function(e){return{lanes:e.lanes}},{createLane:O.createLane}),i(l=c(l=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.lanes,n=e.createLane;return d["default"].createElement("div",null,d["default"].createElement("button",{className:"add-lane",onClick:n.bind(null,{name:"New lane"})},"+b"),d["default"].createElement(m["default"],{lanes:t}))}}]),t}(d["default"].Component))||l)||l);t["default"]=T},314:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),u=r(o),a=n(315),i=r(a);t["default"]=function(e){var t=e.lanes;return u["default"].createElement("div",{className:"lanes"},t.map(function(e){return u["default"].createElement(i["default"],{className:"lane",key:e.id,lane:e})}))}},315:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l,f,s,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E=n(5),y=o(E),_=n(160),v=n(316),m=o(v),O=n(317),T=o(O),g=n(179),b=n(319),h=o(b),A=n(320),M=r(A),j=n(345),P=r(j),w={hover:function(e,t){var n=t.getItem(),r=n.id;e.lane.notes.length||e.attachToLane(e.lane.id,r)}},C=(l=(0,_.connect)(function(e){return{allNotes:e.notes}},p({},M,P)),f=(0,g.DropTarget)(h["default"].NOTE,w,function(e){return{connectDropTarget:e.dropTarget()}}),l(s=f(s=function(e){function t(){return a(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return c(t,e),d(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.connectDropTarget,r=t.lane,o=t.allNotes,a=u(t,["connectDropTarget","lane","allNotes"]),i=r.notes.map(function(e){return o[o.findIndex(function(t){return t.id===e})]}).filter(function(e){return e}),c=r.id;return n(y["default"].createElement("div",a,y["default"].createElement("div",{className:"lane-header",onClick:function(){return a.updateLane({id:c,editing:!0})}},y["default"].createElement("div",{className:"lane-add-note"},y["default"].createElement("button",{onClick:this.addNote.bind(this,c)},"+")),y["default"].createElement(T["default"],{className:"lane-name",editing:r.editing,value:r.name,onEdit:function(e){return a.updateLane({id:c,name:e,editing:!1})}}),y["default"].createElement("div",{className:"lane-delete"},y["default"].createElement("button",{onClick:function(){return a.deleteLane(c)}},"xhh"))),y["default"].createElement(m["default"],{notes:i,onValueClick:function(e){return a.updateNote({id:e,editing:!0})},onEdit:function(e,t){return a.updateNote({id:e,task:t,editing:!1})},onDelete:function(t){return e.deleteNote(c,t)}})))}},{key:"addNote",value:function(e,t){t.stopPropagation();var n=this.props.createNote({task:"New taskdddff"});this.props.attachToLane(e,n.note.id)}},{key:"deleteNote",value:function(e,t){this.props.detachFromLane(e,t),this.props.deleteNote(t)}}]),t}(y["default"].Component))||s)||s);t["default"]=C},316:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i,c,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(5),s=r(f),d=n(160),p=n(317),E=r(p),y=n(318),_=r(y),v=n(320),m=(i=(0,d.connect)(function(){return{}},{move:v.move}),i(c=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.notes,n=e.move,r=e.onValueClick,o=e.onEdit,u=e.onDelete;return s["default"].createElement("ul",{className:"notes"},t.map(function(e){return s["default"].createElement(_["default"],{className:"note",id:e.id,key:e.id,editing:e.editing,onMove:n},s["default"].createElement(E["default"],{editing:e.editing,value:e.task,onValueClick:r.bind(null,e.id),onEdit:o.bind(null,e.id),onDelete:u.bind(null,e.id)}))}))}}]),t}(s["default"].Component))||c);t["default"]=m},317:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(5),f=r(l),s=function(e){function t(){var e,n,r,o;u(this,t);for(var i=arguments.length,c=Array(i),l=0;i>l;l++)c[l]=arguments[l];return n=r=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.renderEdit=function(){return f["default"].createElement("input",{type:"text",ref:function(e){return e?e.selectionStart=r.props.value.length:null},autoFocus:!0,defaultValue:r.props.value,onBlur:r.finishEdit,onKeyPress:r.checkEnter})},r.renderValue=function(){var e=r.props.onDelete;return f["default"].createElement("div",{onClick:r.props.onValueClick},f["default"].createElement("span",{className:"value"},r.props.value),e?r.renderDelete():null)},r.renderDelete=function(){return f["default"].createElement("button",{className:"delete",onClick:r.props.onDelete},"x")},r.checkEnter=function(e){"Enter"===e.key&&r.finishEdit(e)},r.finishEdit=function(e){var t=e.target.value;r.props.onEdit&&t.trim()&&r.props.onEdit(t)},o=n,a(r,o)}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=(e.value,e.onEdit,e.onValueClick,e.editing),n=o(e,["value","onEdit","onValueClick","editing"]);return f["default"].createElement("div",n,t?this.renderEdit():this.renderValue())}}]),t}(f["default"].Component);t["default"]=s},318:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var c,l,f,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(5),E=r(p),y=n(179),_=n(319),v=r(_),m={beginDrag:function(e){return{id:e.id}},isDragging:function(e,t){return e.id===t.getItem().id}},O={hover:function(e,t){var n=e.id,r=t.getItem(),o=r.id;o!==n&&e.onMove({sourceId:o,targetId:n})}},T=(c=(0,y.DragSource)(v["default"].NOTE,m,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}),l=(0,y.DropTarget)(v["default"].NOTE,O,function(e){return{connectDropTarget:e.dropTarget()}}),c(f=l(f=function(e){function t(){return u(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.connectDragSource,n=e.connectDropTarget,r=e.isDragging,u=(e.onMove,e.id,e.editing),a=o(e,["connectDragSource","connectDropTarget","isDragging","onMove","id","editing"]),i=u?function(e){return e}:t;return i(n(E["default"].createElement("li",s({style:{opacity:r?0:1}},a),a.children)))}}]),t}(E["default"].Component))||f)||f);t["default"]=T},319:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={NOTE:"note",ITEM:"item"}},320:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return{type:p,lane:f({id:d["default"].v4(),notes:e.notes||[]},e)}}function u(e){return f({type:E},e)}function a(e){return{type:y,id:e}}function i(e,t){return{type:_,laneId:e,noteId:t}}function c(e,t){return{type:v,laneId:e,noteId:t}}function l(e){var t=e.sourceId,n=e.targetId;return{type:m,sourceId:t,targetId:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.MOVE=t.DETACH_FROM_LANE=t.ATTACH_TO_LANE=t.DELETE_LANE=t.UPDATE_LANE=t.CREATE_LANE=void 0;var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.createLane=o,t.updateLane=u,t.deleteLane=a,t.attachToLane=i,t.detachFromLane=c,t.move=l;var s=n(321),d=r(s),p=t.CREATE_LANE="CREATE_LANE",E=t.UPDATE_LANE="UPDATE_LANE",y=t.DELETE_LANE="DELETE_LANE",_=t.ATTACH_TO_LANE="ATTACH_TO_LANE",v=t.DETACH_FROM_LANE="DETACH_FROM_LANE",m=t.MOVE="MOVE"},345:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return{type:f,note:i({id:l["default"].v4()},e)}}function u(e){return i({type:s},e)}function a(e){return{type:d,id:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.DELETE_NOTE=t.UPDATE_NOTE=t.CREATE_NOTE=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.createNote=o,t.updateNote=u,t.deleteNote=a;var c=n(321),l=r(c),f=t.CREATE_NOTE="CREATE_NOTE",s=t.UPDATE_NOTE="UPDATE_NOTE",d=t.DELETE_NOTE="DELETE_NOTE"},346:function(e,t,n){"use strict";e.exports=n(347)},347:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return(0,u.createStore)(i["default"],e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=n(166),a=n(348),i=r(a)},348:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(166),u=n(349),a=r(u),i=n(351),c=r(i),l=n(355),f=r(l);t["default"]=(0,o.combineReducers)({blocks:a["default"],items:c["default"],atoms:f["default"]})},349:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(){var e=arguments.length<=0||void 0===arguments[0]?l:arguments[0],t=arguments[1];switch(t.type){case c.ATTACH_TO_BLOCK:return e.map(function(e){return e.id===t.blockId?a({},e,{items:[].concat(o(e.items),[{id:t.itemId}])}):e});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=u;var i=n(350),c=r(i),l=[{id:0,items:[]},{id:1,items:[]}]},350:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return{type:a,itemId:e.itemId,blockId:e.blockId}}Object.defineProperty(t,"__esModule",{value:!0}),t.ATTACH_TO_BLOCK=void 0,t.attachToBlock=o;var u=n(321),a=(r(u),t.ATTACH_TO_BLOCK="ATTACH_TO_BLOCK")},351:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0],t=arguments[1];switch(t.type){case l.CREATE_ITEM:return[].concat(u(e),[t.item]);case l.ATTACH_TO_ITEM:return e.map(function(e,n){if(e.id===t.itemId){var r={id:t.atomId};return i({},e,{atoms:[].concat(u(e.atoms),[r])})}return e});case l.UPDATE_ITEM:return e.map(function(e,n){return e.id===t.updatedItem.id?i({},e,t.updatedItem):e});case l.DETACH_FROM_ITEM:return e.map(function(e,n){return e.id===t.itemId?i({},e,{atoms:atoms.filter(function(e){return e.id!==t.atomId})}):e});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=a;var c=n(352),l=o(c),f=n(353),s=(r(f),[])},352:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return{type:f,item:{id:l["default"].v4(),type:e.type,title:e.title,atoms:[],editing:!1}}}function u(e){return{type:s,updatedItem:e}}function a(e){return{type:d,itemId:e.itemId,atomId:e.atomId}}function i(e){return{type:p,itemId:e.itemId,atomId:e.atomId}}Object.defineProperty(t,"__esModule",{value:!0}),t.DETACH_FROM_ITEM=t.ATTACH_TO_ITEM=t.UPDATE_ITEM=t.CREATE_ITEM=void 0,t.createItem=o,t.updateItem=u,t.attachToItem=a,t.detachFromItem=i;var c=n(321),l=r(c),f=t.CREATE_ITEM="CREATE_ITEM",s=t.UPDATE_ITEM="UPDATE_ITEM",d=t.ATTACH_TO_ITEM="ATTACH_TO_ITEM",p=t.DETACH_FROM_ITEM="DETACH_FROM_ITEM"},355:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(){var e=arguments.length<=0||void 0===arguments[0]?l:arguments[0],t=arguments[1];switch(t.type){case c.CREATE_ATOM:return[].concat(o(e),[t.atom]);case c.UPDATE_ATOM:return e.map(function(e,n){return e.id===t.atom.id?a({},e,t.atom):e});case c.DELETE_ATOM:return e.filter(function(e){return e.id!==t.id});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=u;var i=n(356),c=r(i),l=[]},356:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return{type:l,atom:{id:c["default"].v4(),type:e.type,text:"",editing:!1}}}function u(e){return{type:f,atom:e}}function a(e){return{type:s,id:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.DELETE_ATOM=t.UPDATE_ATOM=t.CREATE_ATOM=void 0,t.createAtom=o,t.updateAtom=u,t.deleteAtom=a;var i=n(321),c=r(i),l=t.CREATE_ATOM="CREATE_ATOM",f=t.UPDATE_ATOM="UPDATE_ATOM",s=t.DELETE_ATOM="DELETE_ATOM"},357:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return null}},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}}}});