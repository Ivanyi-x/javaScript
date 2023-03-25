function solution(words) {
    const results = [];
  
    // 递归函数，生成所有的排列组合
    function permute(arr, permutation = []) {
      if (arr.length === 0) {
        results.push(permutation.join(''));
        return;
      }
  
      for (let i = 0; i < arr.length; i++) {
        const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
        permute(rest, [...permutation, arr[i]]);
      }
    }
  
    permute(words);
  
    return results;
  }
  
  const words = ['foo', 'bar', 'hello', 'world'];
  console.log(solution(words));