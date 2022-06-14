# my-vite-app

基于 vite 的 react app

## [demo 展示](https://zdjojo.github.io/my-vite-app)

## **如何将 master 分支下的 dist 文件夹推送到 gh-pages 分支**

### 第一步

/dist 目录需要被 git 记录，于是后面我们才可以用它作为子树（subtree），因此 /dist 不能被 .gitignore 规则排除

### 第二步

git subtree push --prefix dist origin gh-pages

#### 其中：

dist：代表子树所在的目录名

origin： remote name

gh-pages：目标分支名称

### <font color='#ff4d4f'>**注意点:**</font>

1.  `antd ^4.21.0` 分布组件不兼容 `react 18`， 打包时会报错。如何解决的话，可以将 `tsconfig.json` 文件中的 `skipLibCheck` 改为 `true`

```json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```
