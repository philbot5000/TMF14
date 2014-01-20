/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-twitter' : '&#xe000;',
			'icon-instagram' : '&#xe001;',
			'icon-reorder' : '&#xf0c9;',
			'icon-calendar-empty' : '&#xf133;',
			'icon-cancel-circle' : '&#xe004;',
			'icon-chevron-left' : '&#xf053;',
			'icon-eye' : '&#xe007;',
			'icon-play' : '&#xf04b;',
			'icon-pause' : '&#xf04c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};