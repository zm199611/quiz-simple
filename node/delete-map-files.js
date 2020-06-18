/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p
 * @return {void}
 */
const deleteMapFiles = (p) => {
  // 请实现……
};

// * ------------------------------------------------

// * playground 文件夹的目录结构如下：

/*
playground
├── index.html
├── index.js
├── index.js.map
└── static
    ├── main.js
    ├── main.js.map
    ├── style.css
    └── style.css.map
*/

// * 调用 deleteMapFiles('./playground') 后
// * 删除所有 map 文件，最终结构如下：

/*
playground
├── index.html
├── index.js
└── static
    ├── main.js
    └── style.css
*/
