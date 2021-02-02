const questionList = [
    {
        question: "你最喜欢学校的哪门课？",
        optionList: [
            {
                text: "语文、英语",
            },
            {
                text: "数学、计算机（微机）课",
            },
            {
                text: "自然",
            },
            {
                text: "思想品德",
            },
            {
                text: "体育课、活动课",
            },
        ]
    },
    {
        question: "送你一本书做礼物，你希望这本书是讲什么的？",
        optionList: [
            {
                text: "历史故事",
            },
            {
                text: "军事战争",
            },
            {
                text: "神话童话",
            },
            {
                text: "太空科技",
            },
            {
                text: "恐龙奥秘",
            },
            {
                text: "山脉海洋",
            },
            {
                text: "漫画笑话",
            },
            {
                text: "不想要书",
            },
        ]
    },
    {
        question: "读课外书的时候，你希望在哪儿读？",
        optionList: [
            {
                text: "坐在书桌旁边读",
                score: 85
            },
            {
                text: "趴在沙发上读",
                score: 75
            },
            {
                text: "躺在床上、躲在被窝里读",
                score: 60
            },
            {
                text: "坐在地板上读",
                score: 60
            },
            {
                text: "没时间，也不喜欢读",
                score: 50
            }
        ]
    },
    {
        question: "你会用多长时间读书？",
        optionList: [
            {
                text: "每天都要读1~2小时",
                score: 90
            },
            {
                text: "每天大概半小时左右",
                score: 80
            },
            {
                text: "一周看两三次，每次30分钟",
                score: 60
            },
            {
                text: "想起来的时候看，没固定时间",
                score: 50
            }
        ]
    },
    {
        question: "平时喜欢干什么？",
        optionList: [
            {
                text: "画画、听歌~2小时",
                score: 1.05
            },
            {
                text: "读书、听故事",
                score: 1.01
            },
            {
                text: "篮球、足球、跆拳道",
                score: 0.88
            },
            {
                text: "和朋友出去玩",
                score: 0.9
            },
            {
                text: "做手工",
                score: 0.95
            }
        ]
    },
    {
        question: "拿到一本书，你会……？",
        optionList: [
            {
                text: "看看书的封面是否好玩，里边有没有漂亮的书签",
                score: 50
            },
            {
                text: "先看看书里的插图有多少，有没有意思",
                score: 60
            },
            {
                text: "浏览下简介，看看这个书讲了件什么事",
                score: 75
            },
            {
                text: "直接从第一页开始读，看故事情节",
                score: 99
            }
        ]
    },
    {
        question: "你认为自己的朋友中，称得上“爱读书”的有几个？",
        optionList: [
            {
                text: "一个也没有",
                score: 50
            },
            {
                text: "也就1~2吧",
                score: 60
            },
            {
                text: "有3~5个",
                score: 75
            },
            {
                text: "都挺爱读书，数不过来",
                score: 80
            }
        ]
    },
    {
        question: "一般你会在哪儿读课外书",
        optionList: [
            {
                text: "学校里",
                score: 80
            },
            {
                text: "家里的书房",
                score: 80
            },
            {
                text: "书店里",
                score: 65
            },
            {
                text: "自己卧室或客厅",
                score: 70
            },
            {
                text: "平时不怎么读课外书",
                score: 50
            }
        ]
    },
    {
        question: "爸爸妈妈在家时，经常做的事是？",
        optionList: [
            {
                text: "看书，还督促我看",
                score: 80
            },
            {
                text: "工作",
                score: 70
            },
            {
                text: "做家务",
                score: 60
            },
            {
                text: "看电视、打游戏",
                score: 50
            },
        ]
    },
    {
        question: "家里有书柜吗？",
        optionList: [
            {
                text: "有，爸爸妈妈一个，我一个",
                score: 80
            },
            {
                text: "爸爸妈妈有，我没有",
                score: 70
            },
            {
                text: "没有书橱、书柜，但有个经常放书的地方",
                score: 65
            },
            {
                text: "书可以随心摆放，没有固定的位置",
                score: 55
            },
        ]
    },


    {
        question: "孩子在家会用多长时间读书？",
        optionList: [
            {
                text: "每天都要读1~2小时",
                score: 85
            },
            {
                text: "每天大概半小时左右",
                score: 75
            },
            {
                text: "一周看两三次，每次30分钟",
                score: 60
            },
            {
                text: "想起来的时候看，没固定时间",
                score: 50
            },
        ]
    },
    {
        question: "孩子在班级的排名情况是？",
        optionList: [
            {
                text: "前10名",
                score: 1.05
            },
            {
                text: "能在前30%",
                score: 1.02
            },
            {
                text: "成绩中等",
                score: 0.7
            },
            {
                text: "在30~40名左右",
                score: 0.65
            },
        ]
    },
    {
        question: "请选择下列符合孩子情况的选项",
        optionList: [
            {
                text: "喜欢拆开研究自己的玩具或者家里的东西",
                score: 80
            },
            {
                text: "做事喜欢征求父母的意见和看法",
                score: 65
            },
            {
                text: "遇到自己没见过的东西非要问个明白",
                score: 75
            },
            {
                text: "能够很好地遵守父母给定下的纪律",
                score: 60
            },
            {
                text:"没有特定的爱好，对大多数事情没有兴趣",
                score: 55
            }
        ]
    },
    {
        question: "对于孩子不喜欢吃，但非常有营养的食物（比如芹菜），你一般会",
        optionList: [
            {
                text: "随他吧，吃不吃、吃多少都行",
                score: 60
            },
            {
                text: "告诉他吃这个的好处，吃不吃随他",
                score: 80
            },
            {
                text: "反复跟他强调下吃这个的好处",
                score: 65
            },
            {
                text: "想方设法先他尝一下，他可能会喜欢上",
                score: 55
            },
        ]
    },
    {
        question: "家里已经有了这个玩具，孩子还跟你要，你会？",
        optionList: [
            {
                text: "温柔而坚定地告诉他：不可以",
                score: 70
            },
            {
                text: "先听听他到底想要干什么，想想为什么",
                score: 85
            },
            {
                text: "明确告诉他，如果这么做会面临怎样的惩罚",
                score: 60
            },
            {
                text: "告诉他为什么不行，帮他选一个替代方案",
                score: 85
            },
            {
                text: "反正也不涉及原则问题，那就买吧",
                score: 65
            },
        ]
    },
    {
        question: "对于孩子最喜欢做的事情，每次做这事的时间大概是？",
        optionList: [
            {
                text: "半个小时",
                score: 55
            },
            {
                text: "一个小时",
                score: 65
            },
            {
                text: "两个小时",
                score: 70
            },
            {
                text: "两个小时及以上",
                score: 80
            },
            {
                text: "没有认真统计过",
                score: 50
            }
        ]
    },
    {
        question: "下列哪个选项最符合孩子和小伙伴一起玩耍的状态？",
        optionList: [
            {
                text: "不属于一群孩子中比较爱表达的那一个",
                score: 55
            },
            {
                text: "是个“小话痨”，聊起天来嘴基本没停过",
                score: 70
            },
            {
                text: "跟其他小朋友的关系都不错",
                score: 60
            },
            {
                text: "会把从书中听来的故事讲给他人",
                score: 80
            },
            {
                text: "工作比较忙，没有很认真观察过",
                score: 50
            },
        ]
    },
    {
        question: "家里来陌生人、或到一个陌生的环境时，孩子的反应是？",
        optionList: [
            {
                text: "很快能适应，拉近彼此的距离",
                score: 80
            },
            {
                text: "过一会儿就熟了，问题不大",
                score: 70
            },
            {
                text: "孩子是慢热型，适应需要一段时间",
                score: 65
            },
            {
                text: "会非常腼腆、害羞，有些不适应",
                score: 55
            },
        ]
    },
    {
        question: "孩子有没有跟你分享过他身边的新鲜事？",
        optionList: [
            {
                text: "经常会跟我讲，像个小话痨",
                score: 80
            },
            {
                text: "跟我不会，但跟朋友一起话很多",
                score: 70
            },
            {
                text: "偶尔会，不是很多",
                score: 65
            },
            {
                text: "平时话不是很多，一般都是我主动问",
                score: 55
            },
        ]
    },
    {
        question: "从孩子向你提的问题中，你的感受是？",
        optionList: [
            {
                text: "他知道的还挺多，提的问题也很多（广度）",
                score: 75
            },
            {
                text: "这个问题我还真没想过，有点意思（复杂度）",
                score: 80
            },
            {
                text: "我感觉他比同龄的小孩想得多（深度）",
                score: 85
            },
            {
                text: "没怎么问过我问题",
                score: 65
            },
            {
                text: "都是一些小孩子的问题，没给我留下特殊印象的问题",
                score: 55
            },
        ]
    },
]

export {
    questionList
}