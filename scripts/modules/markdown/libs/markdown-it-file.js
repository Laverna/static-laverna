/**
 * Copyright (C) 2015 Laverna project Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
define(["underscore"],function(e){"use strict";var r={pattern:/#file:([a-z0-9\-])+/,init:function(e){var t=e.renderer.rules.image;e.renderer.rules.link_open=function(e,t,n,i,a){return r._replaceLink(e,t,n,i),a.renderToken(e,t,n)},e.renderer.rules.image=function(e,n,i,a,c){return r._replaceLink(e,n,i,a),t(e,n,i,a,c)}},revokeURLs:function(r,t){e.each(r,function(n,i){e.findWhere(t.files,{id:i})||((URL||webkitURL).revokeObjectURL(n),delete r[i])})},_replaceLink:function(e,t,n,i){var a="image"===e[t].type?"src":"href",c=e[t].attrs[e[t].attrIndex(a)];if(r.pattern.test(c[1])){var f=c[1].match(r.pattern)[0].replace("#file:","");i&&(i.files=i.files||[],i.files.push(f)),i.modelData&&r._createURL(c,f,i)}},_createURL:function(r,t,n){var i=e.findWhere(n.modelData.files,{id:t});if(i){var a=n.objectURLs[i.id];a=a||(URL||webkitURL).createObjectURL(i.src),n.objectURLs[i.id]=a,r[1]=a}}};return r});