(this["webpackJsonphappy-author"]=this["webpackJsonphappy-author"]||[]).push([[185],{3199:function(e,r,t){"use strict";t.r(r),t.d(r,"WorkerHasher",(function(){return k}));var a=t(9),s=t.n(a),n=t(10),o=t.n(n),i=t(1),u=t.n(i),c=t(310),h=t.n(c),d=t(846),v=t.n(d),k=function(){function e(r){s()(this,e),u()(this,"workers",[]),u()(this,"jobs",{});for(var t=0;t<r;++t)this.workers.push(this.createWorker())}return o()(e,[{key:"hash",value:function(e){return this.calculateHashInWorker(e)}},{key:"createWorker",value:function(){var e=this,r=v.a.createWorker(),t={worker:r,activeJobs:0};return r.addEventListener("message",(function(r){e.handleWorkerMessage(r,t)})),t}},{key:"handleWorkerMessage",value:function(e,r){var t=e.data.id;if(this.jobs[t]){var a=this.jobs[t],s=a.resolve,n=a.reject;delete this.jobs[t],r.activeJobs--,e.data.error?n(e.data.error):s(e.data.hash)}}},{key:"calculateHashInWorker",value:function(e){var r=this,t=h()();return new Promise((function(a,s){r.jobs[t]={resolve:a,reject:s};var n=r.getMostRelaxedWorker();r.dispatch(t,n,e)}))}},{key:"dispatch",value:function(e,r,t){r.activeJobs++;var a=r.worker;if(navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")){var s=new FileReader;return s.onload=function(){a.postMessage({id:e,data:s.result})},void s.readAsBinaryString(t)}a.postMessage({id:e,data:t})}},{key:"getMostRelaxedWorker",value:function(){return this.workers.reduce((function(e,r){return r.activeJobs<e.activeJobs?r:e}),this.workers[0])}}]),e}()}}]);