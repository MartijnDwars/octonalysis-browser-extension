# OctoAnalysis

OctoAnalysis brings static analysis to GitHub, allowing you to resolve references as if you were using your IDE.

## How Does It Work?

Our server computes and caches static analysis results for specific GitHub projects. The browser extension retrieves the analysis data and updates the document such that reference resolution becomes possible.

## Related Work

[OctoLinker](https://github.com/OctoLinker/browser-extension) helps with navigating between project dependencies. For example, when Bower is used for dependency management, OctoLinker analyzes bower.json and adds links to the dependencies.

## Future Work

Analysing a project in the browser is not possible. First, because our tools (\*) do not run in the browser (yet). Second, our tools (\*) are probably not performant enough to be run in a browser. Furthermore, caching the analysis on the server makes sense, because many people will view the same file, and doing these computations client-side would be a waste of time.

(\* = both the JSGLR parser and the constraint solver are notoriously slow)
