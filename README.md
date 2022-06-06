<b>Read Folder Recursive</b><br>
Accepts the path of a folder and returns all the files included in the folder and its subfolders.<br>
<br>
<b>npm i readfolder-recursive</b><br>
<br>
<b>Arguments</b><br>
1. The path of the folder (required)<br>
2. An array with file extensions [".png", ".mp4"]. Only the files that their extensions matches would be returned. An empty array will return all the files. (optional)<br>
3. An array with file extensions to ignore. The files with these extnesions would not be returned. (optional)<br>
<br>
<b>Usage - Returns a Promise</b><br>
const readFolderRecursive = require('readfolder-recursive');<br>
const path = "C:\Users\myUsername\Desktop\myFolder";<br>
const extensionsToInclude = [];  //An empty array means include all the files.<br>
const extensionsToIgnore = [".mp4"];   //Ignore all the .mp4 files.<br>
const files = await readFolderRecursive(path, extensionsToInclude, extensionsToIgnore);<br><br>
<b>It will return all the files from the folder <i>"C:\Users\myUsername\Desktop\myFolder"</i> apart from the <i>.mp4 files</i></b>
