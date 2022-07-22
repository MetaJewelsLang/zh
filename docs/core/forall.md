# 任意
## 函数
`forall` 接受一个谓词作为参数，其必须映射到 `Bool` ，表示「任意」

## 宏
`@forall` 原型是
```jl
macro forall(x, expr::Expr)
	return :(forall($x -> $expr))
end
macro forall(tup::Tuple, expr::Expr)
	return :(forall($(tup...) -> $expr))
end
```
