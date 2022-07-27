const buildmessage=`built at Wed Jul 27 03:58:55 2022`
const page_foot=`Powered by <a href='https://github.com/JuliaRoadmap/DoctreePages.jl'>DoctreePages.jl</a> and its dependencies.`
const tar_css=`css`
const filesuffix=`.html`
const menu=['',[`meta/Meta`,`about/关于`,`guide/使用指南`,`dimensions/层级`,],[`low/底层语法`,`existence/存在性`,`syntaxtree/语法树`,`binding/绑定`,`functions/函数`,],[`core/内置内容`,`types/类型`,`logics/逻辑`,`forall/任意`,`exists/存在`,`tuples/元组`,`namedtuples/具名元组`,`sets/集合`,],[`base/Base内容`,],[`stdlib/标准库`,`about/关于`,],]
const configpaths=        {'headroom': 'https://cdnjs.cloudflare.com/ajax/libs/headroom/0.10.3/headroom.min',
		'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min',
		'headroom-jquery': 'https://cdnjs.cloudflare.com/ajax/libs/headroom/0.10.3/jQuery.headroom.min',
		'katex': 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min',
		'highlight': 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min',
        'hljs-julia': 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/languages/julia.min',
		'hljs-julia-repl': 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/languages/julia-repl.min',
        'hljs-line-numbers': 'https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min'}
        
const configshim=        {"hljs-julia-repl": { "deps": ["highlight"] },
		"hljs-julia": {"deps": ["highlight"]},
        "hljs-line-numbers": { "deps": ["highlight"]},
		"headroom-jquery": { "deps": [ "jquery", "headroom" ]}}
        
const hljs_languages=['julia', 'julia-repl']
const main_requirement=['jquery', 'highlight', 'hljs-julia', 'hljs-julia-repl', 'hljs-line-numbers']
