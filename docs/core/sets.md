# 集合
集合类型名为 `Set`

## 相关函数
`===` 原型为（这实际是外延公理的调整）
```jl
===(a::Set, b::Set) = forall(x -> (x∈a => x∈b))
```

`∈`/`in` 表明「属于」，唯一方法是 `(::Any, ::Set)`

`Set(p::Lambda)` 构建一个包含所有满足条件 `p` 元素的集合，它的存在性需要额外证明，且 `p` 必须从 `Set` 映射到 `Bool`，例如 `Set(x -> x===∅)` 可以创建 $\{\empty\}$

进一步地，定义
```jl
function broadcast(f::Lambda, set::Set)
	Set() do x
		exists(y -> and(y∈set, f(y)===x))
	end
end

Set(p::Lambda, ext::Set) = broadcast(ext, Set(p))

function enumerate(data)
	Set(x -> x∈data)
end

enum(args...) = enumerate(args)
```

## 相关公理
空集公理，原型为
```jl
@axiom empty_set() begin
	exists(Set(_ -> false))
end
```

配对公理，原型为
```jl
@axiom @forall pair_set(a, b) begin
	exists(c -> forall(d -> (d∈c => or(d===a, d===b))))
end
```

并集公理，原型为
```jl
@axiom @forall union_set(a, b) begin
	exists(c -> forall(d -> (d∈c => or(d∈a, d∈b))))
end
```

未完待续

## 相关常量
```jl
const ∅ = Set(_ -> false)
@proof emptyset_exists begin
	@ax_empty_set
	@beta ∅ @expr"1# 1"
	@QED
end
```
