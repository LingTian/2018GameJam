// All game singletons

let choiceId = null;
const MAX_VAL = 100;
const START_LEVEL = 0;
const EVENT_PER_LEVEL = 8;
const STAGE_IDS = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

let eventsByLevel = {};
let eventMap = {};
let currentLevel;
let currentEvents = [];
let player;
let currentMaxPage;
let currentPage;
let isEnd;

// Nebulas

var NebPay = require("nebpay");
var nebPay = new NebPay();

var nebulas = require("nebulas"),
    Account = nebulas.Account,
    neb = new nebulas.Neb();
neb.setRequest(new nebulas.HttpRequest("https://mainnet.nebulas.io"));
var dappAddress = "n1r59HEWHF3bLudBZnpdhhxrdkKNGz1nBKb";

function getAdam0() {
    const func = "getAdam0";
    const from = Account.NewAccount().getAddressString();
    const args = 0;
    const callArgs = JSON.stringify([args]);
    const value = "0";
    const nonce = "0";
    const gas_price = "1000000";
    const gas_limit = "2000000";
    const contract = {
        "function": func,
        "args": callArgs
    }

    neb.api.call(from, dappAddress, value, nonce, gas_price, gas_limit, contract).then(function (resp) {
        const result = resp.result;
        const resultString = JSON.parse(result);
        console.log("adam: ", resultString)
    }).catch(function (err) {
        console.log("net work unstable, rereading...");
    })
}

function convertToImmutableGenesisCharacter() {
    //0: IMMUTABLE;
    const character = new Character(player.name, 0);
    character.hp = player.fatigue;
    character.mp = player.spirit;
    character.str = player.power;
    character.int = player.intelligence;
    character.luck = player.gold;
    character.san = player.goodness;
    character.charm = player.agility;
    return character;
}

function uploadData() {
    const to = dappAddress;
    const value = 0;
    console.log("********* call smart contract \"sendTransaction\" *****************")

    const func = "insertCharacter";
    let serialized = convertToImmutableGenesisCharacter().serialize();
    console.log("s1: " + serialized);
    serialized = serialized.replace(/[\\\"]/g, "\\$&");
    console.log("s2: " + serialized);
    const args = "[\"" + serialized + "\"]";
    console.log(args);

    nebPay.call(to, value, func, args, {
        qrcode: {
            showQRCode: false
        },
        goods: {
            name: "test",
            desc: "test goods"
        },
        listener: cbCallDapp
    });
}

function cbCallDapp(resp) {
    console.log("Callback Resp: " + JSON.stringify(resp))
}

//Data loading

function createEvents() {
    const loadfooter = [];

    loadfooter.push("Many who are first will be last, and the last first. ");
    loadfooter.push("Let there be light: and there was light.");
    loadfooter.push("Many who are first will be last, and the last first. ");
    loadfooter.push("I am the way and the truth and the life. No one comes to the Father except through me. ");
    loadfooter.push("Many who are first will be last, and the last first. ");
    loadfooter.push("Even 'sinners' love those who love them.");
    loadfooter.push("Forgive, and you will be forgiven. ");
    loadfooter.push("Do not judge, and you will not be judged.  ");
    loadfooter.push("He who has been forgiven little loves little.");
    loadfooter.push("Any kingdom divided against itself will be ruined, and a house divided against itself will fall.   ");
    loadfooter.push("Do not be conceited.");
    loadfooter.push("Wise about what is good, and innocent about what is evil.");
    loadfooter.push("Let no one deceive you with empty words.");
    loadfooter.push("A great forest is set on fire by a small spark.");
    loadfooter.push("Out of the same mouth come praise and cursing.");
    loadfooter.push("Avoid godless chatter.");

    const allEvents = [];
    allEvents.push(createStatsChangeEvent(1, "修女", "img/13.png", "冒险家，你能帮我讨伐邪恶的术士嘛？", "义不容辞。", "我还有要事在身.", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 0, 10], [0, 0, 0, 0, 0, -10], ""));
    allEvents.push(createStatsChangeEvent(2, "修女", "img/13.png", "你愿意帮忙捐助一下教会嘛？", "乐于奉献。", "我手边有点紧.", "1", EventType.NORMAL, [-1, -1], [10, -10, 0, 0, 0, 10], [5, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(3, "修女", "img/13.png", "教会的经书隐藏着智慧。", "能借我阅读一下嘛？", "我还是想休息一下。", "1", EventType.NORMAL, [-1, -1], [0, 0, 10, 10, 10, 0], [10, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(4, "修女", "img/13.png", "我很后悔我之前做过的错事，能否帮我去跟骑士道歉？", "我可以帮助你，愿你能得到解脱。", "如果做错的事情都可以重来，那么经历将毫无意义。", "3", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 0, 20], [-10, 0, 0, 0, 0, -20], ""));
    allEvents.push(createStatsChangeEvent(5, "修女", "img/13.png", "听闻东方有种神奇的草药，我这里有它标示的地图，现在免费赠送给您。", "修女的话似乎可信，值得尝试。", "此去不知归途，还是休息休息吧。", "2", EventType.NORMAL, [-1, -1], [-20, 0, 0, 0, 0, 0], [10, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(6, "修女", "img/13.png", "西边悬崖上有把勇者之剑，快去拿回来吧～", "赶紧去取一下。", "悬崖上真的只有宝剑嘛？", "5", EventType.NORMAL, [600, 500], [0, 0, 0, 0, 0, 10], [0, 0, 0, 0, 0, -10], ""));
    allEvents.push(createStatsChangeEvent(7, "牧师", "img/3.png", "年轻的冒险者，来吃些免费的食物吧。", "正有此意。", "不劳者不食.", "1", EventType.NORMAL, [-1, -1], [10, 0, 0, 0, 0, -10], [-10, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(8, "牧师", "img/3.png", "教会附近有一些僵尸，能否帮忙清理。", "要我出手的话可是费用不菲。", "就顺手帮一下吧。", "1", EventType.NORMAL, [-1, -1], [-10, 20, 0, 0, 0, -10], [-10, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(9, "牧师", "img/3.png", "这里有些杂书，免费赠予给你。", "免费送的东西肯定心怀鬼胎。", "来看看里面有没有有用的信息吧。", "1", EventType.NORMAL, [-1, -1], [10, 0, 0, 0, 0, -10], [-10, 0, 10, 10, 10, 0], ""));
    allEvents.push(createStatsChangeEvent(10, "牧师", "img/3.png", "生前我也曾经迷惘挣扎，现在只能提供一些有用的信息给你。", "具体是什么呢?。", "孤魂野鬼，选择走开。", "5", EventType.NORMAL, [501, -1], [10, 10, 0, 0, 0, 10], [0, 0, 0, 0, 0, -10], ""));
    allEvents.push(createStatsChangeEvent(66, "医生", "img/1.png", "能否借我些金钱去帮助我的病人？", "我又不是慈善家。", "我只有这些了，代表我的心意。", "1", EventType.NORMAL, [-1, -1], [10, 0, 0, 0, 0, -10], [0, -10, 0, 0, 0, 10], ""));
    //分叉
    allEvents.push(createStatsChangeEvent(11, "医生", "img/1.png", "能否帮我寻找一些草药？", "如果报酬不菲，那自然可以。", "我乐于前往。", "1", EventType.NORMAL, [-1, -1], [0, 10, 0, 0, 0, 10], [-10, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(12, "医生", "img/1.png", "需要治疗下吗?", "我刚好需要休息。", "不必了。", "1", EventType.NORMAL, [-1, -1], [10, -10, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    //special
    allEvents.push(createStatsChangeEvent(14, "医生", "img/1.png", "交不起钱的穷人，能否帮我驱赶一下。", "报酬足够的话可以的。", "不能违背自己的良心啊。", "3", EventType.NORMAL, [608, -1], [0, 20, 0, 0, 0, -10], [10, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(15, "医生", "img/1.png", "医者仁心，王子病重而亡。王却因此处死我，能否帮我复仇。", "公正与怜悯，我会帮助你！", "你将带着怨恨长眠于此。。", "1", EventType.NORMAL, [615, -1], [-10, 0, 10, 10, 10, 20], [10, 0, 0, 0, 0, -20], ""));
    allEvents.push(createStatsChangeEvent(16, "僧侣", "img/1.png", "需要学习下武技嘛?", "当然愿意。", "还不如休息一下。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 10, 0, 0, 0], [10, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(17, "僧侣", "img/1.png", "年轻的冒险家需要治疗吗?", "感谢你的帮助。", "我并不信任你。", "1", EventType.NORMAL, [-1, -1], [20, 0, 0, 0, 0, 0], [-10, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(18, "僧侣", "img/1.png", "我有一本武技的密卷，想要购买吗?", "如果不交出密卷，你只有死路一条。", "好的，我买下来了。", "1", EventType.NORMAL, [607, -1], [-10, 0, 20, 0, 0, -20], [0, -10, 20, 0, 0, -1], ""));
    allEvents.push(createStatsChangeEvent(19, "僧侣", "img/1.png", "我正在被疯狂的教会追杀，你能保护我吗？", "保护他。", "听说告发他还有奖金。", "1", EventType.NORMAL, [615, -1], [0, 0, 0, 0, 0, 20], [0, 20, 0, 0, 0, -20], ""));

    allEvents.push(createStatsChangeEvent(20, "白骑士", "img/1.png", "每一个人都是勇士，打败敌人最好的方法就是让自己变得更强。", "我想跟您学习武技。", "让我拜您为师吧。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 10, 0, 0, 0], [-10, -10, 20, 10, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(21, "白骑士", "img/1.png", "骑士也许会妥协，但是其实绝不会放弃执行正义。", "你说的很对。", "似乎过于迂腐。", "1", EventType.NORMAL, [-1, -1], [0, 0, 0, 0, 0, 10], [0, 0, 0, 0, 0, -10], ""));
    allEvents.push(createStatsChangeEvent(22, "白骑士", "img/1.png", "在童话里，王子和公主会很幸福很幸福的永远生活在一起，他们看不见的是骑士的守护。", "这就是骑士的指责。", "似乎骑士的压力过于重大。", "1", EventType.NORMAL, [-1, -1], [10, 0, 10, 10, 10, 10], [-10, 0, -10, -10, -10, -10], ""));

    allEvents.push(createStatsChangeEvent(20, "黑骑士", "img/4.png", "曾经的天真，帮助愚蠢的我长大。", "这不是你堕落的理由。", "也许他是个真正的骑士。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 0, 10], [-10, 0, 0, 0, 0, -10], ""));
    allEvents.push(createStatsChangeEvent(21, "黑骑士", "img/4.png", "大众总喜欢将真相扭曲到自己可以接受的程度，这就是一种充满惰性的思维方式。", "我想跟你学习武艺。", "我并不认为你很强大。", "1", EventType.NORMAL, [-1, 610], [0, 0, 10, 0, 0, -10], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(22, "黑骑士", "img/4.png", "在现实里，王子和公主可能不会在一起，因为他们都以为自己是骑士，只会默默的等待。", "非常悲哀的存在呢。", "也许等待才能会有奇迹的结局。", "1", EventType.NORMAL, [-1, -1], [10, 0, 10, 10, 10, 10], [-10, 0, -10, -10, -10, -10], ""));
    allEvents.push(createStatsChangeEvent(23, "黑骑士", "img/4.png", "有人需要真皮，所以才有了猎人去虐杀动物， 最终被捕的是猎人，那么披着真皮的人呢？", "这就是堕落的借口吗？", "也许错的不是他。", "1", EventType.NORMAL, [-1, -1], [0, 0, 0, 0, 0, 10], [10, 0, 10, 10, 10, -10], ""));

    allEvents.push(createStatsChangeEvent(24, "蒙面旅人", "img/12.png", "朋友，你见到过大海吗？", "大海是什么。", "我并不想去做无谓的冒险。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(25, "蒙面旅人", "img/12.png", "人生的轨迹纵横交错，就是世界上最美的一幅图。", "交错的命运是为了什么呢？", "我对你没有任何所求。", "3", EventType.NORMAL, [620, 606], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));

    allEvents.push(createStatsChangeEvent(26, "商人", "img/1.png", "我这里正需要人手，要不要来打零工换些金钱。", "我真有此意。", "没什么时间。", "1", EventType.NORMAL, [-1, -1], [-10, 10, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(27, "商人", "img/1.png", "（打盹）", "摸摸看他身手有啥？", "还是不打扰他了。", "1", EventType.NORMAL, [-1, -1], [0, 10, 0, 0, 0, -10], [0, 0, 0, 0, 0, 10], ""));

    allEvents.push(createStatsChangeEvent(28, "巫妖", "img/11.png", "亡灵国度是容不得活人的。", "人类世界就容得下活人吗？", "这不过是亡灵虚假的谎言。", "1", EventType.NORMAL, [-1, -1], [0, 0, 0, 0, 0, -10], [0, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(29, "巫妖", "img/11.png", "年份即智慧，什么阴谋、背叛、欺骗没有见识过。", "我想向您请教魔法的知识", "但是这不是你背叛的借口。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 10, 0], [0, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(30, "巫妖", "img/11.png", "会去尊重崇尚献出生命的人，都是与你无关紧要的人。真正在乎你的人，只希望你好好的活着。", "为了守护所爱之人，有些牺牲是必须的 ", "我会保护好自己。", "1", EventType.NORMAL, [-1, -1], [10, 0, 10, 10, 10, 10], [10, 0, 10, 10, 10, -10], ""));

    allEvents.push(createStatsChangeEvent(31, "盗贼", "img/12.png", "要不要跟我学学身手。", "我正好想变的更加灵活。", "偷窃的本事还是算了。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 10, 0, 0], [0, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(29, "盗贼", "img/12.png", "跟我一起去历练吧。", "刚好出去历练一下", "成为一个盗贼并没有很有趣。", "1", EventType.NORMAL, [-1, -1], [10, 10, 10, 10, 10, 0], [0, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(30, "法师", "img/3.png", "要么安于现状，要么改变现状，改变的总是要付出。", "我愿意跟你修炼。", "要钱还是算了吧。", "1", EventType.NORMAL, [-1, -1], [-10, -10, 0, 0, 20, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(31, "法师", "img/3.png", "听说过法师塔吗？", "我想进入学习。", "我会保护好自己。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 30, 0, 0], [0, 0, 0, 0, 0, -10], ""));
    allEvents.push(createStatsChangeEvent(32, "法师", "img/3.png", "知识才是一个魔法师最虔诚的信仰。", "知识也是我的信仰。", "我并不信仰知识。", "1", EventType.NORMAL, [-1, -1], [0, 0, 0, 0, 10, 10], [0, 0, 0, 0, -10, -10], ""));
    allEvents.push(createStatsChangeEvent(33, "野鬼", "img/1.png", "失去的，就是失去的，时间什么都不会冲淡，只会让自己对过去的事情变得麻木。", "还是不要打扰这个孤独的灵魂。", "鬼魂似乎想要传达什么。", "1", EventType.NORMAL, [-1, -1], [10, 0, 0, 0, 0, 0], [10, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(34, "猎人", "img/5.png", "跟我一起去打猎吧。", "去练练身手也不错。", "确实想打猎换点钱。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 10, 0, 0], [-10, 10, 0, 0, 0, 0], ""));

    //new
    allEvents.push(createStatsChangeEvent(35, "密探", "img/7.png", "想要钱嘛，告诉我点消息？", "告诉他人的秘密。", "此等不义之举不能参与。", "1", EventType.NORMAL, [-1, -1], [0, 10, 0, 0, 0, -10], [0, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(36, "牧师", "img/3.png", "这座教堂里有一泉从天国流淌下来的圣水，传说被洗涤的人会更加的好运。", "请洗涤我。", "我从不相信传说。", "1", EventType.NORMAL, [-1, -1], [10, 0, 10, 10, 10, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(37, "牧师", "img/3.png", "城外有一批战争的难民我们应该去救援他们吗？", "我会保护他们。", "我们不必去。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 0, 10], [0, 0, 0, 0, 0, -10], ""));
    allEvents.push(createStatsChangeEvent(38, "士兵", "img/7.png", "我是一名现役的军官，是否需要我传授你一些武艺？？", "我想听听。", "我没有多余的金币。", "1", EventType.NORMAL, [-1, -1], [-10, -10, 10, 10, 0, 1], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(39, "白骑士", "img/1.png", "荣誉的背后，是千百倍的心酸。", "荣耀，与你同在。", "有人考虑过骑士的感受吗。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 10, 10, 10, 10], [-10, 0, 10, 10, 10, -10], ""));
    allEvents.push(createStatsChangeEvent(40, "白骑士", "img/1.png", "世上总有一些人值得用一生去守护。", "我也有想要守护的人。", "我先要保护我自己。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 10, 10, 10, 10], [-10, 0, 0, 0, 0, -10], ""));
    allEvents.push(createStatsChangeEvent(41, "黑骑士", "img/4.png", "手中有剑，便提剑前行；手中无剑，便忘剑前进。", "言之有理。", "手无寸铁该如何战斗。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 10, 10, 10, -10], [-10, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(42, "黑骑士", "img/4.png", "伟大的代价就是责任。", "我想听听。", "没空理会。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 10, 10, 0, -10], [0, 0, 0, 0, 0, 10], ""));

    allEvents.push(createStatsChangeEvent(43, "猎人", "img/5.png", "需要跟我学习猎人技巧吗。", "听起来不错。", "要钱就算了。", "1", EventType.NORMAL, [-1, -1], [-10, -10, 0, 0, 10, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(44, "商人", "img/3.png", "我这里有两个上古的圣物，你选一个吧。", "腐朽的巨剑。", "泛黄的魔法书。", "1", EventType.NORMAL, [-1, -1], [0, 0, 10, 0, 0, 0], [0, 0, 0, 0, 10, 0], ""));
    allEvents.push(createStatsChangeEvent(45, "法师", "img/3.png", "我这里有两个法器暂时不用，送你一个吧", "发光的魔法球。", "充满魔力的法杖。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 10, 0], [-10, 0, 0, 0, 20, 0], ""));
    allEvents.push(createStatsChangeEvent(46, "酒馆老板", "img/2.png", "需要休息吗？", "正有此意。", "手边没钱。", "1", EventType.NORMAL, [-1, -1], [30, -30, 0, 0, 0, 0], [-5, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(47, "酒馆老板", "img/2.png", "来吃顿好的吧。", "正有此意。", "手边没钱。", "1", EventType.NORMAL, [-1, -1], [20, -20, 0, 0, 0, 0], [-5, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(48, "酒馆老板", "img/2.png", "要不要来喝一杯。", "正有此意。", "手边没钱。", "1", EventType.NORMAL, [-1, -1], [-10, -10, 0, 0, 0, 0], [-5, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(49, "酒馆老板", "img/2.png", "要不要来打工赚点钱。", "刚好手边有点紧。", "没时间浪费精力了。", "1", EventType.NORMAL, [-1, -1], [-10, 10, 0, 0, 0, 0], [5, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(50, "酒馆老板", "img/2.png", "上次旅行的法师落下了个法杖，你需要吗？", "看起来很不错，买了！", "刚好手边有点紧。", "1", EventType.NORMAL, [-1, -1], [0, -10, 0, 0, 10, 0], [5, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(51, "酒馆老板", "img/2.png", "上次旅行的战士落下了个巨剑，你需要吗？", "看起来很不错，买了！", "刚好手边有点紧。", "1", EventType.NORMAL, [-1, -1], [0, -10, 10, 0, 0, 0], [5, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(52, "酒馆老板", "img/2.png", "上次旅行的盗贼落下了个匕首，你需要吗？", "看起来很不错，买了！", "刚好手边有点紧。", "1", EventType.NORMAL, [-1, -1], [0, -10, 0, 10, 0, 0], [5, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(53, "亚当", "img/1.png", "传闻黑骑士因修女而堕落。", "原来如此", "可怜的骑士。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 0, 10], [-10, 0, 0, 0, 0, -10], ""));
    allEvents.push(createStatsChangeEvent(54, "亚当", "img/1.png", "据说北方的洞窟里有一只魔龙", "我也听说类似的传说", "让我来想想如何打败它。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 0, 0], [-10, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(55, "亚当", "img/1.png", "善良的王和黑暗的王都是由迷途的灵魂幻化而成？", "你知道白色的王的具体消息吗？", "你知道黑色的王的的具体消息吗？", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 0, 0], [-10, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(55, "亚当", "img/1.png", "世间万物皆有两面性，灵魂亦亦不能跳出规则。", "你是在说灵魂的反转吗？", "具体的规则是？", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 0, 0], [-10, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(56, "矮人", "img/2.png", "需要矮人的烈酒吗？", "真有此意？", "手边没钱了？", "1", EventType.NORMAL, [-1, -1], [10, 10, 0, 0, 0, 0], [5, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(57, "矮人", "img/2.png", "需要跟我学矮人优秀的战斗技巧吗？", "我正好想跟您学习？", "并不是很感兴趣？", "1", EventType.NORMAL, [-1, -1], [-10, -10, 10, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(58, "蒙面的旅人", "img/12.png", "是否要跟我学习下偷窃技术？", "我正好想跟您学习？", "并不是很感兴趣？", "1", EventType.NORMAL, [-1, -1], [-10, -10, 0, 10, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(59, "地狱犬", "img/8.png", "狗爱他们的朋友,咬他们的敌人,和人不同。", "看招吧恶魔", "似乎也有道理", "1", EventType.NORMAL, [-1, -1], [-20, 0, 0, 0, 0, 10], [0, 0, 0, 0, 0, -10], ""));
    allEvents.push(createStatsChangeEvent(60, "蒙面的旅人", "img/12.png", "是否要跟我学习下法术？", "我正好想跟您学习？", "并不是很感兴趣？", "1", EventType.NORMAL, [-1, -1], [-10, -10, 0, 0, 10, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(61, "蒙面的旅人", "img/12.png", "是否要跟我学习下战斗技巧？", "我正好想跟您学习？", "并不是很感兴趣？", "1", EventType.NORMAL, [-1, -1], [-10, -10, 10, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(62, "夜枭", "img/116.png", "不知从哪一天开始，我喜欢上了黑夜。", "黑夜给了你力量吗？", "为何？", "1", EventType.NORMAL, [-1, -1], [0, 0, 10, 10, 10, -10], [0, 0, -10, -10, -10, 10], ""));
    allEvents.push(createStatsChangeEvent(63, "巫妖", "img/11.png", "转瞬拜年，诸事无常。", "巫妖不会懂得生命的意义", "我也想获得长生", "1", EventType.NORMAL, [-1, -1], [0, 0, 10, 10, 10, 10], [0, 0, 10, 10, 10, -10], ""));
    allEvents.push(createStatsChangeEvent(64, "黑骑士", "img/4.png", "我将会为公主的幸福之路献上我的尸骸。", "骑士最终的结局就是被公主杀死。", "你需要更理智的看待爱情。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 0, -10], [-10, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(65, "密探", "img/7.png", "能帮我去偷个消息吗？。", "如果有钱的话。", "这种事情我可不干。", "1", EventType.NORMAL, [-1, -1], [-10, 20, 0, 0, 0, -10], [0, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(66, "夜枭", "img/116.png", "不知从哪一天开始，我喜欢上了黑夜。", "黑夜给了你力量吗？", "为何？", "1", EventType.NORMAL, [-1, -1], [0, 0, 10, 10, 10, -10], [0, 0, -10, -10, -10, 10], ""));

    allEvents.push(createStatsChangeEvent(67, "巫妖", "img/11.png", " 就是因为自己非常怕死，所以才会对别人的死亡流下眼泪。", "巫妖也会流眼泪？️", "邪恶的巫妖从不流眼泪。", "1", EventType.NORMAL, [-1, -1], [10, 0, 10, 10, 10, -10], [10, 0, 10, 10, 10, 10], ""));
    allEvents.push(createStatsChangeEvent(68, "黑骑士", "img/4.png", "若人生只如初见 倾一世也必定恪然执守。", "人生没有重来的机会。", "你是后悔你的选择吗？", "1", EventType.NORMAL, [-1, -1], [-10, 0, 10, 10, 0, 10], [-10, 0, 10, 10, 0, -10], ""));


    allEvents.push(createStatsChangeEvent(69, "亚当", "img/1.png", "我知道有人是爱我的，但我好像缺乏爱人的能力。", "你知道谁爱你吗？", "你知道你爱谁吗？", "1", EventType.NORMAL, [-1, -1], [10, 0, 0, 0, 0, 10], [10, 0, 0, 0, 0, 10], ""));
    allEvents.push(createStatsChangeEvent(70, "亚当", "img/1.png", "因为怯懦，所以逃避生命，以不抵抗在最黑暗的沉沦中生出骄傲，因为骄傲，所以不选择生，所以拒斥粗鄙的乐观主义。", "又是一个可怜的灵魂。", "逃避是懦夫的行为", "1", EventType.NORMAL, [-1, -1], [10, 0, 0, 0, 10, 10], [10, 0, 10, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(71, "亚当", "img/1.png", "我只想站在比你高的地方，用人类最纯粹的痛苦与烦恼给你一记响亮的耳光。", "黑暗的灵魂永堕沉沦。", "你的苦痛会永远持续下去。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 0, 10], [-10, 0, 10, 10, 10, -10], ""));
    allEvents.push(createStatsChangeEvent(72, "亚当", "img/1.png", "我的不幸，恰恰在于我缺乏拒绝的能力。", "缺乏拒绝能力会使你更加不幸。", "你只是太过善良罢了。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 10, 10, 10, -10], [-10, 0, -10, -10, -10, 10], ""));
    allEvents.push(createStatsChangeEvent(73, "亚当", "img/1.png", "唯有尽力自持，方不致癫狂。", "？？？", "你是说要克己吗？", "1", EventType.NORMAL, [-1, -1], [-10, 0, 0, 0, 0, 0], [10, 0, 10, 10, 10, 0], ""));

    allEvents.push(createStatsChangeEvent(74, "白骑士", "img/1.png", "昨夜，美酒入喉，我心欢畅。", "今朝，酒冷香落，徒留荒凉。", "今朝，酒盏花枝，伊人依旧。", "1", EventType.NORMAL, [-1, -1], [-10, 0, 10, 10, 10, -10], [-10, 0, 10, 10, 10, 10], ""));

    allEvents.push(createStatsChangeEvent(75, "白骑士", "img/1.png", "幸福感这种东西，会沉在悲哀的河底，隐隐发光，仿佛砂金一般。", "不是应该更加珍惜吗？", "终究是沉没在悲伤的河底吗？", "1", EventType.NORMAL, [-1, -1], [-10, 0, 10, 10, 10, -10], [-10, 0, 10, 10, 10, 10], ""));
    //random test
    allEvents.push(createMinorRandomEvent(76, "七彩泉", "img/1.png", "七彩的泉水汩汩的涌现出来", "喝一口看看", "喝一口看看", "1", EventType.RANDOM, [-1, -1]));
    allEvents.push(createMajorRandomEvent(76, "不老泉", "img/1.png", "不老的泉水汩汩的涌现出来", "喝一口看看", "喝一口看看", "1", EventType.RANDOM, [-1, -1]));
    allEvents.push(createMajorRandomEvent(77, "幸运的钱币", "img/1.png", "一枚金光闪闪的钱币", "抛一下试试运气", "抛一下试试运气", "1", EventType.RANDOM, [-1, -1]));
    //比较，善良大于一定并且总属性够高。
    allEvents.push(createStatsChangeEvent(78, "石中剑", "img/10.png", "石头上插着一把荆棘缠绕的圣剑。", "拔出圣剑，我自为王。", "王者的使命过于沉重", "1", EventType.NORMAL, [-1, -1], [-10, 0, 10, 10, 10, -10], [-10, 0, 10, 10, 10, 10], ""));

    allEvents.push(createStatsChangeEvent(79, "朗格努斯", "img/10.png", "枪身血红，似乎滴血一般。", "让我来用着魔枪结束乱世。", "王者的使命过于沉重", "1", EventType.NORMAL, [-1, -1], [-10, 0, 10, 10, 10, -10], [-10, 0, 10, 10, 10, 10], ""));

    allEvents.push(createStatsChangeEvent(80, "Laevatein", "img/10.png", "永远燃烧的火焰之剑。", "我能承受火焰之魂。", "冒火的剑怎么可能能拿得起来？", "1", EventType.NORMAL, [-1, -1], [-10, 0, 10, 10, 10, -10], [-10, 0, 10, 10, 10, 10], ""));

    // allEvents.push(createEvent(13, "医生", "1.png", "西方的悬崖上传闻有魔龙作恶。", "无论多么危险我都将带头征讨。", "这肯定是无稽之谈。", "5", EventType.NORMAL, [-1, -1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, -1], ""));
    // allEvents.push(createEvent(500, "修女", "1.png", "也有可能有怪物守护。", "勇者无畏，愿意接受挑战。", "太危险了还是算了吧。", "", EventType.NORMAL, [600, 601], [-50, 0, 0, 0, 0, 30], [0, 0, 0, 0, 0, -10], ""));
    // allEvents.push(createEvent(501, "牧师", "1.png", "西方的巨人手中，持有勇者之剑，但却作恶多端。", "我将前往讨伐。", "这种危险的事情我可不去。", "", EventType.NORMAL, [600, 601], [-50, 0, 0, 0, 0, 30], [0, 0, 0, 0, 0, -10], ""));
    //
    allEvents.push(createStatsChangeEvent(502, "邪恶的王", "img/11.png", "你身上的味道我很讨厌。", "岂能放过你。", "岂能放过你。", "1", EventType.NORMAL, [-1, -1], [-50, 0, 0, 0, 0, 20], [-50, 0, 0, 0, 0, 20], ""));
    // allEvents.push(createEvent(503, "善良的王", "1.png", "你难道不觉得可悲吗？", "愚昧者不自知。", "愚昧者不自知。", "1", EventType.NORMAL, [-1, -1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, -1], ""));


    allEvents.push(createStatsChangeEvent(91, "村落", "img/101.png", "从黑夜中醒来，晨起的星光璀璨，照亮了远方的小村。", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(92, "城镇", "img/103.png", "行走了许久，也没有丝毫感到饥饿，前方似乎有个更大的城镇。", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(93, "城堡", "img/104.png", "高耸的城堡是贵族的象征。", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(94, "洞窟", "img/105.png", "洞口矗立一个巨大的峻岩，犹如阴曹的判官。", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(95, "森林", "img/106.png", "幽静的密林深处，连鸟儿也很少飞来。", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(96, "悬崖", "img/107.png", "巍峨的云峰上，峭壁生辉，而我的脚步愈发轻快。", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(97, "沼泽", "img/108.png", "泥泞不堪,满目疮痍。我的脚蹼却丝毫不受沼泽的拖累。", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(98, "冰原", "img/109.png", "茕茕孑立，踽踽而行。", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(99, "岩浆", "img/105.png", "末日般的场景，与一个挣扎的灵魂。", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));

    //0结束 -1 随机 其他数字是链接
    allEvents.push(createStatsChangeEvent(601, "称号", "1.png", "法海无边", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(602, "称号", "1.png", "时光飞逝", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(603, "称号", "1.png", "时光荏苒", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(604, "称号", "1.png", "战争艺术", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(605, "称号", "1.png", "海上传奇", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(606, "称号", "1.png", "别无所求", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(607, "称号", "1.png", "屠杀殆尽", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(608, "称号", "1.png", "恃强凌弱", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(609, "称号", "1.png", "巨龙传说", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(610, "称号", "1.png", "傲气冲天", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(611, "称号", "1.png", "英雄气短", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(612, "称号", "1.png", "任人宰割", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(613, "称号", "1.png", "勇者之路", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(614, "称号", "1.png", "殊死一搏", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(615, "称号", "1.png", "英雄本色", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(616, "称号", "1.png", "胜利逃亡", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(617, "称号", "1.png", "妙手空空", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(618, "称号", "1.png", "凤凰涅槃", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(619, "称号", "1.png", "巨人杀手", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(620, "称号", "1.png", "命运星空", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(621, "称号", "1.png", "战士之魂", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(622, "称号", "1.png", "九头蛇之死", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(623, "称号", "1.png", "舍生取法", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(624, "称号", "1.png", "恐怖巨兽", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));

    allEvents.push(createStatsChangeEvent(600, "称号", "img/102.png", "孤魂野鬼", "Pass", "Pass.", "", "title", [0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(800, "称号", "img/10.png", "卷土重来", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(801, "称号", "1.png", "咫尺天堂", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(802, "称号", "1.png", "咫尺地狱", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(803, "称号", "1.png", "一念天堂", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createStatsChangeEvent(804, "称号", "1.png", "一念地狱", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));

    return allEvents;
}

//Utils

// device detection
function isMobile() {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        return true;
    }
    return false;
}


function getRandomArrayElements(arr, count) {
    let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

const ATTRS = ['spirit', 'gold', 'power', 'agility', 'intelligence', 'goodness'];

const playerId = "DefaultId";

class Player {
    constructor(name, id) {
        this.id = id;
        this.name = name;
        this.fatigue = MAX_VAL / 5;
        this.spirit = MAX_VAL / 5;
        this.gold = MAX_VAL / 5;
        this.power = MAX_VAL / 5;
        this.agility = MAX_VAL / 5;
        this.intelligence = MAX_VAL / 5;
        this.goodness = MAX_VAL / 2;
        this.buffSet = new Set();
        this.achievements = new Set();
    }
}

const EventType = Object.freeze({
    NORMAL: "NORMAL",
    STAGE: "STAGE",
    TITLE: "TITLE",
    SUBSEQUENT: "SUBSEQUENT"
});

class EventV2 {
    constructor(id, name, img, line, startStage, startAchievement, eventType, choice1, choice2, enemy) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.line = line;
        this.startStage = startStage;
        this.startAchievement = startAchievement;
        this.eventType = eventType;
        this.choice1 = choice1;
        this.choice2 = choice2;
        this.enemy = enemy;
    }
}

class Choice {
    constructor(eventId, line, effect) {
        this.eventId = eventId;
        this.line = line;
        this.effect = effect
    }
}

const EffectType = Object.freeze({
    NOOP: "NOOP",
    STATS_CHANGE: "STATS_CHANGE",
    STATS_COND: "STATS_COND",
    ADD_BUFF: "ADD_BUFF",
    RANDOM: "RANDOM",
    COMPOSITE: "COMPOSITE" //复合型类型，比如随机 + buff
});

const BUFF = Object.freeze({
    NEXT: "NEXT" // NEXT EVENT
});

class EffectV2 {
    constructor(effectId, effectType, callBack, subsequentId) {
        if (!effectType in EffectType) {
            throw Error("Invalid effectType: " + effectType);
        }
        this.effectId = effectId;
        this.effectType = effectType;
        this.callBack = callBack;
        this.subsequentId = subsequentId;
    }
}

// Usage
const eventV2 = new EventV2(1, 'fakeName', 'fakeImg', 'dummy line', 1, EventType.NORMAL,
    new Choice(1, "this is choice 1",
        new EffectV2(
            "effectId1", EffectType.COMPOSITE, function () { //function 作为回调
                player.agility += 1;
                player.intelligence -= 1;
                player.buffSet.add(BUFF.FAKE);
            }
        ), null),
    new Choice(2, "this is choice 2",
        new EffectV2(
            "effectId2", EffectType.RANDOM, () => {
                player.gold += -5 + 10 * Math.random(); // +-5 gold effect
            }
        ), null),
    null);


// function to create a event with both effects are stats change event
// V1 -> V2 的普通event的utility，用的input还是V1的input
function createStatsChangeEvent(id, name, img, line, posLine, negLine, stage, type, subsequent, leftAttrEffects, rightAttrEffects) {
    console.log(rightAttrEffects);
    return new EventV2(id, name, img, line, stage, null, type,
        new Choice(id, posLine,
            createStatsEffect(id, subsequent, leftAttrEffects)
        ),
        new Choice(id, negLine,
            createStatsEffect(id, subsequent, rightAttrEffects)
        ),
        null);
}

function createStatsEffect(eventId, subsequent, attrChange) {
    const callBack = function () {
        player.spirit += attrChange[0];
        player.gold += attrChange[1];
        player.power += attrChange[2];
        player.agility += attrChange[3];
        player.intelligence += attrChange[4];
        player.goodness += attrChange[5];
    };
    return new EffectV2(eventId, EffectType.STATS_CHANGE, callBack, subsequent);
}

function convertConsecutiveEventJsonToEvents(json) {
    for (let i = 0; i < json.length; i++) {
        const eventJson = json[i];
        const event = createConsecutiveEvent(eventJson);
        console.log(event);
    }
}

// constructor(id, name, img, line, startStage, startAchievement, eventType, choice1, choice2, enemy) {
// constructor(eventId, line, effect) {
// constructor(effectId, effectType, callBack, subsequentId) {

function createConsecutiveEvent(eventJson) {
    return new EventV2(eventJson.id, eventJson.name, eventJson.img, eventJson.startStage, eventJson.startAchievement, EventType.NORMAL, createChoice(eventJson, true), createChoice(eventJson, false), null);
}

function createChoice(eventJson, isChoice1) {
    const effectType = isChoice1 ? eventJson.effect1Type : eventJson.effect2Type;
    if (effectType === "noChnage") {
        return createNoopChoice(eventJson, isChoice1);
    } else if (effectType === "buff") {
        return createBuffChoice(eventJson, isChoice1);
    } else if (effectType === "statsConditional") {
        return createStatsConditionalChoice(eventJson, isChoice1);
    }
}

function createStatsConditionalChoice(eventJson, isChoice1) {
    if (isChoice1) {
        return new Choice(eventJson.id, eventJson.choice1,
            new EffectV2(eventJson.id, EffectType.STATS_COND, new function () {
                const conditions = parseListAttr(eventJson.choice1Condition);
                let nextEventBuff;
                if (comparePlayerStats(conditions)) {
                    nextEventBuff = BUFF.NEXT + ":" + eventJson.choice1Subsequent;
                } else {
                    nextEventBuff = BUFF.NEXT + ":" + eventJson.choice1Fail;
                }
                player.buffSet.add(nextEventBuff);
            }, eventJson.choice1Subsequent)
        );
    } else {
        return new Choice(eventJson.id, eventJson.choice2,
            new EffectV2(eventJson.id, EffectType.STATS_COND, new function () {
                const conditions = parseListAttr(eventJson.choice1Condition);
                let nextEventBuff;
                if (comparePlayerStats(conditions)) {
                    nextEventBuff = BUFF.NEXT + ":" + eventJson.choice2Subsequent;
                } else {
                    nextEventBuff = BUFF.NEXT + ":" + eventJson.choice2Fail;
                }
                player.buffSet.add(nextEventBuff);
            }, eventJson.choice2Subsequent)
        );
    }
}

function comparePlayerStats(compareConditions) {
    const playerAttrs = compareConditions[0];
    const comparator = compareConditions[1].trim();
    const value = compareConditions[2];
    if (playerAttrs === "all") {
        return ATTRS.every(attr => {
            return compare(player[attr], comparator, value);
        });
    } else {
        return playerAttrs.every(attr => {
            return compare(player[attr], comparator, value);
        });
    }
}

function compare(value1, comparator, value2) {
    if (comparator === "eq") {
        return value1 === value2;
    } else if (comparator === "gt") {
        return value1 > value2;
    } else if (comparator === "lt") {
        return value1 < value2;
    } else if (comparator === "ge") {
        return value1 >= value2;
    } else if (comparator === "le") {
        return value1 <= value2;
    } else {
        throw new Error("invalid comparator: " + comparator);
    }
}

function createNoopChoice(eventJson, isChoice1) {
    if (isChoice1) {
        return new Choice(eventJson.id, eventJson.choice1,
            new EffectV2(eventJson.id, EffectType.NOOP, new function () {}, eventJson.choice1Subsequent)
        );
    } else {
        return new Choice(eventJson.id, eventJson.choice2,
            new EffectV2(eventJson.id, EffectType.NOOP, new function () {}, eventJson.choice2Subsequent)
        );
    }
}

function createBuffChoice(eventJson, isChoice1) {
    if (isChoice1) {
        return new Choice(eventJson.id, eventJson.choice1,
            new EffectV2(eventJson.id, EffectType.ADD_BUFF, new function () {
                const buffAttrs = parseListAttr(eventJson.choice1Buff);
                for (let i = 0; i < buffAttrs.length; i++) {
                    player.buffSet.add(buffAttrs[i]);
                }
            }, eventJson.choice1Subsequent)
        );
    } else {
        const choice2 = new Choice(eventJson.id, eventJson.choice2,
            new EffectV2(eventJson.id, EffectType.ADD_BUFF, new function () {
                const buffAttrs = parseListAttr(eventJson.choice2Buff);
                for (let i = 0; i < buffAttrs.length; i++) {
                    player.buffSet.add(buffAttrs[i]);
                }
            }, eventJson.choice2Subsequent)
        );
    }
}

function parseListAttr(listAttr) {
    const listAttrStr = listAttr.replace(/^.+?{/,'{').replace(/\\/g, '').replace(/(")+/g, '\"');
    return JSON.parse(listAttrStr);
}

// Utility:比较player和enemy
// Choice1: 比较 attrToCompare1 例如 attrToCompare1 = ['gold', 'spirit'], 赢了获得winBuff， 输了lossBuff
// Choice2: 比较 attrToCompare2 例如 attrToCompare1 = ['power', 'spirit'], 赢了获得winBuff， 输了lossBuff

// 可以再复杂一点 两个选项的buff不一样。

function createFightEventWithBuff(id, name, img, line, posLine, negLine, stage, achievement, type, subsequent, attrToCompare1, attrToCompare2, winBuff, lossBuff, enemy) {
    return new EventV2(id, name, img, line, stage, achievement, type,
        new Choice(id, posLine,
            createStatsEffect(id, subsequent, attrToCompare1, winBuff, lossBuff)
        ),
        new Choice(id, negLine,
            createStatsEffect(id, subsequent, attrToCompare2, winBuff, lossBuff)
        ),
        enemy);
}

function createFightEffect(eventId, subsequent, attrToCompare, winBuff, lossBuff) {
    const callBack = function (enemy) {
        let playerSum = 0;
        let enemySum = 0;
        for (let attrName in attrToCompare) {
            playerSum += player[attrName];
            enemySum += enemy[attrName];
        }
        if (playerSum > enemySum) {
            player.buffSet.add(buffToAdd);
        } else {
            player.buffSet.add(lossBuff);
        }
    };
    return new EffectV2(eventId, EffectType.STATS_COND, callBack, subsequent);
}

//V2 small random utility

function createMinorRandomEvent(id, name, img, line, posLine, negLine, stage, achievement, type, subsequent) {
    return new EventV2(id, name, img, line, stage, achievement, type,
        new Choice(id, posLine,
            createMinorRandomEffect(id, subsequent)
        ),
        new Choice(id, negLine,
            createMinorRandomEffect(id, subsequent)
        ),
        null);
}

//V2 big random utility

function createMajorRandomEvent(id, name, img, line, posLine, negLine, stage, achievement, type, subsequent) {
    return new EventV2(id, name, img, line, stage, achievement, type,
        new Choice(id, posLine,
            createMajorRandomEffect(id, subsequent)
        ),
        new Choice(id, negLine,
            createMajorRandomEffect(id, subsequent)
        ),
        null);
}


//所有属性minor 随机+ - 5
function createMinorRandomEffect(eventId, subsequent) {
    const callBack = function () {
        player.spirit += -5 + 10 * Math.random();
        player.gold += -5 + 10 * Math.random();
        player.power += -5 + 10 * Math.random();
        player.agility += -5 + 10 * Math.random();
        player.intelligence += -5 + 10 * Math.random();
        player.goodness += -5 + 10 * Math.random();
    };
    return new EffectV2(eventId, EffectType.RANDOM, callBack, subsequent);
}

//所有属性major 随机+ - 10
function createMajorRandomEffect(eventId, subsequent) {
    const callBack = function () {
        player.spirit += -10 + 20 * Math.random();
        player.gold += -10 + 20 * Math.random();
        player.power += -10 + 20 * Math.random();
        player.agility += -10 + 20 * Math.random();
        player.intelligence += -10 + 20 * Math.random();
        player.goodness += -10 + 20 * Math.random();
    };
    return new EffectV2(eventId, EffectType.RANDOM, callBack, subsequent);
}


function loadAllEvents(rawEvents) {
    const events = {};
    for (let i = 0; i < rawEvents.length; i++) {
        const event = rawEvents[i];
        const level = event.startStage;
        if (!(level in events)) {
            events[level] = [];
        }
        events[level].push(event);
    }
    return events;
}

function initPlayer(name) {
    return new Player(name, playerId);
}

// TODO: better random
function getEventsForLevel(level) {
    console.log("Getting events for level " + level);
    // const prob = Math.min(1.0, EVENT_PER_LEVEL / eventsByLevel[level].length) * 0.8;
    let allValidEvents = [];
    for (let curLevel = 1; curLevel <= level; curLevel++) {
        if (curLevel in eventsByLevel) {
            console.log(`Adding ${eventsByLevel[curLevel].length} events of level ${curLevel} `);
            allValidEvents = allValidEvents.concat(eventsByLevel[curLevel]);
        }
    }

    for (let i = 0; i < allValidEvents.length; i++) {
        console.log(allValidEvents[i]);
    }

    allValidEvents = allValidEvents.filter((event) => event.eventType === EventType.NORMAL);
    console.log(`Got ${allValidEvents.length} valid events events `);
    return getRandomArrayElements(allValidEvents, EVENT_PER_LEVEL);
}

function initModels() {
    player = initPlayer('Knight III');

    currentLevel = START_LEVEL;

    //add events to map
    const allEvents = createEvents();
    for (let i = 0; i < allEvents.length; i++) {
        eventMap[allEvents[i].id] = allEvents[i];
    }

    eventsByLevel = loadAllEvents(allEvents);

    currentEvents.push(eventMap[STAGE_IDS[currentLevel]]);
    currentEvents = currentEvents.concat(getEventsForLevel(currentLevel + 1));

    currentMaxPage = 0;
    currentPage = 0;
}

function updatePlayerStatus() {

    // pos
    // if (lastEvent !== null) {
    //     if (choiceId === 0) {
    //         player.spirit += lastEvent.posEffects[0].val;
    //         player.gold += lastEvent.posEffects[1].val;
    //         player.power += lastEvent.posEffects[2].val;
    //         player.agility += lastEvent.posEffects[3].val;
    //         player.intelligence += lastEvent.posEffects[4].val;
    //         player.goodness += lastEvent.posEffects[5].val;
    //     } else {
    //         player.spirit += lastEvent.negEffects[0].val;
    //         player.gold += lastEvent.negEffects[1].val;
    //         player.power += lastEvent.negEffects[2].val;
    //         player.agility += lastEvent.negEffects[3].val;
    //         player.intelligence += lastEvent.negEffects[4].val;
    //         player.goodness += lastEvent.negEffects[5].val;
    //     }
    // }

    //update fatigue
    // $(".fatigue").text(player.fatigue);
    // $(".spirit").text(player.spirit);
    // $(".gold").text(player.gold);
    // $(".power").text(player.power);
    // $(".agility").text(player.agility);
    // $(".intelligence").text(player.intelligence);

    $(".fatigue").animate({
            color: getColorByValue(player.fatigue),
            val: player.fatigue
        },
        {
            duration: 1000,
            step: function () {
                const ele = $(".fatigue");
                ele.text(Math.floor(this.val));
                ele.css("color", this.color);
            },
            complete: function () {
                const ele = $(".fatigue");
                ele.text(this.val);
                ele.css("color", this.color);
            }
        });

    $(".spirit").animate({
            color: getColorByValue(player.spirit),
            val: player.spirit
        },
        {
            duration: 1000,
            step: function () {
                const ele = $(".spirit");
                ele.text(Math.floor(this.val));
                ele.css("color", this.color);
            },
            complete: function () {
                const ele = $(".spirit");
                ele.text(this.val);
                ele.css("color", this.color);
            }
        });

    $(".gold").animate({
            color: getColorByValue(player.gold),
            val: player.gold
        },
        {
            duration: 1000,
            step: function () {
                const ele = $(".gold");
                ele.text(Math.floor(this.val));
                ele.css("color", this.color);
            },
            complete: function () {
                const ele = $(".gold");
                ele.text(this.val);
                ele.css("color", this.color);
            }
        });

    $(".power").animate({
            color: getColorByValue(player.power),
            val: player.power
        },
        {
            duration: 1000,
            step: function () {
                const ele = $(".power");
                ele.text(Math.floor(this.val));
                ele.css("color", this.color);
            },
            complete: function () {
                const ele = $(".power");
                ele.text(this.val);
                ele.css("color", this.color);
            }
        });

    $(".agility").animate({
            color: getColorByValue(player.agility),
            val: player.agility
        },
        {
            duration: 1000,
            step: function () {
                const ele = $(".agility");
                ele.text(Math.floor(this.val));
                ele.css("color", this.color);
            },
            complete: function () {
                const ele = $(".agility");
                ele.text(this.val);
                ele.css("color", this.color);
            }
        });

    $(".intelligence").animate({
            color: getColorByValue(player.intelligence),
            val: player.intelligence
        },
        {
            duration: 1000,
            step: function () {
                const ele = $(".intelligence");
                ele.text(Math.floor(this.val));
                ele.css("color", this.color);
            },
            complete: function () {
                const ele = $(".intelligence");
                ele.text(this.val);
                ele.css("color", this.color);
            }
        });
}

function getColorByValue(value) {
    if (value < 20) {
        return "red";
    } else if (value < 60) {
        return "#2b6aff";
    } else {
        return "black";
    }
}

function updateScene(lastEvent) {
    //update player status

    console.log("Last event: ");
    console.log(lastEvent);

    if (lastEvent !== null) {
        const lastChoice = choiceId === 0 ? lastEvent.choice1 : lastEvent.choice2;
        const lastEffect = lastChoice.effect;

        console.log("lastEffect.eventId: ", lastEffect.eventId);
        console.log("lastEffect.callBackParam: ", lastEffect.callBackParam);

        lastEffect.callBack();
    }

    updatePlayerStatus();
    //If the player dies, game ends
    // player
    checkDead();
    // last event
    // addDeadPage(eventMap[800]);

    // need to load next level in advance because the last page cannot be flip
    if (currentEvents.length <= 1 && currentLevel < STAGE_IDS.length) {
        const nextLevel = currentLevel + 1;
        let newEvents = [];
        newEvents.push(eventMap[STAGE_IDS[nextLevel - 1]]);
        newEvents = newEvents.concat(getEventsForLevel(nextLevel));
        addPages(newEvents, true);
        currentEvents = currentEvents.concat(newEvents);
    }

    //update stage info

    //update events

}

function checkDead() {
    if (player.gold <= 0 || player.spirit <= 0) {
        isEnd = true;
    } else {
        isEnd = false;
    }
    if (isEnd) {
        if (player.goodness > 80 && player.goodness < 100) {
            addDeadPage(eventMap[801]);
        } else if (player.goodness > 99) {
            addDeadPage(eventMap[803]);
        } else if (player.goodness < 20 && player.goodness > 0) {
            addDeadPage(eventMap[802]);
        } else if (player.goodness < 1) {
            addDeadPage(eventMap[804]);
        } else if (currentPage > 50) {
            addDeadPage(eventMap[800]);
        } else {
            addDeadPage(eventMap[600]);
        }
    }
}

function createPage(event) {
    console.log("1 creating...");
    console.log(event);
    console.log("2 creating...");
    if (event.eventType === EventType.NORMAL) {
        return createEventPageDiv(event);
    } else if (event.eventType === 'stage') {
        return createStagePageDiv(event);
    } else if (event.eventType === 'title') {
        return createStagePageDiv(event);
    }
}

function createStagePageDiv(event) {
    const div = document.createElement('div');
    currentMaxPage++;
    div.className = `page-num-${currentMaxPage}`;
    div.innerHTML =
        `<div class="pages-content">
            <div class="pages-background"></div>
            <div class="content-inner">
              <div class="img-container">
                <img src="${event.img}"/>
              </div>
              <h1>Stage ${currentLevel + 1}</h1>
              <p class="to-fade">${event.name}</p>
              <p class="to-fade">${event.line}</p>
            </div>
          </div>`;
    return div;
}

function createEventPageDiv(event) {
    const div = document.createElement('div');
    currentMaxPage++;
    div.className = `page-num-${currentMaxPage}`;
    div.innerHTML =
        `<div class="pages-content">
            <div class="pages-background"></div>
            <div class="content-inner">
              <div class="img-container">
                <img class="pulsate-fwd" src="${event.img}"/>
              </div>
              <p class="to-fade"><font color='#dc143c'>${event.name}: </font>${event.line}</p>
              <p class="pos-line">${event.choice1.line}</p>
              <p class="neg-line">${event.choice2.line}</p>
            </div>
          </div>`;
    return div;
}

function addPages(events, turn) {
    for (let i = 0; i < events.length; i++) {
        addPage(events[i], turn);
    }
}

function createEventPageAndTurn(eventPage) {
    createEventPageDiv(eventPage);
    $('.pages').turn('addPage', div);
}

function addDeadPage(event) {
    $('.pages').turn('disable', true);
    $(`.page-num-${currentPage}`).html(`<div class="pages-content">
            <div class="pages-background"></div>
            <div class="content-inner">
              <div class="img-container">
                <img src="${event.img}"/>
              </div>
              <h1>${event.line}</h1>
              <h1><font color="#dc143c">"Goodness: "+${player.goodness}</font></h1>
            </div>
          </div>`).addClass('puff-in-center');
    //upload data to Nebulas networks
    uploadData();
}

function addAndRemovePage(event) {
    const div = createPage(event);
    $('.pages').append(div);
    $('.pages').turn('addPage', div);
    $('.pages').turn('removePage', 'l');
}

function removePage(idx) {
    $('.pages').turn('removePage', idx);
}

function addPage(event, turn) {
    const div = createPage(event);
    $('.pages').append(div);
    if (turn) {
        $('.pages').turn('addPage', div);
    }
}

$(window).ready(function () {

    console.log("Converting ...");

    $.getJSON("ConsecutiveEvents.json", function (json) {
        convertConsecutiveEventJsonToEvents(json);
    });

    initModels();

    for (let i = 0; i < currentEvents.length; i++) {
        console.log("Cur:" + i);
        console.log(currentEvents[i]);
    }

    addPages(currentEvents, false);
    // $('html').hide().fadeIn(2000).then(
    //     $('.instructions h1').hide().fadeIn(5000),
    //     $('.instructions h3:eq(0)').hide().fadeIn(6000),
    //     $('.instructions h3:eq(1)').hide().fadeIn(7000),
    //     $('.instructions h3:eq(2)').hide().fadeIn(8000),
    //     $('.instructions h3:eq(3)').hide().fadeIn(9000),
    //     $('.instructions h3:eq(4)').hide().fadeIn(10000),
    //     $('.instructions h3:eq(5)').hide().fadeIn(11000),
    //     $('.instructions h3:eq(6)').hide().fadeIn(12000),
    //     $('html').click(function() {
    //       $('.instructions').fadeOut(5000);
    //       $('.book-wrapper').next().fadeIn(2000);
    //     })
    // );
    let width = 800;
    let height = 575;
    if (isMobile()) {
        width = 600;
        height = 431;
    }

    $('.button1').click(
        function () {
            addAndRemovePage(eventMap[800]);
        });
    $('.pages').turn({
        duration: 1500,
        width: width,
        height: height,
        // acceleration: true,
        //  display: 'single',
        autoCenter: true,
        turnCorners: "bl, br",
        elevation: 300,
        when: {
            turned: function (e, page) {
                console.log('Current view: ', $(this).turn('view'));
                currentPage++;
                console.log('Current page: ', currentPage);
                let lastEvent = null;
                if (currentPage > 1 && currentEvents.length > 0) {
                    lastEvent = currentEvents.shift();
                }

                if (lastEvent !== null && lastEvent.type === 'stage') {
                    currentLevel++;
                }

                console.log("lastEvent: ", lastEvent);

                updateScene(lastEvent);

                $(`.page-num-${currentPage} .to-fade`).addClass('fade-in');

            },
            flip: function (e, page) {
                console.log("flipping ...");

                $(`.page-num-${currentPage} .pos-line`).removeClass('show');
                $(`.page-num-${currentPage} .neg-line`).removeClass('show');
            }
        }
    });
});