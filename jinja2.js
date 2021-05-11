var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="jinja2.data";var REMOTE_PACKAGE_BASE="jinja2.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","jinja2",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","Jinja2-2.11.2-py3.8.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:251948,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1107,2116,3161,4474,5752,7108,8410,9406,10756,11814,12732,13841,15175,16550,17915,19003,20336,21581,22858,24178,25139,26333,27458,28722,30022,31289,32363,33473,34671,35856,37072,38286,39575,40857,41996,43257,44409,45549,46774,47814,48970,50129,51433,52729,53945,54986,56225,57561,58751,60137,61068,62142,63160,64418,65536,66744,67826,68329,69385,70573,71652,72598,73460,74544,75861,77230,78538,79713,80823,82080,83184,84369,85646,86458,87808,89562,90896,92153,93328,94363,95660,97e3,98052,99323,100221,101431,102360,103471,104563,105783,107143,108285,109184,110079,110979,112010,113318,114626,115791,116879,118174,119423,120416,121678,122922,123975,125135,126150,127053,128060,129303,130691,131880,133042,134218,135140,136172,137352,138551,139943,141158,142424,143573,144971,146230,147990,149328,150486,151741,152819,154152,155313,156342,157367,158605,159722,161002,162043,163109,163938,164901,165954,166826,167608,168382,169639,170577,171478,172313,173142,174120,175356,176587,177672,178977,180224,181470,182744,184045,185187,186208,187333,188341,189485,190658,191900,192974,194220,195338,196480,197721,198691,199472,200387,201420,202397,203315,204415,205479,206650,207648,208899,209638,210511,211348,212287,213140,214429,215526,216762,218014,218860,220160,221084,222380,223476,224601,225902,227237,228456,229710,230814,232176,233321,234727,236066,237280,238597,239886,241360,242679,244006,245042,246139,247359,248612,249559,250940],sizes:[1107,1009,1045,1313,1278,1356,1302,996,1350,1058,918,1109,1334,1375,1365,1088,1333,1245,1277,1320,961,1194,1125,1264,1300,1267,1074,1110,1198,1185,1216,1214,1289,1282,1139,1261,1152,1140,1225,1040,1156,1159,1304,1296,1216,1041,1239,1336,1190,1386,931,1074,1018,1258,1118,1208,1082,503,1056,1188,1079,946,862,1084,1317,1369,1308,1175,1110,1257,1104,1185,1277,812,1350,1754,1334,1257,1175,1035,1297,1340,1052,1271,898,1210,929,1111,1092,1220,1360,1142,899,895,900,1031,1308,1308,1165,1088,1295,1249,993,1262,1244,1053,1160,1015,903,1007,1243,1388,1189,1162,1176,922,1032,1180,1199,1392,1215,1266,1149,1398,1259,1760,1338,1158,1255,1078,1333,1161,1029,1025,1238,1117,1280,1041,1066,829,963,1053,872,782,774,1257,938,901,835,829,978,1236,1231,1085,1305,1247,1246,1274,1301,1142,1021,1125,1008,1144,1173,1242,1074,1246,1118,1142,1241,970,781,915,1033,977,918,1100,1064,1171,998,1251,739,873,837,939,853,1289,1097,1236,1252,846,1300,924,1296,1096,1125,1301,1335,1219,1254,1104,1362,1145,1406,1339,1214,1317,1289,1474,1319,1327,1036,1097,1220,1253,947,1381,1008],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_jinja2.data")}Module["addRunDependency"]("datafile_jinja2.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/jinja2/asyncsupport.py",start:0,end:7209,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/utils.py",start:7209,end:29731,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/visitor.py",start:29731,end:32971,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/debug.py",start:32971,end:41500,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/environment.py",start:41500,end:92129,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/exceptions.py",start:92129,end:97554,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/nativetypes.py",start:97554,end:100307,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/lexer.py",start:100307,end:130638,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/loaders.py",start:130638,end:148304,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/tests.py",start:148304,end:153103,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/_identifier.py",start:153103,end:154878,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/nodes.py",start:154878,end:185973,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/idtracking.py",start:185973,end:195184,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/runtime.py",start:195184,end:225802,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/ext.py",start:225802,end:252243,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/meta.py",start:252243,end:256374,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/constants.py",start:256374,end:257832,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/bccache.py",start:257832,end:269971,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/asyncfilters.py",start:269971,end:274221,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/parser.py",start:274221,end:309881,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/_compat.py",start:309881,end:313072,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/__init__.py",start:313072,end:314621,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/optimizer.py",start:314621,end:316078,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/defaults.py",start:316078,end:317204,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/compiler.py",start:317204,end:383488,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/sandbox.py",start:383488,end:400615,audio:0},{filename:"/lib/python3.8/site-packages/jinja2/filters.py",start:400615,end:442030,audio:0},{filename:"/lib/python3.8/site-packages/Jinja2-2.11.2-py3.8.egg-info/top_level.txt",start:442030,end:442037,audio:0},{filename:"/lib/python3.8/site-packages/Jinja2-2.11.2-py3.8.egg-info/dependency_links.txt",start:442037,end:442038,audio:0},{filename:"/lib/python3.8/site-packages/Jinja2-2.11.2-py3.8.egg-info/entry_points.txt",start:442038,end:442099,audio:0},{filename:"/lib/python3.8/site-packages/Jinja2-2.11.2-py3.8.egg-info/SOURCES.txt",start:442099,end:444418,audio:0},{filename:"/lib/python3.8/site-packages/Jinja2-2.11.2-py3.8.egg-info/requires.txt",start:444418,end:444454,audio:0},{filename:"/lib/python3.8/site-packages/Jinja2-2.11.2-py3.8.egg-info/PKG-INFO",start:444454,end:448446,audio:0}],remote_package_size:256044,package_uuid:"57671d4d-ddc8-4b72-859b-b754264dcc1b"})})();