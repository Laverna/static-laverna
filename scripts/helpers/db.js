/**
 * Copyright (C) 2015 Laverna project Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
define(["underscore","q","localforage"],function(e,t,n){"use strict";var o={dbs:{},getDb:function(e){var t=e.profile+"/"+e.storeName;return this.dbs[t]=this.dbs[t]||n.createInstance({name:e.profile||"notes-db",storeName:e.storeName}),this.dbs[t]},find:function(e){var n=t.defer();return this.getDb(e.options).getItem(e.id,function(e,t){return e?n.reject(e):(t||n.reject("not found"),n.resolve(t))}),n.promise},findAll:function(e){var n=t.defer(),o=this;return this.getDb(e.options).keys(function(t,r){return r&&r.length?o.findByKeys(r,e).then(function(e){n.resolve(e)}).fail(function(e){n.reject(e)}):n.resolve([])}),n.promise},findByKeys:function(n,o){var r=[],i=this,s=[];return e.each(n,function(t){r.push(i.find({id:t,options:o.options}).then(function(t){return!t||o.options.conditions&&!e.isMatch(t,o.options.conditions)?void 0:(s.push(t),t)}))}),t.all(r).then(function(){return s})},save:function(n){var o=t.defer(),r=n.data;return r.encryptedData&&(r=e.omit(r,n.options.encryptKeys)),this.getDb(n.options).setItem(n.id,r,function(e,t){return e?o.reject(e):o.resolve(t)}),o.promise}};return o});