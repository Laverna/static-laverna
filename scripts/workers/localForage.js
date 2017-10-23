/**
 * Copyright (C) 2015 Laverna project Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";importScripts("../../bower_components/requirejs/require.js"),requirejs.config({baseUrl:"../",paths:{q:"../bower_components/q/q",underscore:"../bower_components/underscore/underscore",localforage:"../bower_components/localforage/dist/localforage"}}),requirejs(["helpers/db"],function(e){self.onmessage=function(s){var o=s.data;return e[o.msg]?e[o.msg](o.data).then(function(e){self.postMessage({msg:"done",promiseId:o.promiseId,data:e})}).fail(function(e){self.postMessage({msg:"fail",promiseId:o.promiseId,data:e})}):void console.error("localForage module:","Method doesn't exist",o.msg)},self.postMessage({msg:"ready"})});