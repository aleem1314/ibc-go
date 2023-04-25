(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{669:function(e,l,c){"use strict";c.r(l);var G=c(1),g=Object(G.a)({},(function(){var e=this,l=e.$createElement,c=e._self._c||l;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"keeper"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#keeper"}},[e._v("#")]),e._v(" Keeper")]),e._v(" "),c("p",{attrs:{synopsis:""}},[e._v("Learn how to implement the IBC Module keeper.")]),e._v(" "),c("h2",{attrs:{id:"pre-requisites-readings"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites-readings"}},[e._v("#")]),e._v(" Pre-requisites Readings")]),e._v(" "),c("ul",[c("li",{attrs:{prereq:""}},[c("RouterLink",{attrs:{to:"/ibc/overview.html"}},[e._v("IBC Overview")]),e._v(")")],1),e._v(" "),c("li",{attrs:{prereq:""}},[c("RouterLink",{attrs:{to:"/ibc/integration.html"}},[e._v("IBC default integration")])],1)]),e._v(" "),c("p",[e._v("In the previous sections, on channel handshake callbacks and port binding in "),c("code",[e._v("InitGenesis")]),e._v(", a reference was made to keeper methods that need to be implemented when creating a custom IBC module. Below is an overview of how to define an IBC module's keeper.")]),e._v(" "),c("blockquote",[c("p",[e._v("Note that some code has been left out for clarity, to get a full code overview, please refer to "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/transfer/keeper/keeper.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("the transfer module's keeper in the ibc-go repo"),c("OutboundLink")],1),e._v(".")])]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gS2VlcGVyIGRlZmluZXMgdGhlIElCQyBhcHAgbW9kdWxlIGtlZXBlcgp0eXBlIEtlZXBlciBzdHJ1Y3QgewogIHN0b3JlS2V5ICAgc2RrLlN0b3JlS2V5CiAgY2RjICAgICAgICBjb2RlYy5CaW5hcnlDb2RlYwogIHBhcmFtU3BhY2UgcGFyYW10eXBlcy5TdWJzcGFjZQoKICBjaGFubmVsS2VlcGVyIHR5cGVzLkNoYW5uZWxLZWVwZXIKICBwb3J0S2VlcGVyICAgIHR5cGVzLlBvcnRLZWVwZXIKICBzY29wZWRLZWVwZXIgIGNhcGFiaWxpdHlrZWVwZXIuU2NvcGVkS2VlcGVyCgogIC8vIC4uLiBhZGRpdGlvbmFsIGFjY29yZGluZyB0byBjdXN0b20gbG9naWMKfQoKLy8gTmV3S2VlcGVyIGNyZWF0ZXMgYSBuZXcgSUJDIGFwcCBtb2R1bGUgS2VlcGVyIGluc3RhbmNlCmZ1bmMgTmV3S2VlcGVyKAogIC8vIGFyZ3MKKSBLZWVwZXIgewogIC8vIC4uLgoKICByZXR1cm4gS2VlcGVyewogICAgY2RjOiAgICAgICAgICAgY2RjLAogICAgc3RvcmVLZXk6ICAgICAga2V5LAogICAgcGFyYW1TcGFjZTogICAgcGFyYW1TcGFjZSwKCiAgICBjaGFubmVsS2VlcGVyOiBjaGFubmVsS2VlcGVyLAogICAgcG9ydEtlZXBlcjogICAgcG9ydEtlZXBlciwKICAgIHNjb3BlZEtlZXBlcjogIHNjb3BlZEtlZXBlciwKCiAgICAvLyAuLi4gYWRkaXRpb25hbCBhY2NvcmRpbmcgdG8gY3VzdG9tIGxvZ2ljCiAgfQp9CgovLyBoYXNDYXBhYmlsaXR5IGNoZWNrcyBpZiB0aGUgSUJDIGFwcCBtb2R1bGUgb3ducyB0aGUgcG9ydCBjYXBhYmlsaXR5IGZvciB0aGUgZGVzaXJlZCBwb3J0CmZ1bmMgKGsgS2VlcGVyKSBoYXNDYXBhYmlsaXR5KGN0eCBzZGsuQ29udGV4dCwgcG9ydElEIHN0cmluZykgYm9vbCB7CiAgXywgb2sgOj0gay5zY29wZWRLZWVwZXIuR2V0Q2FwYWJpbGl0eShjdHgsIGhvc3QuUG9ydFBhdGgocG9ydElEKSkKICByZXR1cm4gb2sKfQoKLy8gQmluZFBvcnQgZGVmaW5lcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHRoZSBwb3J0IEtlZXBlcidzIGZ1bmN0aW9uIGluCi8vIG9yZGVyIHRvIGV4cG9zZSBpdCB0byBtb2R1bGUncyBJbml0R2VuZXNpcyBmdW5jdGlvbgpmdW5jIChrIEtlZXBlcikgQmluZFBvcnQoY3R4IHNkay5Db250ZXh0LCBwb3J0SUQgc3RyaW5nKSBlcnJvciB7CiAgY2FwIDo9IGsucG9ydEtlZXBlci5CaW5kUG9ydChjdHgsIHBvcnRJRCkKICByZXR1cm4gay5DbGFpbUNhcGFiaWxpdHkoY3R4LCBjYXAsIGhvc3QuUG9ydFBhdGgocG9ydElEKSkKfQoKLy8gR2V0UG9ydCByZXR1cm5zIHRoZSBwb3J0SUQgZm9yIHRoZSBJQkMgYXBwIG1vZHVsZS4gVXNlZCBpbiBFeHBvcnRHZW5lc2lzCmZ1bmMgKGsgS2VlcGVyKSBHZXRQb3J0KGN0eCBzZGsuQ29udGV4dCkgc3RyaW5nIHsKICBzdG9yZSA6PSBjdHguS1ZTdG9yZShrLnN0b3JlS2V5KQogIHJldHVybiBzdHJpbmcoc3RvcmUuR2V0KHR5cGVzLlBvcnRLZXkpKQp9CgovLyBTZXRQb3J0IHNldHMgdGhlIHBvcnRJRCBmb3IgdGhlIElCQyBhcHAgbW9kdWxlLiBVc2VkIGluIEluaXRHZW5lc2lzCmZ1bmMgKGsgS2VlcGVyKSBTZXRQb3J0KGN0eCBzZGsuQ29udGV4dCwgcG9ydElEIHN0cmluZykgewogIHN0b3JlIDo9IGN0eC5LVlN0b3JlKGsuc3RvcmVLZXkpCiAgc3RvcmUuU2V0KHR5cGVzLlBvcnRLZXksIFtdYnl0ZShwb3J0SUQpKQp9CgovLyBBdXRoZW50aWNhdGVDYXBhYmlsaXR5IHdyYXBzIHRoZSBzY29wZWRLZWVwZXIncyBBdXRoZW50aWNhdGVDYXBhYmlsaXR5IGZ1bmN0aW9uCmZ1bmMgKGsgS2VlcGVyKSBBdXRoZW50aWNhdGVDYXBhYmlsaXR5KGN0eCBzZGsuQ29udGV4dCwgY2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwgbmFtZSBzdHJpbmcpIGJvb2wgewogIHJldHVybiBrLnNjb3BlZEtlZXBlci5BdXRoZW50aWNhdGVDYXBhYmlsaXR5KGN0eCwgY2FwLCBuYW1lKQp9CgovLyBDbGFpbUNhcGFiaWxpdHkgYWxsb3dzIHRoZSBJQkMgYXBwIG1vZHVsZSB0byBjbGFpbSBhIGNhcGFiaWxpdHkgdGhhdCBjb3JlIElCQwovLyBwYXNzZXMgdG8gaXQKZnVuYyAoayBLZWVwZXIpIENsYWltQ2FwYWJpbGl0eShjdHggc2RrLkNvbnRleHQsIGNhcCAqY2FwYWJpbGl0eXR5cGVzLkNhcGFiaWxpdHksIG5hbWUgc3RyaW5nKSBlcnJvciB7CiAgcmV0dXJuIGsuc2NvcGVkS2VlcGVyLkNsYWltQ2FwYWJpbGl0eShjdHgsIGNhcCwgbmFtZSkKfQoKLy8gLi4uIGFkZGl0aW9uYWwgYWNjb3JkaW5nIHRvIGN1c3RvbSBsb2dpYwo="}})],1)}),[],!1,null,null,null);l.default=g.exports}}]);