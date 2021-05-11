var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="bleach.data";var REMOTE_PACKAGE_BASE="bleach.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","bleach-3.3.0-py3.8.egg-info",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","bleach",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/bleach","_vendor",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/bleach/_vendor","html5lib-1.1.dist-info",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/bleach/_vendor","html5lib",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/bleach/_vendor/html5lib","treewalkers",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/bleach/_vendor/html5lib","treeadapters",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/bleach/_vendor/html5lib","filters",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/bleach/_vendor/html5lib","treebuilders",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/bleach/_vendor/html5lib","_trie",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:295590,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,787,1795,3222,4437,5199,6286,7220,8265,9441,10364,11664,12830,13929,15194,16280,17279,18468,19449,20626,21757,22818,23850,25108,26460,27706,28950,30084,31850,33288,34496,35772,37030,38057,39065,39971,41176,42293,43689,44858,46030,47080,48122,49293,50490,51698,52716,53934,55186,56460,57908,59476,60565,61734,63325,64775,66338,67833,69380,70796,72299,73753,75001,76327,77644,79048,80572,82116,83048,84067,85414,86426,87561,88604,89698,90653,91455,92202,92918,93777,94363,95015,95636,96149,96736,97450,97956,98449,99198,100125,100966,101655,102328,103005,104053,104673,105176,105742,106372,106987,107832,108383,108883,109383,109969,110477,111043,112221,113488,114521,115869,117003,118127,119312,120546,121542,122538,123690,124524,125662,126618,127633,128611,129750,130499,131264,132087,132783,133432,134285,134847,135481,136643,137665,138824,139948,140874,141780,142715,143601,144430,145361,146293,147179,148114,148976,149939,150869,151801,152702,153646,154567,155428,156373,157197,158019,158965,159894,160826,161707,162547,163446,164337,165467,166744,168007,169201,170332,171365,172287,173068,174237,175604,176739,178080,179085,180290,181319,182137,183321,184558,185745,186848,187910,188774,189301,190039,190789,191600,192556,193447,194373,195368,196419,197316,198124,198843,199641,200567,201443,202183,203078,203939,204836,205728,206669,207449,208233,209281,210447,211436,212268,213123,214040,214959,215879,216824,217551,218565,219404,220363,221346,222061,222991,223980,224771,225700,226576,227477,228232,228833,229996,231204,231869,232987,234244,235187,236149,237021,238316,239435,240339,241423,242391,243429,244635,245636,246950,247898,248855,249660,250448,251059,252078,252998,254167,255047,255987,256447,256974,257719,258431,259179,259919,260868,261937,262757,263933,265016,266204,267285,268209,269099,269933,270904,271824,272916,273995,275136,276342,277331,278279,279219,280519,281380,282371,283316,284375,285783,287085,288179,289071,290034,290937,291815,292955,294176,295279],sizes:[787,1008,1427,1215,762,1087,934,1045,1176,923,1300,1166,1099,1265,1086,999,1189,981,1177,1131,1061,1032,1258,1352,1246,1244,1134,1766,1438,1208,1276,1258,1027,1008,906,1205,1117,1396,1169,1172,1050,1042,1171,1197,1208,1018,1218,1252,1274,1448,1568,1089,1169,1591,1450,1563,1495,1547,1416,1503,1454,1248,1326,1317,1404,1524,1544,932,1019,1347,1012,1135,1043,1094,955,802,747,716,859,586,652,621,513,587,714,506,493,749,927,841,689,673,677,1048,620,503,566,630,615,845,551,500,500,586,508,566,1178,1267,1033,1348,1134,1124,1185,1234,996,996,1152,834,1138,956,1015,978,1139,749,765,823,696,649,853,562,634,1162,1022,1159,1124,926,906,935,886,829,931,932,886,935,862,963,930,932,901,944,921,861,945,824,822,946,929,932,881,840,899,891,1130,1277,1263,1194,1131,1033,922,781,1169,1367,1135,1341,1005,1205,1029,818,1184,1237,1187,1103,1062,864,527,738,750,811,956,891,926,995,1051,897,808,719,798,926,876,740,895,861,897,892,941,780,784,1048,1166,989,832,855,917,919,920,945,727,1014,839,959,983,715,930,989,791,929,876,901,755,601,1163,1208,665,1118,1257,943,962,872,1295,1119,904,1084,968,1038,1206,1001,1314,948,957,805,788,611,1019,920,1169,880,940,460,527,745,712,748,740,949,1069,820,1176,1083,1188,1081,924,890,834,971,920,1092,1079,1141,1206,989,948,940,1300,861,991,945,1059,1408,1302,1094,892,963,903,878,1140,1221,1103,311],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_bleach.data")}Module["addRunDependency"]("datafile_bleach.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/bleach-3.3.0-py3.8.egg-info/top_level.txt",start:0,end:7,audio:0},{filename:"/lib/python3.8/site-packages/bleach-3.3.0-py3.8.egg-info/dependency_links.txt",start:7,end:8,audio:0},{filename:"/lib/python3.8/site-packages/bleach-3.3.0-py3.8.egg-info/not-zip-safe",start:8,end:9,audio:0},{filename:"/lib/python3.8/site-packages/bleach-3.3.0-py3.8.egg-info/SOURCES.txt",start:9,end:3113,audio:0},{filename:"/lib/python3.8/site-packages/bleach-3.3.0-py3.8.egg-info/requires.txt",start:3113,end:3147,audio:0},{filename:"/lib/python3.8/site-packages/bleach-3.3.0-py3.8.egg-info/PKG-INFO",start:3147,end:33991,audio:0},{filename:"/lib/python3.8/site-packages/bleach/utils.py",start:33991,end:35092,audio:0},{filename:"/lib/python3.8/site-packages/bleach/html5lib_shim.py",start:35092,end:55299,audio:0},{filename:"/lib/python3.8/site-packages/bleach/linkifier.py",start:55299,end:75449,audio:0},{filename:"/lib/python3.8/site-packages/bleach/sanitizer.py",start:75449,end:97449,audio:0},{filename:"/lib/python3.8/site-packages/bleach/callbacks.py",start:97449,end:98241,audio:0},{filename:"/lib/python3.8/site-packages/bleach/__init__.py",start:98241,end:101994,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/vendor.txt",start:101994,end:102178,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/pip_install_vendor.sh",start:102178,end:102268,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/__init__.py",start:102268,end:102268,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/README.rst",start:102268,end:103640,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib-1.1.dist-info/AUTHORS.rst",start:103640,end:104623,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib-1.1.dist-info/METADATA",start:104623,end:120699,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib-1.1.dist-info/WHEEL",start:120699,end:120809,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib-1.1.dist-info/top_level.txt",start:120809,end:120818,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib-1.1.dist-info/RECORD",start:120818,end:124304,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib-1.1.dist-info/INSTALLER",start:124304,end:124308,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/_ihatexml.py",start:124308,end:141036,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/_tokenizer.py",start:141036,end:218064,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/_inputstream.py",start:218064,end:250364,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/constants.py",start:250364,end:333828,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/serializer.py",start:333828,end:349575,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/_utils.py",start:349575,end:354494,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/__init__.py",start:354494,end:355637,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/html5parser.py",start:355637,end:472811,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treewalkers/etree.py",start:472811,end:477350,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treewalkers/genshi.py",start:477350,end:479659,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treewalkers/base.py",start:479659,end:487135,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treewalkers/dom.py",start:487135,end:488548,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treewalkers/__init__.py",start:488548,end:494267,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treewalkers/etree_lxml.py",start:494267,end:500612,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treeadapters/sax.py",start:500612,end:502388,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treeadapters/genshi.py",start:502388,end:504103,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treeadapters/__init__.py",start:504103,end:504753,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/filters/alphabeticalattributes.py",start:504753,end:505672,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/filters/optionaltags.py",start:505672,end:516260,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/filters/lint.py",start:516260,end:519891,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/filters/whitespace.py",start:519891,end:521105,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/filters/inject_meta_charset.py",start:521105,end:524050,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/filters/base.py",start:524050,end:524336,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/filters/sanitizer.py",start:524336,end:551221,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/filters/__init__.py",start:551221,end:551221,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treebuilders/etree.py",start:551221,end:564045,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treebuilders/base.py",start:564045,end:578598,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treebuilders/dom.py",start:578598,end:587523,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treebuilders/__init__.py",start:587523,end:591115,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/treebuilders/etree_lxml.py",start:591115,end:605869,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/_trie/_base.py",start:605869,end:606882,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/_trie/py.py",start:606882,end:608645,audio:0},{filename:"/lib/python3.8/site-packages/bleach/_vendor/html5lib/_trie/__init__.py",start:608645,end:608754,audio:0}],remote_package_size:299686,package_uuid:"c07a3d65-c25d-4452-a27f-57374e3f70b7"})})();