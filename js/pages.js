//Data loading

function createEvent(id, name, img, line, posLine, negLine, stage, type, subsequent, leftAttrEffects, rightAttrEffects, playerId) {
    const leftEffects = [];
    const rightEffects = [];
    for (let i = 0; i < ATTRS.length; i++) {
        leftEffects.push(new Effect(id, 'add', ATTRS[i], leftAttrEffects[i]));
        rightEffects.push(new Effect(id, 'add', ATTRS[i], rightAttrEffects[i]));
    }
    return new Event(id, name, img, line, posLine, negLine, stage, type, subsequent, leftEffects, rightEffects, playerId);
}

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
    allEvents.push(createEvent(1, "修女", "1.png", "冒险家，你能帮我讨伐邪恶的术士嘛？", "义不容辞。", "我还有要事在身.", "1", "normal", [-1, -1], [0, 0, 0, 0, 0, 10], [0, 0, 0, 0, 0, -10], ""));
    allEvents.push(createEvent(2, "修女", "1.png", "你愿意帮忙捐助一下教会嘛？", "乐于奉献。", "我手边有点紧.", "1", "normal", [-1, -1], [10, -10, 0, 0, 0, 1], [5, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(3, "修女", "1.png", "教会的经书隐藏着智慧。", "能借我阅读一下嘛？", "我还是想休息一下。", "1", "normal", [-1, -1], [0, 0, 10, 10, 10, 0], [10, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(4, "修女", "1.png", "我很后悔我之前做过的错事，能否帮我去跟骑士道歉？", "我可以帮助你，愿你能得到解脱。", "如果做错的事情都可以重来，那么经历将毫无意义。", "3", "normal", [-1, -1], [0, 0, 0, 0, 0, 20], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(5, "修女", "1.png", "听闻东方有种神奇的草药，我这里有它标示的地图，现在免费赠送给您。", "修女的话似乎可信，值得尝试。", "此去不知归途，还是休息休息吧。", "2", "normal", [-1, -1], [-20, 0, 0, 0, 0, 0], [10, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(6, "修女", "1.png", "西边悬崖上有把勇者之剑，快去拿回来吧～", "赶紧去取一下。", "悬崖上真的只有宝剑嘛？", "5", "normal", [600, 500], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, -1], ""));
    allEvents.push(createEvent(7, "牧师", "1.png", "年轻的冒险者，来吃些免费的食物吧。", "正有此意。", "不劳者不食.", "1", "normal", [-1, -1], [10, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 10], ""));
    allEvents.push(createEvent(8, "牧师", "1.png", "教会附近有一些僵尸，能否帮忙清理。", "要我出手的话可是费用不菲。", "就顺手帮一下吧。", "1", "normal", [-1, -1], [-10, 20, 0, 0, 0, -10], [-10, 0, 0, 0, 0, 10], ""));
    allEvents.push(createEvent(9, "牧师", "1.png", "这里有些杂书，免费赠予给你。", "免费送的东西肯定心怀鬼胎。", "来看看里面有没有有用的信息吧。", "1", "normal", [-1, -1], [0, 0, 0, 0, 0, -10], [-10, 0, 10, 10, 10, 0], ""));
    allEvents.push(createEvent(10, "牧师", "1.png", "生前我也曾经迷惘挣扎，现在只能提供一些有用的信息给你。", "具体是什么呢?。", "孤魂野鬼，选择走开。", "5", "normal", [501, -1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, -1], ""));
    allEvents.push(createEvent(10, "医生", "1.png", "能否借我些金钱去帮助我的病人？", "我又不是慈善家。", "我只有这些了，代表我的心意。", "1", "normal", [-1, -1], [0, 0, 0, 0, 0, -10], [0, -10, 0, 0, 0, 10], ""));
    //分叉
    allEvents.push(createEvent(11, "医生", "1.png", "能否帮我寻找一些草药？", "如果报酬不菲，那自然可以。", "我乐于前往。", "1", "normal", [-1, -1], [0, 10, 0, 0, 0, 10], [-10, 0, 0, 0, 0, 10], ""));
    allEvents.push(createEvent(12, "医生", "1.png", "需要治疗下吗?", "我刚好需要休息。", "不必了。", "1", "normal", [-1, -1], [10, -10, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    //special
    allEvents.push(createEvent(14, "医生", "1.png", "交不起钱的穷人，能否帮我驱赶一下。", "报酬足够的话可以的。", "不能违背自己的良心啊。", "3", "normal", [608, -1], [0, 0, 0, 0, 0, -10], [0, 0, 0, 0, 0, 10], ""));
    allEvents.push(createEvent(15, "医生", "1.png", "医者仁心，王子病重而亡。王却因此处死我，能否帮我复仇。", "公正与怜悯，我会帮助你！", "你将带着怨恨长眠于此。。", "1", "normal", [615, -1], [0, 0, 0, 0, 0, 20], [0, 0, 0, 0, 0, -20], ""));
    allEvents.push(createEvent(16, "僧侣", "1.png", "需要学习下武技嘛?", "当然愿意。", "已经没有精力耗费在这种地方了。", "1", "normal", [-1, -1], [-10, 0, 10, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(17, "僧侣", "1.png", "年轻的冒险家需要治疗吗?", "感谢你的帮助。", "我并不信任你。", "1", "normal", [-1, -1], [20, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(18, "僧侣", "1.png", "我有一本武技的密卷，想要购买吗?", "如果不交出密卷，你只有死路一条。", "好的，我买下来了。", "1", "normal", [607, -1], [0, 0, 20, 0, 0, -20], [-10, 0, 20, 0, 0, -1], ""));
    allEvents.push(createEvent(19, "僧侣", "1.png", "我正在被疯狂的教会追杀，你能保护我吗？", "保护他。", "听说告发他还有奖金。", "1", "normal", [615, -1], [0, 0, 0, 0, 0, 20], [0, 20, 0, 0, 0, -20], ""));

    allEvents.push(createEvent(20, "白骑士", "1.png", "每一个人都是勇士，打败敌人最好的方法就是让自己变得更强。", "我想跟您学习武技。", "让我拜您为师吧。", "1", "normal", [-1, -1], [-10, 0, 10, 0, 0, 0], [-10, -10, 20, 10, 0, 10], ""));
    allEvents.push(createEvent(21, "白骑士", "1.png", "骑士也许会妥协，但是其实绝不会放弃执行正义。", "你说的很对。", "似乎过于迂腐。", "1", "normal", [-1, -1], [0, 0, 0, 0, 0, 10], [0, 0, 0, 0, 0, -10], ""));
    allEvents.push(createEvent(22, "白骑士", "1.png", "在童话里，王子和公主会很幸福很幸福的永远生活在一起，他们看不见的是骑士的守护。", "这就是骑士的指责。", "似乎骑士的压力过于重大。", "1", "normal", [-1, -1], [10, 0, 10, 10, 10, 10], [-10, 0, -10, -10, -10, -10], ""));

    allEvents.push(createEvent(20, "黑骑士", "1.png", "曾经的天真，帮助愚蠢的我长大。", "这不是你堕落的理由。", "也许他是个真正的骑士。", "1", "normal", [-1, -1], [0, 0, 0, 0, 0, 10], [0, 0, 0, 0, 0, -10], ""));
    allEvents.push(createEvent(21, "黑骑士", "1.png", "大众总喜欢将真相扭曲到自己可以接受的程度，这就是一种充满惰性的思维方式。", "我想跟你学习武艺。", "我并不认为你很强大。", "1", "normal", [-1, 610], [0, 0, 10, 0, 0, -10], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(22, "黑骑士", "1.png", "在现实里，王子和公主可能不会在一起，因为他们都以为自己是骑士，只会默默的等待。", "非常悲哀的存在呢。", "也许等待才能会有奇迹的结局。", "1", "normal", [-1, -1], [10, 0, 10, 10, 10, 10], [-10, 0, -10, -10, -10, -10], ""));
    allEvents.push(createEvent(23, "黑骑士", "1.png", "有人需要真皮，所以才有了猎人去虐杀动物， 最终被捕的是猎人，那么披着真皮的人呢？", "这就是堕落的借口吗？", "也许错的不是他。", "1", "normal", [-1, -1], [0, 0, 0, 0, 0, 10], [10, 0, 10, 10, 10, -10], ""));

    allEvents.push(createEvent(24, "蒙面旅人", "1.png", "朋友，你见到过大海吗？", "大海是什么。", "我并不想去做无谓的冒险。", "1", "normal", [-1, -1], [-10, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(25, "蒙面旅人", "1.png", "人生的轨迹纵横交错，就是世界上最美的一幅图。", "交错的命运是为了什么呢？", "我对你没有任何所求。", "3", "normal", [620, 606], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));

    allEvents.push(createEvent(26, "商人", "1.png", "我这里正需要人手，要不要来打零工换些金钱。", "我真有此意。", "没什么时间。", "1", "normal", [-1, -1], [-10, 10, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(27, "商人", "1.png", "zzzzzzz（打盹）", "摸摸看他身手有啥？", "还是不打扰他了。", "1", "normal", [-1, -1], [0, 10, 0, 0, 0, -10], [0, 0, 0, 0, 0, 10], ""));

    allEvents.push(createEvent(28, "巫妖", "1.png", "亡灵国度是容不得活人的。", "人类世界就容得下活人吗？", "这不过是亡灵虚假的谎言。", "1", "normal", [-1, -1], [0, 0, 0, 0, 0, -10], [0, 0, 0, 0, 0, 10], ""));
    allEvents.push(createEvent(29, "巫妖", "1.png", "年份即智慧，什么阴谋、背叛、欺骗没有见识过。", "我想向您请教魔法的知识", "但是这不是你背叛的借口。", "1", "normal", [-1, -1], [-10, 0, 0, 0, 10, 0], [0, 0, 0, 0, 0, 10], ""));
    allEvents.push(createEvent(30, "巫妖", "1.png", "会去尊重崇尚献出生命的人，都是与你无关紧要的人。真正在乎你的人，只希望你好好的活着。", "为了守护所爱之人，有些牺牲是必须的 ", "我会保护好自己。", "1", "normal", [-1, -1], [10, 0, 10, 10, 10, 10], [10, 0, 10, 10, 10, -10], ""));

    allEvents.push(createEvent(31, "盗贼", "1.png", "要不要跟我学学身手。", "我正好想变的更加灵活。", "偷窃的本事还是算了。", "1", "normal", [-1, -1], [-10, 0, 0, 10, 0, 0], [0, 0, 0, 0, 0, 10], ""));
    allEvents.push(createEvent(29, "盗贼", "1.png", "跟我一起去历练吧。", "刚好出去历练一下", "成为一个盗贼并没有很有趣。", "1", "normal", [-1, -1], [10, 10, 10, 10, 10, 0], [0, 0, 0, 0, 0, 10], ""));
    allEvents.push(createEvent(30, "法师", "1.png", "要么安于现状，要么改变现状，改变的总是要付出。", "我愿意跟你修炼。", "要钱还是算了吧。", "1", "normal", [-1, -1], [-10, -10, 0, 0, 20, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(31, "法师", "1.png", "听说过法师塔吗？", "我想进入学习。", "我会保护好自己。", "1", "normal", [-1, -1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, -1], ""));
    allEvents.push(createEvent(32, "法师", "1.png", "知识才是一个魔法师最虔诚的信仰。", "知识也是我的信仰。", "我并不信仰知识。", "1", "normal", [-1, -1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, -1], ""));
    allEvents.push(createEvent(33, "野鬼", "1.png", "失去的，就是失去的，时间什么都不会冲淡，只会让自己对过去的事情变得麻木。", "还是不要打扰这个孤独的灵魂。", "鬼魂似乎想要传达什么。", "1", "normal", [-1, -1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, -1], ""));
    allEvents.push(createEvent(34, "猎人", "1.png", "跟我一起去打猎吧。", "去练练身手也不错。", "确实想打猎换点钱。", "1", "normal", [-1, -1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, -1], ""));

    //new
    allEvents.push(createEvent(35,"密探","1.png","想要钱嘛，告诉我点消息？","告诉他人的秘密。","此等不义之举不能参与。","1","normal",[-1,-1],[0,10,0,0,0,-10],[0,0,0,0,0,10],""));
    allEvents.push(createEvent(36,"牧师","1.png","这座教堂里有一泉从天国流淌下来的圣水，传说被洗涤的人会更加的好运。","请洗涤我。","我从不相信传说。","1","normal",[-1,-1],[10,0,10,10,10,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(37,"牧师","1.png","城外有一批战争的难民我们应该去救援他们吗？","我会保护他们。","我们不必去。","1","normal",[-1,-1],[-10,0,0,0,0,10],[0,0,0,0,0,-10],""));
    allEvents.push(createEvent(38,"士兵","1.png","我是一名现役的军官，是否需要我传授你一些武艺？？","我想听听。","我没有多余的金币。","1","normal",[-1,-1],[-10,-10,10,10,0,1],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(39,"白骑士","1.png","荣誉的背后，是千百倍的心酸。","荣耀，与你同在。","有人考虑过骑士的感受吗。","1","normal",[-1,-1],[-10,0,10,10,10,10],[-10,0,10,10,10,-10],""));
    allEvents.push(createEvent(40,"白骑士","1.png","世上总有一些人值得用一生去守护。","我也有想要守护的人。","我先要保护我自己。","1","normal",[-1,-1],[-10,0,10,10,10,10],[-10,0,0,0,0,-10],""));
    allEvents.push(createEvent(41,"黑骑士","1.png","手中有剑，便提剑前行；手中无剑，便忘剑前进。","言之有理。","手无寸铁该如何战斗。","1","normal",[-1,-1],[-10,0,10,10,10,-10],[-10,0,0,0,0,10],""));
    allEvents.push(createEvent(42,"黑骑士","1.png","伟大的代价就是责任。","我想听听。","没空理会。","1","normal",[-1,-1],[-10,0,10,10,0,-10],[0,0,0,0,0,10],""));

    allEvents.push(createEvent(43,"猎人","1.png","需要跟我学习猎人技巧吗。","听起来不错。","要钱就算了。","1","normal",[-1,-1],[-10,-10,0,0,10,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(44,"商人","1.png","我这里有两个上古的圣物，你选一个吧。","腐朽的巨剑。","泛黄的魔法书。","1","normal",[-1,-1],[0,0,10,0,0,0],[0,0,0,0,10,0],""));
    allEvents.push(createEvent(45,"法师","1.png","我这里有两个法器暂时不用，送你一个吧","发光的魔法球。","充满魔力的法杖。","1","normal",[-1,-1],[-10,0,0,0,10,0],[-10,0,0,0,20,0],""));
    allEvents.push(createEvent(46,"酒馆老板","1.png","需要休息吗？","正有此意。","手边没钱。","1","normal",[-1,-1],[30,-30,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(47,"酒馆老板","1.png","来吃顿好的吧。","正有此意。","手边没钱。","1","normal",[-1,-1],[20,-20,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(48,"酒馆老板","1.png","要不要来喝一杯。","正有此意。","手边没钱。","1","normal",[-1,-1],[-10,-10,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(49,"酒馆老板","1.png","要不要来打工赚点钱。","刚好手边有点紧。","没时间浪费精力了。","1","normal",[-1,-1],[-10,10,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(50,"酒馆老板","1.png","上次旅行的法师落下了个法杖，你需要吗？","看起来很不错，买了！","刚好手边有点紧。","1","normal",[-1,-1],[-10,0,0,0,10,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(51,"酒馆老板","1.png","上次旅行的战士落下了个巨剑，你需要吗？","看起来很不错，买了！","刚好手边有点紧。","1","normal",[-1,-1],[-10,0,10,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(52,"酒馆老板","1.png","上次旅行的盗贼落下了个匕首，你需要吗？","看起来很不错，买了！","刚好手边有点紧。","1","normal",[-1,-1],[-10,0,0,10,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(53,"亚当","1.png","传闻黑骑士因修女而堕落。","原来如此","可怜的骑士。","1","normal",[-1,-1],[-10,0,0,0,0,10],[-10,0,0,0,0,-10],""));
    allEvents.push(createEvent(54,"亚当","1.png","据说北方的洞窟里有一只魔龙","我也听说类似的传说","让我来想想如何打败它。","1","normal",[-1,-1],[-10,0,0,0,0,0],[-10,0,0,0,0,0],""));
    allEvents.push(createEvent(55,"亚当","1.png","善良的王和黑暗的王都是由迷途的灵魂幻化而成？","你知道白色的王的具体消息吗？","你知道黑色的王的的具体消息吗？","1","normal",[-1,-1],[-10,0,0,0,0,0],[-10,0,0,0,0,0],""));
    allEvents.push(createEvent(55,"亚当","1.png","世间万物皆有两面性，灵魂亦亦不能跳出规则。","你是在说灵魂的反转吗？","具体的规则是？","1","normal",[-1,-1],[-10,0,0,0,0,0],[-10,0,0,0,0,0],""));
    allEvents.push(createEvent(56,"矮人","1.png","需要矮人的烈酒吗？","真有此意？","手边没钱了？","1","normal",[-1,-1],[10,10,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(57,"矮人","1.png","需要跟我学矮人优秀的战斗技巧吗？","我正好想跟您学习？","并不是很感兴趣？","1","normal",[-1,-1],[-10,-10,10,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(58,"蒙面的旅人","1.png","是否要跟我学习下偷窃技术？","我正好想跟您学习？","并不是很感兴趣？","1","normal",[-1,-1],[-10,-10,0,10,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(59,"地狱犬","1.png","狗爱他们的朋友,咬他们的敌人,和人不同。","看招吧恶魔","似乎也有道理","1","normal",[-1,-1],[-20,0,0,0,0,10],[0,0,0,0,0,-10],""));
    allEvents.push(createEvent(60,"蒙面的旅人","1.png","是否要跟我学习下法术？","我正好想跟您学习？","并不是很感兴趣？","1","normal",[-1,-1],[-10,-10,0,0,10,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(61,"蒙面的旅人","1.png","是否要跟我学习下战斗技巧？","我正好想跟您学习？","并不是很感兴趣？","1","normal",[-1,-1],[-10,-10,10,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(62,"夜枭","1.png","不知从哪一天开始，我喜欢上了黑夜？","黑夜给了你力量吗？","为何？","1","normal",[-1,-1],[0,0,10,10,10,-10],[0,0,-10,-10,-10,10],""));
    allEvents.push(createEvent(63,"巫妖","1.png","转瞬拜年，诸事无常。","巫妖不会懂得生命的意义","我也想获得长生","1","normal",[-1,-1],[0,0,10,10,10,10],[0,0,10,10,10,-10],""));


    allEvents.push(createEvent(13, "医生", "1.png", "西方的悬崖上传闻有魔龙作恶。", "无论多么危险我都将带头征讨。", "这肯定是无稽之谈。", "5", "normal", [-1, -1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, -1], ""));
    allEvents.push(createEvent(500, "修女", "1.png", "也有可能有怪物守护。", "勇者无畏，愿意接受挑战。", "太危险了还是算了吧。", "", "normal", [600, 601], [-50, 0, 0, 0, 0, 30], [0, 0, 0, 0, 0, -10], ""));
    allEvents.push(createEvent(501, "牧师", "1.png", "西方的巨人手中，持有勇者之剑，但却作恶多端。", "我将前往讨伐。", "这种危险的事情我可不去。", "", "normal", [600, 601], [-50, 0, 0, 0, 0, 30], [0, 0, 0, 0, 0, -10], ""));

    allEvents.push(createEvent(502, "邪恶的王", "1.png", "你身上的味道我很讨厌。", "岂能放过你。", "岂能放过你。", "1", "normal", [-1, -1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, -1], ""));
    allEvents.push(createEvent(503, "善良的王", "1.png", "你难道不觉得可悲吗？", "愚昧者不自知。", "愚昧者不自知。", "1", "normal", [-1, -1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, -1], ""));



    allEvents.push(createEvent(91, "村落", "1.png", "从黑夜中醒来，晨起的星光璀璨，照亮了远方的小村。", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(92, "城镇", "1.png", "行走了许久，也没有丝毫感到饥饿，前方似乎有个更大的城镇。", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(93, "城堡", "1.png", "高耸的城堡是贵族的象征。", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(94, "洞窟", "1.png", "", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(95, "森林", "1.png", "", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(96, "悬崖", "1.png", "", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(97, "沼泽", "1.png", "", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(98, "冰原", "1.png", "", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(99, "岩浆", "1.png", "", "", "", "1", "stage", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));

    //0结束 -1 随机 其他数字是链接
    allEvents.push(createEvent(600, "称号", "1.png", "孤魂野鬼", "Pass", "Pass.", "", "title", [0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(601, "称号", "1.png", "法海无边", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(602, "称号", "1.png", "时光飞逝", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(603, "称号", "1.png", "时光荏苒", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(604, "称号", "1.png", "战争艺术", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(605, "称号", "1.png", "海上传奇", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(606, "称号", "1.png", "别无所求", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(607, "称号", "1.png", "屠杀殆尽", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(608, "称号", "1.png", "恃强凌弱", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(609, "称号", "1.png", "巨龙传说", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(610, "称号", "1.png", "傲气冲天", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(611, "称号", "1.png", "英雄气短", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(612, "称号", "1.png", "任人宰割", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(613, "称号", "1.png", "勇者之路", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(614, "称号", "1.png", "殊死一搏", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(615, "称号", "1.png", "英雄本色", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(616, "称号", "1.png", "胜利逃亡", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(617, "称号", "1.png", "妙手空空", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(618, "称号", "1.png", "凤凰涅槃", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(619, "称号", "1.png", "巨人杀手", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(620, "称号", "1.png", "命运星空", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(621, "称号", "1.png", "战士之魂", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(622, "称号", "1.png", "九头蛇之死", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(623, "称号", "1.png", "舍生取法", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(624, "称号", "1.png", "恐怖巨兽", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));


    allEvents.push(createEvent(800, "称号", "1.png", "卷土重来", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(800, "称号", "1.png", "咫尺天堂", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(800, "称号", "1.png", "咫尺地狱", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(800, "称号", "1.png", "一念天堂", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));
    allEvents.push(createEvent(800, "称号", "1.png", "一念地狱", "Pass。", "Pass.", "1", "title", [-1, -1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], ""));

    return allEvents;
}


//Utils
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

class Player {
    constructor(name) {
        this.name = name;
        this.fatigue = MAX_VAL / 5;
        this.spirit = MAX_VAL / 5;
        this.gold = MAX_VAL / 10;
        this.power = MAX_VAL / 5;
        this.agility = MAX_VAL / 5;
        this.intelligence = MAX_VAL / 5;
        this.goodness = MAX_VAL / 2;
    }
}

class Event {
    constructor(id, name, img, line, posLine, negLine, startstage, type, subsequent, posEffects, negEffects, playerId) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.line = line;
        this.posLine = posLine;
        this.negLine = negLine;
        this.startstage = startstage;
        this.type = type;
        this.subsequent = subsequent;
        this.posEffects = posEffects;
        this.negEffects = negEffects;
        this.playerId = playerId;
    }
}

const ATTRS = ['spirit', 'gold', 'power', 'agility', 'intelligence', 'goodness'];

class Effect {
    constructor(eventId, type, attr, val) {
        this.eventId = eventId;
        this.attr = attr;
        this.type = type;
        this.val = val;
    }
}


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

function loadAllEvents(rawEvents) {
    const events = {};
    for (let i = 0; i < rawEvents.length; i++) {
        const event = rawEvents[i];
        const level = event.startstage;
        if (!(level in events)) {
            events[level] = [];
        }
        events[level].push(event);
    }
    return events;
}

function initPlayer(name) {
    return new Player(name);
}

// TODO: better random
function getEventsForLevel(level) {
    const prob = Math.min(1.0, EVENT_PER_LEVEL / eventsByLevel[level].length) * 0.8;
    let allValidEvents = [];
    for (let curLevel = 1; curLevel <= level; curLevel++) {
        allValidEvents = allValidEvents.concat(eventsByLevel[curLevel]);
    }
    allValidEvents = allValidEvents.filter((event) => event.type === 'normal');
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

function updatePlayerStatus(lastEvent) {

    // pos
    if (lastEvent !== null) {
        if (choiceId == 0) {
            console.log("pos:", JSON.stringify(lastEvent.posEffects));
            player.spirit += lastEvent.posEffects[0].val;
            player.gold += lastEvent.posEffects[1].val;
            player.power += lastEvent.posEffects[2].val;
            player.agility += lastEvent.posEffects[3].val;
            player.intelligence += lastEvent.posEffects[4].val;
            player.goodness += lastEvent.posEffects[5].val;
        } else {
            console.log("neg:", JSON.stringify(lastEvent.negEffects));
            player.spirit += lastEvent.negEffects[0].val;
            player.gold += lastEvent.negEffects[1].val;
            player.power += lastEvent.negEffects[2].val;
            player.agility += lastEvent.negEffects[3].val;
            player.intelligence += lastEvent.negEffects[4].val;
            player.goodness += lastEvent.negEffects[5].val;
        }
    }

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
                console.log("color:" + this.color);
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
    updatePlayerStatus(lastEvent);

    //If the player dies, game ends
    // player
    // last event

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

function createPage(event) {
    if (event.type === 'normal') {
        return createEventPageDiv(event);
    } else if (event.type === 'stage') {
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
              <p class="pos-line">${event.posLine}</p>
              <p class="neg-line">${event.negLine}</p>
            </div>
          </div>`;
    return div;
}

function addPages(events, turn) {
    for (let i = 0; i < events.length; i++) {
        const div = createPage(events[i]);
        console.log("page div:", div);
        $('.pages').append(div);
        if (turn) {
            $('.pages').turn('addPage', div);
        }
    }
}

function createEventPageAndTurn(eventPage) {
    createEventPageDiv(eventPage);
    $('.pages').turn('addPage', div);
}

(function ($) {

    'use strict';

    var has3d,

        hasRot,

        vendor = '',

        version = '4.1.0',

        PI = Math.PI,

        A90 = PI / 2,

        isTouch = 'ontouchstart' in window,

        mouseEvents = (isTouch) ?
            {
                down: 'touchstart',
                move: 'touchmove',
                up: 'touchend',
                over: 'touchstart',
                out: 'touchend'
            }
            :
            {
                down: 'mousedown',
                move: 'mousemove',
                up: 'mouseup',
                over: 'mouseover',
                out: 'mouseout'
            },

        // Contansts used for each corner
        //   | tl * tr |
        // l | *     * | r
        //   | bl * br |

        corners = {
            backward: [],
            forward: ['br', 'tr'],
            all: ['tr', 'br', 'r']
        },

        // Display values

        displays = ['single', 'double'],

        // Direction values

        directions = ['ltr', 'rtl'],

        // Default options

        turnOptions = {

            // Enables hardware acceleration

            acceleration: true,

            // Display

            display: 'single',

            // Duration of transition in milliseconds

            duration: 600,

            // First page

            page: 1,

            // Enables gradients

            gradients: true,

            // Corners used when turning the page

            turnCorners: 'bl,br',

            // Events

            when: null
        },

        flipOptions = {

            // Size of the active zone of each corner

            cornerSize: 200

        },

        // Number of pages in the DOM, minimum value: 6

        pagesInDOM = 6,


        turnMethods = {

            // Singleton constructor
            // $('#selector').turn([options]);

            init: function (options) {

                // Define constants

                has3d = 'WebKitCSSMatrix' in window || 'MozPerspective' in document.body.style;
                hasRot = rotationAvailable();
                vendor = getPrefix();

                var i, that = this, pageNum = 0, data = this.data(), ch = this.children();

                // Set initial configuration

                options = $.extend({
                    width: this.width(),
                    height: this.height(),
                    direction: this.attr('dir') || this.css('direction') || 'ltr'
                }, turnOptions, options);

                data.opts = options;
                data.pageObjs = {};
                data.pages = {};
                data.pageWrap = {};
                data.pageZoom = {};
                data.pagePlace = {};
                data.pageMv = [];
                data.zoom = 1;
                data.totalPages = options.pages || 0;
                data.eventHandlers = {
                    touchStart: $.proxy(turnMethods._touchStart, this),
                    touchMove: $.proxy(turnMethods._touchMove, this),
                    touchEnd: $.proxy(turnMethods._touchEnd, this),
                    start: $.proxy(turnMethods._eventStart, this)
                };


                // Add event listeners

                if (options.when)
                    for (i in options.when)
                        if (has(i, options.when))
                            this.bind(i, options.when[i]);

                // Set the css

                this.css({position: 'relative', width: options.width, height: options.height});

                // Set the initial display

                this.turn('display', options.display);

                // Set the direction

                if (options.direction !== '')
                    this.turn('direction', options.direction);

                // Prevent blue screen problems of switching to hardware acceleration mode
                // By forcing hardware acceleration for ever

                if (has3d && !isTouch && options.acceleration)
                    this.transform(translate(0, 0, true));

                // Add pages from the DOM

                for (i = 0; i < ch.length; i++) {
                    if ($(ch[i]).attr('ignore') != '1') {
                        this.turn('addPage', ch[i], ++pageNum);
                    }
                }

                // Event listeners

                $(this).bind(mouseEvents.down, data.eventHandlers.touchStart).bind('end', turnMethods._eventEnd).bind('pressed', turnMethods._eventPressed).bind('released', turnMethods._eventReleased).bind('flip', turnMethods._flip);

                $(this).parent().bind('start', data.eventHandlers.start);

                $(document).bind(mouseEvents.move, data.eventHandlers.touchMove).bind(mouseEvents.up, data.eventHandlers.touchEnd);

                // Set the initial page

                this.turn('page', options.page);

                // This flipbook is ready

                data.done = true;

                return this;
            },

            // Adds a page from external data

            addPage: function (element, page) {

                var currentPage,
                    className,
                    incPages = false,
                    data = this.data(),
                    lastPage = data.totalPages + 1;

                if (data.destroying)
                    return false;

                // Read the page number from the className of `element` - format: p[0-9]+

                if ((currentPage = /\bp([0-9]+)\b/.exec($(element).attr('class'))))
                    page = parseInt(currentPage[1], 10);

                if (page) {

                    if (page == lastPage)
                        incPages = true;
                    else if (page > lastPage)
                        throw turnError('Page "' + page + '" cannot be inserted');

                } else {

                    page = lastPage;
                    incPages = true;

                }

                if (page >= 1 && page <= lastPage) {

                    if (data.display == 'double')
                        className = (page % 2) ? ' odd' : ' even';
                    else
                        className = '';

                    // Stop animations
                    if (data.done)
                        this.turn('stop');

                    // Move pages if it's necessary
                    if (page in data.pageObjs)
                        turnMethods._movePages.call(this, page, 1);

                    // Increase the number of pages
                    if (incPages)
                        data.totalPages = lastPage;

                    // Add element
                    data.pageObjs[page] = $(element).css({'float': 'left'}).addClass('page p' + page + className);

                    if (!hasHardPage() && data.pageObjs[page].hasClass('hard')) {
                        data.pageObjs[page].removeClass('hard');
                    }

                    // Add page
                    turnMethods._addPage.call(this, page);

                    // Remove pages out of range
                    turnMethods._removeFromDOM.call(this);
                }

                return this;
            },

            // Adds a page

            _addPage: function (page) {

                var data = this.data(),
                    element = data.pageObjs[page];

                if (element)
                    if (turnMethods._necessPage.call(this, page)) {

                        if (!data.pageWrap[page]) {

                            // Wrapper
                            data.pageWrap[page] = $('<div/>',
                                {
                                    'class': 'page-wrapper',
                                    page: page,
                                    css: {
                                        position: 'absolute',
                                        overflow: 'hidden'
                                    }
                                });

                            // Append to this flipbook
                            this.append(data.pageWrap[page]);

                            if (!data.pagePlace[page]) {

                                data.pagePlace[page] = page;
                                // Move `pageObjs[page]` to wrapper
                                data.pageObjs[page].appendTo(data.pageWrap[page]);

                            }

                            // Set the size of the page
                            var prop = turnMethods._pageSize.call(this, page, true);
                            element.css({width: prop.width, height: prop.height});
                            data.pageWrap[page].css(prop);

                        }

                        if (data.pagePlace[page] == page) {

                            // If the page isn't in another place, create the flip effect
                            turnMethods._makeFlip.call(this, page);

                        }

                    } else {

                        // Place
                        data.pagePlace[page] = 0;

                        // Remove element from the DOM
                        if (data.pageObjs[page])
                            data.pageObjs[page].remove();

                    }

            },

            // Checks if a page is in memory

            hasPage: function (page) {

                return has(page, this.data().pageObjs);

            },

            // Centers the flipbook
            center: function (page) {

                var data = this.data(),
                    size = $(this).turn('size'),
                    left = 0;

                if (!data.noCenter) {
                    if (data.display == 'double') {
                        var view = this.turn('view', page || data.tpage || data.page);

                        if (data.direction == 'ltr') {
                            if (!view[0])
                                left -= size.width / 4;
                            else if (!view[1])
                                left += size.width / 4;
                        } else {
                            if (!view[0])
                                left += size.width / 4;
                            else if (!view[1])
                                left -= size.width / 4;
                        }

                    }

                    $(this).css({marginLeft: left});
                }

                return this;

            }
            ,

            // Destroys the flipbook

            destroy: function () {

                var page,
                    flipbook = this,
                    data = this.data(),
                    events = [
                        'end', 'first', 'flip', 'last', 'pressed',
                        'released', 'start', 'turning', 'turned',
                        'zooming', 'missing'];

                if (trigger('destroying', this) == 'prevented')
                    return;

                data.destroying = true;

                $.each(events, function (index, eventName) {
                    flipbook.unbind(eventName);
                });

                this.parent().unbind('start', data.eventHandlers.start);

                $(document).unbind(mouseEvents.move, data.eventHandlers.touchMove).unbind(mouseEvents.up, data.eventHandlers.touchEnd);

                while (data.totalPages !== 0) {
                    this.turn('removePage', data.totalPages);
                }

                if (data.fparent)
                    data.fparent.remove();

                if (data.shadow)
                    data.shadow.remove();

                this.removeData();
                data = null;

                return this;

            },

            // Checks if this element is a flipbook

            is: function () {

                return typeof(this.data().pages) == 'object';

            },

            // Sets and gets the zoom value

            zoom: function (newZoom) {

                var data = this.data();

                if (typeof(newZoom) == 'number') {

                    if (newZoom < 0.001 || newZoom > 100)
                        throw turnError(newZoom + ' is not a value for zoom');

                    if (trigger('zooming', this, [newZoom, data.zoom]) == 'prevented')
                        return this;

                    var size = this.turn('size'),
                        currentView = this.turn('view'),
                        iz = 1 / data.zoom,
                        newWidth = Math.round(size.width * iz * newZoom),
                        newHeight = Math.round(size.height * iz * newZoom);

                    data.zoom = newZoom;

                    $(this).turn('stop').turn('size', newWidth, newHeight);
                    /*.
        css({marginTop: size.height * iz / 2 - newHeight / 2});*/

                    if (data.opts.autoCenter)
                        this.turn('center');
                    /*else
        $(this).css({marginLeft: size.width * iz / 2 - newWidth / 2});*/

                    turnMethods._updateShadow.call(this);

                    for (var i = 0; i < currentView.length; i++) {
                        if (currentView[i] && data.pageZoom[currentView[i]] != data.zoom) {

                            this.trigger('zoomed', [
                                currentView[i],
                                currentView,
                                data.pageZoom[currentView[i]],
                                data.zoom]);

                            data.pageZoom[currentView[i]] = data.zoom;
                        }
                    }

                    return this;

                } else
                    return data.zoom;

            },

            // Gets the size of a page

            _pageSize: function (page, position) {

                var data = this.data(),
                    prop = {};

                if (data.display == 'single') {

                    prop.width = this.width();
                    prop.height = this.height();

                    if (position) {
                        prop.top = 0;
                        prop.left = 0;
                        prop.right = 'auto';
                    }

                } else {

                    var pageWidth = this.width() / 2,
                        pageHeight = this.height();

                    if (data.pageObjs[page].hasClass('own-size')) {
                        prop.width = data.pageObjs[page].width();
                        prop.height = data.pageObjs[page].height();
                    } else {
                        prop.width = pageWidth;
                        prop.height = pageHeight;
                    }

                    if (position) {
                        var odd = page % 2;
                        prop.top = (pageHeight - prop.height) / 2;

                        if (data.direction == 'ltr') {

                            prop[(odd) ? 'right' : 'left'] = pageWidth - prop.width;
                            prop[(odd) ? 'left' : 'right'] = 'auto';

                        } else {

                            prop[(odd) ? 'left' : 'right'] = pageWidth - prop.width;
                            prop[(odd) ? 'right' : 'left'] = 'auto';

                        }

                    }
                }

                return prop;

            },

            // Prepares the flip effect for a page

            _makeFlip: function (page) {

                var data = this.data();

                if (!data.pages[page] && data.pagePlace[page] == page) {

                    var single = data.display == 'single',
                        odd = page % 2;

                    data.pages[page] = data.pageObjs[page].css(turnMethods._pageSize.call(this, page)).flip({
                        page: page,
                        next: (odd || single) ? page + 1 : page - 1,
                        turn: this
                    }).flip('disable', data.disabled);

                    // Issue about z-index
                    turnMethods._setPageLoc.call(this, page);

                    data.pageZoom[page] = data.zoom;

                }

                return data.pages[page];
            },

            // Makes pages within a range

            _makeRange: function () {

                var page, range,
                    data = this.data();

                if (data.totalPages < 1)
                    return;

                range = this.turn('range');

                for (page = range[0]; page <= range[1]; page++)
                    turnMethods._addPage.call(this, page);

            },

            // Returns a range of pages that should be in the DOM
            // Example:
            // - page in the current view, return true
            // * page is in the range, return true
            // Otherwise, return false
            //
            // 1 2-3 4-5 6-7 8-9 10-11 12-13
            //   **  **  --   **  **

            range: function (page) {

                var remainingPages, left, right, view,
                    data = this.data();

                page = page || data.tpage || data.page || 1;
                view = turnMethods._view.call(this, page);

                if (page < 1 || page > data.totalPages)
                    throw turnError('"' + page + '" is not a valid page');


                view[1] = view[1] || view[0];

                if (view[0] >= 1 && view[1] <= data.totalPages) {

                    remainingPages = Math.floor((pagesInDOM - 2) / 2);

                    if (data.totalPages - view[1] > view[0]) {
                        left = Math.min(view[0] - 1, remainingPages);
                        right = 2 * remainingPages - left;
                    } else {
                        right = Math.min(data.totalPages - view[1], remainingPages);
                        left = 2 * remainingPages - right;
                    }

                } else {
                    left = pagesInDOM - 1;
                    right = pagesInDOM - 1;
                }

                return [Math.max(1, view[0] - left),
                    Math.min(data.totalPages, view[1] + right)];

            },

            // Detects if a page is within the range of `pagesInDOM` from the current view

            _necessPage: function (page) {

                if (page === 0)
                    return true;

                var range = this.turn('range');

                return this.data().pageObjs[page].hasClass('fixed') ||
                    (page >= range[0] && page <= range[1]);

            },

            // Releases memory by removing pages from the DOM

            _removeFromDOM: function () {

                var page, data = this.data();

                for (page in data.pageWrap)
                    if (has(page, data.pageWrap) &&
                        !turnMethods._necessPage.call(this, page))
                        turnMethods._removePageFromDOM.call(this, page);

            },

            // Removes a page from DOM and its internal references

            _removePageFromDOM: function (page) {

                var data = this.data();

                if (data.pages[page]) {
                    var dd = data.pages[page].data();

                    flipMethods._moveFoldingPage.call(data.pages[page], false);

                    if (dd.f && dd.f.fwrapper)
                        dd.f.fwrapper.remove();

                    data.pages[page].removeData();
                    data.pages[page].remove();
                    delete data.pages[page];
                }

                if (data.pageObjs[page])
                    data.pageObjs[page].remove();

                if (data.pageWrap[page]) {
                    data.pageWrap[page].remove();
                    delete data.pageWrap[page];
                }

                turnMethods._removeMv.call(this, page);

                delete data.pagePlace[page];
                delete data.pageZoom[page];

            },

            // Removes a page

            removePage: function (page) {

                var data = this.data();

                // Delete all the pages
                if (page == '*') {

                    while (data.totalPages !== 0) {
                        this.turn('removePage', data.totalPages);
                    }

                } else {

                    if (page < 1 || page > data.totalPages)
                        throw turnError('The page ' + page + ' doesn\'t exist');

                    if (data.pageObjs[page]) {

                        // Stop animations
                        this.turn('stop');

                        // Remove `page`
                        turnMethods._removePageFromDOM.call(this, page);

                        delete data.pageObjs[page];

                    }

                    // Move the pages
                    turnMethods._movePages.call(this, page, -1);

                    // Resize the size of this flipbook
                    data.totalPages = data.totalPages - 1;

                    // Check the current view

                    if (data.page > data.totalPages) {

                        data.page = null;
                        turnMethods._fitPage.call(this, data.totalPages);

                    } else {

                        turnMethods._makeRange.call(this);
                        this.turn('update');

                    }
                }

                return this;

            },

            // Moves pages

            _movePages: function (from, change) {

                var page,
                    that = this,
                    data = this.data(),
                    single = data.display == 'single',
                    move = function (page) {

                        var next = page + change,
                            odd = next % 2,
                            className = (odd) ? ' odd ' : ' even ';

                        if (data.pageObjs[page])
                            data.pageObjs[next] = data.pageObjs[page].removeClass('p' + page + ' odd even').addClass('p' + next + className);

                        if (data.pagePlace[page] && data.pageWrap[page]) {

                            data.pagePlace[next] = next;

                            if (data.pageObjs[next].hasClass('fixed'))
                                data.pageWrap[next] = data.pageWrap[page].attr('page', next);
                            else
                                data.pageWrap[next] = data.pageWrap[page].css(turnMethods._pageSize.call(that, next, true)).attr('page', next);

                            if (data.pages[page])
                                data.pages[next] = data.pages[page].flip('options', {
                                    page: next,
                                    next: (single || odd) ? next + 1 : next - 1
                                });

                            if (change) {
                                delete data.pages[page];
                                delete data.pagePlace[page];
                                delete data.pageZoom[page];
                                delete data.pageObjs[page];
                                delete data.pageWrap[page];
                            }

                        }

                    };

                if (change > 0)
                    for (page = data.totalPages; page >= from; page--)
                        move(page);
                else
                    for (page = from; page <= data.totalPages; page++)
                        move(page);

            },

            // Sets or Gets the display mode

            display: function (display) {

                var data = this.data(),
                    currentDisplay = data.display;

                if (display === undefined) {

                    return currentDisplay;

                } else {

                    if ($.inArray(display, displays) == -1)
                        throw turnError('"' + display + '" is not a value for display');

                    switch (display) {
                        case 'single':

                            // Create a temporal page to use as folded page

                            if (!data.pageObjs[0]) {
                                this.turn('stop').css({'overflow': 'hidden'});

                                data.pageObjs[0] = $('<div />',
                                    {'class': 'page p-temporal'}).css({
                                    width: this.width(),
                                    height: this.height()
                                }).appendTo(this);
                            }

                            this.addClass('shadow');

                            break;
                        case 'double':

                            // Remove the temporal page

                            if (data.pageObjs[0]) {
                                this.turn('stop').css({'overflow': ''});
                                data.pageObjs[0].remove();
                                delete data.pageObjs[0];
                            }

                            this.removeClass('shadow');

                            break;
                    }


                    data.display = display;

                    if (currentDisplay) {
                        var size = this.turn('size');
                        turnMethods._movePages.call(this, 1, 0);
                        this.turn('size', size.width, size.height).turn('update');
                    }

                    return this;

                }

            },

            // Gets and sets the direction of the flipbook

            direction: function (dir) {

                var data = this.data();

                if (dir === undefined) {

                    return data.direction;

                } else {

                    dir = dir.toLowerCase();

                    if ($.inArray(dir, directions) == -1)
                        throw turnError('"' + dir + '" is not a value for direction');

                    if (dir == 'rtl') {
                        $(this).attr('dir', 'ltr').css({direction: 'ltr'});
                    }

                    data.direction = dir;

                    if (data.done)
                        this.turn('size', $(this).width(), $(this).height());

                    return this;
                }

            },

            // Detects animation

            animating: function () {

                return this.data().pageMv.length > 0;

            },

            // Gets the current activated corner

            corner: function () {

                var corner,
                    page,
                    data = this.data();

                for (page in data.pages) {
                    if (has(page, data.pages))
                        if ((corner = data.pages[page].flip('corner'))) {
                            return corner;
                        }
                }

                return false;
            },

            // Gets the data stored in the flipbook

            data: function () {

                return this.data();

            },

            // Disables and enables the effect

            disable: function (disable) {

                var page,
                    data = this.data(),
                    view = this.turn('view');

                data.disabled = disable === undefined || disable === true;

                for (page in data.pages) {
                    if (has(page, data.pages))
                        data.pages[page].flip('disable',
                            (data.disabled) ? true : $.inArray(parseInt(page, 10), view) == -1);
                }

                return this;

            },

            // Disables and enables the effect

            disabled: function (disable) {

                if (disable === undefined) {
                    return this.data().disabled === true;
                } else {
                    return this.turn('disable', disable);
                }

            },

            // Gets and sets the size

            size: function (width, height) {

                if (width === undefined || height === undefined) {

                    return {width: this.width(), height: this.height()};

                } else {

                    this.turn('stop');

                    var page, prop,
                        data = this.data(),
                        pageWidth = (data.display == 'double') ? width / 2 : width;

                    this.css({width: width, height: height});

                    if (data.pageObjs[0])
                        data.pageObjs[0].css({width: pageWidth, height: height});

                    for (page in data.pageWrap) {
                        if (!has(page, data.pageWrap)) continue;

                        prop = turnMethods._pageSize.call(this, page, true);

                        data.pageObjs[page].css({width: prop.width, height: prop.height});
                        data.pageWrap[page].css(prop);

                        if (data.pages[page])
                            data.pages[page].css({width: prop.width, height: prop.height});
                    }

                    this.turn('resize');

                    return this;

                }
            },

            // Resizes each page

            resize: function () {

                var page, data = this.data();

                if (data.pages[0]) {
                    data.pageWrap[0].css({left: -this.width()});
                    data.pages[0].flip('resize', true);
                }

                for (page = 1; page <= data.totalPages; page++)
                    if (data.pages[page])
                        data.pages[page].flip('resize', true);

                turnMethods._updateShadow.call(this);

                if (data.opts.autoCenter)
                    this.turn('center');

            },

            // Removes an animation from the cache

            _removeMv: function (page) {

                var i, data = this.data();

                for (i = 0; i < data.pageMv.length; i++)
                    if (data.pageMv[i] == page) {
                        data.pageMv.splice(i, 1);
                        return true;
                    }

                return false;

            },

            // Adds an animation to the cache

            _addMv: function (page) {

                var data = this.data();

                turnMethods._removeMv.call(this, page);
                data.pageMv.push(page);

            },

            // Gets indexes for a view

            _view: function (page) {

                var data = this.data();

                page = page || data.page;

                if (data.display == 'double')
                    return (page % 2) ? [page - 1, page] : [page, page + 1];
                else
                    return [page];

            },

            // Gets a view

            view: function (page) {

                var data = this.data(),
                    view = turnMethods._view.call(this, page);

                if (data.display == 'double')
                    return [(view[0] > 0) ? view[0] : 0,
                        (view[1] <= data.totalPages) ? view[1] : 0];
                else
                    return [(view[0] > 0 && view[0] <= data.totalPages) ? view[0] : 0];

            },

            // Stops animations

            stop: function (ignore, animate) {

                if (this.turn('animating')) {

                    var i, opts, page,
                        data = this.data();

                    if (data.tpage) {
                        data.page = data.tpage;
                        delete data['tpage'];
                    }

                    for (i = 0; i < data.pageMv.length; i++) {

                        if (!data.pageMv[i] || data.pageMv[i] === ignore)
                            continue;

                        page = data.pages[data.pageMv[i]];
                        opts = page.data().f.opts;

                        page.flip('hideFoldedPage', animate);

                        if (!animate)
                            flipMethods._moveFoldingPage.call(page, false);

                        if (opts.force) {
                            opts.next = (opts.page % 2 === 0) ? opts.page - 1 : opts.page + 1;
                            delete opts['force'];
                        }

                    }
                }

                this.turn('update');

                return this;
            },

            // Gets and sets the number of pages

            pages: function (pages) {

                var data = this.data();

                if (pages) {

                    if (pages < data.totalPages) {

                        for (var page = data.totalPages; page > pages; page--)
                            this.turn('removePage', page);

                    }

                    data.totalPages = pages;
                    turnMethods._fitPage.call(this, data.page);

                    return this;

                } else
                    return data.totalPages;

            },

            // Checks missing pages

            _missing: function (page) {

                var data = this.data();

                if (data.totalPages < 1)
                    return;

                var p,
                    range = this.turn('range', page),
                    missing = [];

                for (p = range[0]; p <= range[1]; p++) {
                    if (!data.pageObjs[p])
                        missing.push(p);
                }

                if (missing.length > 0)
                    this.trigger('missing', [missing]);

            },

            // Sets a page without effect

            _fitPage: function (page) {

                var data = this.data(),
                    newView = this.turn('view', page);

                turnMethods._missing.call(this, page);

                if (!data.pageObjs[page])
                    return;

                data.page = page;

                this.turn('stop');

                for (var i = 0; i < newView.length; i++) {

                    if (newView[i] && data.pageZoom[newView[i]] != data.zoom) {

                        this.trigger('zoomed', [
                            newView[i],
                            newView,
                            data.pageZoom[newView[i]],
                            data.zoom]);

                        data.pageZoom[newView[i]] = data.zoom;

                    }
                }

                turnMethods._removeFromDOM.call(this);
                turnMethods._makeRange.call(this);
                turnMethods._updateShadow.call(this);
                this.trigger('turned', [page, newView]);
                this.turn('update');

                if (data.opts.autoCenter)
                    this.turn('center');

            },

            // Turns the page

            _turnPage: function (page) {

                var current,
                    next,
                    data = this.data(),
                    place = data.pagePlace[page],
                    view = this.turn('view'),
                    newView = this.turn('view', page);


                if (data.page != page) {

                    var currentPage = data.page;

                    if (trigger('turning', this, [page, newView]) == 'prevented') {

                        if (currentPage == data.page && $.inArray(place, data.pageMv) != -1)
                            data.pages[place].flip('hideFoldedPage', true);

                        return;

                    }

                    if ($.inArray(1, newView) != -1)
                        this.trigger('first');
                    if ($.inArray(data.totalPages, newView) != -1)
                        this.trigger('last');

                }

                if (data.display == 'single') {
                    current = view[0];
                    next = newView[0];
                } else if (view[1] && page > view[1]) {
                    current = view[1];
                    next = newView[0];
                } else if (view[0] && page < view[0]) {
                    current = view[0];
                    next = newView[1];
                }

                var optsCorners = data.opts.turnCorners.split(','),
                    flipData = data.pages[current].data().f,
                    opts = flipData.opts,
                    actualPoint = flipData.point;

                turnMethods._missing.call(this, page);

                if (!data.pageObjs[page])
                    return;

                this.turn('stop');

                data.page = page;

                turnMethods._makeRange.call(this);

                data.tpage = next;

                if (opts.next != next) {
                    opts.next = next;
                    opts.force = true;
                }

                this.turn('update');

                flipData.point = actualPoint;

                if (flipData.effect == 'hard')
                    if (data.direction == 'ltr')
                        data.pages[current].flip('turnPage',
                            (page > current) ? 'r' : 'l');
                    else
                        data.pages[current].flip('turnPage',
                            (page > current) ? 'l' : 'r');
                else {
                    if (data.direction == 'ltr')
                        data.pages[current].flip('turnPage',
                            optsCorners[(page > current) ? 1 : 0]);
                    else
                        data.pages[current].flip('turnPage',
                            optsCorners[(page > current) ? 0 : 1]);
                }

            },

            // Gets and sets a page

            page: function (page) {

                var data = this.data();

                if (page === undefined) {

                    return data.page;

                } else {

                    if (!data.disabled && !data.destroying) {

                        page = parseInt(page, 10);

                        if (page > 0 && page <= data.totalPages) {

                            if (page != data.page) {
                                if (!data.done || $.inArray(page, this.turn('view')) != -1)
                                    turnMethods._fitPage.call(this, page);
                                else
                                    turnMethods._turnPage.call(this, page);
                            }

                            return this;

                        } else {

                            throw turnError('The page ' + page + ' does not exist');

                        }

                    }

                }

            },

            // Turns to the next view

            next: function () {

                return this.turn('page', Math.min(this.data().totalPages,
                    turnMethods._view.call(this, this.data().page).pop() + 1));

            },

            // Turns to the previous view

            previous: function () {

                return this.turn('page', Math.max(1,
                    turnMethods._view.call(this, this.data().page).shift() - 1));

            },

            // Shows a peeling corner

            peel: function (corner, animate) {

                var data = this.data(),
                    view = this.turn('view');

                animate = (animate === undefined) ? true : animate === true;

                if (corner === false) {

                    this.turn('stop', null, animate);

                } else {

                    if (data.display == 'single') {

                        data.pages[data.page].flip('peel', corner, animate);

                    } else {

                        var page;

                        if (data.direction == 'ltr') {

                            page = (corner.indexOf('l') != -1) ? view[0] : view[1];

                        } else {

                            page = (corner.indexOf('l') != -1) ? view[1] : view[0];

                        }

                        if (data.pages[page])
                            data.pages[page].flip('peel', corner, animate);

                    }
                }

                return this;

            },

            // Adds a motion to the internal list
            // This event is called in context of flip

            _addMotionPage: function () {

                var opts = $(this).data().f.opts,
                    turn = opts.turn,
                    dd = turn.data();

                turnMethods._addMv.call(turn, opts.page);

            },

            // This event is called in context of flip

            _eventStart: function (e, opts, corner) {

                var data = opts.turn.data(),
                    actualZoom = data.pageZoom[opts.page];

                if (e.isDefaultPrevented()) {
                    turnMethods._updateShadow.call(opts.turn);
                    return;
                }

                if (actualZoom && actualZoom != data.zoom) {

                    opts.turn.trigger('zoomed', [
                        opts.page,
                        opts.turn.turn('view', opts.page),
                        actualZoom,
                        data.zoom]);

                    data.pageZoom[opts.page] = data.zoom;

                }

                if (data.display == 'single' && corner) {

                    if ((corner.charAt(1) == 'l' && data.direction == 'ltr') ||
                        (corner.charAt(1) == 'r' && data.direction == 'rtl')) {

                        opts.next = (opts.next < opts.page) ? opts.next : opts.page - 1;
                        opts.force = true;

                    } else {

                        opts.next = (opts.next > opts.page) ? opts.next : opts.page + 1;

                    }

                }

                turnMethods._addMotionPage.call(e.target);
                turnMethods._updateShadow.call(opts.turn);
            },

            // This event is called in context of flip

            _eventEnd: function (e, opts, turned) {

                var that = $(e.target),
                    data = that.data().f,
                    turn = opts.turn,
                    dd = turn.data();

                if (turned) {

                    var tpage = dd.tpage || dd.page;

                    if (tpage == opts.next || tpage == opts.page) {
                        delete dd.tpage;

                        turnMethods._fitPage.call(turn, tpage || opts.next, true);
                    }

                } else {

                    turnMethods._removeMv.call(turn, opts.page);
                    turnMethods._updateShadow.call(turn);
                    turn.turn('update');

                }

            },

            // This event is called in context of flip

            _eventPressed: function (e) {

                var page,
                    data = $(e.target).data().f,
                    turn = data.opts.turn,
                    turnData = turn.data(),
                    pages = turnData.pages;

                turnData.mouseAction = true;

                turn.turn('update');

                return data.time = new Date().getTime();

            },

            // This event is called in context of flip

            _eventReleased: function (e, point) {

                var outArea,
                    page = $(e.target),
                    data = page.data().f,
                    turn = data.opts.turn,
                    turnData = turn.data();

                if (turnData.display == 'single') {
                    outArea = (point.corner == 'br' || point.corner == 'tr') ?
                        point.x < page.width() / 2 :
                        point.x > page.width() / 2;
                } else {
                    outArea = point.x < 0 || point.x > page.width();
                }

                if ((new Date()).getTime() - data.time < 200 || outArea) {

                    e.preventDefault();
                    turnMethods._turnPage.call(turn, data.opts.next);

                }

                turnData.mouseAction = false;

            },

            // This event is called in context of flip

            _flip: function (e) {

                e.stopPropagation();

                var opts = $(e.target).data().f.opts;

                opts.turn.trigger('turn', [opts.next]);

                if (opts.turn.data().opts.autoCenter) {
                    opts.turn.turn('center', opts.next);
                }

            },

            //
            _touchStart: function () {
                var data = this.data();
                for (var page in data.pages) {
                    if (has(page, data.pages) &&
                        flipMethods._eventStart.apply(data.pages[page], arguments) === false) {
                        return false;
                    }
                }
            },

            //
            _touchMove: function () {
                var data = this.data();
                for (var page in data.pages) {
                    if (has(page, data.pages)) {
                        flipMethods._eventMove.apply(data.pages[page], arguments);
                    }
                }
            },

            //
            _touchEnd: function () {
                var data = this.data();
                for (var page in data.pages) {
                    if (has(page, data.pages)) {
                        flipMethods._eventEnd.apply(data.pages[page], arguments);
                    }
                }
            },

            // Calculate the z-index value for pages during the animation

            calculateZ: function (mv) {

                var i, page, nextPage, placePage, dpage,
                    that = this,
                    data = this.data(),
                    view = this.turn('view'),
                    currentPage = view[0] || view[1],
                    total = mv.length - 1,
                    r = {pageZ: {}, partZ: {}, pageV: {}},

                    addView = function (page) {
                        var view = that.turn('view', page);
                        if (view[0]) r.pageV[view[0]] = true;
                        if (view[1]) r.pageV[view[1]] = true;
                    };

                for (i = 0; i <= total; i++) {
                    page = mv[i];
                    nextPage = data.pages[page].data().f.opts.next;
                    placePage = data.pagePlace[page];
                    addView(page);
                    addView(nextPage);
                    dpage = (data.pagePlace[nextPage] == nextPage) ? nextPage : page;
                    r.pageZ[dpage] = data.totalPages - Math.abs(currentPage - dpage);
                    r.partZ[placePage] = data.totalPages * 2 - total + i;
                }

                return r;
            },

            // Updates the z-index and display property of every page

            update: function () {

                var page,
                    data = this.data();

                if (this.turn('animating') && data.pageMv[0] !== 0) {

                    // Update motion

                    var p, apage, fixed,
                        pos = this.turn('calculateZ', data.pageMv),
                        corner = this.turn('corner'),
                        actualView = this.turn('view'),
                        newView = this.turn('view', data.tpage);

                    for (page in data.pageWrap) {

                        if (!has(page, data.pageWrap))
                            continue;

                        fixed = data.pageObjs[page].hasClass('fixed');

                        data.pageWrap[page].css({
                            display: (pos.pageV[page] || fixed) ? '' : 'none',
                            zIndex:
                            (data.pageObjs[page].hasClass('hard') ?
                                    pos.partZ[page]
                                    :
                                    pos.pageZ[page]
                            ) || (fixed ? -1 : 0)
                        });

                        if ((p = data.pages[page])) {

                            p.flip('z', pos.partZ[page] || null);

                            if (pos.pageV[page])
                                p.flip('resize');

                            if (data.tpage) { // Is it turning the page to `tpage`?

                                p.flip('hover', false).flip('disable',
                                    $.inArray(parseInt(page, 10), data.pageMv) == -1 &&
                                    page != newView[0] &&
                                    page != newView[1]);

                            } else {

                                p.flip('hover', corner === false).flip('disable', page != actualView[0] && page != actualView[1]);

                            }

                        }

                    }

                } else {

                    // Update static pages

                    for (page in data.pageWrap) {

                        if (!has(page, data.pageWrap))
                            continue;

                        var pageLocation = turnMethods._setPageLoc.call(this, page);

                        if (data.pages[page]) {
                            data.pages[page].flip('disable', data.disabled || pageLocation != 1).flip('hover', true).flip('z', null);
                        }
                    }
                }

                return this;
            },

            // Updates the position and size of the flipbook's shadow

            _updateShadow: function () {

                var view, view2, shadow,
                    data = this.data(),
                    width = this.width(),
                    height = this.height(),
                    pageWidth = (data.display == 'single') ? width : width / 2;

                view = this.turn('view');

                if (!data.shadow) {
                    data.shadow = $('<div />', {
                        'class': 'shadow',
                        'css': divAtt(0, 0, 0).css
                    }).appendTo(this);
                }

                for (var i = 0; i < data.pageMv.length; i++) {
                    if (!view[0] || !view[1])
                        break;

                    view = this.turn('view', data.pages[data.pageMv[i]].data().f.opts.next);
                    view2 = this.turn('view', data.pageMv[i]);

                    view[0] = view[0] && view2[0];
                    view[1] = view[1] && view2[1];
                }

                if (!view[0]) shadow = (data.direction == 'ltr') ? 1 : 2;
                else if (!view[1]) shadow = (data.direction == 'ltr') ? 2 : 1;
                else shadow = 3;

                switch (shadow) {
                    case 1:
                        data.shadow.css({
                            width: pageWidth,
                            height: height,
                            top: 0,
                            left: pageWidth
                        });
                        break;
                    case 2:
                        data.shadow.css({
                            width: pageWidth,
                            height: height,
                            top: 0,
                            left: 0
                        });
                        break;
                    case 3:
                        data.shadow.css({
                            width: width,
                            height: height,
                            top: 0,
                            left: 0
                        });
                        break;
                }

            },

            // Sets the z-index and display property of a page
            // It depends on the current view

            _setPageLoc: function (page) {

                var data = this.data(),
                    view = this.turn('view'),
                    loc = 0;


                if (page == view[0] || page == view[1])
                    loc = 1;
                else if (
                    (data.display == 'single' && page == view[0] + 1) ||
                    (data.display == 'double' && page == view[0] - 2 || page == view[1] + 2)
                )
                    loc = 2;

                if (!this.turn('animating'))
                    switch (loc) {
                        case 1:
                            data.pageWrap[page].css(
                                {
                                    zIndex: data.totalPages,
                                    display: ''
                                });
                            break;
                        case 2:
                            data.pageWrap[page].css(
                                {
                                    zIndex: data.totalPages - 1,
                                    display: ''
                                });
                            break;
                        case 0:
                            data.pageWrap[page].css(
                                {
                                    zIndex: 0,
                                    display: (data.pageObjs[page].hasClass('fixed')) ? '' : 'none'
                                }
                            );
                            break;
                    }

                return loc;
            },

            // Gets and sets the options

            options: function (options) {

                if (options === undefined) {

                    return this.data().opts;

                } else {

                    var data = this.data();

                    // Set new values

                    $.extend(data.opts, options);

                    // Set pages

                    if (options.pages)
                        this.turn('pages', options.pages);

                    // Set page

                    if (options.page)
                        this.turn('page', options.page);

                    // Set display

                    if (options.display)
                        this.turn('display', options.display);

                    // Set direction

                    if (options.direction)
                        this.turn('direction', options.direction);

                    // Set size

                    if (options.width && options.height)
                        this.turn('size', options.width, options.height);

                    // Add event listeners

                    if (options.when)
                        for (var eventName in options.when)
                            if (has(eventName, options.when)) {
                                this.unbind(eventName).bind(eventName, options.when[eventName]);
                            }

                    return this;
                }

            },

            // Gets the current version

            version: function () {

                return version;

            }
        },

// Methods and properties for the flip page effect

        flipMethods = {

            // Constructor

            init: function (opts) {

                this.data({
                    f: {
                        disabled: false,
                        hover: false,
                        effect: (this.hasClass('hard')) ? 'hard' : 'sheet'
                    }
                });

                this.flip('options', opts);

                flipMethods._addPageWrapper.call(this);

                return this;
            },

            setData: function (d) {

                var data = this.data();

                data.f = $.extend(data.f, d);

                return this;
            },

            options: function (opts) {

                var data = this.data().f;

                if (opts) {
                    flipMethods.setData.call(this,
                        {opts: $.extend({}, data.opts || flipOptions, opts)});
                    return this;
                } else
                    return data.opts;

            },

            z: function (z) {

                var data = this.data().f;

                data.opts['z-index'] = z;

                if (data.fwrapper)
                    data.fwrapper.css({
                        zIndex: z || parseInt(data.parent.css('z-index'), 10) || 0
                    });

                return this;
            },

            _cAllowed: function () {

                var data = this.data().f,
                    page = data.opts.page,
                    turnData = data.opts.turn.data(),
                    odd = page % 2;

                if (data.effect == 'hard') {

                    return (turnData.direction == 'ltr') ?
                        [(odd) ? 'r' : 'l'] :
                        [(odd) ? 'l' : 'r'];

                } else {

                    if (turnData.display == 'single') {

                        if (page == 1)
                            return (turnData.direction == 'ltr') ?
                                corners['forward'] : corners['backward'];
                        else if (page == turnData.totalPages)
                            return (turnData.direction == 'ltr') ?
                                corners['backward'] : corners['forward'];
                        else
                            return corners['all'];

                    } else {

                        return (turnData.direction == 'ltr') ?
                            corners[(odd) ? 'forward' : 'backward']
                            :
                            corners[(odd) ? 'backward' : 'forward'];

                    }

                }

            },

            _cornerActivated: function (p) {

                var data = this.data().f,
                    width = this.width(),
                    height = this.height(),
                    point = {x: p.x, y: p.y, corner: ''},
                    csz = data.opts.cornerSize;

                if (point.x <= 0 || point.y <= 0 || point.x >= width || point.y >= height)
                    return false;

                var allowedCorners = flipMethods._cAllowed.call(this);

                switch (data.effect) {
                    case 'hard':

                        if (point.x > width - csz)
                            point.corner = 'r';
                        else if (point.x < csz)
                            point.corner = 'l';
                        else
                            return false;

                        break;

                    case 'sheet':

                        if (point.y < csz)
                            point.corner += 't';
                        else if (point.y >= height - csz)
                            point.corner += 'b';
                        else
                            return false;

                        if (point.x <= csz)
                            point.corner += 'l';
                        else if (point.x >= width - csz)
                            point.corner += 'r';
                        else
                            return false;

                        break;
                }

                return (!point.corner || $.inArray(point.corner, allowedCorners) == -1) ?
                    false : point;

            },

            _isIArea: function (e) {

                var pos = this.data().f.parent.offset();

                e = (isTouch && e.originalEvent) ? e.originalEvent.touches[0] : e;

                var cornerActivated = flipMethods._cornerActivated.call(this,
                    {
                        x: e.pageX - pos.left,
                        y: e.pageY - pos.top
                    });

                return cornerActivated;

            },

            _c: function (corner, opts) {

                opts = opts || 0;

                switch (corner) {
                    case 'tl':
                        return point2D(opts, opts);
                    case 'tr':
                        return point2D(this.width() - opts, opts);
                    case 'bl':
                        return point2D(opts, this.height() - opts);
                    case 'br':
                        return point2D(this.width() - opts, this.height() - opts);
                    case 'l':
                        return point2D(opts, 0);
                    case 'r':
                        return point2D(this.width() - opts, 0);
                }

            },

            _c2: function (corner) {

                switch (corner) {
                    case 'tl':
                        return point2D(this.width() * 2, 0);
                    case 'tr':
                        return point2D(-this.width(), 0);
                    case 'bl':
                        return point2D(this.width() * 2, this.height());
                    case 'br':
                        return point2D(-this.width(), this.height());
                    case 'l':
                        return point2D(this.width() * 2, 0);
                    case 'r':
                        return point2D(-this.width(), 0);
                }

            },

            _foldingPage: function () {

                var data = this.data().f;

                if (!data)
                    return;

                var opts = data.opts;

                if (opts.turn) {
                    data = opts.turn.data();
                    if (data.display == 'single')
                        return (opts.next > 1 || opts.page > 1) ? data.pageObjs[0] : null;
                    else
                        return data.pageObjs[opts.next];
                }

            },

            _backGradient: function () {

                var data = this.data().f,
                    turnData = data.opts.turn.data(),
                    gradient = turnData.opts.gradients && (turnData.display == 'single' ||
                        (data.opts.page != 2 && data.opts.page != turnData.totalPages - 1));

                if (gradient && !data.bshadow)
                    data.bshadow = $('<div/>', divAtt(0, 0, 1)).css({
                        'position': '',
                        width: this.width(),
                        height: this.height()
                    }).appendTo(data.parent);

                return gradient;

            },

            type: function () {

                return this.data().f.effect;

            },

            resize: function (full) {

                var data = this.data().f,
                    turnData = data.opts.turn.data(),
                    width = this.width(),
                    height = this.height();

                switch (data.effect) {
                    case 'hard':

                        if (full) {
                            data.wrapper.css({width: width, height: height});
                            data.fpage.css({width: width, height: height});
                            if (turnData.opts.gradients) {
                                data.ashadow.css({width: width, height: height});
                                data.bshadow.css({width: width, height: height});
                            }
                        }

                        break;
                    case 'sheet':

                        if (full) {
                            var size = Math.round(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)));

                            data.wrapper.css({width: size, height: size});
                            data.fwrapper.css({width: size, height: size}).children(':first-child').css({
                                width: width,
                                height: height
                            });

                            data.fpage.css({width: width, height: height});

                            if (turnData.opts.gradients)
                                data.ashadow.css({width: width, height: height});

                            if (flipMethods._backGradient.call(this))
                                data.bshadow.css({width: width, height: height});
                        }

                        if (data.parent.is(':visible')) {
                            var offset = findPos(data.parent[0]);

                            data.fwrapper.css({
                                top: offset.top,
                                left: offset.left
                            });

                            //if (data.opts.turn) {
                            offset = findPos(data.opts.turn[0]);
                            data.fparent.css({top: -offset.top, left: -offset.left});
                            //}
                        }

                        this.flip('z', data.opts['z-index']);

                        break;
                }

            },

            // Prepares the page by adding a general wrapper and another objects

            _addPageWrapper: function () {

                var att,
                    data = this.data().f,
                    turnData = data.opts.turn.data(),
                    parent = this.parent();

                data.parent = parent;

                if (!data.wrapper)
                    switch (data.effect) {
                        case 'hard':

                            var cssProperties = {};
                            cssProperties[vendor + 'transform-style'] = 'preserve-3d';
                            cssProperties[vendor + 'backface-visibility'] = 'hidden';

                            data.wrapper = $('<div/>', divAtt(0, 0, 2)).css(cssProperties).appendTo(parent).prepend(this);

                            data.fpage = $('<div/>', divAtt(0, 0, 1)).css(cssProperties).appendTo(parent);

                            if (turnData.opts.gradients) {
                                data.ashadow = $('<div/>', divAtt(0, 0, 0)).hide().appendTo(parent);

                                data.bshadow = $('<div/>', divAtt(0, 0, 0));
                            }

                            break;
                        case 'sheet':

                            var width = this.width(),
                                height = this.height(),
                                size = Math.round(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)));

                            data.fparent = data.opts.turn.data().fparent;

                            if (!data.fparent) {
                                var fparent = $('<div/>', {css: {'pointer-events': 'none'}}).hide();
                                fparent.data().flips = 0;
                                fparent.css(divAtt(0, 0, 'auto', 'visible').css).appendTo(data.opts.turn);

                                data.opts.turn.data().fparent = fparent;
                                data.fparent = fparent;
                            }

                            this.css({position: 'absolute', top: 0, left: 0, bottom: 'auto', right: 'auto'});

                            data.wrapper = $('<div/>', divAtt(0, 0, this.css('z-index'))).appendTo(parent).prepend(this);

                            data.fwrapper = $('<div/>', divAtt(parent.offset().top, parent.offset().left)).hide().appendTo(data.fparent);

                            data.fpage = $('<div/>', divAtt(0, 0, 0, 'visible')).css({cursor: 'default'}).appendTo(data.fwrapper);

                            if (turnData.opts.gradients)
                                data.ashadow = $('<div/>', divAtt(0, 0, 1)).appendTo(data.fpage);

                            flipMethods.setData.call(this, data);

                            break;
                    }

                // Set size
                flipMethods.resize.call(this, true);

            },

            // Takes a 2P point from the screen and applies the transformation

            _fold: function (point) {

                var data = this.data().f,
                    turnData = data.opts.turn.data(),
                    o = flipMethods._c.call(this, point.corner),
                    width = this.width(),
                    height = this.height();

                switch (data.effect) {

                    case 'hard':

                        if (point.corner == 'l')
                            point.x = Math.min(Math.max(point.x, 0), width * 2);
                        else
                            point.x = Math.max(Math.min(point.x, width), -width);

                        var leftPos,
                            shadow,
                            gradientX,
                            fpageOrigin,
                            parentOrigin,
                            totalPages = turnData.totalPages,
                            zIndex = data.opts['z-index'] || totalPages,
                            parentCss = {'overflow': 'visible'},
                            relX = (o.x) ? (o.x - point.x) / width : point.x / width,
                            angle = relX * 90,
                            half = angle < 90;

                        switch (point.corner) {
                            case 'l':

                                fpageOrigin = '0% 50%';
                                parentOrigin = '100% 50%';

                                if (half) {
                                    leftPos = 0;
                                    shadow = data.opts.next - 1 > 0;
                                    gradientX = 1;
                                } else {
                                    leftPos = '100%';
                                    shadow = data.opts.page + 1 < totalPages;
                                    gradientX = 0;
                                }

                                break;
                            case 'r':

                                fpageOrigin = '100% 50%';
                                parentOrigin = '0% 50%';
                                angle = -angle;
                                width = -width;

                                if (half) {
                                    leftPos = 0;
                                    shadow = data.opts.next + 1 < totalPages;
                                    gradientX = 0;
                                } else {
                                    leftPos = '-100%';
                                    shadow = data.opts.page != 1;
                                    gradientX = 1;
                                }

                                break;
                        }

                        parentCss[vendor + 'perspective-origin'] = parentOrigin;

                        data.wrapper.transform('rotateY(' + angle + 'deg)' +
                            'translate3d(0px, 0px, ' + (this.attr('depth') || 0) + 'px)', parentOrigin);

                        data.fpage.transform('translateX(' + width + 'px) rotateY(' + (180 + angle) + 'deg)', fpageOrigin);

                        data.parent.css(parentCss);

                        if (half) {
                            relX = -relX + 1;
                            data.wrapper.css({zIndex: zIndex + 1});
                            data.fpage.css({zIndex: zIndex});
                        } else {
                            relX = relX - 1;
                            data.wrapper.css({zIndex: zIndex});
                            data.fpage.css({zIndex: zIndex + 1});
                        }

                        if (turnData.opts.gradients) {
                            if (shadow)
                                data.ashadow.css({
                                    display: '',
                                    left: leftPos,
                                    backgroundColor: 'rgba(0,0,0,' + (0.5 * relX) + ')'
                                }).transform('rotateY(0deg)');
                            else
                                data.ashadow.hide();

                            data.bshadow.css({opacity: -relX + 1});

                            if (half) {
                                if (data.bshadow.parent()[0] != data.wrapper[0]) {
                                    data.bshadow.appendTo(data.wrapper);
                                }
                            } else {
                                if (data.bshadow.parent()[0] != data.fpage[0]) {
                                    data.bshadow.appendTo(data.fpage);
                                }
                            }
                            /*data.bshadow.css({
            backgroundColor: 'rgba(0,0,0,'+(0.1)+')'
          })*/
                            gradient(data.bshadow, point2D(gradientX * 100, 0), point2D((-gradientX + 1) * 100, 0),
                                [[0, 'rgba(0,0,0,0.3)'], [1, 'rgba(0,0,0,0)']], 2);

                        }

                        break;
                    case 'sheet':

                        var that = this,
                            a = 0,
                            alpha = 0,
                            beta,
                            px,
                            gradientEndPointA,
                            gradientEndPointB,
                            gradientStartVal,
                            gradientSize,
                            gradientOpacity,
                            shadowVal,
                            mv = point2D(0, 0),
                            df = point2D(0, 0),
                            tr = point2D(0, 0),
                            folding = flipMethods._foldingPage.call(this),
                            tan = Math.tan(alpha),
                            ac = turnData.opts.acceleration,
                            h = data.wrapper.height(),
                            top = point.corner.substr(0, 1) == 't',
                            left = point.corner.substr(1, 1) == 'l',

                            compute = function () {

                                var rel = point2D(0, 0);
                                var middle = point2D(0, 0);

                                rel.x = (o.x) ? o.x - point.x : point.x;

                                if (!hasRot) {
                                    rel.y = 0;
                                } else {
                                    rel.y = (o.y) ? o.y - point.y : point.y;
                                }

                                middle.x = (left) ? width - rel.x / 2 : point.x + rel.x / 2;
                                middle.y = rel.y / 2;

                                var alpha = A90 - Math.atan2(rel.y, rel.x),
                                    gamma = alpha - Math.atan2(middle.y, middle.x),
                                    distance = Math.max(0, Math.sin(gamma) * Math.sqrt(Math.pow(middle.x, 2) + Math.pow(middle.y, 2)));

                                a = deg(alpha);

                                tr = point2D(distance * Math.sin(alpha), distance * Math.cos(alpha));

                                if (alpha > A90) {
                                    tr.x = tr.x + Math.abs(tr.y * rel.y / rel.x);
                                    tr.y = 0;
                                    if (Math.round(tr.x * Math.tan(PI - alpha)) < height) {
                                        point.y = Math.sqrt(Math.pow(height, 2) + 2 * middle.x * rel.x);
                                        if (top) point.y = height - point.y;
                                        return compute();
                                    }
                                }

                                if (alpha > A90) {
                                    var beta = PI - alpha, dd = h - height / Math.sin(beta);
                                    mv = point2D(Math.round(dd * Math.cos(beta)), Math.round(dd * Math.sin(beta)));
                                    if (left) mv.x = -mv.x;
                                    if (top) mv.y = -mv.y;
                                }

                                px = Math.round(tr.y / Math.tan(alpha) + tr.x);

                                var side = width - px,
                                    sideX = side * Math.cos(alpha * 2),
                                    sideY = side * Math.sin(alpha * 2);
                                df = point2D(
                                    Math.round((left ? side - sideX : px + sideX)),
                                    Math.round((top) ? sideY : height - sideY));

                                // Gradients
                                if (turnData.opts.gradients) {

                                    gradientSize = side * Math.sin(alpha);

                                    var endingPoint = flipMethods._c2.call(that, point.corner),
                                        far = Math.sqrt(Math.pow(endingPoint.x - point.x, 2) + Math.pow(endingPoint.y - point.y, 2)) / width;

                                    shadowVal = Math.sin(A90 * ((far > 1) ? 2 - far : far));

                                    gradientOpacity = Math.min(far, 1);


                                    gradientStartVal = gradientSize > 100 ? (gradientSize - 100) / gradientSize : 0;

                                    gradientEndPointA = point2D(
                                        gradientSize * Math.sin(alpha) / width * 100,
                                        gradientSize * Math.cos(alpha) / height * 100);


                                    if (flipMethods._backGradient.call(that)) {

                                        gradientEndPointB = point2D(
                                            gradientSize * 1.2 * Math.sin(alpha) / width * 100,
                                            gradientSize * 1.2 * Math.cos(alpha) / height * 100);

                                        if (!left) gradientEndPointB.x = 100 - gradientEndPointB.x;
                                        if (!top) gradientEndPointB.y = 100 - gradientEndPointB.y;

                                    }

                                }

                                tr.x = Math.round(tr.x);
                                tr.y = Math.round(tr.y);

                                return true;
                            },

                            transform = function (tr, c, x, a) {

                                var f = ['0', 'auto'], mvW = (width - h) * x[0] / 100, mvH = (height - h) * x[1] / 100,
                                    cssA = {left: f[c[0]], top: f[c[1]], right: f[c[2]], bottom: f[c[3]]},
                                    cssB = {},
                                    aliasingFk = (a != 90 && a != -90) ? (left ? -1 : 1) : 0,
                                    origin = x[0] + '% ' + x[1] + '%';

                                that.css(cssA).transform(rotate(a) + translate(tr.x + aliasingFk, tr.y, ac), origin);

                                data.fpage.css(cssA).transform(
                                    rotate(a) +
                                    translate(tr.x + df.x - mv.x - width * x[0] / 100, tr.y + df.y - mv.y - height * x[1] / 100, ac) +
                                    rotate((180 / a - 2) * a),
                                    origin);

                                data.wrapper.transform(translate(-tr.x + mvW - aliasingFk, -tr.y + mvH, ac) + rotate(-a), origin);

                                data.fwrapper.transform(translate(-tr.x + mv.x + mvW, -tr.y + mv.y + mvH, ac) + rotate(-a), origin);

                                if (turnData.opts.gradients) {

                                    if (x[0])
                                        gradientEndPointA.x = 100 - gradientEndPointA.x;

                                    if (x[1])
                                        gradientEndPointA.y = (100 - gradientEndPointA.y);

                                    cssB['box-shadow'] = '0 0 20px rgba(0,0,0,' + (0.5 * shadowVal) + ')';
                                    folding.css(cssB);

                                    gradient(data.ashadow,
                                        point2D(left ? 100 : 0, top ? 0 : 100),
                                        point2D(gradientEndPointA.x, gradientEndPointA.y),
                                        [[gradientStartVal, 'rgba(0,0,0,0)'],
                                            [((1 - gradientStartVal) * 0.8) + gradientStartVal, 'rgba(0,0,0,' + (0.2 * gradientOpacity) + ')'],
                                            [1, 'rgba(255,255,255,' + (0.2 * gradientOpacity) + ')']],
                                        3,
                                        alpha);

                                    if (flipMethods._backGradient.call(that))
                                        gradient(data.bshadow,
                                            point2D(left ? 0 : 100, top ? 0 : 100),
                                            point2D(gradientEndPointB.x, gradientEndPointB.y),
                                            [[0.6, 'rgba(0,0,0,0)'],
                                                [0.8, 'rgba(0,0,0,' + (0.3 * gradientOpacity) + ')'],
                                                [1, 'rgba(0,0,0,0)']
                                            ],
                                            3);
                                }

                            };

                        switch (point.corner) {
                            case 'l' :

                                break;
                            case 'r' :

                                break;
                            case 'tl' :
                                point.x = Math.max(point.x, 1);
                                compute();
                                transform(tr, [1, 0, 0, 1], [100, 0], a);
                                break;
                            case 'tr' :
                                point.x = Math.min(point.x, width - 1);
                                compute();
                                transform(point2D(-tr.x, tr.y), [0, 0, 0, 1], [0, 0], -a);
                                break;
                            case 'bl' :
                                point.x = Math.max(point.x, 1);
                                compute();
                                transform(point2D(tr.x, -tr.y), [1, 1, 0, 0], [100, 100], -a);
                                break;
                            case 'br' :
                                point.x = Math.min(point.x, width - 1);
                                compute();
                                transform(point2D(-tr.x, -tr.y), [0, 1, 1, 0], [0, 100], a);
                                break;
                        }

                        break;
                }

                data.point = point;
            },

            _moveFoldingPage: function (move) {

                var data = this.data().f;

                if (!data)
                    return;

                var turn = data.opts.turn,
                    turnData = turn.data(),
                    place = turnData.pagePlace;

                if (move) {

                    var nextPage = data.opts.next;

                    if (place[nextPage] != data.opts.page) {

                        if (data.folding)
                            flipMethods._moveFoldingPage.call(this, false);

                        var folding = flipMethods._foldingPage.call(this);

                        folding.appendTo(data.fpage);
                        place[nextPage] = data.opts.page;
                        data.folding = nextPage;
                    }

                    turn.turn('update');

                } else {

                    if (data.folding) {

                        if (turnData.pages[data.folding]) {

                            // If we have flip available

                            var flipData = turnData.pages[data.folding].data().f;

                            turnData.pageObjs[data.folding].appendTo(flipData.wrapper);

                        } else if (turnData.pageWrap[data.folding]) {

                            // If we have the pageWrapper

                            turnData.pageObjs[data.folding].appendTo(turnData.pageWrap[data.folding]);

                        }

                        if (data.folding in place) {
                            place[data.folding] = data.folding;
                        }

                        delete data.folding;

                    }
                }
            },

            _showFoldedPage: function (c, animate) {

                var folding = flipMethods._foldingPage.call(this),
                    dd = this.data(),
                    data = dd.f,
                    visible = data.visible;

                if (folding) {

                    if (!visible || !data.point || data.point.corner != c.corner) {

                        var corner = (
                            data.status == 'hover' ||
                            data.status == 'peel' ||
                            data.opts.turn.data().mouseAction) ?
                            c.corner : null;

                        visible = false;

                        if (trigger('start', this, [data.opts, corner]) == 'prevented')
                            return false;

                    }

                    if (animate) {

                        var that = this,
                            point = (data.point && data.point.corner == c.corner) ?
                                data.point : flipMethods._c.call(this, c.corner, 1);

                        console.log("data.status: " + data.status);
                        console.log("point.corner: " + point.corner);

                        this.animatef({
                            from: [point.x, point.y],
                            to: [c.x, c.y],
                            duration: 500,
                            frame: function (v) {
                                c.x = Math.round(v[0]);
                                c.y = Math.round(v[1]);
                                flipMethods._fold.call(that, c);
                            }
                        });

                    } else {

                        flipMethods._fold.call(this, c);

                        if (dd.effect && !dd.effect.turning)
                            this.animatef(false);

                    }

                    if (!visible) {

                        switch (data.effect) {
                            case 'hard':

                                data.visible = true;
                                flipMethods._moveFoldingPage.call(this, true);
                                data.fpage.show();
                                if (data.opts.shadows)
                                    data.bshadow.show();

                                break;
                            case 'sheet':

                                data.visible = true;
                                data.fparent.show().data().flips++;
                                flipMethods._moveFoldingPage.call(this, true);
                                data.fwrapper.show();
                                if (data.bshadow)
                                    data.bshadow.show();

                                break;
                        }

                    }

                    return true;

                }

                return false;
            },

            hide: function () {

                var data = this.data().f,
                    turnData = data.opts.turn.data(),
                    folding = flipMethods._foldingPage.call(this);

                switch (data.effect) {
                    case 'hard':

                        if (turnData.opts.gradients) {
                            data.bshadowLoc = 0;
                            data.bshadow.remove();
                            data.ashadow.hide();
                        }

                        data.wrapper.transform('');
                        data.fpage.hide();

                        break;
                    case 'sheet':

                        if ((--data.fparent.data().flips) === 0)
                            data.fparent.hide();

                        this.css({left: 0, top: 0, right: 'auto', bottom: 'auto'}).transform('');

                        data.wrapper.transform('');

                        data.fwrapper.hide();

                        if (data.bshadow)
                            data.bshadow.hide();

                        folding.transform('');

                        break;
                }

                data.visible = false;

                return this;
            },

            hideFoldedPage: function (animate) {

                var data = this.data().f;

                if (!data.point) return;

                var that = this,
                    p1 = data.point,
                    hide = function () {
                        data.point = null;
                        data.status = '';
                        that.flip('hide');
                        that.trigger('end', [data.opts, false]);
                    };

                if (animate) {

                    var p4 = flipMethods._c.call(this, p1.corner),
                        top = (p1.corner.substr(0, 1) == 't'),
                        delta = (top) ? Math.min(0, p1.y - p4.y) / 2 : Math.max(0, p1.y - p4.y) / 2,
                        p2 = point2D(p1.x, p1.y + delta),
                        p3 = point2D(p4.x, p4.y - delta);

                    this.animatef({
                        from: 0,
                        to: 1,
                        frame: function (v) {
                            var np = bezier(p1, p2, p3, p4, v);
                            p1.x = np.x;
                            p1.y = np.y;
                            flipMethods._fold.call(that, p1);
                        },
                        complete: hide,
                        duration: 800,
                        hiding: true
                    });

                } else {

                    this.animatef(false);
                    hide();

                }
            },

            turnPage: function (corner) {

                var that = this,
                    data = this.data().f,
                    turnData = data.opts.turn.data();

                corner = {
                    corner: (data.corner) ?
                        data.corner.corner :
                        corner || flipMethods._cAllowed.call(this)[0]
                };

                var p1 = data.point ||
                    flipMethods._c.call(this,
                        corner.corner,
                        (data.opts.turn) ? turnData.opts.elevation : 0),
                    p4 = flipMethods._c2.call(this, corner.corner);

                this.trigger('flip').animatef({
                    from: 0,
                    to: 1,
                    frame: function (v) {

                        var np = bezier(p1, p1, p4, p4, v);
                        corner.x = np.x;
                        corner.y = np.y;
                        flipMethods._showFoldedPage.call(that, corner);

                    },
                    complete: function () {

                        that.trigger('end', [data.opts, true]);

                    },
                    duration: turnData.opts.duration,
                    turning: true
                });

                data.corner = null;
            },

            moving: function () {

                return 'effect' in this.data();

            },

            isTurning: function () {

                return this.flip('moving') && this.data().effect.turning;

            },

            corner: function () {

                return this.data().f.corner;

            },

            _eventStart: function (e) {

                var data = this.data().f,
                    turn = data.opts.turn;

                if (!data.corner && !data.disabled && !this.flip('isTurning') &&
                    data.opts.page == turn.data().pagePlace[data.opts.page]) {

                    data.corner = flipMethods._isIArea.call(this, e);

                    if (data.corner && flipMethods._foldingPage.call(this)) {

                        this.trigger('pressed', [data.point]);
                        flipMethods._showFoldedPage.call(this, data.corner);

                        return false;

                    } else
                        data.corner = null;

                }

            },

            _eventMove: function (e) {

                var data = this.data().f;

                if (!data.disabled) {

                    e = (isTouch) ? e.originalEvent.touches : [e];

                    if (data.corner) {

                        var pos = data.parent.offset();
                        data.corner.x = e[0].pageX - pos.left;
                        data.corner.y = e[0].pageY - pos.top;
                        flipMethods._showFoldedPage.call(this, data.corner);

                    } else if (data.hover && !this.data().effect && this.is(':visible')) {

                        var point = flipMethods._isIArea.call(this, e[0]);

                        if (point) {

                            if ((data.effect == 'sheet' && point.corner.length == 2) || data.effect == 'hard') {
                                data.status = 'hover';
                                var origin = flipMethods._c.call(this, point.corner, data.opts.cornerSize / 2);
                                point.x = origin.x;
                                point.y = origin.y;
                                flipMethods._showFoldedPage.call(this, point, true);
                                if (point.corner === 'tr') {
                                    $(`.page-num-${currentPage} .neg-line`).removeClass('show');
                                    $(`.page-num-${currentPage} .pos-line`).addClass('show');
                                    // $('.notification-top').removeClass('show');
                                    // $('.notification-bot').addClass('show');
                                    choiceId = 0;

                                    // this.append('' +
                                    //     '<div class="page-num-6">\n' +
                                    //     '          <div class="pages-content">\n' +
                                    //     '            <div class="content-inner">\n' +
                                    //     '              <h1>So again</h1>\n' +
                                    //     '              <h2>Thank You both.</h2>\n' +
                                    //     '              <h3></h3>\n' +
                                    //     '              <h4> added.</h4>\n' +
                                    //     '            </div>\n' +
                                    //     '          </div>\n' +
                                    //     '        </div>');
                                    //
                                    // console.log("Added!!!");
                                    //
                                    // this.turn('addPage', $('.page-num-6'));
                                    console.log("choiceId: " + choiceId);
                                } else if (point.corner === 'br') {
                                    $(`.page-num-${currentPage} .pos-line`).removeClass('show');
                                    $(`.page-num-${currentPage} .neg-line`).addClass('show');
                                    // $('.notification-bot').removeClass('show');
                                    // $('.notification-top').addClass('show');

                                    console.log("choiceId: " + choiceId);
                                    choiceId = 1;
                                }
                            }

                        } else {

                            if (data.status == 'hover') {
                                data.status = '';
                                // $('.notification-top').removeClass('show');
                                // $('.notification-bot').removeClass('show');
                                $(`.page-num-${currentPage} .pos-line`).removeClass('show');
                                $(`.page-num-${currentPage} .neg-line`).removeClass('show');
                                flipMethods.hideFoldedPage.call(this, true);
                            }

                        }

                    }

                }

            },

            _eventEnd: function () {

                var data = this.data().f,
                    corner = data.corner;

                if (!data.disabled && corner) {
                    if (trigger('released', this, [data.point || corner]) != 'prevented') {
                        flipMethods.hideFoldedPage.call(this, true);
                    }
                }

                data.corner = null;

            },

            disable: function (disable) {

                flipMethods.setData.call(this, {'disabled': disable});
                return this;

            },

            hover: function (hover) {

                flipMethods.setData.call(this, {'hover': hover});
                return this;

            },

            peel: function (corner, animate) {

                var data = this.data().f;

                if (corner) {

                    if ($.inArray(corner, corners.all) == -1)
                        throw turnError('Corner ' + corner + ' is not permitted');

                    if ($.inArray(corner, flipMethods._cAllowed.call(this)) != -1) {

                        var point = flipMethods._c.call(this, corner, data.opts.cornerSize / 2);

                        data.status = 'peel';

                        flipMethods._showFoldedPage.call(this,
                            {
                                corner: corner,
                                x: point.x,
                                y: point.y
                            }, animate);

                    }


                } else {

                    data.status = '';

                    flipMethods.hideFoldedPage.call(this, animate);

                }

                return this;
            }
        };


// Processes classes

    function dec(that, methods, args) {

        if (!args[0] || typeof(args[0]) == 'object')
            return methods.init.apply(that, args);

        else if (methods[args[0]])
            return methods[args[0]].apply(that, Array.prototype.slice.call(args, 1));

        else
            throw turnError(args[0] + ' is not a method or property');

    }


// Attributes for a layer

    function divAtt(top, left, zIndex, overf) {

        return {
            'css': {
                position: 'absolute',
                top: top,
                left: left,
                'overflow': overf || 'hidden',
                zIndex: zIndex || 'auto'
            }
        };

    }

// Gets a 2D point from a bezier curve of four points

    function bezier(p1, p2, p3, p4, t) {

        var a = 1 - t,
            b = a * a * a,
            c = t * t * t;

        return point2D(Math.round(b * p1.x + 3 * t * a * a * p2.x + 3 * t * t * a * p3.x + c * p4.x),
            Math.round(b * p1.y + 3 * t * a * a * p2.y + 3 * t * t * a * p3.y + c * p4.y));

    }

// Converts an angle from degrees to radians

    function rad(degrees) {

        return degrees / 180 * PI;

    }

// Converts an angle from radians to degrees

    function deg(radians) {

        return radians / PI * 180;

    }

// Gets a 2D point

    function point2D(x, y) {

        return {x: x, y: y};

    }

// Webkit 534.3 on Android wrongly repaints elements that use overflow:hidden + rotation

    function rotationAvailable() {
        var parts;

        if ((parts = /AppleWebkit\/([0-9\.]+)/i.exec(navigator.userAgent))) {
            var webkitVersion = parseFloat(parts[1]);
            return (webkitVersion > 534.3);
        } else {
            return true;
        }
    }

// Returns the traslate value

    function translate(x, y, use3d) {

        return (has3d && use3d) ? ' translate3d(' + x + 'px,' + y + 'px, 0px) '
            : ' translate(' + x + 'px, ' + y + 'px) ';

    }

// Returns the rotation value

    function rotate(degrees) {

        return ' rotate(' + degrees + 'deg) ';

    }

// Checks if a property belongs to an object

    function has(property, object) {

        return Object.prototype.hasOwnProperty.call(object, property);

    }

// Gets the CSS3 vendor prefix

    function getPrefix() {

        var vendorPrefixes = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
            len = vendorPrefixes.length,
            vendor = '';

        while (len--)
            if ((vendorPrefixes[len] + 'Transform') in document.body.style)
                vendor = '-' + vendorPrefixes[len].toLowerCase() + '-';

        return vendor;

    }

// Detects the transitionEnd Event

    function getTransitionEnd() {

        var t,
            el = document.createElement('fakeelement'),
            transitions = {
                'transition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'MSTransition': 'transitionend',
                'MozTransition': 'transitionend',
                'WebkitTransition': 'webkitTransitionEnd'
            };

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }

// Gradients

    function gradient(obj, p0, p1, colors, numColors) {

        var j, cols = [];

        if (vendor == '-webkit-') {

            for (j = 0; j < numColors; j++)
                cols.push('color-stop(' + colors[j][0] + ', ' + colors[j][1] + ')');

            obj.css({
                'background-image':
                '-webkit-gradient(linear, ' +
                p0.x + '% ' +
                p0.y + '%,' +
                p1.x + '% ' +
                p1.y + '%, ' +
                cols.join(',') + ' )'
            });
        } else {

            p0 = {x: p0.x / 100 * obj.width(), y: p0.y / 100 * obj.height()};
            p1 = {x: p1.x / 100 * obj.width(), y: p1.y / 100 * obj.height()};

            var dx = p1.x - p0.x,
                dy = p1.y - p0.y,
                angle = Math.atan2(dy, dx),
                angle2 = angle - Math.PI / 2,
                diagonal = Math.abs(obj.width() * Math.sin(angle2)) + Math.abs(obj.height() * Math.cos(angle2)),
                gradientDiagonal = Math.sqrt(dy * dy + dx * dx),
                corner = point2D((p1.x < p0.x) ? obj.width() : 0, (p1.y < p0.y) ? obj.height() : 0),
                slope = Math.tan(angle),
                inverse = -1 / slope,
                x = (inverse * corner.x - corner.y - slope * p0.x + p0.y) / (inverse - slope),
                c = {x: x, y: inverse * x - inverse * corner.x + corner.y},
                segA = (Math.sqrt(Math.pow(c.x - p0.x, 2) + Math.pow(c.y - p0.y, 2)));

            for (j = 0; j < numColors; j++)
                cols.push(' ' + colors[j][1] + ' ' + ((segA + gradientDiagonal * colors[j][0]) * 100 / diagonal) + '%');

            obj.css({'background-image': vendor + 'linear-gradient(' + (-angle) + 'rad,' + cols.join(',') + ')'});
        }
    }


// Triggers an event

    function trigger(eventName, context, args) {

        var event = $.Event(eventName);
        context.trigger(event, args);
        if (event.isDefaultPrevented())
            return 'prevented';
        else if (event.isPropagationStopped())
            return 'stopped';
        else
            return '';
    }

// JS Errors

    function turnError(message) {

        function TurnJsError(message) {
            this.name = "TurnJsError";
            this.message = message;
        }

        TurnJsError.prototype = new Error();
        TurnJsError.prototype.constructor = TurnJsError;
        return new TurnJsError(message);

    }

// Find the offset of an element ignoring its transformation

    function findPos(obj) {

        var offset = {top: 0, left: 0};

        do {
            offset.left += obj.offsetLeft;
            offset.top += obj.offsetTop;
        } while ((obj = obj.offsetParent));

        return offset;

    }

// Checks if there's hard page compatibility
// IE9 is the only browser that does not support hard pages

    function hasHardPage() {
        return (navigator.userAgent.indexOf('MSIE 9.0') == -1);
    }

// Request an animation

    window.requestAnim = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };

    })();

// Extend $.fn

    $.extend($.fn, {

        flip: function () {
            return dec($(this[0]), flipMethods, arguments);
        },

        turn: function () {
            return dec($(this[0]), turnMethods, arguments);
        },

        transform: function (transform, origin) {

            var properties = {};

            if (origin)
                properties[vendor + 'transform-origin'] = origin;

            properties[vendor + 'transform'] = transform;

            return this.css(properties);

        },

        animatef: function (point) {

            var data = this.data();

            if (data.effect)
                data.effect.stop();

            if (point) {

                if (!point.to.length) point.to = [point.to];
                if (!point.from.length) point.from = [point.from];

                var diff = [],
                    len = point.to.length,
                    animating = true,
                    that = this,
                    time = (new Date()).getTime(),
                    frame = function () {

                        if (!data.effect || !animating)
                            return;

                        var v = [],
                            timeDiff = Math.min(point.duration, (new Date()).getTime() - time);

                        for (var i = 0; i < len; i++)
                            v.push(data.effect.easing(1, timeDiff, point.from[i], diff[i], point.duration));

                        point.frame((len == 1) ? v[0] : v);

                        if (timeDiff == point.duration) {
                            delete data['effect'];
                            that.data(data);
                            if (point.complete)
                                point.complete();
                        } else {
                            window.requestAnim(frame);
                        }
                    };

                for (var i = 0; i < len; i++)
                    diff.push(point.to[i] - point.from[i]);

                data.effect = $.extend({
                    stop: function () {
                        animating = false;
                    },
                    easing: function (x, t, b, c, data) {
                        return c * Math.sqrt(1 - (t = t / data - 1) * t) + b;
                    }
                }, point);

                this.data(data);

                frame();

            } else {

                delete data['effect'];

            }
        }
    });

// Export some globals

    $.isTouch = isTouch;
    $.mouseEvents = mouseEvents;
    $.cssPrefix = getPrefix;
    $.cssTransitionEnd = getTransitionEnd;
    $.findPos = findPos;

})(jQuery);

function addPage() {
    const div = document.createElement('div');
    div.innerHTML = '<div class="page-num-6">\n' +
        '          <div class="pages-content">\n' +
        '            <div class="content-inner">\n' +
        '              <h1>So again</h1>\n' +
        '              <h2>Thank You both.</h2>\n' +
        '              <h3></h3>\n' +
        '              <h4> added.</h4>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '        </div>';

    $('.pages').turn('addPage', div);
}

$(window).ready(function () {
    initModels();
    addPages(currentEvents, false);
    // $('.content-out').click(function() {
    //   $('.content-out').fadeOut("slow");
    // });
    $('.pages').turn({
        duration: 1500,
        width: 800,
        height: 575,
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
                // addPage();
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