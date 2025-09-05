/*!
 * Slide Accessibility
 *
 * The default CSS and JavaScript of Reveal.js has poor keyboard and screen reader
 * accessibility because slides are not fully hidden after animating. This plugin wraps slide
 * contents in an element that can be hidden with CSS and not affect slide transitions.
 *
 * It also includes an auto-generated skip links plugin.
 *
 * MIT licensed
 *
 * Copyright (C) 2015 Marcy Sutton, http://marcysutton.com
 */

/*!
 * copied from https://github.com/marcysutton/reveal-a11y
 */

// if you change element ID's,
// be sure to update the CSS as well
GLOBAL_SKIP_LINK_ID = 'global-skip-link',
SLIDE_SKIP_LINKS_ID = 'table-of-contents',
GLOBAL_SKIP_LINK_TEXT = 'Show navigation',
SKIP_LINK_TARGET_SELECTOR =  '.accessibilityWrapper',
CONTROLS_SELECTOR =  '.controls',

/**
 * Sanitize text content inserted into skip links
 */
function sanitizeText(text) {
    var tempEl = document.createElement('div');
    tempEl.textContent = text;
    var sanitizedText = tempEl.innerHTML;
    tempEl = null
    return sanitizedText;
}


/**
 * Insert link that jumps you to the list of slides.
 */
function insertGlobalSkipLink() {
    var globalSkipLink = document.createElement( 'a' );
    globalSkipLink.setAttribute( 'id', GLOBAL_SKIP_LINK_ID );
    globalSkipLink.setAttribute( 'href', '#'+SLIDE_SKIP_LINKS_ID );
    globalSkipLink.textContent = GLOBAL_SKIP_LINK_TEXT;

    dom.wrapper.insertBefore( globalSkipLink, document.querySelector( '.slides' ));
}

/**
 * Enable skip links.
 */
function initSkipLinks() {
    dom.skipToNavLink = document.querySelector( '#'+GLOBAL_SKIP_LINK_ID );

    var skipLinkListItems = document.querySelectorAll( SKIP_LINK_TARGET_SELECTOR );
    for(var g=skipLinkListItems.length; g--;){
      skipLinkListItems[g].setAttribute('tabIndex', '-1');
    }

    dom.slideSkipLinks = dom.skipLinks.querySelectorAll('a');

    dom.skipToNavLink.addEventListener('focus', globalSkipLinkFocus);
    dom.skipToNavLink.addEventListener('blur', skipLinkBlur);
    dom.skipToNavLink.addEventListener('click', skipToNavLinkClick);

    var numSkipLinks = dom.slideSkipLinks.length;
    for(var i=numSkipLinks; i--;){
      dom.slideSkipLinks[i].addEventListener('focus', skipLinksFocus);
      dom.slideSkipLinks[i].addEventListener('blur', skipLinkBlur);
      dom.slideSkipLinks[i].addEventListener('click', skipLinkClick);
    }
    document.addEventListener('keydown', blurSkipLink);
}

function blurSkipLink(event) {
    if(event.which === 27){
      event.preventDefault();
      event.target.blur();
    }
}

function skipToNavLinkClick(event) {
    event.preventDefault();
    dom.skipLinks.setAttribute('aria-hidden', false);
    dom.slideSkipLinks[0].focus();
}

/**
 * Change visibility of skip links on focus
 */
function globalSkipLinkFocus(event) {
    event.currentTarget.style.left = '0px';
}

function skipLinksFocus(event){
    globalSkipLinkFocus(event);
    dom.skipLinks.setAttribute('aria-hidden', false);
}

/**
 * Hide skip links on blur
 */
function skipLinkBlur(event) {
    dom.skipLinks.setAttribute('aria-hidden', true);
    // dom.skipToNavLink.focus();
    event.currentTarget.style.left = '-50000px';
}

/**
 * Send focus to selected slide
 */
function skipLinkClick(event) {
    skipLinkBlur(event);
    var href = event.currentTarget.getAttribute('href');
    var section = document.querySelector('[data-id="'+href.split('#/')[1]+'"]');

    window.setTimeout(function(){
      section.querySelector( SKIP_LINK_TARGET_SELECTOR ).focus();
    });
}

/**
 * Extend object a with the properties of object b.
 * If there's a conflict, object b takes precedence.
 */
function extend( a, b ) {

    for( var i in b ) {
      a[ i ] = b[ i ];
    }

}

/**
 * Creates an HTML element and returns a reference to it.
 * If a sibling element is passed through, element is
 * inserted after.
 */
function createNodeAfterSibling( container, tagname, id, innerHTML, sibling) {

    var node = document.createElement( tagname );
    node.setAttribute('id', id);
    if( innerHTML !== null ) {
      node.innerHTML = innerHTML;
    }
    if(sibling) {
      container.insertBefore( node, sibling.nextSibling );
    }
    else {
      container.appendChild( node );
    }
    return node;
}

 // provide nested URL fragments and section labels
function decorateIndices(index, incrementor, divider, outerIndex=-1) {
    if (outerIndex >=0 ) {
        return ((outerIndex + incrementor) + divider + (index + incrementor));
    }
    return index + incrementor;
}

/**
 * Reveal Plugin
 * https://revealjs.com/creating-plugins/
 */
window.Accessibility = window.Accessibility || {
    id: 'Accessibility',
    init: function(deck) {
	initAccessibility.call(this, deck)
    }
};
	
const initAccessibility = function(Reveal){	
	// Cached references to DOM elements
	dom = {};
	var deck = Reveal.getSlidesElement();
	  
	// if controls are present, we'll insert table of contents after them
	if( document.querySelector( CONTROLS_SELECTOR )) {
	  dom.controls = document.querySelector( CONTROLS_SELECTOR );
	  buildSkipLinks(); 
        }
	dom.wrapper = document.querySelector( '.reveal' );
	insertGlobalSkipLink();
	var skipLinkHTML = '';

	index = 0;
		    
	for (slide in deck) {
	console.log(slide);
	  slide.setAttribute('data-id', decorateIndices(index, 0, '/'));
  	  slide.setAttribute('aria-label', slide.title + ":" + decorateIndices(index, 1, ', child'));
	  var contents = slideArray[index].innerHTML;
	  slide.innerHTML = '<div class="accessibilityWrapper">' + contents + '</div>';

	  var slideText;
	  if (slide.children[0]) {
              slideText = slide.children[0].textContent;
	  } else {
              slideText = slide.textContent;
	  }
	  if (slideText === '') {
              slideText = slide.textContent.substring(0, 40);
	  }
	  skipLinkHTML += '<li><a href="#/' + SLIDES[i].getAttribute('data-id') + '">' + (i + 1) + '. ' + sanitizeText(slideText) + '</a></li>';
	  index = index + 1;
       }
    skipLinkHTML += '</ul>';
    dom.skipLinks = createNodeAfterSibling( dom.wrapper, 'ul', SLIDE_SKIP_LINKS_ID, skipLinkHTML, dom.controls, {'aria-hidden': true} );

    initSkipLinks();
    }
