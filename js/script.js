/*-------------------------------------------------------------
 * Project Name     : Irval (Promo site)
 * Author           : @kennen_web (telegram) / @kennen (YG)
 * Version          : 1.0.0 (release)
 *--------------------------------------------------------------
 */

if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 300);

}

var x = 0;

var titleText = ["|",
					"/",
					"&",
					"★",
                    "★|",
					"★/",
					"★&",
                    "★ ",
                    "★ |",
					"★ /",
					"★ &",
                    "★ I",
                    "★ I|",
					"★ I/",
					"★ I&",
                    "★ Ir",
                    "★ Ir|",
					"★ Ir/",
					"★ Ir&",
                    "★ Irv",
                    "★ Irv|",
					"★ Irv/",
					"★ Irv&",
                    "★ Irva",
					"★ Irva|",
					"★ Irva/",
					"★ Irva&",
					"★ Irval",
					"★ Irval|",
					"★ Irval/",
					"★ Irval&",
					"★ Irval ",
					"★ Irval |",
					"★ Irval /",
					"★ Irval &",
					"★ Irval ★",
					"★ Irval ★",
					"★ Irval ★|",
					"★ Irval |",
					"★ Irval|",
					"★ Irva|",
					"★ Irv|",
					"★ Ir|",
					"★ I|",
					"★ |",
					"★|",
					"|"];


function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}

/*-----------------------------------------------*/

$(function () {
    window.setTimeout(function () {
        $('.preloader').addClass('hide-loader');
        $('.content').addClass('show-content');
    }, 1500);
    window.setTimeout(function () {
        $('.preloader').addClass('kill-loader');
    }, 4000);
});

/*-----------------------------------------------*/
