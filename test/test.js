module( "Page visibility checks" );

test( "Initial states", function() {
    strictEqual( false, document.hidden, "The initial hidden state of our document should be false" );
    strictEqual( "visible", document.visibilityState, "The initial visibilityState of our document should be visible" );
});

asyncTest( "Changed states", function() {
    var firstEvent = true;
    var dialog = $( "<div>Please open a different tab, then change back and click in the document.</div>" ).dialog();

    $( document ).on( "visibilitychange", function() {
        if ( dialog.is(":ui-dialog") ) {
            dialog.dialog( "destroy" ).remove();
        }
        // This assertion should occur twice - once when the document is hidden, and once when it's visible again.
        ok( true, "Our visibilitychange event occurred" );
        
        if ( firstEvent ) {
            firstEvent = false;
            
            strictEqual( document.hidden, true, "The hidden state of our document after a new window is opened should be true" );
            strictEqual( document.visibilityState, "hidden", "The visibilityState of our document after a new window is opened should be 'hidden'" );
        } else {
            $( document ).off( "visibilitychange" );
            start();
        }
    });
});