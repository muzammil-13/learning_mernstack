const path=require('path')

const joinedPath = path.join('/folder1', 'folder2', 'file.txt');
console.log(joinedPath); // Output: /folder1/folder2/file.txt

const resolvedPath = path.resolve('folder1', 'folder2', 'file.txt');
console.log(resolvedPath); // Output: /absolute/path/to/folder1/folder2/file.txt

const dirName = path.dirname('/folder1/folder2/file.txt');
console.log(dirName); // Output: /folder1/folder2

const baseName = path.basename('/folder1/folder2/file.txt');
console.log(baseName); // Output: file.txt

const extName = path.extname('/folder1/folder2/file.txt');
console.log(extName); // Output: .txt

const parsedPath = path.parse('/folder1/folder2/file.txt');
console.log(parsedPath);
// Output:
// {
//   root: '/',
//   dir: '/folder1/folder2',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

const formattedPath = path.format({
    root: '/',
    dir: '/folder1/folder2',
    base: 'file.txt'
  });
  console.log(formattedPath); // Output: /folder1/folder2/file.txt