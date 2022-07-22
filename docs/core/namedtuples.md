# 具名元组
具名元组类型名为 `NamedTuple`

## 相关函数
* `getfield(nt::NamedTuple, s::Symbol)` 获取 `nt` 的键 `s`，若键不存在则抛出 错误

## 相关公理
* `@ax_ntf(nt::NamedTuple, s::Symbol, v)` 判定 `getfield(nt, s) === v`
