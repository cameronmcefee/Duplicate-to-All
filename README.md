Duplicate to All is a Photoshop script that duplicates the currently selected layer(s) to every open document. This is particularly useful for updating elements that need to be in many files, such as headers/footers in web comps.

How To
------

Put the javascript in your application scripts folder.

Windows (32 bit)*: \Program Files (x86)\Adobe Photoshop \Presets\Scripts\
Windows (64 bit)*: \Program Files\Adobe Photoshop \Presets\Scripts\
Mac: /Applications/Adobe Photoshop /Presets/Scripts/

Once it's there, restart photoshop. You can find the script at File>Scripts>Duplicate-To-All

To use it, open all the documents that you wish to duplicate the layer into, as well as the document in which the layer exists. Simply select the layer you'd like to duplicate, and run the script. The layer will be duplicated into every open document.



Needed Fixes
------------

- In testing, just doing a simple duplicate caused the layers to rearrange themselves. To get around this the script groups the layers in a folder, duplicates the folder, then ungroups the layers. This may cause some issues with duplication in heavily nested files.
- In certain situations where the grouped files could not be duplicated into one of the open files, it is instead duplicated back in the original file, something which shouldn't be possible with the way it is coded. This needs to be resolved.