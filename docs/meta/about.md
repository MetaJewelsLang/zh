# 关于
## 项目简介
本项目希望改变现有的数学形式模型与部分内容，使其在保持严密性同时更具有可扩展性与易开发性，并将其延伸到一切自然科学及一切可规范化的领域

## 特性
* 类型系统
* 抽象系统
* 宏系统
* 模块管理系统

## 用途
* 人工智能训练数据与新算法创建
* 完善法律
* 完善标准化方式
* *有助于*去中心化
* etc.

## 状态
项目当前处于 0.1.0 状态，1.0.0 正式发布预计将在15年内完成

## 图景/设计样例
```jl
@category RealNumber(r::Range) begin
	@rule ofcat(cat"WithUpperBound", r)
	@rule ofcat(cat"OrderedField", r, +, *)
	@rule (@forallin n ℚ n∈r)
end

struct DedekindCutRealNumber
	lower::Set
	higher::Set
	function DedekindCutRealNumber(lower::Set, higher::Set)
		if lower⊆ℚ && higher⊆ℚ && union(lower, higher)==ℚ && !isempty(lower) && !isempty(higher) && max(lower)<min(higher)
			return new(lower, higher)
		else
			error("...")
		end
	end
end
```

```jl
mjl> love
love (generic function with 1 method)

mjl> methods(love)
# 1 method for generic function "love":
[1] love(from::FreeWill, to::Any, judge::Will) in Human.General at general.mjl:23
```

## 参考阅读
- Julia Type Theory
- Haskell Category Theory
