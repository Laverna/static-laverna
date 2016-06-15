/**
 * Copyright (C) 2015 Laverna project Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";importScripts("../../../../bower_components/requirejs/require.js"),requirejs.config({baseUrl:"../../../",packages:[{name:"prism",location:"../bower_components/prism",main:"bundle"}],paths:{q:"../bower_components/q/q",underscore:"../bower_components/underscore/underscore","markdown-it":"../bower_components/markdown-it/dist/markdown-it.min","markdown-it-san":"../bower_components/markdown-it-sanitizer/dist/markdown-it-sanitizer.min","markdown-it-hash":"../bower_components/markdown-it-hashtag/dist/markdown-it-hashtag.min","markdown-it-math":"../bower_components/markdown-it-math/dist/markdown-it-math.min"},shim:{"prism/bundle":{exports:"Prism"}}}),self.addEventListener=void 0,requirejs(["modules/markdown/libs/markdown-it"],function(e){var o=new e;self.onmessage=function(e){var s=e.data;return o[s.msg]?o[s.msg](s.data).then(function(e){self.postMessage({msg:"done",promiseId:s.promiseId,data:e})}).fail(function(e){self.postMessage({msg:"fail",promiseId:s.promiseId,data:e})}):void console.error("MarkdownIt module:","Method doesn't exist",s.msg)},self.postMessage({msg:"ready"})});