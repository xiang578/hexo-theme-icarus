hexo.extend.filter.register('theme_inject', function (injects) {
    // 样式文件
	injects.style.push('/source/_data/styles.styl');
})

hexo.extend.injector.register('head_begin', '<link rel="stylesheet" href="https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.6.0/lxgwwenkaiscreen.css">', 'default');

hexo.extend.injector.register('head_begin', '<script async src="https://umami.xiang578.com/script.js" data-website-id="0bf958fd-ca98-4a54-b1c0-bf3384802fcc"></script>', 'default');
hexo.extend.injector.register('head_begin', '<script async src="https://umami.xiang578.com/script.js" data-website-id="0bf958fd-ca98-4a54-b1c0-bf3384802fcc"></script>', 'default');
hexo.extend.injector.register('head_begin', '<script data-goatcounter="https://xiang578.goatcounter.com/count" async src="/count.js"></script>', 'default');
hexo.extend.injector.register('head_begin', '<script>if(document.location.host!="blog.xiang"+"578.com"&&document.location.host!="xiang"+"578.github.io"&&document.location.host="localhost"){alert("此网站系盗版网站,原网站来自 blog.xiang578.com, 请谨慎访问");location.href=location.href.replace(document.location.host,"blog.xiang"+"578.com");}</script>', 'default');

hexo.extend.injector.register('head_begin', '<link rel="webmention" href="https://webmention.io/blog.xiang578.com/webmention" /> <link rel="pingback" href="https://webmention.io/blog.xiang578.com/xmlrpc" />', 'default');
hexo.extend.injector.register('head_begin', '<link title="Follow me on Twitter" rel="me" href="https://twitter.com/xiang578"/>', 'default');
