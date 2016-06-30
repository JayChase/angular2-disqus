import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'disqus-thread',
    template: '<div id="disqus_thread"><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a></div>'
})
export class DisqusThreadComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}