
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
    const allEvents = [];
    allEvents.push(createEvent(1,"修女","1.png","冒险家，你能帮我讨伐邪恶的术士嘛？","义不容辞。","我还有要事在身.","1","normal",[-1,-1],[0,0,0,0,0,10],[0,0,0,0,0,-10],""));
    allEvents.push(createEvent(2,"修女","1.png","你愿意帮忙捐助一下教会嘛？","乐于奉献。","我手边有点紧.","1","normal",[-1,-1],[10,-10,0,0,0,1],[5,0,0,0,0,0],""));
    allEvents.push(createEvent(3,"修女","1.png","教会的经书隐藏着智慧。","能借我阅读一下嘛？","我还是想休息一下。","1","normal",[-1,-1],[0,0,10,10,10,0],[10,0,0,0,0,0],""));
    allEvents.push(createEvent(4,"修女","1.png","我很后悔我之前做过的错事，能否帮我去跟骑士道歉？","我可以帮助你，愿你能得到解脱。","如果做错的事情都可以重来，那么经历将毫无意义。","3","normal",[-1,-1],[0,0,0,0,0,20],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(5,"修女","1.png","听闻东方有种神奇的草药，我这里有它标示的地图，现在免费赠送给您。","修女的话似乎可信，值得尝试。","此去不知归途，还是休息休息吧。","2","normal",[-1,-1],[-20,0,0,0,0,0],[10,0,0,0,0,0],""));
    allEvents.push(createEvent(6,"修女","1.png","西边悬崖上有把勇者之剑，快去拿回来吧～","赶紧去取一下。","悬崖上真的只有宝剑嘛？","5","normal",[600,500],[0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(7,"牧师","1.png","年轻的冒险者，来吃些免费的食物吧。","正有此意。","不劳者不食.","1","normal",[-1,-1],[10,0,0,0,0,0],[0,0,0,0,0,10],""));
    allEvents.push(createEvent(8,"牧师","1.png","教会附近有一些僵尸，能否帮忙清理。","要我出手的话可是费用不菲。","就顺手帮一下吧。","1","normal",[-1,-1],[-10,20,0,0,0,-10],[-10,0,0,0,0,10],""));
    allEvents.push(createEvent(9,"牧师","1.png","这里有些杂书，免费赠予给你。","免费送的东西肯定心怀鬼胎。","来看看里面有没有有用的信息吧。","1","normal",[-1,-1],[0,0,0,0,0,-10],[-10,0,10,10,10,0],""));
    allEvents.push(createEvent(10,"牧师","1.png","生前我也曾经迷惘挣扎，现在只能提供一些有用的信息给你。","具体是什么呢?。","孤魂野鬼，选择走开。","5","normal",[501,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(10,"医生","1.png","能否借我些金钱去帮助我的病人？","我又不是慈善家。","我只有这些了，代表我的心意。","1","normal",[-1,-1][0,0,0,0,0,-10],[0,-10,0,0,0,10],""));
    //分叉
    allEvents.push(createEvent(11,"医生","1.png","能否帮我寻找一些草药？","如果报酬不菲，那自然可以。","我乐于前往。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(12,"医生","1.png","需要治疗下吗?","我刚好需要休息。","不必了。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    //special
    allEvents.push(createEvent(14,"医生","1.png","交不起钱的穷人，能否帮我驱赶一下。","报酬足够的话可以的。","不能违背自己的良心啊。","3","normal",[608,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(15,"医生","1.png","医者仁心，王子病重而亡。王却因此处死我，能否帮我复仇。","公正与怜悯，我会帮助你！","你将带着怨恨长眠于此。。","1","normal",[615,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(16,"僧侣","1.png","需要学习下武技嘛?","当然愿意。","已经没有精力耗费在这种地方了。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(17,"僧侣","1.png","年轻的冒险家需要治疗吗?","感谢你的帮助。","我并不信任你。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(18,"僧侣","1.png","我有一本武技的密卷，想要购买吗?","如果不交出密卷，你只有死路一条。","好的，我买下来了。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(19,"僧侣","1.png","我正在被疯狂的教会追杀，你能保护我吗？","保护他。","听说告发他还有奖金。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));

    allEvents.push(createEvent(20,"白骑士","1.png","每一个人都是勇士，打败敌人最好的方法就是让自己变得更强。","我想跟您学习武技。","让我拜您为师吧。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(21,"白骑士","1.png","骑士也许会妥协，但是其实绝不会放弃执行正义。","你说的很对。","似乎过于迂腐。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(22,"白骑士","1.png","在童话里，王子和公主会很幸福很幸福的永远生活在一起，他们看不见的是骑士的守护。","这就是骑士的指责。","似乎骑士的压力过于重大。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));

    allEvents.push(createEvent(20,"黑骑士","1.png","曾经的天真，帮助愚蠢的我长大。","这不是你堕落的理由。","也许他是个真正的骑士。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(21,"黑骑士","1.png","大众总喜欢将真相扭曲到自己可以接受的程度，这就是一种充满惰性的思维方式。","我想跟你学习武艺。","我并不认为你很强大。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(22,"黑骑士","1.png","在现实里，王子和公主可能不会在一起，因为他们都以为自己是骑士，只会默默的等待。","非常悲哀的存在呢。","也许等待才能会有奇迹的结局。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(23,"黑骑士","1.png","有人需要真皮，所以才有了猎人去虐杀动物， 最终被捕的是猎人，那么披着真皮的人呢？","这就是堕落的借口吗？","也许错的不是他。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));

    allEvents.push(createEvent(24,"蒙面旅人","1.png","朋友，你见到过大海吗？","大海是什么。","我并不想去做无谓的冒险。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(25,"蒙面旅人","1.png","人生的轨迹纵横交错，就是世界上最美的一幅图。","交错的命运是为了什么呢？","我对你没有任何所求。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));

    allEvents.push(createEvent(26,"商人","1.png","我这里正需要人手，要不要来打零工换些金钱。","我真有此意。","没什么时间。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(27,"商人","1.png","zzzzzzz（打盹）","摸摸看他身手有啥？","还是不打扰他了。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));

    allEvents.push(createEvent(28,"巫妖","1.png","亡灵国度是容不得活人的。","人类世界就容得下活人吗？","这不过是亡灵虚假的谎言。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(29,"巫妖","1.png","年份即智慧，什么阴谋、背叛、欺骗没有见识过。","我想向您请教魔法的知识","但是这不是你背叛的借口。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(30,"巫妖","1.png","会去尊重崇尚献出生命的人，都是与你无关紧要的人。真正在乎你的人，只希望你好好的活着。","为了守护所爱之人，有些牺牲是必须的 ","我会保护好自己。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));

    allEvents.push(createEvent(31,"盗贼","1.png","要不要跟我学学身手。","我正好想变的更加灵活。","偷窃的本事还是算了。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(29,"盗贼","1.png","跟我一起去历练吧。","刚好出去历练一下","成为一个盗贼并没有很有趣。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(30,"法师","1.png","要么安于现状，要么改变现状，改变的总是要付出。","我愿意跟你修炼。","要钱还是算了吧。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(31,"法师","1.png","听说过法师塔吗？","我想进入学习。","我会保护好自己。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(32,"法师","1.png","知识才是一个魔法师最虔诚的信仰。","知识也是我的信仰。","我并不信仰知识。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(33,"野鬼","1.png","失去的，就是失去的，时间什么都不会冲淡，只会让自己对过去的事情变得麻木。","还是不要打扰这个孤独的灵魂。","鬼魂似乎想要传达什么。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(34,"猎人","1.png","跟我一起去打猎吧。","去练练身手也不错。","确实想打猎换点钱。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));

    allEvents.push(createEvent(35,"邪恶的王","1.png","你身上的味道我很讨厌。","斗。","斗。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(36,"善良的王","1.png","你难道不觉得可悲吗？","斗。","斗。","1","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));



    allEvents.push(createEvent(13,"医生","1.png","西方的悬崖上传闻有魔龙作恶。","无论多么危险我都将带头征讨。","这肯定是无稽之谈。","5","normal",[-1,-1][0,0,0,0,0,1],[0,0,0,0,0,-1],""));
    allEvents.push(createEvent(500,"修女","1.png","也有可能有怪物守护。","勇者无畏，愿意接受挑战。","太危险了还是算了吧。","","normal",[600,601][-50,0,0,0,0,30],[0,0,0,0,0,-10],""));
    allEvents.push(createEvent(501,"牧师","1.png","西方的巨人手中，持有勇者之剑，但却作恶多端。","我将前往讨伐。","这种危险的事情我可不去。","","normal",[600,601][-50,0,0,0,0,30],[0,0,0,0,0,-10],""));

    //0结束 -1 随机 其他数字是链接
    allEvents.push(createEvent(600,"称号","1.png","孤魂野鬼","Pass","Pass.","","normal",[0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(601,"称号","1.png","法海无边","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(602,"称号","1.png","时光飞逝","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(603,"称号","1.png","时光荏苒","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(604,"称号","1.png","战争艺术","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(605,"称号","1.png","海上传奇","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(606,"称号","1.png","别无所求","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(607,"称号","1.png","屠杀殆尽","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(608,"称号","1.png","恃强凌弱","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(609,"称号","1.png","巨龙传说","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(610,"称号","1.png","傲气冲天","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(611,"称号","1.png","英雄气短","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(612,"称号","1.png","任人宰割","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(613,"称号","1.png","勇者之路","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(614,"称号","1.png","殊死一搏","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(615,"称号","1.png","英雄本色","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(616,"称号","1.png","胜利逃亡","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(617,"称号","1.png","妙手空空","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(618,"称号","1.png","凤凰涅槃","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(619,"称号","1.png","巨人杀手","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(620,"称号","1.png","命运星空","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(621,"称号","1.png","战士之魂","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(622,"称号","1.png","九头蛇之死","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));


    allEvents.push(createEvent(800,"称号","1.png","卷土重来","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(800,"称号","1.png","咫尺天堂","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(800,"称号","1.png","咫尺地狱","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(800,"称号","1.png","一念天堂","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));
    allEvents.push(createEvent(800,"称号","1.png","一念地狱","Pass。","Pass.","1","normal",[-1,-1],[0,0,0,0,0,0],[0,0,0,0,0,0],""));

}

