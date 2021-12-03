# my-vite-app
基于 vite 的 react app

## 如何将master 分支下的 dist 文件夹推送到 gh-pages 分支
### 第一步

/dist 目录需要被 git 记录，于是后面我们才可以用它作为子树（subtree），因此 /dist 不能被 .gitignore 规则排除

### 第二步

git subtree push --prefix dist origin gh-pages

#### 其中：

dist：代表子树所在的目录名

origin： remote name

gh-pages：目标分支名称