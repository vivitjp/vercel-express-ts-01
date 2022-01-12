"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddress = void 0;
const address = [
    { "K": "神奈川県", "G": "", "C": "横浜市" },
    { "K": "大阪府", "G": "", "C": "大阪市" },
    { "K": "愛知県", "G": "", "C": "名古屋市" },
    { "K": "北海道", "G": "", "C": "札幌市" },
    { "K": "福岡県", "G": "", "C": "福岡市" },
    { "K": "神奈川県", "G": "", "C": "川崎市" },
    { "K": "兵庫県", "G": "", "C": "神戸市" },
    { "K": "京都府", "G": "", "C": "京都市" },
    { "K": "埼玉県", "G": "", "C": "さいたま市" },
    { "K": "広島県", "G": "", "C": "広島市" },
    { "K": "宮城県", "G": "", "C": "仙台市" },
    { "K": "千葉県", "G": "", "C": "千葉市" },
    { "K": "東京都", "G": "", "C": "世田谷区" },
    { "K": "福岡県", "G": "", "C": "北九州市" },
    { "K": "大阪府", "G": "", "C": "堺市" },
    { "K": "静岡県", "G": "", "C": "浜松市" },
    { "K": "新潟県", "G": "", "C": "新潟市" },
    { "K": "東京都", "G": "", "C": "練馬区" },
    { "K": "東京都", "G": "", "C": "大田区" },
    { "K": "熊本県", "G": "", "C": "熊本市" },
    { "K": "神奈川県", "G": "", "C": "相模原市" },
    { "K": "岡山県", "G": "", "C": "岡山市" },
    { "K": "東京都", "G": "", "C": "江戸川区" },
    { "K": "東京都", "G": "", "C": "足立区" },
    { "K": "静岡県", "G": "", "C": "静岡市" },
    { "K": "千葉県", "G": "", "C": "船橋市" },
    { "K": "埼玉県", "G": "", "C": "川口市" },
    { "K": "鹿児島県", "G": "", "C": "鹿児島市" },
    { "K": "東京都", "G": "", "C": "杉並区" },
    { "K": "東京都", "G": "", "C": "板橋区" },
    { "K": "東京都", "G": "", "C": "八王子市" },
    { "K": "兵庫県", "G": "", "C": "姫路市" },
    { "K": "東京都", "G": "", "C": "江東区" },
    { "K": "栃木県", "G": "", "C": "宇都宮市" },
    { "K": "愛媛県", "G": "", "C": "松山市" },
    { "K": "千葉県", "G": "", "C": "松戸市" },
    { "K": "千葉県", "G": "", "C": "市川市" },
    { "K": "大阪府", "G": "", "C": "東大阪市" },
    { "K": "兵庫県", "G": "", "C": "西宮市" },
    { "K": "大分県", "G": "", "C": "大分市" },
    { "K": "岡山県", "G": "", "C": "倉敷市" },
    { "K": "石川県", "G": "", "C": "金沢市" },
    { "K": "広島県", "G": "", "C": "福山市" },
    { "K": "兵庫県", "G": "", "C": "尼崎市" },
    { "K": "東京都", "G": "", "C": "葛飾区" },
    { "K": "神奈川県", "G": "", "C": "藤沢市" },
    { "K": "東京都", "G": "", "C": "町田市" },
    { "K": "千葉県", "G": "", "C": "柏市" },
    { "K": "東京都", "G": "", "C": "品川区" },
    { "K": "愛知県", "G": "", "C": "豊田市" },
    { "K": "香川県", "G": "", "C": "高松市" },
    { "K": "富山県", "G": "", "C": "富山市" },
    { "K": "長崎県", "G": "", "C": "長崎市" },
    { "K": "岐阜県", "G": "", "C": "岐阜市" },
    { "K": "大阪府", "G": "", "C": "豊中市" },
    { "K": "宮崎県", "G": "", "C": "宮崎市" },
    { "K": "大阪府", "G": "", "C": "枚方市" },
    { "K": "神奈川県", "G": "", "C": "横須賀市" },
    { "K": "大阪府", "G": "", "C": "吹田市" },
    { "K": "愛知県", "G": "", "C": "岡崎市" },
    { "K": "愛知県", "G": "", "C": "一宮市" },
    { "K": "群馬県", "G": "", "C": "高崎市" },
    { "K": "長野県", "G": "", "C": "長野市" },
    { "K": "愛知県", "G": "", "C": "豊橋市" },
    { "K": "和歌山県", "G": "", "C": "和歌山市" },
    { "K": "東京都", "G": "", "C": "北区" },
    { "K": "奈良県", "G": "", "C": "奈良市" },
    { "K": "埼玉県", "G": "", "C": "川越市" },
    { "K": "大阪府", "G": "", "C": "高槻市" },
    { "K": "東京都", "G": "", "C": "新宿区" },
    { "K": "滋賀県", "G": "", "C": "大津市" },
    { "K": "東京都", "G": "", "C": "中野区" },
    { "K": "埼玉県", "G": "", "C": "所沢市" },
    { "K": "埼玉県", "G": "", "C": "越谷市" },
    { "K": "福島県", "G": "", "C": "いわき市" },
    { "K": "群馬県", "G": "", "C": "前橋市" },
    { "K": "北海道", "G": "", "C": "旭川市" },
    { "K": "福島県", "G": "", "C": "郡山市" },
    { "K": "高知県", "G": "", "C": "高知市" },
    { "K": "沖縄県", "G": "", "C": "那覇市" },
    { "K": "愛知県", "G": "", "C": "春日井市" },
    { "K": "秋田県", "G": "", "C": "秋田市" },
    { "K": "三重県", "G": "", "C": "四日市市" },
    { "K": "兵庫県", "G": "", "C": "明石市" },
    { "K": "福岡県", "G": "", "C": "久留米市" },
    { "K": "東京都", "G": "", "C": "豊島区" },
    { "K": "岩手県", "G": "", "C": "盛岡市" },
    { "K": "東京都", "G": "", "C": "目黒区" },
    { "K": "大阪府", "G": "", "C": "茨木市" },
    { "K": "福島県", "G": "", "C": "福島市" },
    { "K": "青森県", "G": "", "C": "青森市" },
    { "K": "三重県", "G": "", "C": "津市" },
    { "K": "東京都", "G": "", "C": "墨田区" },
    { "K": "茨城県", "G": "", "C": "水戸市" },
    { "K": "千葉県", "G": "", "C": "市原市" },
    { "K": "新潟県", "G": "", "C": "長岡市" },
    { "K": "大阪府", "G": "", "C": "八尾市" },
    { "K": "東京都", "G": "", "C": "府中市" },
    { "K": "福井県", "G": "", "C": "福井市" },
    { "K": "兵庫県", "G": "", "C": "加古川市" },
    { "K": "東京都", "G": "", "C": "港区" },
    { "K": "神奈川県", "G": "", "C": "平塚市" },
    { "K": "山口県", "G": "", "C": "下関市" },
    { "K": "徳島県", "G": "", "C": "徳島市" },
    { "K": "北海道", "G": "", "C": "函館市" },
    { "K": "埼玉県", "G": "", "C": "草加市" },
    { "K": "山形県", "G": "", "C": "山形市" },
    { "K": "静岡県", "G": "", "C": "富士市" },
    { "K": "東京都", "G": "", "C": "渋谷区" },
    { "K": "長崎県", "G": "", "C": "佐世保市" },
    { "K": "東京都", "G": "", "C": "調布市" },
    { "K": "神奈川県", "G": "", "C": "茅ヶ崎市" },
    { "K": "茨城県", "G": "", "C": "つくば市" },
    { "K": "長野県", "G": "", "C": "松本市" },
    { "K": "東京都", "G": "", "C": "文京区" },
    { "K": "神奈川県", "G": "", "C": "大和市" },
    { "K": "佐賀県", "G": "", "C": "佐賀市" },
    { "K": "埼玉県", "G": "", "C": "春日部市" },
    { "K": "大阪府", "G": "", "C": "寝屋川市" },
    { "K": "埼玉県", "G": "", "C": "上尾市" },
    { "K": "兵庫県", "G": "", "C": "宝塚市" },
    { "K": "神奈川県", "G": "", "C": "厚木市" },
    { "K": "青森県", "G": "", "C": "八戸市" },
    { "K": "群馬県", "G": "", "C": "太田市" },
    { "K": "東京都", "G": "", "C": "荒川区" },
    { "K": "広島県", "G": "", "C": "呉市" },
    { "K": "群馬県", "G": "", "C": "伊勢崎市" },
    { "K": "東京都", "G": "", "C": "台東区" },
    { "K": "東京都", "G": "", "C": "西東京市" },
    { "K": "島根県", "G": "", "C": "松江市" },
    { "K": "千葉県", "G": "", "C": "流山市" },
    { "K": "千葉県", "G": "", "C": "八千代市" },
    { "K": "東京都", "G": "", "C": "小平市" },
    { "K": "兵庫県", "G": "", "C": "伊丹市" },
    { "K": "広島県", "G": "", "C": "東広島市" },
    { "K": "三重県", "G": "", "C": "鈴鹿市" },
    { "K": "東京都", "G": "", "C": "三鷹市" },
    { "K": "埼玉県", "G": "", "C": "熊谷市" },
    { "K": "山口県", "G": "", "C": "山口市" },
    { "K": "大阪府", "G": "", "C": "岸和田市" },
    { "K": "東京都", "G": "", "C": "日野市" },
    { "K": "山梨県", "G": "", "C": "甲府市" },
    { "K": "静岡県", "G": "", "C": "沼津市" },
    { "K": "神奈川県", "G": "", "C": "小田原市" },
    { "K": "鳥取県", "G": "", "C": "鳥取市" },
    { "K": "新潟県", "G": "", "C": "上越市" },
    { "K": "愛知県", "G": "", "C": "安城市" },
    { "K": "愛知県", "G": "", "C": "豊川市" },
    { "K": "大阪府", "G": "", "C": "和泉市" },
    { "K": "東京都", "G": "", "C": "立川市" },
    { "K": "京都府", "G": "", "C": "宇治市" },
    { "K": "千葉県", "G": "", "C": "習志野市" },
    { "K": "茨城県", "G": "", "C": "日立市" },
    { "K": "島根県", "G": "", "C": "出雲市" },
    { "K": "神奈川県", "G": "", "C": "鎌倉市" },
    { "K": "千葉県", "G": "", "C": "浦安市" },
    { "K": "北海道", "G": "", "C": "苫小牧市" },
    { "K": "東京都", "G": "", "C": "中央区" },
    { "K": "愛知県", "G": "", "C": "西尾市" },
    { "K": "千葉県", "G": "", "C": "佐倉市" },
    { "K": "青森県", "G": "", "C": "弘前市" },
    { "K": "静岡県", "G": "", "C": "磐田市" },
    { "K": "栃木県", "G": "", "C": "小山市" },
    { "K": "北海道", "G": "", "C": "帯広市" },
    { "K": "富山県", "G": "", "C": "高岡市" },
    { "K": "埼玉県", "G": "", "C": "新座市" },
    { "K": "北海道", "G": "", "C": "釧路市" },
    { "K": "山口県", "G": "", "C": "宇部市" },
    { "K": "神奈川県", "G": "", "C": "秦野市" },
    { "K": "宮崎県", "G": "", "C": "都城市" },
    { "K": "三重県", "G": "", "C": "松阪市" },
    { "K": "岐阜県", "G": "", "C": "大垣市" },
    { "K": "茨城県", "G": "", "C": "ひたちなか市" },
    { "K": "栃木県", "G": "", "C": "栃木市" },
    { "K": "長野県", "G": "", "C": "上田市" },
    { "K": "愛知県", "G": "", "C": "刈谷市" },
    { "K": "千葉県", "G": "", "C": "野田市" },
    { "K": "兵庫県", "G": "", "C": "川西市" },
    { "K": "東京都", "G": "", "C": "東村山市" },
    { "K": "愛媛県", "G": "", "C": "今治市" },
    { "K": "埼玉県", "G": "", "C": "久喜市" },
    { "K": "東京都", "G": "", "C": "武蔵野市" },
    { "K": "愛知県", "G": "", "C": "小牧市" },
    { "K": "埼玉県", "G": "", "C": "狭山市" },
    { "K": "鳥取県", "G": "", "C": "米子市" },
    { "K": "東京都", "G": "", "C": "多摩市" },
    { "K": "埼玉県", "G": "", "C": "入間市" },
    { "K": "栃木県", "G": "", "C": "足利市" },
    { "K": "岐阜県", "G": "", "C": "各務原市" },
    { "K": "滋賀県", "G": "", "C": "草津市" },
    { "K": "大阪府", "G": "", "C": "守口市" },
    { "K": "沖縄県", "G": "", "C": "沖縄市" },
    { "K": "埼玉県", "G": "", "C": "三郷市" },
    { "K": "茨城県", "G": "", "C": "土浦市" },
    { "K": "静岡県", "G": "", "C": "藤枝市" },
    { "K": "埼玉県", "G": "", "C": "深谷市" },
    { "K": "埼玉県", "G": "", "C": "朝霞市" },
    { "K": "埼玉県", "G": "", "C": "戸田市" },
    { "K": "宮城県", "G": "", "C": "石巻市" },
    { "K": "茨城県", "G": "", "C": "古河市" },
    { "K": "三重県", "G": "", "C": "桑名市" },
    { "K": "山口県", "G": "", "C": "周南市" },
    { "K": "大阪府", "G": "", "C": "箕面市" },
    { "K": "静岡県", "G": "", "C": "焼津市" },
    { "K": "神奈川県", "G": "", "C": "海老名市" },
    { "K": "千葉県", "G": "", "C": "木更津市" },
    { "K": "愛知県", "G": "", "C": "稲沢市" },
    { "K": "長崎県", "G": "", "C": "諫早市" },
    { "K": "東京都", "G": "", "C": "青梅市" },
    { "K": "千葉県", "G": "", "C": "成田市" },
    { "K": "神奈川県", "G": "", "C": "座間市" },
    { "K": "広島県", "G": "", "C": "尾道市" },
    { "K": "千葉県", "G": "", "C": "我孫子市" },
    { "K": "東京都", "G": "", "C": "国分寺市" },
    { "K": "山口県", "G": "", "C": "岩国市" },
    { "K": "静岡県", "G": "", "C": "富士宮市" },
    { "K": "愛知県", "G": "", "C": "瀬戸市" },
    { "K": "宮城県", "G": "", "C": "大崎市" },
    { "K": "福岡県", "G": "", "C": "飯塚市" },
    { "K": "東京都", "G": "", "C": "小金井市" },
    { "K": "沖縄県", "G": "", "C": "うるま市" },
    { "K": "鹿児島県", "G": "", "C": "霧島市" },
    { "K": "熊本県", "G": "", "C": "八代市" },
    { "K": "三重県", "G": "", "C": "伊勢市" },
    { "K": "山形県", "G": "", "C": "鶴岡市" },
    { "K": "北海道", "G": "", "C": "江別市" },
    { "K": "奈良県", "G": "", "C": "橿原市" },
    { "K": "大阪府", "G": "", "C": "門真市" },
    { "K": "大阪府", "G": "", "C": "大東市" },
    { "K": "宮崎県", "G": "", "C": "延岡市" },
    { "K": "愛知県", "G": "", "C": "半田市" },
    { "K": "大阪府", "G": "", "C": "松原市" },
    { "K": "福島県", "G": "", "C": "会津若松市" },
    { "K": "佐賀県", "G": "", "C": "唐津市" },
    { "K": "埼玉県", "G": "", "C": "鴻巣市" },
    { "K": "奈良県", "G": "", "C": "生駒市" },
    { "K": "栃木県", "G": "", "C": "佐野市" },
    { "K": "愛媛県", "G": "", "C": "新居浜市" },
    { "K": "沖縄県", "G": "", "C": "浦添市" },
    { "K": "北海道", "G": "", "C": "北見市" },
    { "K": "大分県", "G": "", "C": "別府市" },
    { "K": "東京都", "G": "", "C": "東久留米市" },
    { "K": "栃木県", "G": "", "C": "那須塩原市" },
    { "K": "静岡県", "G": "", "C": "掛川市" },
    { "K": "広島県", "G": "", "C": "廿日市市" },
    { "K": "山口県", "G": "", "C": "防府市" },
    { "K": "東京都", "G": "", "C": "昭島市" },
    { "K": "愛知県", "G": "", "C": "東海市" },
    { "K": "滋賀県", "G": "", "C": "彦根市" },
    { "K": "滋賀県", "G": "", "C": "長浜市" },
    { "K": "埼玉県", "G": "", "C": "ふじみ野市" },
    { "K": "岩手県", "G": "", "C": "奥州市" },
    { "K": "滋賀県", "G": "", "C": "東近江市" },
    { "K": "岩手県", "G": "", "C": "一関市" },
    { "K": "埼玉県", "G": "", "C": "富士見市" },
    { "K": "埼玉県", "G": "", "C": "加須市" },
    { "K": "北海道", "G": "", "C": "小樽市" },
    { "K": "福岡県", "G": "", "C": "大牟田市" },
    { "K": "福岡県", "G": "", "C": "春日市" },
    { "K": "石川県", "G": "", "C": "白山市" },
    { "K": "千葉県", "G": "", "C": "鎌ケ谷市" },
    { "K": "香川県", "G": "", "C": "丸亀市" },
    { "K": "兵庫県", "G": "", "C": "三田市" },
    { "K": "大阪府", "G": "", "C": "羽曳野市" },
    { "K": "大阪府", "G": "", "C": "富田林市" },
    { "K": "静岡県", "G": "", "C": "三島市" },
    { "K": "岐阜県", "G": "", "C": "多治見市" },
    { "K": "群馬県", "G": "", "C": "桐生市" },
    { "K": "石川県", "G": "", "C": "小松市" },
    { "K": "大阪府", "G": "", "C": "池田市" },
    { "K": "愛媛県", "G": "", "C": "西条市" },
    { "K": "茨城県", "G": "", "C": "取手市" },
    { "K": "福岡県", "G": "", "C": "筑紫野市" },
    { "K": "千葉県", "G": "", "C": "印西市" },
    { "K": "福岡県", "G": "", "C": "大野城市" },
    { "K": "神奈川県", "G": "", "C": "伊勢原市" },
    { "K": "大阪府", "G": "", "C": "河内長野市" },
    { "K": "鹿児島県", "G": "", "C": "鹿屋市" },
    { "K": "茨城県", "G": "", "C": "筑西市" },
    { "K": "埼玉県", "G": "", "C": "坂戸市" },
    { "K": "山形県", "G": "", "C": "酒田市" },
    { "K": "大阪府", "G": "", "C": "泉佐野市" },
    { "K": "沖縄県", "G": "", "C": "宜野湾市" },
    { "K": "岐阜県", "G": "", "C": "可児市" },
    { "K": "岡山県", "G": "", "C": "津山市" },
    { "K": "福岡県", "G": "", "C": "糸島市" },
    { "K": "愛知県", "G": "", "C": "江南市" },
    { "K": "長野県", "G": "", "C": "佐久市" },
    { "K": "長野県", "G": "", "C": "飯田市" },
    { "K": "北海道", "G": "", "C": "千歳市" },
    { "K": "福岡県", "G": "", "C": "宗像市" },
    { "K": "静岡県", "G": "", "C": "島田市" },
    { "K": "茨城県", "G": "", "C": "神栖市" },
    { "K": "長崎県", "G": "", "C": "大村市" },
    { "K": "新潟県", "G": "", "C": "新発田市" },
    { "K": "新潟県", "G": "", "C": "三条市" },
    { "K": "長野県", "G": "", "C": "安曇野市" },
    { "K": "栃木県", "G": "", "C": "鹿沼市" },
    { "K": "兵庫県", "G": "", "C": "芦屋市" },
    { "K": "千葉県", "G": "", "C": "四街道市" },
    { "K": "埼玉県", "G": "", "C": "八潮市" },
    { "K": "岩手県", "G": "", "C": "花巻市" },
    { "K": "東京都", "G": "", "C": "稲城市" },
    { "K": "愛知県", "G": "", "C": "大府市" },
    { "K": "岩手県", "G": "", "C": "北上市" },
    { "K": "鹿児島県", "G": "", "C": "薩摩川内市" },
    { "K": "埼玉県", "G": "", "C": "東松山市" },
    { "K": "愛知県", "G": "", "C": "日進市" },
    { "K": "富山県", "G": "", "C": "射水市" },
    { "K": "広島県", "G": "", "C": "三原市" },
    { "K": "三重県", "G": "", "C": "伊賀市" },
    { "K": "福井県", "G": "", "C": "坂井市" },
    { "K": "滋賀県", "G": "", "C": "甲賀市" },
    { "K": "静岡県", "G": "", "C": "袋井市" },
    { "K": "兵庫県", "G": "", "C": "高砂市" },
    { "K": "大阪府", "G": "", "C": "摂津市" },
    { "K": "千葉県", "G": "", "C": "茂原市" },
    { "K": "静岡県", "G": "", "C": "御殿場市" },
    { "K": "愛知県", "G": "", "C": "北名古屋市" },
    { "K": "京都府", "G": "", "C": "亀岡市" },
    { "K": "愛知県", "G": "", "C": "あま市" },
    { "K": "秋田県", "G": "", "C": "横手市" },
    { "K": "岐阜県", "G": "", "C": "関市" },
    { "K": "東京都", "G": "", "C": "狛江市" },
    { "K": "茨城県", "G": "", "C": "牛久市" },
    { "K": "大阪府", "G": "", "C": "貝塚市" },
    { "K": "岐阜県", "G": "", "C": "高山市" },
    { "K": "愛知県", "G": "", "C": "知多市" },
    { "K": "埼玉県", "G": "", "C": "和光市" },
    { "K": "神奈川県", "G": "", "C": "綾瀬市" },
    { "K": "東京都", "G": "", "C": "東大和市" },
    { "K": "奈良県", "G": "", "C": "大和郡山市" },
    { "K": "滋賀県", "G": "", "C": "守山市" },
    { "K": "愛知県", "G": "", "C": "尾張旭市" },
    { "K": "大分県", "G": "", "C": "中津市" },
    { "K": "愛媛県", "G": "", "C": "四国中央市" },
    { "K": "北海道", "G": "", "C": "室蘭市" },
    { "K": "千葉県", "G": "", "C": "君津市" },
    { "K": "新潟県", "G": "", "C": "柏崎市" },
    { "K": "山形県", "G": "", "C": "米沢市" },
    { "K": "滋賀県", "G": "", "C": "近江八幡市" },
    { "K": "福井県", "G": "", "C": "越前市" },
    { "K": "京都府", "G": "", "C": "長岡京市" },
    { "K": "埼玉県", "G": "", "C": "飯能市" },
    { "K": "京都府", "G": "", "C": "舞鶴市" },
    { "K": "愛知県", "G": "", "C": "蒲郡市" },
    { "K": "北海道", "G": "", "C": "岩見沢市" },
    { "K": "東京都", "G": "", "C": "あきる野市" },
    { "K": "宮城県", "G": "", "C": "名取市" },
    { "K": "埼玉県", "G": "", "C": "行田市" },
    { "K": "埼玉県", "G": "", "C": "本庄市" },
    { "K": "栃木県", "G": "", "C": "真岡市" },
    { "K": "奈良県", "G": "", "C": "香芝市" },
    { "K": "京都府", "G": "", "C": "木津川市" },
    { "K": "栃木県", "G": "", "C": "日光市" },
    { "K": "秋田県", "G": "", "C": "大仙市" },
    { "K": "兵庫県", "G": "", "C": "豊岡市" },
    { "K": "京都府", "G": "", "C": "福知山市" },
    { "K": "新潟県", "G": "", "C": "燕市" },
    { "K": "東京都", "G": "", "C": "国立市" },
    { "K": "岐阜県", "G": "", "C": "中津川市" },
    { "K": "茨城県", "G": "", "C": "龍ケ崎市" },
    { "K": "三重県", "G": "", "C": "名張市" },
    { "K": "鹿児島県", "G": "", "C": "姶良市" },
    { "K": "東京都", "G": "", "C": "清瀬市" },
    { "K": "宮城県", "G": "", "C": "登米市" },
    { "K": "熊本県", "G": "", "C": "天草市" },
    { "K": "埼玉県", "G": "", "C": "志木市" },
    { "K": "山梨県", "G": "", "C": "甲斐市" },
    { "K": "群馬県", "G": "", "C": "館林市" },
    { "K": "兵庫県", "G": "", "C": "三木市" },
    { "K": "大阪府", "G": "", "C": "交野市" },
    { "K": "福島県", "G": "", "C": "須賀川市" },
    { "K": "埼玉県", "G": "", "C": "桶川市" },
    { "K": "秋田県", "G": "", "C": "由利本荘市" },
    { "K": "京都府", "G": "", "C": "城陽市" },
    { "K": "群馬県", "G": "", "C": "渋川市" },
    { "K": "大阪府", "G": "", "C": "泉大津市" },
    { "K": "兵庫県", "G": "", "C": "たつの市" },
    { "K": "埼玉県", "G": "", "C": "蕨市" },
    { "K": "佐賀県", "G": "", "C": "鳥栖市" },
    { "K": "京都府", "G": "", "C": "京田辺市" },
    { "K": "茨城県", "G": "", "C": "笠間市" },
    { "K": "福岡県", "G": "", "C": "太宰府市" },
    { "K": "愛知県", "G": "", "C": "犬山市" },
    { "K": "茨城県", "G": "", "C": "石岡市" },
    { "K": "愛知県", "G": "", "C": "碧南市" },
    { "K": "千葉県", "G": "", "C": "香取市" },
    { "K": "愛知県", "G": "", "C": "知立市" },
    { "K": "栃木県", "G": "", "C": "大田原市" },
    { "K": "埼玉県", "G": "", "C": "吉川市" },
    { "K": "福岡県", "G": "", "C": "行橋市" },
    { "K": "東京都", "G": "", "C": "武蔵村山市" },
    { "K": "愛媛県", "G": "", "C": "宇和島市" },
    { "K": "京都府", "G": "", "C": "八幡市" },
    { "K": "北海道", "G": "", "C": "恵庭市" },
    { "K": "埼玉県", "G": "", "C": "鶴ヶ島市" },
    { "K": "和歌山県", "G": "", "C": "田辺市" },
    { "K": "徳島県", "G": "", "C": "阿南市" },
    { "K": "山梨県", "G": "", "C": "南アルプス市" },
    { "K": "愛知県", "G": "", "C": "豊明市" },
    { "K": "秋田県", "G": "", "C": "大館市" },
    { "K": "岡山県", "G": "", "C": "総社市" },
    { "K": "滋賀県", "G": "", "C": "栗東市" },
    { "K": "大阪府", "G": "", "C": "柏原市" },
    { "K": "茨城県", "G": "", "C": "守谷市" },
    { "K": "福井県", "G": "", "C": "鯖江市" },
    { "K": "千葉県", "G": "", "C": "八街市" },
    { "K": "愛知県", "G": "", "C": "清須市" },
    { "K": "長野県", "G": "", "C": "塩尻市" },
    { "K": "福岡県", "G": "", "C": "福津市" },
    { "K": "茨城県", "G": "", "C": "鹿嶋市" },
    { "K": "山梨県", "G": "", "C": "笛吹市" },
    { "K": "大分県", "G": "", "C": "佐伯市" },
    { "K": "東京都", "G": "", "C": "千代田区" },
    { "K": "長野県", "G": "", "C": "伊那市" },
    { "K": "岐阜県", "G": "", "C": "羽島市" },
    { "K": "静岡県", "G": "", "C": "伊東市" },
    { "K": "埼玉県", "G": "", "C": "北本市" },
    { "K": "宮城県", "G": "", "C": "栗原市" },
    { "K": "沖縄県", "G": "", "C": "豊見城市" },
    { "K": "福岡県", "G": "", "C": "柳川市" },
    { "K": "熊本県", "G": "", "C": "玉名市" },
    { "K": "福井県", "G": "", "C": "敦賀市" },
    { "K": "奈良県", "G": "", "C": "天理市" },
    { "K": "千葉県", "G": "", "C": "袖ケ浦市" },
    { "K": "千葉県", "G": "", "C": "旭市" },
    { "K": "大阪府", "G": "", "C": "藤井寺市" },
    { "K": "沖縄県", "G": "", "C": "名護市" },
    { "K": "群馬県", "G": "", "C": "藤岡市" },
    { "K": "石川県", "G": "", "C": "加賀市" },
    { "K": "宮城県", "G": "", "C": "多賀城市" },
    { "K": "大分県", "G": "", "C": "日田市" },
    { "K": "千葉県", "G": "", "C": "白井市" },
    { "K": "山形県", "G": "", "C": "天童市" },
    { "K": "愛知県", "G": "", "C": "みよし市" },
    { "K": "香川県", "G": "", "C": "三豊市" },
    { "K": "熊本県", "G": "", "C": "合志市" },
    { "K": "奈良県", "G": "", "C": "大和高田市" },
    { "K": "埼玉県", "G": "", "C": "蓮田市" },
    { "K": "兵庫県", "G": "", "C": "丹波市" },
    { "K": "宮城県", "G": "", "C": "気仙沼市" },
    { "K": "沖縄県", "G": "", "C": "糸満市" },
    { "K": "愛知県", "G": "", "C": "津島市" },
    { "K": "茨城県", "G": "", "C": "常総市" },
    { "K": "愛知県", "G": "", "C": "愛西市" },
    { "K": "和歌山県", "G": "", "C": "橋本市" },
    { "K": "福岡県", "G": "", "C": "八女市" },
    { "K": "青森県", "G": "", "C": "十和田市" },
    { "K": "山口県", "G": "", "C": "山陽小野田市" },
    { "K": "愛知県", "G": "", "C": "長久手市" },
    { "K": "大阪府", "G": "", "C": "泉南市" },
    { "K": "埼玉県", "G": "", "C": "秩父市" },
    { "K": "宮崎県", "G": "", "C": "日向市" },
    { "K": "栃木県", "G": "", "C": "下野市" },
    { "K": "福島県", "G": "", "C": "白河市" },
    { "K": "福岡県", "G": "", "C": "小郡市" },
    { "K": "愛知県", "G": "", "C": "田原市" },
    { "K": "福島県", "G": "", "C": "南相馬市" },
    { "K": "長野県", "G": "", "C": "千曲市" },
    { "K": "和歌山県", "G": "", "C": "紀の川市" },
    { "K": "福岡県", "G": "", "C": "古賀市" },
    { "K": "愛知県", "G": "", "C": "常滑市" },
    { "K": "大阪府", "G": "", "C": "大阪狭山市" },
    { "K": "千葉県", "G": "", "C": "銚子市" },
    { "K": "福島県", "G": "", "C": "伊達市" },
    { "K": "千葉県", "G": "", "C": "東金市" },
    { "K": "北海道", "G": "", "C": "北広島市" },
    { "K": "静岡県", "G": "", "C": "湖西市" },
    { "K": "香川県", "G": "", "C": "観音寺市" },
    { "K": "新潟県", "G": "", "C": "村上市" },
    { "K": "石川県", "G": "", "C": "野々市市" },
    { "K": "神奈川県", "G": "", "C": "逗子市" },
    { "K": "熊本県", "G": "", "C": "宇城市" },
    { "K": "北海道", "G": "", "C": "石狩市" },
    { "K": "京都府", "G": "", "C": "向日市" },
    { "K": "岐阜県", "G": "", "C": "美濃加茂市" },
    { "K": "岡山県", "G": "", "C": "玉野市" },
    { "K": "東京都", "G": "", "C": "福生市" },
    { "K": "長野県", "G": "", "C": "茅野市" },
    { "K": "岐阜県", "G": "", "C": "瑞穂市" },
    { "K": "福岡県", "G": "", "C": "直方市" },
    { "K": "山口県", "G": "", "C": "下松市" },
    { "K": "大阪府", "G": "", "C": "高石市" },
    { "K": "岩手県", "G": "", "C": "滝沢市" },
    { "K": "岐阜県", "G": "", "C": "土岐市" },
    { "K": "大阪府", "G": "", "C": "四條畷市" },
    { "K": "群馬県", "G": "", "C": "安中市" },
    { "K": "奈良県", "G": "", "C": "桜井市" },
    { "K": "新潟県", "G": "", "C": "南魚沼市" },
    { "K": "徳島県", "G": "", "C": "鳴門市" },
    { "K": "島根県", "G": "", "C": "浜田市" },
    { "K": "埼玉県", "G": "", "C": "日高市" },
    { "K": "滋賀県", "G": "", "C": "湖南市" },
    { "K": "東京都", "G": "", "C": "羽村市" },
    { "K": "青森県", "G": "", "C": "むつ市" },
    { "K": "和歌山県", "G": "", "C": "岩出市" },
    { "K": "福島県", "G": "", "C": "二本松市" },
    { "K": "茨城県", "G": "", "C": "那珂市" },
    { "K": "沖縄県", "G": "", "C": "宮古島市" },
    { "K": "埼玉県", "G": "", "C": "羽生市" },
    { "K": "大分県", "G": "", "C": "宇佐市" },
    { "K": "佐賀県", "G": "", "C": "伊万里市" },
    { "K": "茨城県", "G": "", "C": "坂東市" },
    { "K": "埼玉県", "G": "", "C": "白岡市" },
    { "K": "宮城県", "G": "", "C": "塩竈市" },
    { "K": "鹿児島県", "G": "", "C": "出水市" },
    { "K": "宮城県", "G": "", "C": "富谷市" },
    { "K": "新潟県", "G": "", "C": "佐渡市" },
    { "K": "青森県", "G": "", "C": "五所川原市" },
    { "K": "大阪府", "G": "", "C": "阪南市" },
    { "K": "広島県", "G": "安芸郡", "C": "府中町" },
    { "K": "静岡県", "G": "", "C": "裾野市" },
    { "K": "京都府", "G": "", "C": "京丹後市" },
    { "K": "宮崎県", "G": "", "C": "日南市" },
    { "K": "熊本県", "G": "", "C": "荒尾市" },
    { "K": "広島県", "G": "", "C": "三次市" },
    { "K": "茨城県", "G": "", "C": "結城市" },
    { "K": "香川県", "G": "", "C": "坂出市" },
    { "K": "滋賀県", "G": "", "C": "野洲市" },
    { "K": "岩手県", "G": "", "C": "宮古市" },
    { "K": "石川県", "G": "", "C": "七尾市" },
    { "K": "福岡県", "G": "", "C": "朝倉市" },
    { "K": "福岡県", "G": "", "C": "那珂川市" },
    { "K": "埼玉県", "G": "", "C": "幸手市" },
    { "K": "秋田県", "G": "", "C": "能代市" },
    { "K": "茨城県", "G": "", "C": "つくばみらい市" },
    { "K": "三重県", "G": "", "C": "亀山市" },
    { "K": "新潟県", "G": "", "C": "十日町市" },
    { "K": "山口県", "G": "", "C": "光市" },
    { "K": "千葉県", "G": "", "C": "富里市" },
    { "K": "群馬県", "G": "", "C": "みどり市" },
];
const city_size = address.length;
const getAddress = () => {
    const idx = Math.floor(Math.random() * city_size);
    return {
        KEN: address[idx]['K'],
        GUN: address[idx]['G'],
        CITY: address[idx]['C']
    };
};
exports.getAddress = getAddress;
