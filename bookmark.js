javascript:function gree_bookmark(){
var act='http://bloghackers.net/~naoya/sandbox/gree_like.cgi';
var d=document;
var url=encodeURIComponent(d.location.href);
var t=d.title;
var type='website';
var img='http://developer.gree.co.jp/img/common/connect_icon.gif';
var ep=act+'?url='+url+'&title='+t+'&type='+type+'&image_url='+img;
d.title='(Bookmarking...) '+t;

// TODO

req.send("");
d.title=t;
}gree_bookmark();void(0)

