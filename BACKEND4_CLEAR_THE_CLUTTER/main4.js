/** you have to write a node.js programme to clear clutter inside of a directory and organize the content of that directory into the different folders
 * 
 * 
 * 
 * 
 * 
 * 
 */

const { error } = require("console");
const fs = require("fs")
const path = require("path");

const targetdir = 'C:\\Users\\Avita\\Desktop\\WED D';

const types = {
    images: [".jpg", ".png"],
    pdfs: [".pdf"],
    zips: [".zip"]
}

function getfoldername(ext) {
    for (let type in types) {
        if (types[type].includes(ext)) {
            return type;
        }
    }
    return "others";

}

function organisedirectory(dirpath) {
    fs.readdir(dirpath, (err, files) => {
        if (err) {
            console.log('error reading directory path', err);
            return;
        }

        files.forEach((file) => {
            const fullpath = path.join(dirpath, file);
            fs.stat(fullpath, (err, stat) => {
                if (err) return console.log('stat error', err);
                if (stat.isFile()) {
                    const ext = path.extname(file).toLowerCase();
                    const foldername = getfoldername(ext);
                    const folderpath = path.join(dirpath, foldername);

                    if (!fs.existsSync(folderpath)) {
                        fs.mkdirSync(folderpath);
                    }
                    const destpath = path.join(folderpath, file);
                    fs.rename(fullpath, destpath, (err) => {
                        if (err) console.log('move error', err);
                        else console.log(`moved: ${file} to ${foldername}`);
                    })
                }
            })

        })
    })
}

organisedirectory( targetdir)