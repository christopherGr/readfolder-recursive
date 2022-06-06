<b>Read Folder Recursive</b>\n
Accepts the path of a folder and returns all the files included in the folder and its subfolders.\n
<br>
<b>npm i readfolder-recursive</b>\n
<br>
<b>Arguments</b>\n
\t1. The path of the folder (required)\n
\t2. An array with file extensions ([".png", "mp4"]). Only the files that their extensions matches would returned. An empty array will return all the files. (optional)\n
\t3. An array with files extensions to ignore. The files with these extnesions would not be returned.\n
<br>
const readFolderRecursive = require('readfolder-recursive');
const files = await readFolderRecursive("C:\Users\myUsername\Desktop\myFolder", [], []);
console.log(files)

