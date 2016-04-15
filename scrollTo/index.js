(function(){!function(a,b){"use strict";b.fn.stickToTop=function(c){var d,e,f;return c=b.extend({scrollParent:window,offset:{top:0,left:0},minWindowHeight:!1,minWindowWidth:!1,preserveLayout:!0,bottomBound:!1,onStick:null,onDetach:null},c,!0),f=c.scrollParent,d=0,e=b(f===window?f.document.body:f).offset(),b(this).each(function(){var g,h,i,j,k,l,m,n,o,p;n=this,h=b(n),o=!1,m=!1,p=!1,g=c.preserveLayout?h.wrap('<div class="stickToTopLayout"></div>').parent():void 0,j=function(){var b;return b={width:0,height:0},"number"==typeof window.innerWidth?(b.width=window.innerWidth,b.height=window.innerHeight):a.documentElement&&(a.documentElement.clientWidth||a.documentElement.clientHeight)&&(b.width=a.documentElement.clientWidth,b.height=a.documentElement.clientHeight),b},i=function(){var a;return a=!1,(c.minWindowWidth&&j().width>=c.minWindowWidth||!c.minWindowWidth)&&(a={offset:h.offset(),position:h.css("position"),width:h.outerWidth(!0),height:h.outerHeight(!0),marginTop:parseInt(h.css("margin-top"),10),marginLeft:parseInt(h.css("margin-left"),10)}),a},l=function(){var k,l,m,p,q,r,s,t,u,v;return o||(o=i()),u=f.scrollTop||b(a).scrollTop(),v=j(),r=f===window?v.height:f.offsetHeight,s=f===window?v.width:f.offsetWidth,p=c.bottomBound&&r-c.bottomBound-o.height,k=!!p&&u>p,l=u>=o.offset.top-c.offset.top-o.marginTop+e.top,m=!l,c.minWindowWidth&&s<c.minWindowWidth&&(m=!0,l=!1),l=l&&!k,k&&1!==d?(q=h.offset(),h.css({position:"absolute",top:p+"px",left:q.left+"px"}),d=1,void(c.onDetach&&c.onDetach.call(n))):m&&2!==d||c.minWindowHeight&&r<c.minWindowHeight?(t={position:o.position},"static"===o.position||"relative"===o.position?(h.removeAttr("style"),g&&g.removeAttr("style")):b.extend(t,{top:o.offset.top,left:o.offset.left}),d=2,void(c.onDetach&&c.onDetach.call(n))):void(l&&3!==d&&v.height>o.height+c.offset.top&&(h.css({position:"fixed",top:e.top+(c.offset.top||0),left:e.left+o.left+(c.offset.left-o.marginLeft||0),width:o.width,"z-index":1e3}),c.preserveLayout&&g.css({position:o.position,width:o.width,height:o.height,"margin-top":o.marginTop,"margin-left":o.marginLeft}),d=3,c.onStick&&c.onStick.call(n)))},k=function(){m||(m=!0,window.setTimeout(function(){c.minWindowWidth&&j().width<c.minWindowWidth||p||(h.removeAttr("style"),c.preserveLayout&&g.removeAttr("style"),o=i(),d="",l(),m=!1)},50))},b(window).on("resize",k),b(c.scrollParent).on("scroll",l),this.unstickToTop=function(){p=!0,b(c.scrollParent).off("scroll",l),b(window).off("resize",k)}})}}(window.document,window.jQuery)}).call(this);


$('#menu1').click(function(){
  $('html, body').animate({
    scrollTop: $("#firstChild").offset().top
}, 1000);
});
$('#menu2').click(function(){
  $('html, body').animate({
    scrollTop: $("#secondChild").offset().top
}, 1000);
});
$('#menu3').click(function(){
  $('html, body').animate({
    scrollTop: $("#thirdChild").offset().top
}, 1000);
});

$(window).scroll(function() {

    //$("id or class").removeClass("active");
    var navHeight = $('.content').outerHeight(true);
    var window_height = navHeight * 0.33;
    var scroll = $(window).scrollTop();

    if (scroll <= window_height) {
        $("#menu1").addClass("active");

        $("#menu2").removeClass("active");
        $("#menu3").removeClass("active");

    }
    else if (scroll <= 1.8*window_height) {
        $("#menu2").addClass("active");

        $("#menu1").removeClass("active");
        $("#menu3").removeClass("active");

    }
    else {
        $("#menu3").addClass("active");

        $("#menu1").removeClass("active");
        $("#menu2").removeClass("active");

    }
});
var contentHeight = $('.content').outerHeight(true);
var navHeight = $('.list__inner').outerHeight(true);
$('.right-inner').stickToTop({ offset: {top: 50}});
