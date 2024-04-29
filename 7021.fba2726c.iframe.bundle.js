(self.webpackChunk_govuk_react_bjss_storybook=self.webpackChunk_govuk_react_bjss_storybook||[]).push([[7021],{"../../node_modules/lodash/_arrayEach.js":module=>{module.exports=function arrayEach(array,iteratee){for(var index=-1,length=null==array?0:array.length;++index<length&&!1!==iteratee(array[index],index,array););return array}},"../../node_modules/lodash/_arrayIncludes.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIndexOf=__webpack_require__("../../node_modules/lodash/_baseIndexOf.js");module.exports=function arrayIncludes(array,value){return!!(null==array?0:array.length)&&baseIndexOf(array,value,0)>-1}},"../../node_modules/lodash/_arrayIncludesWith.js":module=>{module.exports=function arrayIncludesWith(array,value,comparator){for(var index=-1,length=null==array?0:array.length;++index<length;)if(comparator(value,array[index]))return!0;return!1}},"../../node_modules/lodash/_assignValue.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseAssignValue=__webpack_require__("../../node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("../../node_modules/lodash/eq.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function assignValue(object,key,value){var objValue=object[key];hasOwnProperty.call(object,key)&&eq(objValue,value)&&(void 0!==value||key in object)||baseAssignValue(object,key,value)}},"../../node_modules/lodash/_baseAssign.js":(module,__unused_webpack_exports,__webpack_require__)=>{var copyObject=__webpack_require__("../../node_modules/lodash/_copyObject.js"),keys=__webpack_require__("../../node_modules/lodash/keys.js");module.exports=function baseAssign(object,source){return object&&copyObject(source,keys(source),object)}},"../../node_modules/lodash/_baseAssignIn.js":(module,__unused_webpack_exports,__webpack_require__)=>{var copyObject=__webpack_require__("../../node_modules/lodash/_copyObject.js"),keysIn=__webpack_require__("../../node_modules/lodash/keysIn.js");module.exports=function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object)}},"../../node_modules/lodash/_baseClone.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Stack=__webpack_require__("../../node_modules/lodash/_Stack.js"),arrayEach=__webpack_require__("../../node_modules/lodash/_arrayEach.js"),assignValue=__webpack_require__("../../node_modules/lodash/_assignValue.js"),baseAssign=__webpack_require__("../../node_modules/lodash/_baseAssign.js"),baseAssignIn=__webpack_require__("../../node_modules/lodash/_baseAssignIn.js"),cloneBuffer=__webpack_require__("../../node_modules/lodash/_cloneBuffer.js"),copyArray=__webpack_require__("../../node_modules/lodash/_copyArray.js"),copySymbols=__webpack_require__("../../node_modules/lodash/_copySymbols.js"),copySymbolsIn=__webpack_require__("../../node_modules/lodash/_copySymbolsIn.js"),getAllKeys=__webpack_require__("../../node_modules/lodash/_getAllKeys.js"),getAllKeysIn=__webpack_require__("../../node_modules/lodash/_getAllKeysIn.js"),getTag=__webpack_require__("../../node_modules/lodash/_getTag.js"),initCloneArray=__webpack_require__("../../node_modules/lodash/_initCloneArray.js"),initCloneByTag=__webpack_require__("../../node_modules/lodash/_initCloneByTag.js"),initCloneObject=__webpack_require__("../../node_modules/lodash/_initCloneObject.js"),isArray=__webpack_require__("../../node_modules/lodash/isArray.js"),isBuffer=__webpack_require__("../../node_modules/lodash/isBuffer.js"),isMap=__webpack_require__("../../node_modules/lodash/isMap.js"),isObject=__webpack_require__("../../node_modules/lodash/isObject.js"),isSet=__webpack_require__("../../node_modules/lodash/isSet.js"),keys=__webpack_require__("../../node_modules/lodash/keys.js"),keysIn=__webpack_require__("../../node_modules/lodash/keysIn.js"),cloneableTags={};cloneableTags["[object Arguments]"]=cloneableTags["[object Array]"]=cloneableTags["[object ArrayBuffer]"]=cloneableTags["[object DataView]"]=cloneableTags["[object Boolean]"]=cloneableTags["[object Date]"]=cloneableTags["[object Float32Array]"]=cloneableTags["[object Float64Array]"]=cloneableTags["[object Int8Array]"]=cloneableTags["[object Int16Array]"]=cloneableTags["[object Int32Array]"]=cloneableTags["[object Map]"]=cloneableTags["[object Number]"]=cloneableTags["[object Object]"]=cloneableTags["[object RegExp]"]=cloneableTags["[object Set]"]=cloneableTags["[object String]"]=cloneableTags["[object Symbol]"]=cloneableTags["[object Uint8Array]"]=cloneableTags["[object Uint8ClampedArray]"]=cloneableTags["[object Uint16Array]"]=cloneableTags["[object Uint32Array]"]=!0,cloneableTags["[object Error]"]=cloneableTags["[object Function]"]=cloneableTags["[object WeakMap]"]=!1,module.exports=function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=1&bitmask,isFlat=2&bitmask,isFull=4&bitmask;if(customizer&&(result=object?customizer(value,key,object,stack):customizer(value)),void 0!==result)return result;if(!isObject(value))return value;var isArr=isArray(value);if(isArr){if(result=initCloneArray(value),!isDeep)return copyArray(value,result)}else{var tag=getTag(value),isFunc="[object Function]"==tag||"[object GeneratorFunction]"==tag;if(isBuffer(value))return cloneBuffer(value,isDeep);if("[object Object]"==tag||"[object Arguments]"==tag||isFunc&&!object){if(result=isFlat||isFunc?{}:initCloneObject(value),!isDeep)return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value))}else{if(!cloneableTags[tag])return object?value:{};result=initCloneByTag(value,tag,isDeep)}}stack||(stack=new Stack);var stacked=stack.get(value);if(stacked)return stacked;stack.set(value,result),isSet(value)?value.forEach((function(subValue){result.add(baseClone(subValue,bitmask,customizer,subValue,value,stack))})):isMap(value)&&value.forEach((function(subValue,key){result.set(key,baseClone(subValue,bitmask,customizer,key,value,stack))}));var props=isArr?void 0:(isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys)(value);return arrayEach(props||value,(function(subValue,key){props&&(subValue=value[key=subValue]),assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack))})),result}},"../../node_modules/lodash/_baseCreate.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("../../node_modules/lodash/isObject.js"),objectCreate=Object.create,baseCreate=function(){function object(){}return function(proto){if(!isObject(proto))return{};if(objectCreate)return objectCreate(proto);object.prototype=proto;var result=new object;return object.prototype=void 0,result}}();module.exports=baseCreate},"../../node_modules/lodash/_baseFindIndex.js":module=>{module.exports=function baseFindIndex(array,predicate,fromIndex,fromRight){for(var length=array.length,index=fromIndex+(fromRight?1:-1);fromRight?index--:++index<length;)if(predicate(array[index],index,array))return index;return-1}},"../../node_modules/lodash/_baseIndexOf.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFindIndex=__webpack_require__("../../node_modules/lodash/_baseFindIndex.js"),baseIsNaN=__webpack_require__("../../node_modules/lodash/_baseIsNaN.js"),strictIndexOf=__webpack_require__("../../node_modules/lodash/_strictIndexOf.js");module.exports=function baseIndexOf(array,value,fromIndex){return value==value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex)}},"../../node_modules/lodash/_baseIsMap.js":(module,__unused_webpack_exports,__webpack_require__)=>{var getTag=__webpack_require__("../../node_modules/lodash/_getTag.js"),isObjectLike=__webpack_require__("../../node_modules/lodash/isObjectLike.js");module.exports=function baseIsMap(value){return isObjectLike(value)&&"[object Map]"==getTag(value)}},"../../node_modules/lodash/_baseIsNaN.js":module=>{module.exports=function baseIsNaN(value){return value!=value}},"../../node_modules/lodash/_baseIsSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var getTag=__webpack_require__("../../node_modules/lodash/_getTag.js"),isObjectLike=__webpack_require__("../../node_modules/lodash/isObjectLike.js");module.exports=function baseIsSet(value){return isObjectLike(value)&&"[object Set]"==getTag(value)}},"../../node_modules/lodash/_baseKeysIn.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("../../node_modules/lodash/isObject.js"),isPrototype=__webpack_require__("../../node_modules/lodash/_isPrototype.js"),nativeKeysIn=__webpack_require__("../../node_modules/lodash/_nativeKeysIn.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function baseKeysIn(object){if(!isObject(object))return nativeKeysIn(object);var isProto=isPrototype(object),result=[];for(var key in object)("constructor"!=key||!isProto&&hasOwnProperty.call(object,key))&&result.push(key);return result}},"../../node_modules/lodash/_basePickBy.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGet=__webpack_require__("../../node_modules/lodash/_baseGet.js"),baseSet=__webpack_require__("../../node_modules/lodash/_baseSet.js"),castPath=__webpack_require__("../../node_modules/lodash/_castPath.js");module.exports=function basePickBy(object,paths,predicate){for(var index=-1,length=paths.length,result={};++index<length;){var path=paths[index],value=baseGet(object,path);predicate(value,path)&&baseSet(result,castPath(path,object),value)}return result}},"../../node_modules/lodash/_baseSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var assignValue=__webpack_require__("../../node_modules/lodash/_assignValue.js"),castPath=__webpack_require__("../../node_modules/lodash/_castPath.js"),isIndex=__webpack_require__("../../node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("../../node_modules/lodash/isObject.js"),toKey=__webpack_require__("../../node_modules/lodash/_toKey.js");module.exports=function baseSet(object,path,value,customizer){if(!isObject(object))return object;for(var index=-1,length=(path=castPath(path,object)).length,lastIndex=length-1,nested=object;null!=nested&&++index<length;){var key=toKey(path[index]),newValue=value;if("__proto__"===key||"constructor"===key||"prototype"===key)return object;if(index!=lastIndex){var objValue=nested[key];void 0===(newValue=customizer?customizer(objValue,key,nested):void 0)&&(newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{})}assignValue(nested,key,newValue),nested=nested[key]}return object}},"../../node_modules/lodash/_baseUniq.js":(module,__unused_webpack_exports,__webpack_require__)=>{var SetCache=__webpack_require__("../../node_modules/lodash/_SetCache.js"),arrayIncludes=__webpack_require__("../../node_modules/lodash/_arrayIncludes.js"),arrayIncludesWith=__webpack_require__("../../node_modules/lodash/_arrayIncludesWith.js"),cacheHas=__webpack_require__("../../node_modules/lodash/_cacheHas.js"),createSet=__webpack_require__("../../node_modules/lodash/_createSet.js"),setToArray=__webpack_require__("../../node_modules/lodash/_setToArray.js");module.exports=function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=!0,result=[],seen=result;if(comparator)isCommon=!1,includes=arrayIncludesWith;else if(length>=200){var set=iteratee?null:createSet(array);if(set)return setToArray(set);isCommon=!1,includes=cacheHas,seen=new SetCache}else seen=iteratee?[]:result;outer:for(;++index<length;){var value=array[index],computed=iteratee?iteratee(value):value;if(value=comparator||0!==value?value:0,isCommon&&computed==computed){for(var seenIndex=seen.length;seenIndex--;)if(seen[seenIndex]===computed)continue outer;iteratee&&seen.push(computed),result.push(value)}else includes(seen,computed,comparator)||(seen!==result&&seen.push(computed),result.push(value))}return result}},"../../node_modules/lodash/_cloneArrayBuffer.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Uint8Array=__webpack_require__("../../node_modules/lodash/_Uint8Array.js");module.exports=function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);return new Uint8Array(result).set(new Uint8Array(arrayBuffer)),result}},"../../node_modules/lodash/_cloneBuffer.js":(module,exports,__webpack_require__)=>{module=__webpack_require__.nmd(module);var root=__webpack_require__("../../node_modules/lodash/_root.js"),freeExports=exports&&!exports.nodeType&&exports,freeModule=freeExports&&module&&!module.nodeType&&module,Buffer=freeModule&&freeModule.exports===freeExports?root.Buffer:void 0,allocUnsafe=Buffer?Buffer.allocUnsafe:void 0;module.exports=function cloneBuffer(buffer,isDeep){if(isDeep)return buffer.slice();var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);return buffer.copy(result),result}},"../../node_modules/lodash/_cloneDataView.js":(module,__unused_webpack_exports,__webpack_require__)=>{var cloneArrayBuffer=__webpack_require__("../../node_modules/lodash/_cloneArrayBuffer.js");module.exports=function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength)}},"../../node_modules/lodash/_cloneRegExp.js":module=>{var reFlags=/\w*$/;module.exports=function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));return result.lastIndex=regexp.lastIndex,result}},"../../node_modules/lodash/_cloneSymbol.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Symbol=__webpack_require__("../../node_modules/lodash/_Symbol.js"),symbolProto=Symbol?Symbol.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;module.exports=function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{}}},"../../node_modules/lodash/_cloneTypedArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var cloneArrayBuffer=__webpack_require__("../../node_modules/lodash/_cloneArrayBuffer.js");module.exports=function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length)}},"../../node_modules/lodash/_copyArray.js":module=>{module.exports=function copyArray(source,array){var index=-1,length=source.length;for(array||(array=Array(length));++index<length;)array[index]=source[index];return array}},"../../node_modules/lodash/_copyObject.js":(module,__unused_webpack_exports,__webpack_require__)=>{var assignValue=__webpack_require__("../../node_modules/lodash/_assignValue.js"),baseAssignValue=__webpack_require__("../../node_modules/lodash/_baseAssignValue.js");module.exports=function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});for(var index=-1,length=props.length;++index<length;){var key=props[index],newValue=customizer?customizer(object[key],source[key],key,object,source):void 0;void 0===newValue&&(newValue=source[key]),isNew?baseAssignValue(object,key,newValue):assignValue(object,key,newValue)}return object}},"../../node_modules/lodash/_copySymbols.js":(module,__unused_webpack_exports,__webpack_require__)=>{var copyObject=__webpack_require__("../../node_modules/lodash/_copyObject.js"),getSymbols=__webpack_require__("../../node_modules/lodash/_getSymbols.js");module.exports=function copySymbols(source,object){return copyObject(source,getSymbols(source),object)}},"../../node_modules/lodash/_copySymbolsIn.js":(module,__unused_webpack_exports,__webpack_require__)=>{var copyObject=__webpack_require__("../../node_modules/lodash/_copyObject.js"),getSymbolsIn=__webpack_require__("../../node_modules/lodash/_getSymbolsIn.js");module.exports=function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object)}},"../../node_modules/lodash/_createSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Set=__webpack_require__("../../node_modules/lodash/_Set.js"),noop=__webpack_require__("../../node_modules/lodash/noop.js"),setToArray=__webpack_require__("../../node_modules/lodash/_setToArray.js"),createSet=Set&&1/setToArray(new Set([,-0]))[1]==1/0?function(values){return new Set(values)}:noop;module.exports=createSet},"../../node_modules/lodash/_getAllKeysIn.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGetAllKeys=__webpack_require__("../../node_modules/lodash/_baseGetAllKeys.js"),getSymbolsIn=__webpack_require__("../../node_modules/lodash/_getSymbolsIn.js"),keysIn=__webpack_require__("../../node_modules/lodash/keysIn.js");module.exports=function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn)}},"../../node_modules/lodash/_getSymbolsIn.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayPush=__webpack_require__("../../node_modules/lodash/_arrayPush.js"),getPrototype=__webpack_require__("../../node_modules/lodash/_getPrototype.js"),getSymbols=__webpack_require__("../../node_modules/lodash/_getSymbols.js"),stubArray=__webpack_require__("../../node_modules/lodash/stubArray.js"),getSymbolsIn=Object.getOwnPropertySymbols?function(object){for(var result=[];object;)arrayPush(result,getSymbols(object)),object=getPrototype(object);return result}:stubArray;module.exports=getSymbolsIn},"../../node_modules/lodash/_initCloneArray.js":module=>{var hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function initCloneArray(array){var length=array.length,result=new array.constructor(length);return length&&"string"==typeof array[0]&&hasOwnProperty.call(array,"index")&&(result.index=array.index,result.input=array.input),result}},"../../node_modules/lodash/_initCloneByTag.js":(module,__unused_webpack_exports,__webpack_require__)=>{var cloneArrayBuffer=__webpack_require__("../../node_modules/lodash/_cloneArrayBuffer.js"),cloneDataView=__webpack_require__("../../node_modules/lodash/_cloneDataView.js"),cloneRegExp=__webpack_require__("../../node_modules/lodash/_cloneRegExp.js"),cloneSymbol=__webpack_require__("../../node_modules/lodash/_cloneSymbol.js"),cloneTypedArray=__webpack_require__("../../node_modules/lodash/_cloneTypedArray.js");module.exports=function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case"[object ArrayBuffer]":return cloneArrayBuffer(object);case"[object Boolean]":case"[object Date]":return new Ctor(+object);case"[object DataView]":return cloneDataView(object,isDeep);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return cloneTypedArray(object,isDeep);case"[object Map]":case"[object Set]":return new Ctor;case"[object Number]":case"[object String]":return new Ctor(object);case"[object RegExp]":return cloneRegExp(object);case"[object Symbol]":return cloneSymbol(object)}}},"../../node_modules/lodash/_initCloneObject.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseCreate=__webpack_require__("../../node_modules/lodash/_baseCreate.js"),getPrototype=__webpack_require__("../../node_modules/lodash/_getPrototype.js"),isPrototype=__webpack_require__("../../node_modules/lodash/_isPrototype.js");module.exports=function initCloneObject(object){return"function"!=typeof object.constructor||isPrototype(object)?{}:baseCreate(getPrototype(object))}},"../../node_modules/lodash/_nativeKeysIn.js":module=>{module.exports=function nativeKeysIn(object){var result=[];if(null!=object)for(var key in Object(object))result.push(key);return result}},"../../node_modules/lodash/_strictIndexOf.js":module=>{module.exports=function strictIndexOf(array,value,fromIndex){for(var index=fromIndex-1,length=array.length;++index<length;)if(array[index]===value)return index;return-1}},"../../node_modules/lodash/cloneDeep.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseClone=__webpack_require__("../../node_modules/lodash/_baseClone.js");module.exports=function cloneDeep(value){return baseClone(value,5)}},"../../node_modules/lodash/isMap.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIsMap=__webpack_require__("../../node_modules/lodash/_baseIsMap.js"),baseUnary=__webpack_require__("../../node_modules/lodash/_baseUnary.js"),nodeUtil=__webpack_require__("../../node_modules/lodash/_nodeUtil.js"),nodeIsMap=nodeUtil&&nodeUtil.isMap,isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;module.exports=isMap},"../../node_modules/lodash/isSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIsSet=__webpack_require__("../../node_modules/lodash/_baseIsSet.js"),baseUnary=__webpack_require__("../../node_modules/lodash/_baseUnary.js"),nodeUtil=__webpack_require__("../../node_modules/lodash/_nodeUtil.js"),nodeIsSet=nodeUtil&&nodeUtil.isSet,isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;module.exports=isSet},"../../node_modules/lodash/keysIn.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayLikeKeys=__webpack_require__("../../node_modules/lodash/_arrayLikeKeys.js"),baseKeysIn=__webpack_require__("../../node_modules/lodash/_baseKeysIn.js"),isArrayLike=__webpack_require__("../../node_modules/lodash/isArrayLike.js");module.exports=function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,!0):baseKeysIn(object)}},"../../node_modules/lodash/noop.js":module=>{module.exports=function noop(){}},"../../node_modules/lodash/uniq.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseUniq=__webpack_require__("../../node_modules/lodash/_baseUniq.js");module.exports=function uniq(array){return array&&array.length?baseUniq(array):[]}}}]);