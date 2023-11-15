var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Files', 'text': '', 'tags': '', 'url': 'Files.html'}, {'title': 'CREO', 'text': '', 'tags': '', 'url': 'CREO.html'}, {'title': '組合圖-1', 'text': '\n', 'tags': '', 'url': '組合圖-1.html'}, {'title': '零件-1', 'text': '\n \n \n \n', 'tags': '', 'url': '零件-1.html'}, {'title': 'Solid Edge', 'text': '雲端 \n', 'tags': '', 'url': 'Solid Edge.html'}, {'title': '組合圖-2', 'text': '\n', 'tags': '', 'url': '組合圖-2.html'}, {'title': '零件-2', 'text': '\n \n \n \n \n', 'tags': '', 'url': '零件-2.html'}, {'title': 'Inventor-1', 'text': '', 'tags': '', 'url': 'Inventor-1.html'}, {'title': '組合圖-3', 'text': '\n', 'tags': '', 'url': '組合圖-3.html'}, {'title': '零件-3', 'text': '\n \n \n \n \n', 'tags': '', 'url': '零件-3.html'}, {'title': 'Inventor-2', 'text': '零件連結 \n', 'tags': '', 'url': 'Inventor-2.html'}, {'title': '組合圖-4', 'text': '\n', 'tags': '', 'url': '組合圖-4.html'}, {'title': '零件-4', 'text': '\n \n \n \n \n', 'tags': '', 'url': '零件-4.html'}, {'title': 'NX', 'text': '環境:NX \n 進度:組裝完成\xa0 \n', 'tags': '', 'url': 'NX.html'}, {'title': '尺寸', 'text': '球 \n \n 柱 \n \n 底座 \n \n \n 漏斗 \n \n \n \n \n 軌道 \n \n \n', 'tags': '', 'url': '尺寸.html'}, {'title': '組裝過程', 'text': '組裝過程(縮時) \n', 'tags': '', 'url': '組裝過程.html'}, {'title': '雲端', 'text': 'https://drive.google.com/drive/folders/1Lh2mOcejV_ThCmgLz5mHFkzH3_jDYk3j?usp=sharing \n', 'tags': '', 'url': '雲端.html'}, {'title': 'log', 'text': '10/26 新增倉儲 \n', 'tags': '', 'url': 'log.html'}, {'title': '成員', 'text': '名單： \n 41123236 黃琮雲 (solid edge) 41123241 廖家駿 (inventor-1) 41123249 顏昱安\xa0 \n 41123243 劉志興\xa0 \n 41123250 魏梓傑 (inventor-2) \n 41123251 蘇佑昌 (NX) \n 41123246 蔡承澔 (solid work) \n 41123229 陳泓銘\xa0 \n 41123235 黃韋翰\xa0 \n  editor1 結束 ', 'tags': '', 'url': '成員.html'}]};