var tipuesearch = {"pages":[{"tags":"misc","text":"2016Fall 修課成員網誌","url":"./pages/about/","title":"About"},{"tags":"Misc","text":"移除先前設定的子模組 把以下多餘的設定刪掉 [submodule \"2016fallcadp_hw\"] path = 2016fallcadp_hw url = https://github.com/40423226/2016fallcadp_hw.git branch = gh-pages 更改後為以下的內容 [submodule \"40423206\"] path = 40423206 url = https://github.com/40423206/2016fallcadp_hw.git branch = gh-pages [submodule \"40423224\"] path = 40423224 url = https://github.com/40423224/2016fallcadp_hw.git branch = gh-pages [submodule \"40423226\"] path = 40423226 url = https://github.com/40423226/2016fallcadp_hw.git branch = gh-pages [submodule \"40423229\"] path = 40423229 url = https://github.com/40423229/2016fallcadp_hw.git branch = gh-pages [submodule \"40423214\"] path = 40423214 url = https://github.com/40423214/2016fallcadp_hw.git branch = gh-pages [submodule \"40423216\"] path = 40423216 url = https://github.com/40423216/2016fallcadp_hw.git branch = gh-pages","url":"./20161028w7.html","title":"20161028W7"},{"tags":"Misc","text":"解決子模組在對應上的問題 因為之前的2016fallcadp_hw倉儲少複製了一些東西,刪除舊的倉儲後,重新做一個和之前倉儲同名的2016fallcadp_hw倉儲,但是在小組倉儲所連結的子模組,抓不到新倉儲連結,所以我們需要重新加入一次組員倉儲的資料 以為只要再輸入一次指令就可以讓程式抓最新的子模組近來 Y:\\tmp\\2016fallcadp_bg6>git submodule add -b gh-pages https://github.com/40423226/2016fallcadp_hw.git 40423226 '40423226' already exists in the index 但是程式告訴我們40423226的子模組已經在裡面,所以在試著用git rm 40423226 -f 來刪除存放該子模組資料的資料夾,然後再git submodule add的一次組員倉儲的資料 Y:\\tmp\\2016fallcadp_bg6>git submodule add -b gh-pages https://github.com/40423226/2016fallcadp_hw.git 40423226 A git directory for '40423226' is found locally with remote(s): origin https://github.com/40423226/2016fallcadp_hw.git If you want to reuse this local git directory instead of cloning again from https://github.com/40423226/2016fallcadp_hw.git use the '--force' option. If the local git directory is not the correct repo or you are unsure what this means choose another name with the '--name' option. 程式告訴我們還有資料沒刪除乾淨,於是我們再執行一次刪除的指令 Y:\\tmp\\2016fallcadp_bg6>git rm 40423226 -f fatal: pathspec '40423226' did not match any files 然而程式說找不到任何有關該名稱的文件資料,後來我們發現submodule內的設定並沒有也因此刪除,要刪除submodule的設定有兩個方法 解決方法一 從SciTE打開,在2016fallcadp_bg6資料夾內的.gitmodules檔案,把該組員的子模組設定刪除後就可以存檔 [submodule \"40423206\"] path = 40423206 url = https://github.com/40423206/2016fallcadp_hw.git branch = gh-pages [submodule \"40423224\"] path = 40423224 url = https://github.com/40423224/2016fallcadp_hw.git branch = gh-pages [submodule \"2016fallcadp_hw\"] path = 2016fallcadp_hw url = https://github.com/40423226/2016fallcadp_hw.git branch = gh-pages [submodule \"40423229\"] path = 40423229 url = https://github.com/40423229/2016fallcadp_hw.git branch = gh-pages [submodule \"40423214\"] path = 40423214 url = https://github.com/40423214/2016fallcadp_hw.git branch = gh-pages [submodule \"40423216\"] path = 40423216 url = https://github.com/40423216/2016fallcadp_hw.git branch = gh-pages 如果有打下面的指令,把各組員子模組的資料抓近來,記得要把2016fallcadp_bg6\\.git\\modules裡該組員的隱藏資料夾刪掉 git submodule update --init --recursive 就可以重新執行指令,把組員的子模組加進來 git submodule add -b gh-pages https://github.com/40423226/2016fallcadp_hw.git 40423226 解決方法二 直接依序執行以下的指令 git submodule deinit asubmodule git rm asubmodule # Note: asubmodule (no trailing slash) # or, if you want to leave it in your working tree git rm --cached asubmodule 但是在2016fallcadp_bg6\\.git\\modules裡的隱藏資料夾,還是需要自己動手刪除","url":"./20161021w6.html","title":"20161021W6"},{"tags":"Misc","text":"W5","url":"./20161014w5.html","title":"20161014W5"},{"tags":"Misc","text":"W4","url":"./20161007w4.html","title":"20161007W4"},{"tags":"Misc","text":"解決近端設定代理主機的問題 每次上課須執行以下指令 git config --global http.proxy http://proxy.mde.tw:3128 git config --global https.proxy http://proxy.mde.tw:3128 輸入完之後出現了這個問題 warning: http.proxy has multiple values error: cannot overwrite multiple values with a single value Use a regexp, --add or --replace-all to change http.proxy. 發現在Y:\\home的.gitconfig檔案出現問題,從SciTE打開.gitconfig [http] proxy = proxy = proxy = proxy = http://proxy.mde.tw:3128 [https] proxy = http://proxy.mde.tw:3128 [user] email = 40423226@gm.nfu.edu.tw name = 40423226 更正後儲存 [http] proxy = http://proxy.mde.tw:3128 [https] proxy = http://proxy.mde.tw:3128 [user] email = 40423226@gm.nfu.edu.tw name = 40423226","url":"./20160930w3.html","title":"20160930W3"},{"tags":"Misc","text":"W2","url":"./20160923w2.html","title":"20160923W2"},{"tags":"Misc","text":"W1","url":"./20160916w1.html","title":"20160916W1"},{"tags":"Misc","text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs) 2016 Fall CADP B 分組網頁: 第1組 : 40123252 40223128 40223130 40223215 40223233 第2組 : 40223205 40223206 40423225 40423231 40423240 40423250 第3組 : 40423201 40423202 40423203 40423211 40439221 42423223 第4組 : 40423204 40423221 40423228 40423243 40423253 40423254 第5組 : 40423205 40423227 40423235 40423236 40423237 40423238 第6組 : 40423206 40423214 40423216 40423224 40423226 40423229 第7組 : 40423207 40423210 40423219 40423220 40423241 40423246 第8組 : 40423208 40423213 40423232 40423233 第9組 : 40423209 40423212 40423217 40423218 40423239 40423255 第10組 : 40423222 40423245 40423248 40423251 第11組 : 40423234 40423242 40423244 40423247 40423249 40423252 以下為分組資料處理程式: content = open(\"2016fall_cadp_b_groups.txt\").read() #print(content) result = content.splitlines() #print(result) gno = 1 for i in range(len(result)): #print(result[i]) group = result[i].split(\":\") #列出組序 print(\"<a href='../g\"+str(gno)+\"'>第\"+str(gno)+\"組</a>:<br />\") #print(\"第\"+str(gno)+\"組:<br />\") #取 group 第2成員, 用逗點隔開納入數列後, 利用[:-1]去掉最後空白 #print(group[1].split(\",\")[:-1]) gmember = group[1].split(\",\")[:-1] for j in range(len(gmember)): #print(gmember[j]) print(\"<a href='../g\"+str(gno)+\"/\"+str(gmember[j])+\"'>\"+ \\ str(gmember[j])+\"</a> \") print(\"<br />\") gno = gno + 1","url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue.html","title":"2016Fall 機械設計主題教學"}]};