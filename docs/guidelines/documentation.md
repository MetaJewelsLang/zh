# 文档
如果你希望给某个东西添加文档，可以在前面添加字符串，并使用 TOML 格式，其中第一级键是 MIME 类型的后半段（前半段始终为 `text`），如 `plain`；第二级键是 2 个字母表示的语言，如 `zh`、`en`。

例如：
```jl
"""
plain.zh = "百分号"
plain.en = "percent symbol"
"""
%(n) = n/100
```
