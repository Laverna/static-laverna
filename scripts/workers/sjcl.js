/**
 * Copyright (C) 2015 Laverna project Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";importScripts("../../bower_components/requirejs/require.js"),requirejs.config({baseUrl:"../",paths:{q:"../bower_components/q/q",underscore:"../bower_components/underscore/underscore",sjcl:"../bower_components/sjcl/sjcl"},shim:{sjcl:{exports:"sjcl"}}}),requirejs(["q","classes/sjcl"],function(e,s){var r=new s;self.onmessage=function(s){var o=s.data;return r[o.msg]?new e(r[o.msg](o.data)).then(function(e){self.postMessage({msg:"done",promiseId:o.promiseId,data:e})}):void console.error("sjcl worker:","Method doesn't exist",o.msg)},self.postMessage({msg:"ready"})});