/**
 * Created by JetBrains WebStorm.
 * User: Patrick
 * Date: 21.09.11
 * Time: 12:32
 * To change this template use File | Settings | File Templates.
 */
function require(namespace, definition){
	var names = namespace.split(".");

	var current = window;

	for(var i = 0; i < names.length; i++) {
		current[names[i]] = current[names[i]] || {};
		current = current[names[i]];
	}

	if(definition)
		definition(current);

	return current;
}

function fn(namespace, name, fn)
{
	(function(my, $, undefined){
		fn(my);
	}(namespace[name] = namespace[name] || {}, jQuery));
}