(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var n=a(42),r=a(43),l=a(45),s=a(44),m=a(46),d=a(0),i=a.n(d),o=a(41),c=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={columns:[{label:"\u65e5\u671f",prop:"date",width:180},{label:"\u59d3\u540d",prop:"name",width:180},{label:"\u5730\u5740",prop:"address"}],data:[{date:"2016-05-02",name:"\u738b\u5c0f\u864e",address:"\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1518 \u5f04"},{date:"2016-05-04",name:"\u738b\u5c0f\u864e",address:"\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1517 \u5f04"},{date:"2016-05-01",name:"\u738b\u5c0f\u864e",address:"\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1519 \u5f04"},{date:"2016-05-03",name:"\u738b\u5c0f\u864e",address:"\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1516 \u5f04"},{date:"2016-05-02",name:"\u738b\u5c0f\u864e",address:"\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1518 \u5f04"},{date:"2016-05-04",name:"\u738b\u5c0f\u864e",address:"\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1517 \u5f04"},{date:"2016-05-01",name:"\u738b\u5c0f\u864e",address:"\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1519 \u5f04"},{date:"2016-05-03",name:"\u738b\u5c0f\u864e",address:"\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1516 \u5f04"}],form:{name:"",address:"",startDate:null,endDate:null}},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault()}},{key:"onChange",value:function(e,t){var a=this.state.form;a[e]=t,this.setState({form:a})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(o.Form,{inline:!0,model:this.state.form,onSubmit:this.onSubmit.bind(this)},i.a.createElement(o.Form.Item,{label:"\u59d3\u540d"},i.a.createElement(o.Input,{value:this.state.form.name,onChange:this.onChange.bind(this,"name")})),i.a.createElement(o.Form.Item,{label:"\u5730\u5740"},i.a.createElement(o.Select,{value:this.state.form.address,placeholder:"\u8bf7\u9009\u62e9\u5730\u5740"},i.a.createElement(o.Select.Option,{label:"\u5317\u4eac",value:"shanghai"}),i.a.createElement(o.Select.Option,{label:"\u4e0a\u6d77",value:"beijing"}))),i.a.createElement(o.Form.Item,{label:"\u5f00\u59cb\u65f6\u95f4"},i.a.createElement(o.DatePicker,{value:this.state.form.startDate,placeholder:"\u9009\u62e9\u65e5\u671f",onChange:this.onChange.bind(this,"startDate")})),i.a.createElement(o.Form.Item,{label:"\u7ed3\u675f\u65f6\u95f4"},i.a.createElement(o.DatePicker,{value:this.state.form.endDate,placeholder:"\u9009\u62e9\u65e5\u671f",onChange:this.onChange.bind(this,"endDate")})),i.a.createElement(o.Form.Item,null,i.a.createElement(o.Button,{nativeType:"submit",type:"primary"},"\u67e5\u8be2"))),i.a.createElement(o.Table,{columns:this.state.columns,data:this.state.data,border:!0}))}}]),t}(d.Component)}}]);
//# sourceMappingURL=4.73086b59.chunk.js.map