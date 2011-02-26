Duplicate to All is a Photoshop script that duplicates the currently selected layer(s) to every open document. This is particularly useful for updating elements that need to be in many files, such as headers/footers in web comps.

Needed Fixes
------------

- In testing, just doing a simple duplicate caused the layers to rearrange themselves. To get around this the script groups the layers in a folder, duplicates the folder, then ungroups the layers. This may cause some issues with duplication in heavily nested files.
- In certain situations where the grouped files could not be duplicated into one of the open files, it is instead duplicated back in the original file, something which shouldn't be possible with the way it is coded. This needs to be resolved.