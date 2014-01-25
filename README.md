angular-no-bind
===============

Simple directive to use when you just want to bind a value once, i.e. render the value and then remove watch.

This can be a performance boost in an ng-repeat with many items, where you just want to render the value and don't care about two-way data binding.

#example
Use it as an attribute
```
<div ng-repeat="item in manyItems" no-bind>
	{{item.someText}}
</div>
```

Use it as a class
```
<div ng-repeat="item in manyItems" class="no-bind">
	{{item.someText}}
</div>
```