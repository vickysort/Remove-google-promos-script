/*

DEVELOPER: VISHNU VIVEK R
LICENSE: Mozilla Public License, version 2.0

*/

/* Install Greasemonkey addon to firefox and add the following script. */

google.promos&&google.promos.toast && google.promos.toast.cpc(); 
window.google.promos.pushdown.pd_tp = function(){return false;};


/*

If you want to understand how it works, read further.

Removing the Chrome promo-box: The first line of the code invokes the function that executes when we click the close button on the chrome promo-box.

Disabling the push-down bar: Unfortunately, this task is not as easy as the previous one, because the push-down bar activates after a short delay (clever programming by the google folks). So, our only choice is to remove the contents of the function that initiates the push-down event. The second line accomplishes this effectively.

*/