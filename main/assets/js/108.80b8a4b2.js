(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{727:function(e,t,a){"use strict";a.r(t);var o=a(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"define-packets-and-acks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define-packets-and-acks"}},[e._v("#")]),e._v(" Define packets and acks")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("Learn how to define custom packet and acknowledgement structs and how to encode and decode them.")]),e._v(" "),a("h2",{attrs:{id:"pre-requisites-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites-readings"}},[e._v("#")]),e._v(" Pre-requisites Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/ibc/overview.html"}},[e._v("IBC Overview")]),e._v(")")],1),e._v(" "),a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/ibc/integration.html"}},[e._v("IBC default integration")])],1)]),e._v(" "),a("h2",{attrs:{id:"custom-packets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-packets"}},[e._v("#")]),e._v(" Custom packets")]),e._v(" "),a("p",[e._v("Modules connected by a channel must agree on what application data they are sending over the\nchannel, as well as how they will encode/decode it. This process is not specified by IBC as it is up\nto each application module to determine how to implement this agreement. However, for most\napplications this will happen as a version negotiation during the channel handshake. While more\ncomplex version negotiation is possible to implement inside the channel opening handshake, a very\nsimple version negotation is implemented in the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/main/modules/apps/transfer/module.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("ibc-transfer module"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Thus, a module must define its custom packet data structure, along with a well-defined way to\nencode and decode it to and from "),a("code",[e._v("[]byte")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ3VzdG9tIHBhY2tldCBkYXRhIGRlZmluZWQgaW4gYXBwbGljYXRpb24gbW9kdWxlCnR5cGUgQ3VzdG9tUGFja2V0RGF0YSBzdHJ1Y3QgewogIC8vIEN1c3RvbSBmaWVsZHMgLi4uCn0KCkVuY29kZVBhY2tldERhdGEocGFja2V0RGF0YSBDdXN0b21QYWNrZXREYXRhKSBbXWJ5dGUgewogIC8vIGVuY29kZSBwYWNrZXREYXRhIHRvIGJ5dGVzCn0KCkRlY29kZVBhY2tldERhdGEoZW5jb2RlZCBbXWJ5dGUpIChDdXN0b21QYWNrZXREYXRhKSB7CiAgLy8gZGVjb2RlIGZyb20gYnl0ZXMgdG8gcGFja2V0IGRhdGEKfQo="}}),e._v(" "),a("blockquote",[a("p",[e._v("Note that the "),a("code",[e._v("CustomPacketData")]),e._v(" struct is defined in the proto definition and then compiled by the protobuf compiler.")])]),e._v(" "),a("p",[e._v("Then a module must encode its packet data before sending it through IBC.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gcmV0cmlldmUgdGhlIGR5bmFtaWMgY2FwYWJpbGl0eSBmb3IgdGhpcyBjaGFubmVsCmNoYW5uZWxDYXAgOj0gc2NvcGVkS2VlcGVyLkdldENhcGFiaWxpdHkoY3R4LCBjaGFubmVsQ2FwTmFtZSkKLy8gU2VuZGluZyBjdXN0b20gYXBwbGljYXRpb24gcGFja2V0IGRhdGEKZGF0YSA6PSBFbmNvZGVQYWNrZXREYXRhKGN1c3RvbVBhY2tldERhdGEpCi8vIFNlbmQgcGFja2V0IHRvIElCQywgYXV0aGVudGljYXRpbmcgd2l0aCBjaGFubmVsQ2FwCnNlcXVlbmNlLCBlcnIgOj0gSUJDQ2hhbm5lbEtlZXBlci5TZW5kUGFja2V0KAogIGN0eCwgCiAgY2hhbm5lbENhcCwgCiAgc291cmNlUG9ydCwgCiAgc291cmNlQ2hhbm5lbCwgCiAgdGltZW91dEhlaWdodCwgCiAgdGltZW91dFRpbWVzdGFtcCwgCiAgZGF0YSwKKQo="}}),e._v(" "),a("p",[e._v("A module receiving a packet must decode the "),a("code",[e._v("PacketData")]),e._v(" into a structure it expects so that it can\nact on it.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUmVjZWl2aW5nIGN1c3RvbSBhcHBsaWNhdGlvbiBwYWNrZXQgZGF0YSAoaW4gT25SZWN2UGFja2V0KQpwYWNrZXREYXRhIDo9IERlY29kZVBhY2tldERhdGEocGFja2V0LkRhdGEpCi8vIGhhbmRsZSByZWNlaXZlZCBjdXN0b20gcGFja2V0IGRhdGEK"}}),e._v(" "),a("h2",{attrs:{id:"acknowledgements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),a("p",[e._v("Modules may commit an acknowledgement upon receiving and processing a packet in the case of synchronous packet processing.\nIn the case where a packet is processed at some later point after the packet has been received (asynchronous execution), the acknowledgement\nwill be written once the packet has been processed by the application which may be well after the packet receipt.")]),e._v(" "),a("p",[e._v("NOTE: Most blockchain modules will want to use the synchronous execution model in which the module processes and writes the acknowledgement\nfor a packet as soon as it has been received from the IBC module.")]),e._v(" "),a("p",[e._v("This acknowledgement can then be relayed back to the original sender chain, which can take action\ndepending on the contents of the acknowledgement.")]),e._v(" "),a("p",[e._v("Just as packet data was opaque to IBC, acknowledgements are similarly opaque. Modules must pass and\nreceive acknowledegments with the IBC modules as byte strings.")]),e._v(" "),a("p",[e._v("Thus, modules must agree on how to encode/decode acknowledgements. The process of creating an\nacknowledgement struct along with encoding and decoding it, is very similar to the packet data\nexample above. "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 04"),a("OutboundLink")],1),e._v("\nspecifies a recommended format for acknowledgements. This acknowledgement type can be imported from\n"),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/main/modules/core/04-channel/types",target:"_blank",rel:"noopener noreferrer"}},[e._v("channel types"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("While modules may choose arbitrary acknowledgement structs, a default acknowledgement types is provided by IBC "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/proto/ibc/core/channel/v1/channel.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gQWNrbm93bGVkZ2VtZW50IGlzIHRoZSByZWNvbW1lbmRlZCBhY2tub3dsZWRnZW1lbnQgZm9ybWF0IHRvIGJlIHVzZWQgYnkKLy8gYXBwLXNwZWNpZmljIHByb3RvY29scy4KLy8gTk9URTogVGhlIGZpZWxkIG51bWJlcnMgMjEgYW5kIDIyIHdlcmUgZXhwbGljaXRseSBjaG9zZW4gdG8gYXZvaWQgYWNjaWRlbnRhbAovLyBjb25mbGljdHMgd2l0aCBvdGhlciBwcm90b2J1ZiBtZXNzYWdlIGZvcm1hdHMgdXNlZCBmb3IgYWNrbm93bGVkZ2VtZW50cy4KLy8gVGhlIGZpcnN0IGJ5dGUgb2YgYW55IG1lc3NhZ2Ugd2l0aCB0aGlzIGZvcm1hdCB3aWxsIGJlIHRoZSBub24tQVNDSUkgdmFsdWVzCi8vIGAweGFhYCAocmVzdWx0KSBvciBgMHhiMmAgKGVycm9yKS4gSW1wbGVtZW50ZWQgYXMgZGVmaW5lZCBieSBJQ1M6Ci8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvaWJjL3RyZWUvbWFzdGVyL3NwZWMvY29yZS9pY3MtMDA0LWNoYW5uZWwtYW5kLXBhY2tldC1zZW1hbnRpY3MjYWNrbm93bGVkZ2VtZW50LWVudmVsb3BlCm1lc3NhZ2UgQWNrbm93bGVkZ2VtZW50IHsKICAvLyByZXNwb25zZSBjb250YWlucyBlaXRoZXIgYSByZXN1bHQgb3IgYW4gZXJyb3IgYW5kIG11c3QgYmUgbm9uLWVtcHR5CiAgb25lb2YgcmVzcG9uc2UgewogICAgYnl0ZXMgIHJlc3VsdCA9IDIxOwogICAgc3RyaW5nIGVycm9yICA9IDIyOwogIH0KfQo="}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);