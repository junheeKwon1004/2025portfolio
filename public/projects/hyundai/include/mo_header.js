// D:\hddf-publish-new\html\M_KO\html\guide\header.html

// 1. 메인 페이지 헤더
// document.write('<header class="header header--main">'+
// '		<div class="header_top">'+
// '			<h1 class="logo"><img src="https://cdn.hddfs.com/front/images/M_KO/common/n/logo_1.svg" alt="현대면세점"></h1>'+
// '			<div class="header_box_btn">'+
// '				<a href="javascript:" onclick="callSearchLayer();" class="btn_search">검색</a>'+
// '				<a href="javascript:" onclick="cartLayerStat(\'CART\');" class="btn_cart">장바구니<span class="badge_cart" id="rwingCartCnt" style="">99+</span></a>'+
// '			</div>'+
// '		</div>'+
// '	</header>');


// 2. 전체서비스를 통해서 온 경우 - 햄버거 퀵 메뉴(세일/베스트/혜택 등···)
// document.write('<header class="header">'+
// '		<div class="header_top">'+
// '			<a href="javascript:" onclick="initHistory(\'Y\');" class="history_back">history back</a> <!-- 20250618_4차개선 : 클래스명 변경 -->'+
// '			<h2 class="headerTitle">타이틀<button type="button" class="more">more</button></h2> <!-- [C] 클릭 시 button 태그에 클래스 .active 추가 및 .depth_menu 영역 활성화됨 --> <!-- 20250618_4차개선 : h2 클래스 .headerTitle 삭제, button 태그 type 추가 -->'+
// '			<div class="header_box_btn">'+
// '				<a href="javascript:" onclick="callSearchLayer();" class="btn_search">검색</a> <!-- 20250618_4차개선 : type-1 제거 -->'+
// '				<a href="javascript:" onclick="cartLayerStat(\'CART\');" class="btn_cart">장바구니<span class="badge_cart" id="rwingCartCnt" style="">8</span></a>'+
// '			</div>'+
// '			<div class="depth_menu"> <!-- [C] .open 클래스 추가 시 영역 활성화됨 -->'+
// '				<a href="#none">세일</a>'+
// '				<a href="#none" class="active">베스트</a>'+
// '				<a href="#none">혜택</a>'+
// '				<a href="#none">브랜드 행사</a>'+
// '				<a href="#none">3시간전샵</a>'+
// '				<a href="#none">신상품</a>'+
// '				<a href="#none">스페셜오더</a>'+
// '			</div>'+
// '		</div>'+
// '		<nav class="nav_main"></nav>'+
// '	</header>');


// 3. 기본 헤더
document.write('<header class="header">'+
'		<div class="header_top">'+
'			<a href="javascript:" onclick="initHistory(\'Y\');" class="history_back">history back</a>'+
'			<h2 class="headerTitle">타이틀</h2>'+
'			<div class="header_box_btn">'+
'				<a href="javascript:" onclick="callSearchLayer();" class="btn_search">검색</a>'+
'				<a href="javascript:" onclick="cartLayerStat(\'CART\');" class="btn_cart">장바구니<span class="badge_cart" id="rwingCartCnt" style="display:none;">0</span></a>'+
'			</div>'+
'		</div>'+
'		<nav class="nav_main"></nav>'+
'	</header>');


// 4. 상품 헤더(럭셔리관, 명품관)
// document.write('<header class="header product">'+
// '		<div class="header_top">'+
// '			<div class="header_box_btn">'+
// '				<a href="javascript:" onclick="initHistory(\'Y\');" class="history_back">history back</a>'+
// '				<a nohref="" onclick="callSideMenuLayer();" class="btn_menu">side menu</a>'+
// '			</div>'+
// '			<div class="header_box_btn">'+
// '				<a href="javascript:" onclick="callSearchLayer();" class="btn_search">검색</a>'+
// '				<a nohref="" onclick="cartLayerStat(\'CART\');" class="btn_cart">장바구니<span class="badge_cart" id="rwingCartCnt" style="display:none;">0</span></a>'+
// '			</div>'+
// '		</div>'+
// '		<nav class="nav_main"></nav>'+
// '	</header>');


// 5. 마이현대 공통 헤더
// document.write('<header class="header">'+
// '		<div class="header_top">'+
// '			<a href="javascript:" onclick="initHistory(\'Y\');" class="history_back">history back</a>'+
// '			<h2>마이현대 공통 헤더<button type="button" class="more">more</button></h2>'+
// '			<div class="header_box_btn">'+
// '				<a href="javascript:" onclick="callSearchLayer();" class="search">검색</a>'+
// '				<a href="javascript:" onclick="cartLayerStat(\'CART\');" class="btn_cart">장바구니<span class="badge_cart" id="rwingCartCnt" style="display:none;">0</span></a>'+
// '			</div>'+
// '			<div class="depth_menu">'+
// '				<a nohref="" onclick="liMyOrderList();" class="active">주문내역</a>'+
// '				<a nohref="" onclick="goUrl();" class="">스페셜오더/공구특가</a>'+
// '				<a nohref="" onclick="goUrl();" class="" id="hPointPay">H.Point Pay 관리</a>'+
// '				<a nohref="" onclick="goUrl();" class="">적립금내역</a>'+
// '				<a nohref="" onclick="goUrl();" class="">쿠폰내역</a>'+
// '				<a nohref="" onclick="goUrl();" class="">H.oney</a>'+
// '				<a nohref="" onclick="goUrl();" class="">오프라인 선불카드</a>'+
// '				<a nohref="" onclick="goUrl();" class="">예치금/상품권전환금</a>'+
// '				<a nohref="" onclick="goUrl();" class="">알림신청내역</a>'+
// '				<a nohref="" onclick="goUrl();" class="">관심 혜택</a>'+
// '				<a nohref="" onclick="goUrl();" class="">관심 상품/브랜드</a>'+
// '				<a nohref="" onclick="goUrl();" class="">문의내역</a>'+
// '				<a nohref="" onclick="goUrl();" class="">상품평</a>'+
// '				<a nohref="" onclick="goUrl();" class="">기본정보관리</a>'+
// '				<a nohref="" onclick="goUrl();" class="">여권정보관리</a>'+
// '				<a nohref="" onclick="goUrl();" class="">출국정보관리</a>'+
// '				<a nohref="" onclick="liMyChgPwd();">비밀번호변경</a>'+
// '			</div>'+
// '		</div>'+
// '	</header>');


// 6. 검색 페이지용 헤더(일반, 해시태그)
// document.write('<header class="header">'+
// '		<div class="">'+
// '			<div class="sh_top fixed">'+
// '				<a href="javascript:" onclick="initHistory(\'Y\');" class=\'history_back\'>history back</a>'+
// '				<span class="sh_ipt">'+
// '					<div class="click_search">'+
// '						<p id="searchTermResult" name="searchTermResult" class="click_search search_top"></p>'+
// '						<a href="javascript:void(0);" class="click_search_clear" id="searchResultDelete">Reset</a>'+
// '						<!-- 검색타입 -->'+
// '						<input type="hidden" id="resultSearchType" value=""/>'+
// '					</div>'+
// '				</span>'+
// '				<span class="sh_rht">'+
// '					<button type="button" class="sh_btn_search searchBtnResult">검색</button>'+
// '				</span>'+
// '			</div>'+
// '		</div>'+
// '		<nav class="nav_main">'+
// '			<div class="nav_section sh_swiper">'+
// '				<div id="nav_tab" class="navSection_swiper"> <!-- [C] 아이디명 퍼블파일과 개발파일 서로 다름(id="relationTab") -->'+
// '					<ul class="section_tab">'+
// '						<li class="tab_item is_selected"> <!-- [C] 선택 시 .is_selected 클래스 추가 -->'+
// '							<a href="#none"><span>키워드1</span></a>'+
// '						</li>'+
// '						<li class="tab_item">'+
// '							<a href="#none"><span>키워드2</span></a>'+
// '						</li>'+
// '						<li class="tab_item">'+
// '							<a href="#none"><span>키워드3</span></a>'+
// '						</li>'+
// '					</ul>'+
// '				</div>'+
// '			</div>'+
// '		</nav>'+
// '	</header>');


// 7. 장바구니 헤더
// document.write('<header class="header">'+
// '		<div class="header_top">'+
// '			<a href="javascript:" onclick="initHistory(\'Y\');" class="history_back">history back</a>'+
// '			<h2 class="headerTitle">장바구니</h2>'+
// '			<div class="header_box_btn">'+
// '				<a href="#none" class="btn_home">홈</a>'+
// '				<a href="javascript:" onclick="callSearchLayer();" class="btn_search">검색</a>'+
// '			</div>'+
// '		</div>'+
// '		<nav class="nav_main"></nav>'+
// '	</header>');


// 8. 타이틀만 있는 경우
// document.write('<header class="header">'+
// '		<div class="header_top">'+
// '			<a href="javascript:" onclick="" class="history_back">history back</a>'+
// '			<h2 class="headerTitle">타이틀</h2>'+
// '		</div>'+
// '		<nav class="nav_main"></nav>'+
// '	</header>');


// 9. 상품상세 헤더
// document.write('<header class="header">'+
// '		<div class="header_top">'+
// '			<a href="javascript:" onclick="" class="history_back">history back</a>'+
// '			<h2 class="headerTitle">&nbsp;</h2>'+
// '			<div class="header_box_btn">'+
// '				<a href="#none" class="btn_home">홈</a>'+
// '				<a href="javascript:" onclick="callSearchLayer();" class="btn_search">검색</a>'+
// '				<a href="javascript:" onclick="cartLayerStat(\'CART\');" class="btn_cart">장바구니</a> <!-- [D] 장바구니 버튼 내 카운터(.badge_cart) 없음 -->'+
// '			</div>'+
// '		</div>'+
// '		<nav class="nav_main"></nav>'+
// '	</header>');


// 10. 기본 헤더 (❓ 현재 어떤 페이지에서 사용하는지 확인되지 않음)
// document.write('<header class="header">'+
// '		<div class="header_top">'+
// '			<a href="javascript:" onclick="initHistory(\'Y\');" class="history_back">history back</a>'+
// '			<h2 class="headerTitle">타이틀<button type="button" class="more">more</button></h2> <!-- [C] 클릭 시 button 태그에 클래스 .active 추가 및 .depth_menu 영역 활성화됨 -->'+
// '			<div>'+
// '				<button class="btn_benefit">benefit menu</button>'+
// '				<div class="depth_menu"> <!-- [C] .open 클래스 추가 시 영역 활성화됨 -->'+
// '					<a href="#none">스킨케어</a>'+
// '					<a href="#none">메이크업</a>'+
// '					<a href="#none">향수/헤어/바디</a>'+
// '					<a href="#none">가방/지갑</a>'+
// '					<a href="#none">시계/쥬얼리</a>'+
// '					<a href="#none">패션/잡화</a>'+
// '					<a href="#none">전자/리빙</a>'+
// '					<a href="#none">식품</a>'+
// '					<a href="#none">유아동</a>'+
// '					<a href="#none">국내브랜드</a>'+
// '				</div>'+
// '			</div>'+
// '		</div>'+
// '		<nav class="nav_main"></nav>'+
// '	</header>');


// 11. 사이드메뉴 카테고리 헤더 - 햄버거 카테고리 메뉴(스킨케어/메이크업 등···)
// document.write('<header class="header">'+
// '		<div class="header_top">'+
// '			<a href="javascript:" onclick="initHistory(\'Y\');" class="history_back">history back</a>'+
// '			<button type="button" class="category-menu-one-depth-btn">카테고리 타이틀</button> <!-- [C] 클릭 시 active is-active 클래스 추가 및 .category-menu-one-depth 영역 활성화됨 -->'+
// '			<div class="category-menu-one-depth">'+
// '				<ul>'+
// '					<li><a href="javascript:" class="active">스킨케어</a></li>'+
// '					<li><a href="javascript:">메이크업</a></li>'+
// '					<li><a href="javascript:">향수/헤어/바디</a></li>'+
// '					<li><a href="javascript:">가방/지갑</a></li>'+
// '					<li><a href="javascript:">시계/쥬얼리</a></li>'+
// '					<li><a href="javascript:">패션/잡화</a></li>'+
// '					<li><a href="javascript:">스포츠/레저</a></li>'+
// '					<li><a href="javascript:">전자/리빙</a></li>'+
// '					<li><a href="javascript:">식품</a></li>'+
// '					<li><a href="javascript:">유아동</a></li>'+
// '					<li><a href="javascript:">국내브랜드</a></li>'+
// '					<li><a href="javascript:">주류</a></li>'+
// '					<li><a href="javascript:">Adult (19)</a></li>'+
// '                </ul>'+
// '            </div>'+
// '			<div class="header_box_btn">'+
// '				<a href="javascript:" onclick="callSearchLayer();" class="btn_search">검색</a>'+
// '				<a href="javascript:" onclick="cartLayerStat(\'CART\');" class="btn_cart">장바구니<span class="badge_cart" id="rwingCartCnt" style="display:none;">0</span></a>'+
// '			</div>'+
// '		</div>'+
// '		<nav class="nav_main"></nav>'+
// '	</header>');


// 12. 개발 파일 mall.jsp 헤더 (❓ 현재 어떤 페이지에서 사용하는지 확인되지 않음)
// document.write('<header class="header mainHeader">'+
// '		<div class="header_top">'+
// '			<h1 class="main">'+
// '				<a href="javascript:"><img src="https://cdn.hddfs.com/front/images/M_KO/common/n/logo_1.svg" alt="현대면세점"/></a>'+
// '			</h1>'+
// '			<a href="javascript:" class="btn_benefit">benefit menu</a>'+
// '		</div>'+
// '		<nav class="nav_main"></nav>'+
// '	</header>');
