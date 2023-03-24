import os
import glob

# 获取当前目录下所有的md文件
md_files = glob.glob('*.md')

# 或者指定目录下的md文件
# md_files = glob.glob('/path/to/dir/*.md')

# 存储所有的md文件名到列表中
md_file_list = []
for file in md_files:
    md_file_list.append("/linux/" + file)

# 输出所有的md文件名
print(md_file_list)