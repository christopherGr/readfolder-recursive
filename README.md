<b>Read Folder Recursive</b><br>
Accepts the path of a folder and returns all the files included in the folder and its subfolders.<br>
<br>
<b>npm i readfolder-recursive</b><br>
<br>
<b>Arguments</b><br>
1. The path of the folder (required)<br>
2. An array with file extensions [".png", ".mp4"]. Only the files that their extensions matches would be returned. An empty array will return all the files. (optional)<br>
3. An array with file extensions to ignore. The files with these extnesions would not be returned. (optional)<br>
<i>****If an extension is include in both arrays, files with this extension would not be returned.</i><br>

<b>Usage - Returns a Promise</b><br>

<b>Example 1</b><br>
const readFolderRecursive = require('readfolder-recursive');<br>
const path = "C:\Users\myUsername\Desktop\myFolder";<br>
const extensionsToInclude = [];  //An empty array means include all the files.<br>
const extensionsToIgnore = [".mp4"];   //Ignore all the .mp4 files.<br>
const files = await readFolderRecursive(path, extensionsToInclude, extensionsToIgnore);<br>
<b>It will return all the files from the folder <i>"C:\Users\myUsername\Desktop\myFolder"</i> apart from the <i>.mp4 files</i></b>
<br>
<br>
<b>Example 2</b><br>
const readFolderRecursive = require('readfolder-recursive');<br>
const path = require('path');<br>
const folder = path.join('__dirname', 'myFolder');<br>
readFolderRecursive(folder, [], [])<br>
.then((files)=>{ console.log(files) })<br>
.catch((e)=>{ console.log(e) });<br>
<b>It will return all the files from the folder <i>"myFolder"</i></b>
