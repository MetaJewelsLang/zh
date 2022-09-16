# 关于
## 项目简介
本项目希望改变现有的数学形式模型与部分内容，使其在保持严密性同时更具有可扩展性与易开发性，并将其延伸到一切自然科学及一切可规范化的领域。

## 特性
* 类型系统
* 宏系统
	* 辅助证明系统
* 模块管理系统

## 用途
* 计算机证明
* 证明正确性检验
* 人工智能训练数据与新算法创建
* 完善标准化方式
* 再写就像圈钱的了（

## 状态
项目当前处于 0.1.0 前状态

## 图景/设计样例
```jl
struct RealNumber
	field
	data
	RealNumber(field, data) =
		has_lowest_supbound(field) &&
		is_ordered_field(field, +, *, zero(field), one(field)) &&
		wider_in(ℚ, field) &&
		data in field ? new(field, data) : void
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
[1] love(from::FreeWill, to::Any, judge::Will) in FreeWills.Common.General at general.mjl:23
```
