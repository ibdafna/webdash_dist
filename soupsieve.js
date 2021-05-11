var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="soupsieve.data";var REMOTE_PACKAGE_BASE="soupsieve.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","soupsieve-2.2.1-py3.8.egg-info",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","soupsieve",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:65222,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,920,1612,2910,4367,5447,6774,7912,9e3,10202,11358,12354,13174,14505,15816,17034,18279,19561,20862,21785,22716,23753,24704,25801,26581,27352,28261,29402,30386,31291,32085,32711,33800,34815,35679,36580,37832,38862,39887,40791,41986,43057,43636,44772,45969,47136,48154,48972,49808,50655,51496,52403,53386,54440,55453,56389,57469,58470,59613,60390,61290,62474,63940,64946],sizes:[920,692,1298,1457,1080,1327,1138,1088,1202,1156,996,820,1331,1311,1218,1245,1282,1301,923,931,1037,951,1097,780,771,909,1141,984,905,794,626,1089,1015,864,901,1252,1030,1025,904,1195,1071,579,1136,1197,1167,1018,818,836,847,841,907,983,1054,1013,936,1080,1001,1143,777,900,1184,1466,1006,276],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_soupsieve.data")}Module["addRunDependency"]("datafile_soupsieve.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/soupsieve-2.2.1-py3.8.egg-info/top_level.txt",start:0,end:10,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve-2.2.1-py3.8.egg-info/dependency_links.txt",start:10,end:11,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve-2.2.1-py3.8.egg-info/SOURCES.txt",start:11,end:4016,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve-2.2.1-py3.8.egg-info/requires.txt",start:4016,end:4071,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve-2.2.1-py3.8.egg-info/PKG-INFO",start:4071,end:10243,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve/__meta__.py",start:10243,end:16900,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve/css_types.py",start:16900,end:25318,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve/util.py",start:25318,end:28310,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve/css_parser.py",start:28310,end:72103,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve/css_match.py",start:72103,end:125986,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve/__init__.py",start:125986,end:129523,audio:0}],remote_package_size:69318,package_uuid:"c5b25f2e-6f85-4373-ac4e-13396d1b8deb"})})();