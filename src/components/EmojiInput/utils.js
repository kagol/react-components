export const getCaretCharacterOffsetWithin = (element) => {
    var caretOffset = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;
    if (typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            var range = win.getSelection().getRangeAt(0);
            var preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        }
    } else if ( (sel = doc.selection) && sel.type != "Control") {
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
}

export const setCaratTo = (contentEditableElement, position) => {
    var range, selection;
    if(document.createRange) { // Firefox, Chrome, Opera, Safari, IE 9+
        range = document.createRange();
        range.selectNodeContents(contentEditableElement);
        
        console.log('contentEditableElement:', contentEditableElement);
        console.log('contentEditableElement.firstChild:', contentEditableElement.firstChild);
        console.log('position:', position);
        console.log('range:', range);
        range.setStart(contentEditableElement.firstChild, position);
        range.setEnd(contentEditableElement.firstChild, position)

        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    } else if(document.selection) { // IE 8 and lower 
        //range = document.body.createTextRange();
        //range.moveToElementText(contentEditableElement);
        //range.collapse(false);
        //range.select();
    }
}