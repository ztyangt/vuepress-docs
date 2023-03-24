---
title: git 使用
description: git 使用文档
---

[[toc]]

# # git 常用命令。

## 创建 SSH Key

```powershell
 ssh-keygen -t rsa -C "youremail@example.com"
```

## 配置用户信息

```powershell
 git config --global user.name "Your Name"
 git config --global user.email "email@example.com"
```

## 仓库

> 在当前目录新建一个 Git 代码库

```powershell
 git init
```

> 新建一个目录，将其初始化为 Git 代码库

```powershell
 git init [project-name]
```

> 下载一个项目和它的整个代码历史

```powershell
 git clone [url]
```

## 增加/删除文件

> 添加指定文件到暂存区

```powershell
 git add [file1] [file2] ...
```

> 添加指定目录到暂存区，包括子目录

```powershell
 git add [dir]
```

> 添加当前目录的所有文件到暂存区

```powershell
 git add .
```

> 添加每个变化前，都会要求确认
> 对于同一个文件的多处变化，可以实现分次提交

```powershell
 git add -p
```

> 删除工作区文件，并且将这次删除放入暂存区

```powershell
 git rm [file1] [file2] ...
```

> 停止追踪指定文件，但该文件会保留在工作区

```powershell
 git rm --cached [file]
```

> 改名文件，并且将这个改名放入暂存区

```powershell
 git mv [file-original] [file-renamed]
```

## 代码提交

> 提交暂存区到仓库区

```powershell
 git commit -m [message]
```

> 提交工作区自上次 commit 之后的变化，直接到仓库区

```powershell
 git commit -a
```

> 提交时显示所有 diff 信息

```powershell
 git commit -v
```

> 使用一次新的 commit，替代上一次提交
> 如果代码没有任何新变化，则用来改写上一次 commit 的提交信息

```powershell
 git commit --amend -m [message]
```

> 重做上一次 commit，并包括指定文件的新变化

```powershell
 git commit --amend [file1] [file2] ...
```

## 查看信息

> 显示有变更的文件

```powershell
 git status
```

> 显示当前分支的版本历史

```powershell
 git log
```

> 显示 commit 历史，以及每次 commit 发生变更的文件

```powershell
 git log --stat
```

> 搜索提交历史，根据关键词

```powershell
 git log -S [keyword]
```

> 显示某个 commit 之后的所有变动，每个 commit 占据一行

```powershell
 git log [tag] HEAD --pretty=format:%s
```

> 显示某个 commit 之后的所有变动，其"提交说明"必须符合搜索条件

```powershell
 git log [tag] HEAD --grep feature
```

> 显示某个文件的版本历史，包括文件改名

```powershell
 git log --follow [file]
```

> 显示指定文件相关的每一次 diff

```powershell
 git log -p [file]
```

> 显示过去 5 次提交

```powershell
 git log -5 --pretty --oneline
```

> 显示所有提交过的用户，按提交次数排序

```powershell
 git shortlog -sn
```

> 显示指定文件是什么人在什么时间修改过

```powershell
 git blame [file]
```

> 显示暂存区和工作区的差异

```powershell
 git diff
```

> 显示暂存区和上一个 commit 的差异

```powershell
 git diff --cached [file]
```

> 显示工作区与当前分支最新 commit 之间的差异

```powershell
 git diff HEAD
```

> 显示两次提交之间的差异

```powershell
 git diff [first-branch]...[second-branch]
```

> 显示今天你写了多少行代码

```powershell
 git diff --shortstat "@{0 day ago}"
```

> 显示某次提交的元数据和内容变化

```powershell
 git show [commit]
```

> 显示某次提交发生变化的文件

```powershell
 git show --name-only [commit]
```

> 显示某次提交时，某个文件的内容

```powershell
 git show [commit]:[filename]
```

> 显示当前分支的最近几次提交

```powershell
 git reflog
```

## 分支

> 列出所有本地分支

```powershell
 git branch
```

> 列出所有远程分支

```powershell
 git branch -r
```

> 列出所有本地分支和远程分支

```powershell
 git branch -a
```

> 新建一个分支，但依然停留在当前分支

```powershell
 git branch [branch-name]
```

> 新建一个分支，并切换到该分支

```powershell
 git checkout -b [branch]
```

> 新建一个分支，指向指定 commit

```powershell
 git branch [branch] [commit]
```

> 新建一个分支，与指定的远程分支建立追踪关系

```powershell
 git branch --track [branch] [remote-branch]
```

> 切换到指定分支，并更新工作区

```powershell
 git checkout [branch-name]
```

> 切换到上一个分支

```powershell
 git checkout -
```

> 建立追踪关系，在现有分支与指定的远程分支之间

```powershell
 git branch --set-upstream [branch] [remote-branch]
```

> 合并指定分支到当前分支

```powershell
 git merge [branch]
```

> 选择一个 commit，合并进当前分支

```powershell
 git cherry-pick [commit]
```

> 删除分支

```powershell
 git branch -d [branch-name]
```

> 删除远程分支

```powershell
 git push origin --delete [branch-name]
```

## 标签

> 列出所有 tag

```powershell
 git tag
```

> 新建一个 tag 在当前 commit

```powershell
 git tag [tag]
```

> 新建一个 tag 在指定 commit

```powershell
 git tag [tag] [commit]
```

> 删除本地 tag

```powershell
 git tag -d [tag]
```

> 删除远程 tag

```powershell
 git push origin :refs/tags/[tagName]
```

> 查看 tag 信息

```powershell
 git show [tag]
```

> 提交指定 tag

```powershell
 git push [remote] [tag]
```

> 提交所有 tag

```powershell
 git push [remote] --tags
```

> 新建一个分支，指向某个 tag

```powershell
 git checkout -b [branch] [tag]
```

## 远程同步

> 下载远程仓库的所有变动

```powershell
 git fetch [remote]
```

> 显示所有远程仓库

```powershell
 git remote -v
```

> 显示某个远程仓库的信息

```powershell
 git remote show [remote]
```

> 增加一个新的远程仓库，并命名

```powershell
 git remote add [shortname] [url]
```

> 取回远程仓库的变化，并与本地分支合并

```powershell
 git pull [remote] [branch]
```

> 允许不相关历史提交,并强制合并

```powershell
 git pull origin master --allow-unrelated-histories
```

> 上传本地指定分支到远程仓库

```powershell
 git push [remote] [branch]
```

> 强行推送当前分支到远程仓库，即使有冲突

```powershell
 git push [remote] --force
```

> 推送所有分支到远程仓库

```powershell
 git push [remote] --all
```

## 撤销

> 恢复暂存区的指定文件到工作区

```powershell
 git checkout [file]
```

> 恢复某个 commit 的指定文件到暂存区和工作区

```powershell
 git checkout [commit] [file]
```

> 恢复暂存区的所有文件到工作区

```powershell
 git checkout .
```

> 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变

```powershell
 git reset [file]
```

> 重置暂存区与工作区，与上一次 commit 保持一致

```powershell
 git reset --hard
```

> 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变

```powershell
 git reset [commit]
```

> 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致

```powershell
 git reset --hard [commit]
```

> 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变

```powershell
 git reset --keep [commit]
```

> 新建一个 commit，用来撤销指定 commit
> 后者的所有变化都将被前者抵消，并且应用到当前分支

```powershell
 git revert [commit]
```

> 暂时将未提交的变化移除，稍后再移入

```powershell
 git stash
 git stash pop
```

## 忽略文件配置（.gitignore)

1、配置语法:

> 以斜杠“/”开头表示目录；
>
> 以星号“\*”通配多个字符；
>
> 以问号“?”通配单个字符
>
> 以方括号“[]”包含单个字符的匹配列表；
>
> 以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；

此外，git 对于 .ignore 配置文件是按行从上到下进行规则匹配的，意味着如果前面的规则匹配的范围更大，则后面的规则将不会生效；

2、示例：

（1）规则：fd1/\*
　　　　 说明：忽略目录 fd1 下的全部内容；注意，不管是根目录下的 /fd1/ 目录，还是某个子目录 /child/fd1/ 目录，都会被忽略；

（2）规则：/fd1/\*
　　　　 说明：忽略根目录下的 /fd1/ 目录的全部内容；

（3）规则：

/\*
!.gitignore
!/fw/bin/
!/fw/sf/

说明：忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 /fw/bin/ 和 /fw/sf/ 目录；
