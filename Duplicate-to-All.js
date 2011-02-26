/* 

   o----------------------o----------------------o
           CAMERON McEFEE | 530.339.8372
       New Media Designer | cm@cameronmcefee.com
   o----------------------o----------------------o
                 Thanks for looking!

 Find Middle is a Photoshop script by Cameron McEfee.
			 
			    www.cameronmcefee.com
				
*/

if( app.documents.length > 0 ){
	duplicateToAll();
}
function duplicateToAll(){
	docs = app.documents;
	curDoc = app.activeDocument;
	groupLayerset();
	for(var i = 0; i < docs.length; i++){
		if(curDoc != docs[i]){
			try {
				var curLayer = docs[i].activeLayer;
				curDoc.activeLayer.duplicate(docs[i],ElementPlacement.PLACEATBEGINNING);
				app.activeDocument = docs[i];
				app.activeDocument.activeLayer.name = 'Duplicate To All Group';
				docs[i].activeLayer.move(curLayer, ElementPlacement.PLACEBEFORE);
				ungroupLayerset();
			} catch(e) {
				alert('"Duplicate to All" has encountered an error. Please email the text below to cm@cameronmcefee.com \n' + 'Error with PS Script: Duplicate to All at [duplicateToAll()] \n\n' + e);
			}

		}
		app.activeDocument = curDoc;
	}
	ungroupLayerset();
	alert('"Duplicate to All" complete');
}
function ungroupLayerset(){
	var m_Dsc01 = new ActionDescriptor();
	var m_Ref01 = new ActionReference();
	m_Ref01.putEnumerated( cTID( "Lyr " ), cTID( "Ordn" ), cTID( "Trgt" ) );
	m_Dsc01.putReference( cTID( "null" ), m_Ref01 );
	
	try {
		executeAction( sTID( "ungroupLayersEvent" ), m_Dsc01, DialogModes.NO );
	} catch(e) {
		alert('"Duplicate to All" has encountered an error. Please email the text below to cm@cameronmcefee.com \n' + 'Error with PS Script: Duplicate to All at [ungroupLayerset()] \n\n' + e);	
	}
}
function cTID(s){return charIDToTypeID(s)}
function sTID(s){return stringIDToTypeID(s)}
function groupLayerset(){
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putClass( stringIDToTypeID('layerSection') );
    desc.putReference( charIDToTypeID('null'), ref );
    var ref = new ActionReference();
    ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
    desc.putReference( charIDToTypeID('From'), ref );
    try {
		executeAction( charIDToTypeID('Mk  '), desc, DialogModes.NO );
	} catch(e) {
		alert('"Duplicate to All" has encountered an error. Please email the text below to cm@cameronmcefee.com \n' + 'Error with PS Script: Duplicate to All at [groupLayerset()] \n\n' + e);
	}
};
