---
title: GoAPI
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.17"
---

# GoAPI

> v1.0.0

Base URLs:

- <a href="">测试环境: </a>

# 音乐解析类

## GET 歌曲信息

GET /music/song

### 请求参数

| 名称   | 位置  | 类型   | 必选 | 说明              |
| ------ | ----- | ------ | ---- | ----------------- |
| id     | query | string | 是   | 歌曲 id           |
| server | query | string | 是   | 厂商标识[ netease |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## GET 播放地址

GET /music/url

### 请求参数

| 名称   | 位置  | 类型   | 必选 | 说明              |
| ------ | ----- | ------ | ---- | ----------------- |
| id     | query | string | 否   | 歌曲 id           |
| server | query | string | 否   | 厂商标识[ netease |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## GET 歌单列表

GET /music/playlist

### 请求参数

| 名称   | 位置  | 类型   | 必选 | 说明              |
| ------ | ----- | ------ | ---- | ----------------- |
| id     | query | string | 否   | 歌单 id           |
| server | query | string | 否   | 厂商标识[ netease |

#### 详细说明

**id**: 歌单 id
[ 网易云 id=19723756，云音乐飙升榜
id=3779629，云音乐新歌榜
id=3778678，云音乐热歌榜
id=2250011882，抖音排行榜]

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## GET 歌曲搜索

GET /music/search

> Body 请求参数

```yaml
{}
```

### 请求参数

| 名称   | 位置  | 类型   | 必选 | 说明                 |
| ------ | ----- | ------ | ---- | -------------------- |
| s      | query | string | 是   | 搜索关键词           |
| type   | query | string | 是   | 搜索类型 [ 歌曲=1    |
| limit  | query | string | 是   | 歌曲数量             |
| offset | query | string | 是   | 偏移量               |
| server | query | string | 是   | 厂商标识 [ netease ] |
| body   | body  | object | 否   | none                 |

#### 详细说明

**type**: 搜索类型 [ 歌曲=1 | 专辑=10 | 歌手=100 | 歌单=1000 | 用户=1002 | mv=1004 | 歌词=1006
| 主播电台=1009 ]

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## GET 歌曲评论

GET /music/comments

### 请求参数

| 名称   | 位置  | 类型   | 必选 | 说明                   |
| ------ | ----- | ------ | ---- | ---------------------- |
| id     | query | string | 是   | 歌曲 id                |
| server | query | string | 是   | 厂商标识[ netease      |
| limit  | query | string | 是   | 评论数目（qq 最多 25） |
| offset | query | string | 是   | 偏移量                 |
| ctype  | query | string | 否   | 评论类型[ 普通评论=0   |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## GET 歌词信息

GET /music/lyric

### 请求参数

| 名称   | 位置  | 类型   | 必选 | 说明              |
| ------ | ----- | ------ | ---- | ----------------- |
| id     | query | string | 是   | 歌曲 id           |
| server | query | string | 是   | 厂商标识[ netease |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## GET MV 信息

GET /music/mv

### 请求参数

| 名称   | 位置  | 类型   | 必选 | 说明              |
| ------ | ----- | ------ | ---- | ----------------- |
| id     | query | string | 是   | mv id             |
| server | query | string | 是   | 厂商标识[ netease |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## GET 用户信息

GET /music/user

### 请求参数

| 名称   | 位置  | 类型   | 必选 | 说明                |
| ------ | ----- | ------ | ---- | ------------------- |
| id     | query | string | 是   | 用户 id             |
| server | query | string | 是   | 厂商标识[ netease ] |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

# 视频解析类

## GET 抖音解析

GET /video/douyin

### 请求参数

| 名称 | 位置  | 类型   | 必选 | 说明            |
| ---- | ----- | ------ | ---- | --------------- |
| id   | query | string | 否   | 抖音分享链接 id |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

# 数据模型
