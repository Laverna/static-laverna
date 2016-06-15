/**
 * Copyright (C) 2015 Laverna project Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
define(["q","underscore","backbone.radio","modules/markdown/libs/markdown-it"],function(e,r,s,o){"use strict";function i(){var r=this;this.worker=new Worker("scripts/modules/markdown/workers/markdown.js"),this.workerPromise=e.defer(),this.worker.onmessage=function(e){var s=e.data;switch(s.msg){case"ready":r.workerPromise.resolve();break;case"done":r.promises[s.promiseId].resolve(s.data),delete r.promises[s.promiseId];break;case"fail":r.promises[s.promiseId].reject(s.data),delete r.promises[s.promiseId]}}}return s.request("global","use:webworkers")?(r.extend(i.prototype,{promises:[],render:function(e){return this._emit("render",e)},parse:function(e){return this._emit("parse",e)},taskToggle:function(e){return this._emit("taskToggle",e)},_emit:function(e,r){var s=this;return this.workerPromise.promise.isPending()?this.workerPromise.promise.then(function(){return s._send(e,r)}):this._send(e,r)},_send:function(r,s){var o=65536*(1+Math.random());return this.promises[o]=e.defer(),this.worker.postMessage({msg:r,promiseId:o,data:s}),this.promises[o].promise}}),i):o});