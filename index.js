const fs = require('fs');
const path = require('path');

function explore(folder, extensions=[], exceptions=[]){
	return new Promise((resolve,reject)=>{
		fs.readdir(folder, async(err, files)=>{
			if(err) return reject(err);
			const filepaths = await Promise.all(files.map(async(file)=>{
				const filepath = path.join(folder, file);
				if(fs.statSync(filepath).isDirectory()) return await explore(filepath);				
				const ext = path.extname(file);				
				if(exceptions.includes(ext)) return null;				
				if(!extensions.length) return filepath;				
				if(!extensions.includes(ext)) return null;
				return filepath;
			}))
			const result = filepaths.filter((file)=>{return file!==null}).flat();
			return resolve(result);
		})
	});
}

module.exports = explore;
