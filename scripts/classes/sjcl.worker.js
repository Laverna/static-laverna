/**
 * Copyright (C) 2015 Laverna project Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
define(["underscore","q","classes/sjcl","backbone.radio"],function(e,r,s,o){"use strict";function t(){var e=this;this.worker=new Worker("scripts/workers/sjcl.js"),this.workerPromise=r.defer(),this.worker.onmessage=function(r){var s=r.data;switch(s.msg){case"ready":e.workerPromise.resolve();break;case"done":e.promises[s.promiseId].resolve(s.data),delete e.promises[s.promiseId];break;case"fail":e.promises[s.promiseId].reject(s.data),delete e.promises[s.promiseId]}}}return o.request("global","use:webworkers")?(e.extend(t.prototype,{promises:[],_emit:function(e,r){var s=this;return this.workerPromise.promise.isPending()?this.workerPromise.promise.then(function(){return s._send(e,r)}):this._send(e,r)},_send:function(e,s){var o=65536*(1+Math.random());return this.promises[o]=r.defer(),this.worker.postMessage({msg:e,promiseId:o,data:s}),this.promises[o].promise}}),e.each(e.keys(s.prototype),function(r){e.isFunction(s.prototype[r])&&(t.prototype[r]=function(e){return this._emit(r,e)})}),t):s});