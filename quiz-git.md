# Git 的使用

## Q1

Git 是一个广泛使用的版本管理工具，适合团队开发。  
如果你用过 Git，那么请回忆一下，  
我们在确认开发需求之后，从写代码到提交进团队的代码仓库。  
这个过程中大概会用到哪几条命令？

请直接在这里作答。

答：1. 首先是新建分支 git bash
    2. 然后是切换到分支 git checkout 分支名
    3. 然后自己完成代码，提交代码  git add .或 git add 指定目录或文件名
    4. 然后提交说明  git commit -m '本次提交说明'
    5. 然后是提交代码到仓库 git push origin 目标分支
    6. 暂存分支 git stash
    7. 查看暂存分支 git stash list
    8. 查看日志 git log
    9. 设置提交编号方便回滚  git reset  --hard 本次编号
    10. 查看分支  git branch
    11. 拉取远程代码  git clone 项目地址

## Q2

你知道和用过哪些 Git 的方法论和技巧

答：
方法论:git属于分布式版本控制软件，没有中央服务器，自己的电脑就是服务器，只需要pull和push就能看到别人的修改，同时也能共同协作
技巧：
首先是代码提交三板斧：git add .   git commmit -m '说明'   git push origin master
如果是项目对应新仓库，则需要使用git remote命令。然后是合作开发项目的话必须使用到的分支命令，以及日常开发想要查看的提交命令 git log 查看日志
