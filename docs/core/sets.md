# 集合
集合类型名为 `Set`

## 相关函数
`===` 原型为（这实际是外延公理的调整）
```jl
===(a::Set, b::Set) = forall(x -> (x∈a => x∈b))
```

`∈`/`in` 表明「属于」，唯一方法是 `(::Any, ::Set)`

`Set(p::Predicate)` 构建一个满足条件 `p` 的集合，它的存在性需要额外证明，且 `p` 必须从 `Set` 映射到 `Bool`

## 相关宏
`@enum` 能够通过枚举构造集合

## 相关公理
空集公理，原型为
```jl
@axiom empty_set() begin
	exists(emp -> forall(x -> !(x∈emp)))
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
const ∅ = @getexist axiom_emptyset
```
