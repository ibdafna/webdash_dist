var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="attrs.data";var REMOTE_PACKAGE_BASE="attrs.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","attrs-20.3.0-py3.8.egg-info",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","attr",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:93159,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1145,2295,3532,4926,6231,7461,8715,9765,10897,12162,13366,14695,15976,17132,18375,19483,20581,22063,23443,24769,26179,27400,28703,29770,30963,32094,33011,34172,35354,36586,37514,38524,39901,41341,42734,44176,45610,47069,48294,49381,50361,51575,52735,53985,54896,56190,57527,58677,59733,60846,61751,62374,63152,64503,65662,66904,68037,69001,70368,71741,72882,74069,75432,75982,76557,77015,77953,79177,80551,81222,82301,83282,84340,85712,87038,88246,88988,90380,91433,92691],sizes:[1145,1150,1237,1394,1305,1230,1254,1050,1132,1265,1204,1329,1281,1156,1243,1108,1098,1482,1380,1326,1410,1221,1303,1067,1193,1131,917,1161,1182,1232,928,1010,1377,1440,1393,1442,1434,1459,1225,1087,980,1214,1160,1250,911,1294,1337,1150,1056,1113,905,623,778,1351,1159,1242,1133,964,1367,1373,1141,1187,1363,550,575,458,938,1224,1374,671,1079,981,1058,1372,1326,1208,742,1392,1053,1258,468],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_attrs.data")}Module["addRunDependency"]("datafile_attrs.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/attrs-20.3.0-py3.8.egg-info/top_level.txt",start:0,end:5,audio:0},{filename:"/lib/python3.8/site-packages/attrs-20.3.0-py3.8.egg-info/dependency_links.txt",start:5,end:6,audio:0},{filename:"/lib/python3.8/site-packages/attrs-20.3.0-py3.8.egg-info/not-zip-safe",start:6,end:7,audio:0},{filename:"/lib/python3.8/site-packages/attrs-20.3.0-py3.8.egg-info/SOURCES.txt",start:7,end:1852,audio:0},{filename:"/lib/python3.8/site-packages/attrs-20.3.0-py3.8.egg-info/requires.txt",start:1852,end:2165,audio:0},{filename:"/lib/python3.8/site-packages/attrs-20.3.0-py3.8.egg-info/PKG-INFO",start:2165,end:12720,audio:0},{filename:"/lib/python3.8/site-packages/attr/converters.py",start:12720,end:14934,audio:0},{filename:"/lib/python3.8/site-packages/attr/exceptions.py",start:14934,end:16884,audio:0},{filename:"/lib/python3.8/site-packages/attr/validators.pyi",start:16884,end:18752,audio:0},{filename:"/lib/python3.8/site-packages/attr/_next_gen.py",start:18752,end:22890,audio:0},{filename:"/lib/python3.8/site-packages/attr/validators.py",start:22890,end:34387,audio:0},{filename:"/lib/python3.8/site-packages/attr/setters.pyi",start:34387,end:34954,audio:0},{filename:"/lib/python3.8/site-packages/attr/_make.py",start:34954,end:123267,audio:0},{filename:"/lib/python3.8/site-packages/attr/filters.pyi",start:123267,end:123481,audio:0},{filename:"/lib/python3.8/site-packages/attr/setters.py",start:123481,end:124915,audio:0},{filename:"/lib/python3.8/site-packages/attr/converters.pyi",start:124915,end:125295,audio:0},{filename:"/lib/python3.8/site-packages/attr/__init__.pyi",start:125295,end:138281,audio:0},{filename:"/lib/python3.8/site-packages/attr/exceptions.pyi",start:138281,end:138820,audio:0},{filename:"/lib/python3.8/site-packages/attr/_config.py",start:138820,end:139334,audio:0},{filename:"/lib/python3.8/site-packages/attr/_funcs.py",start:139334,end:152415,audio:0},{filename:"/lib/python3.8/site-packages/attr/_version_info.py",start:152415,end:154577,audio:0},{filename:"/lib/python3.8/site-packages/attr/_version_info.pyi",start:154577,end:154786,audio:0},{filename:"/lib/python3.8/site-packages/attr/_compat.py",start:154786,end:162094,audio:0},{filename:"/lib/python3.8/site-packages/attr/__init__.py",start:162094,end:163662,audio:0},{filename:"/lib/python3.8/site-packages/attr/py.typed",start:163662,end:163662,audio:0},{filename:"/lib/python3.8/site-packages/attr/filters.py",start:163662,end:164760,audio:0}],remote_package_size:97255,package_uuid:"7fa642b1-7cf3-4c1b-a967-1c2810c6879e"})})();