/**
 * Copyright (C) 2015 Laverna project Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
define(["underscore","q","localforage"],function(e,t,n){"use strict";var r={dbs:{},getDb:function(e){var t=e.profile+"/"+e.storeName;return this.dbs[t]=this.dbs[t]||n.createInstance({name:e.profile||"notes-db",storeName:e.storeName}),this.dbs[t]},find:function(e){var n=t.defer();return this.getDb(e.options).getItem(e.id,function(e,t){return e?n.reject(e):(t||n.reject("not found"),n.resolve(t))}),n.promise},findAll:function(e){var n=t.defer(),r=this;return this.getDb(e.options).keys(function(t,i){return i&&i.length?r.findByKeys(i,e).then(function(e){n.resolve(e)}).fail(function(e){n.reject(e)}):n.resolve([])}),n.promise},findByKeys:function(n,r){var i=[],o=this,s=[];return e.each(n,function(t){i.push(o.find({id:t,options:r.options}).then(function(t){return!t||r.options.conditions&&!e.isMatch(t,r.options.conditions)?void 0:(s.push(t),t)}))}),t.all(i).then(function(){return s})},save:function(e){var n=t.defer();return this.getDb(e.options).setItem(e.id,e.data,function(e,t){return e?n.reject(e):n.resolve(t)}),n.promise}};return r});