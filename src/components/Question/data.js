const questionList = [
    {
        question: "你最喜欢学校的哪门课？",
        optionList: [
            {
                label: "A",
                text: "语文、英语",
            },
            {
                label: "B",
                text: "数学、计算机（微机）课",
            },
            {
                label: "C",
                text: "自然",
            },
            {
                label: "D",
                text: "思想品德",
            },
            {
                label: "E",
                text: "体育课、活动课",
            },
        ]
    },
    {
        question: "送你一本书做礼物，你希望这本书是讲什么的？",
        optionList: [
            {
                label: "A",
                text: "历史故事",
            },
            {
                label: "B",
                text: "军事战争",
            },
            {
                label: "C",
                text: "神话童话",
            },
            {
                label: "D",
                text: "太空科技",
            },
            {
                label: "E",
                text: "恐龙奥秘",
            },
            {
                label: "F",
                text: "山脉海洋",
            },
            {
                label: "G",
                text: "漫画笑话",
            },
            {
                label: "H",
                text: "不想要书",
            },
        ]
    },
    {
        question: "读课外书的时候，你希望在哪儿读？",
        optionList: [
            {
                label: "A",
                text: "坐在书桌旁边读",
                score: 85
            },
            {
                label: "B",
                text: "趴在沙发上读",
                score: 75
            },
            {
                label: "C",
                text: "躺在床上、躲在被窝里读",
                score: 60
            },
            {
                label: "D",
                text: "坐在地板上读",
                score: 60
            },
            {
                label: "E",
                text: "没时间，也不喜欢读",
                score: 50
            }
        ]
    },
    {
        question: "你会用多长时间读书？",
        optionList: [
            {
                label: "A",
                text: "每天都要读1~2小时",
                score: 90
            },
            {
                label: "B",
                text: "每天大概半小时左右",
                score: 80
            },
            {
                label: "C",
                text: "一周看两三次，每次30分钟",
                score: 60
            },
            {
                label: "D",
                text: "想起来的时候看，没固定时间",
                score: 50
            }
        ]
    },
    {
        question: "平时喜欢干什么？",
        optionList: [
            {
                label: "A",
                text: "画画、听歌~2小时",
                score: 1.05
            },
            {
                label: "B",
                text: "读书、听故事",
                score: 1.1
            },
            {
                label: "C",
                text: "篮球、足球、跆拳道",
                score: 0.88
            },
            {
                label: "D",
                text: "和朋友出去玩",
                score: 0.9
            },
            {
                label: "E",
                text: "做手工",
                score: 0.95
            }
        ]
    },
    {
        question: "多长时间能看完一本书呢？",
        optionList: [
            {
                label: "A",
                text: "大概半天就可以",
                score: 90
            },
            {
                label: "B",
                text: "大概需要3~5天",
                score: 75
            },
            {
                label: "C",
                text: "大概需要1个多月",
                score: 65
            },
            {
                label: "D",
                text: "没有刻意统计过",
                score: 55
            }
        ]
    },
    {
        question: "你认为自己的朋友中，称得上“爱读书”的有几个？",
        optionList: [
            {
                label: "A",
                text: "一个也没有",
                score: 50
            },
            {
                label: "B",
                text: "也就1~2吧",
                score: 60
            },
            {
                label: "C",
                text: "有3~5个",
                score: 75
            },
            {
                label: "D",
                text: "都挺爱读书，数不过来",
                score: 80
            }
        ]
    },
    {
        question: "一般你会在哪儿读课外书",
        optionList: [
            {
                label: "A",
                text: "学校里",
                score: 80
            },
            {
                label: "B",
                text: "家里的书房",
                score: 80
            },
            {
                label: "C",
                text: "书店里",
                score: 65
            },
            {
                label: "D",
                text: "自己卧室或客厅",
                score: 70
            },
            {
                label: "E",
                text: "平时不怎么读课外书",
                score: 50
            }
        ]
    },
    {
        question: "爸爸妈妈在家时，经常做的事是？",
        optionList: [
            {
                label: "A",
                text: "看书，还督促我看",
                score: 80
            },
            {
                label: "B",
                text: "工作",
                score: 70
            },
            {
                label: "C",
                text: "做家务",
                score: 60
            },
            {
                label: "D",
                text: "看电视、打游戏",
                score: 50
            },
        ]
    },
    {
        question: "家里有书柜吗？",
        optionList: [
            {
                label: "A",
                text: "有，爸爸妈妈一个，我一个",
                score: 80
            },
            {
                label: "B",
                text: "爸爸妈妈有，我没有",
                score: 70
            },
            {
                label: "C",
                text: "没有书橱、书柜，但有个经常放书的地方",
                score: 65
            },
            {
                label: "D",
                text: "书可以随心摆放，没有固定的位置",
                score: 55
            },
        ]
    },
    {
        question: "孩子在家会用多长时间读书？",
        optionList: [
            {
                label: "A",
                text: "每天都要读1~2小时",
                score: 85
            },
            {
                label: "B",
                text: "每天大概半小时左右",
                score: 75
            },
            {
                label: "C",
                text: "一周看两三次，每次30分钟",
                score: 60
            },
            {
                label: "D",
                text: "想起来的时候看，没固定时间",
                score: 50
            },
        ]
    },
    {
        question: "孩子在班级的排名情况是？",
        optionList: [
            {
                label: "A",
                text: "前10名~2小时",
                score: 1.05
            },
            {
                label: "B",
                text: "能在前30%",
                score: 1.02
            },
            {
                label: "C",
                text: "成绩中等",
                score: 0.7
            },
            {
                label: "D",
                text: "在30~40名左右",
                score: 0.65
            },
        ]
    },
    {
        question: "孩子每天写作业的时间是？",
        optionList: [
            {
                label: "A",
                text: "在学校就写完了",
                score: 85
            },
            {
                label: "B",
                text: "回来会先把作业写完",
                score: 75
            },
            {
                label: "C",
                text: "到家后先玩，再写作业",
                score: 65
            },
            {
                label: "D",
                text: "需要时刻督促才能写完作业",
                score: 55
            },
        ]
    },
    {
        question: "对于孩子不喜欢吃，但非常有营养的食物（比如芹菜），你一般会",
        optionList: [
            {
                label: "A",
                text: "随他吧，吃不吃、吃多少都行",
                score: 60
            },
            {
                label: "B",
                text: "告诉他吃这个的好处，吃不吃随他",
                score: 80
            },
            {
                label: "C",
                text: "反复跟他强调下吃这个的好处",
                score: 65
            },
            {
                label: "D",
                text: "想方设法先他尝一下，他可能会喜欢上",
                score: 55
            },
        ]
    },
    {
        question: "家里已经有了这个玩具，孩子还跟你要，你会？",
        optionList: [
            {
                label: "A",
                text: "温柔而坚定地告诉他：不可以",
                score: 70
            },
            {
                label: "B",
                text: "先听听他到底想要干什么，想想为什么",
                score: 85
            },
            {
                label: "C",
                text: "明确告诉他，如果这么做会面临怎样的惩罚",
                score: 60
            },
            {
                label: "D",
                text: "告诉他为什么不行，帮他选一个替代方案",
                score: 85
            },
            {
                label: "E",
                text: "反正也不涉及原则问题，那就买吧",
                score: 65
            },
        ]
    },
    {
        question: "孩子上课的表现如何？",
        optionList: [
            {
                label: "A",
                text: "整节课45分钟能一直专心听课",
                score: 80
            },
            {
                label: "B",
                text: "偶尔会走神，基本能全程跟下来",
                score: 70
            },
            {
                label: "C",
                text: "前半段能保持注意力，后边会走神",
                score: 65
            },
            {
                label: "D",
                text: "能保持基本的安静",
                score: 55
            },
        ]
    },
    {
        question: "对于孩子最喜欢做的事情，每次做这事的时间大概是？",
        optionList: [
            {
                label: "A",
                text: "半个小时",
                score: 55
            },
            {
                label: "B",
                text: "一个小时",
                score: 65
            },
            {
                label: "C",
                text: "两个小时",
                score: 70
            },
            {
                label: "D",
                text: "两个小时及以上",
                score: 85
            },
            {
                label: "E",
                text: "没有认真统计过",
                score: 50
            },
        ]
    },
    {
        question: "家里来陌生人、或到一个陌生的环境时，孩子的反应是？",
        optionList: [
            {
                label: "A",
                text: "很快能适应，拉近彼此的距离",
                score: 80
            },
            {
                label: "B",
                text: "过一会儿就熟了，问题不大",
                score: 70
            },
            {
                label: "C",
                text: "孩子是慢热型，适应需要一段时间",
                score: 65
            },
            {
                label: "D",
                text: "会非常腼腆、害羞，有些不适应",
                score: 55
            },
        ]
    },
    {
        question: "孩子有没有跟你分享过他身边的新鲜事？",
        optionList: [
            {
                label: "A",
                text: "经常会跟我讲，像个小话痨",
                score: 80
            },
            {
                label: "B",
                text: "跟我不会，但跟朋友一起话很多",
                score: 70
            },
            {
                label: "C",
                text: "偶尔会，不是很多",
                score: 65
            },
            {
                label: "D",
                text: "平时话不是很多，一般都是我主动问",
                score: 55
            },
        ]
    },
    {
        question: "从孩子向你提的问题中，你的感受是？",
        optionList: [
            {
                label: "A",
                text: "他知道的还挺多，提的问题也很多（广度）",
                score: 75
            },
            {
                label: "B",
                text: "这个问题我还真没想过，有点意思（复杂度）",
                score: 80
            },
            {
                label: "C",
                text: "我感觉他比同龄的小孩想得多（深度）",
                score: 85
            },
            {
                label: "D",
                text: "没怎么问过我问题",
                score: 65
            },
            {
                label: "E",
                text: "都是一些小孩子的问题，没给我留下特殊印象的问题",
                score: 55
            },
        ]
    },
]

export {
    questionList
}