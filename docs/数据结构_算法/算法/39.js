/**
统计所有小于非负整数 n 的质数的数量。

示例:

输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

参考答案： 
1. 判断 n 之下有多少个质数，只要跑几圈判断，从 2 ～ （n-1）中，
每一个数是不是质数就可以
2. 质数 p 定义就是 p%2, p%3, p%4 ... p/(p - 1) 都不等于 0
3. 实际上不需要除到 p-1,只需要除到 ”p 的平方跟“ 就可以，而且可以跳过2 的倍数

一个非常牛逼的算法,叫做厄拉多塞筛法. 比如说求20以内质数的个数,首先0,1不是质数.
2是第一个质数,然后把20以内所有2的倍数划去.2后面紧跟的数即为下一个质数3,
然后把3所有的倍数划去.3后面紧跟的数即为下一个质数5,再把5所有的倍数划去.以此类推.
*/

var countPrimes = function(n) {
    let count = 0;
    let signs = new Uint8Array(n)
    
    for(let i = 2; i< n; i++){
        if(!signs[i - 1]){
            count ++
            for(let j = i*i; j<= n; j+= i){
                signs[j - 1] = true
            }
        }
    }
    return count
}