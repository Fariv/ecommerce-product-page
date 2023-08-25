export default function filenameparser(selectedimage) {

    let filename = selectedimage.replace(/^.*[\\\/]/, '');
    let splitted = filename.split('.');
    let extension = splitted.pop();
    let basename = splitted.shift();

    return {
        filename,
        extension,
        basename
    }
}