// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
name.toUpperCase();
console.log(`\`'${name}'\``);	//注意里面的`需要转义，结果：`'hello'`


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var upperCassSentence = sentence.replace(/\b\w+\b/g, function(word) {	//\b表示一个词的边界，\w+表示词字符
	return word.substr(0,1).toUpperCase() + word.substr(1);
});
console.log(`'${upperCassSentence}'`);	//结果：'Good Afternoon, Mr Mike.'


// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
var number = money.replace(/\D/g, "");	//\D表示非数字，将非数字的字符用空白替换，即去掉。
console.log(number);	//结果：20
