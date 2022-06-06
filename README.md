<b>Read Folder Recursive</b><br>
Accepts the path of a folder and returns all the files included in the folder and its subfolders.<br>
<br>
<b>npm i readfolder-recursive</b><br>
<br>
<b>Arguments</b><br>
&nbsp;&nbsp;1. The path of the folder (required)<br>
&nbsp;&nbsp;2. An array with file extensions ([".png", "mp4"]). Only the files that their extensions matches would returned. An empty array will return all the files. (optional)<br>
&nbsp;&nbsp;3. An array with files extensions to ignore. The files with these extnesions would not be returned.<br>
<br>
<b>Usage</b> - Returns a Promise<br><br>
const readFolderRecursive = require('readfolder-recursive');<br>
const files = await readFolderRecursive("C:\Users\myUsername\Desktop\myFolder", [], [".mp4"]);<br>
console.log(files)<br><br>
<b>It will output all the files from the folder <i>"C:\Users\myUsername\Desktop\myFolder"</i> apart from the <i>.mp4 files</i></b>

