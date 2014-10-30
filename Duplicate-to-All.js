/*

     o----------------------o----------------------o
             CAMERON McEFEE | 530.339.8372
         New Media Designer | cm@cameronmcefee.com
     o----------------------o----------------------o
                   Thanks for looking!

 Duplicate-To-All is a Photoshop script by Cameron McEfee.

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
      var curLayer;
      try { curLayer = docs[i].activeLayer; } catch(e) {}
      curDoc.activeLayer.duplicate(docs[i],ElementPlacement.PLACEATBEGINNING);
      app.activeDocument = docs[i];
      app.activeDocument.activeLayer.name = 'Duplicate To All Group';
      if(curLayer){docs[i].activeLayer.move(curLayer, ElementPlacement.PLACEBEFORE);}
      ungroupLayerset();
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

  executeAction( sTID( "ungroupLayersEvent" ), m_Dsc01, DialogModes.NO );
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

  executeAction( charIDToTypeID('Mk  '), desc, DialogModes.NO );
};
