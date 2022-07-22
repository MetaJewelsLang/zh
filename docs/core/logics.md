# 逻辑
内置类型 `Bool` 的唯二实例是 `true` 与 `false`

## 函数
以下唯一方法是 `(::Bool, ::Bool)`
* `∧`/`and` 表明「合取」
* `⇒`/`=>`/`implies`/`ifthen` 表明「蕴含」

## 公理
与化简，原型为
```jl
@axiom_mv @forall simplify_and(a::Bool, b::Bool) begin
	a
end
```

未完待续
