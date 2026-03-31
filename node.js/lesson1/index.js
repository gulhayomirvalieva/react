// const path = require("path");
// console.log(__filename);

// const pathObj = path.normalize(__filename);
// console.log(pathObj);

// // | Maydon | Ma’nosi                               |
// // | ------ | ------------------------------------- |
// // | `root` | Disk yo‘li (Windowsda: `C:/`)         |
// // | `dir`  | To‘liq papka yo‘li                    |
// // | `base` | Fayl nomi va kengaytmasi (`index.js`) |
// // | `ext`  | Fayl kengaytmasi (`.js`)              |
// // | `name` | Faqat fayl nomi (`index`)             |

const os = require('os');
const { use } = require('react');
const freeMem = os.freemem()
const userInfo = os.userInfo()
console.log(`bosh xotira miqdor:${freeMem} bayt`);
 console.log(`foydalanuvchi haqida malumot: ${userInfo}`);
 